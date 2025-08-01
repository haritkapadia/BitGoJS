import {
  BaseKey,
  BaseTransaction,
  InvalidTransactionError,
  ParseTransactionError,
  SigningError,
  TransactionRecipient,
  TransactionType,
} from '@bitgo/sdk-core';
import { BaseCoin as CoinConfig } from '@bitgo/statics';
import Keyring, { decodeAddress } from '@polkadot/keyring';
import { u8aToBuffer } from '@polkadot/util';
import { construct, decode } from '@substrate/txwrapper-polkadot';
import { UnsignedTransaction } from '@substrate/txwrapper-core';
import { TypeRegistry } from '@substrate/txwrapper-core/lib/types';
import { KeyPair } from './keyPair';
import { DecodedTx, HexString, TransactionExplanation, TxData } from './iface';
import utils from './utils';
import { EXTRINSIC_VERSION } from '@polkadot/types/extrinsic/v4/Extrinsic';
import { DEFAULT_SUBSTRATE_PREFIX } from './constants';

export class Transaction extends BaseTransaction {
  protected _substrateTransaction: UnsignedTransaction;
  protected _signedTransaction?: string;
  protected _registry: TypeRegistry;
  protected _chainName: string;
  protected _sender: string;

  private static FAKE_SIGNATURE = `0x${Buffer.from(new Uint8Array(256).fill(1)).toString('hex')}` as HexString;

  constructor(coinConfig: Readonly<CoinConfig>) {
    super(coinConfig);
  }

  /** @inheritdoc */
  canSign({ key }: BaseKey): boolean {
    const kp = new KeyPair({ prv: key });
    const addr = kp.getAddress(this.getAddressFormat());
    return addr === this._sender;
  }

  /**
   * Sign a substrate transaction and update the transaction hex
   *
   * @param {KeyPair} keyPair - ed signature
   */
  sign(keyPair: KeyPair): void {
    if (!this._substrateTransaction) {
      throw new InvalidTransactionError('No transaction data to sign');
    }
    const { prv, pub } = keyPair.getKeys();
    if (!prv) {
      throw new SigningError('Missing private key');
    }
    const signingPayload = construct.signingPayload(this._substrateTransaction, {
      registry: this._registry,
    });
    // Sign a payload. This operation should be performed on an offline device.
    const keyring = new Keyring({ type: 'ed25519' });
    const secretKey = new Uint8Array(Buffer.from(prv, 'hex'));
    const publicKey = new Uint8Array(Buffer.from(pub, 'hex'));
    const signingKeyPair = keyring.addFromPair({ secretKey, publicKey });
    const txHex = utils.createSignedTx(signingKeyPair, signingPayload, this._substrateTransaction, {
      metadataRpc: this._substrateTransaction.metadataRpc,
      registry: this._registry,
    });

    // get signature from signed txHex generated above
    this._signatures = [utils.recoverSignatureFromRawTx(txHex, { registry: this._registry })];
    this._signedTransaction = txHex;
  }

  /**
   * Adds the signature to the Substrate Transaction
   * @param {string} signature
   */
  addSignature(signature: string): void {
    this._signedTransaction = utils.serializeSignedTransaction(
      this._substrateTransaction,
      signature as HexString,
      this._substrateTransaction.metadataRpc,
      this._registry
    );
  }

  /**
   * Returns a serialized representation of this transaction with a fake signature attached which
   * can be used to estimate transaction fees.
   */
  fakeSign(): string {
    return utils.serializeSignedTransaction(
      this._substrateTransaction,
      Transaction.FAKE_SIGNATURE,
      this._substrateTransaction.metadataRpc,
      this._registry
    );
  }

  registry(registry: TypeRegistry): void {
    this._registry = registry;
  }

  chainName(chainName: string): void {
    this._chainName = chainName;
  }

  sender(sender: string): void {
    this._sender = sender;
  }

  /** @inheritdoc */
  toBroadcastFormat(): string {
    if (!this._substrateTransaction) {
      throw new InvalidTransactionError('Empty transaction');
    }
    if (this._signedTransaction && this._signedTransaction.length > 0) {
      return this._signedTransaction;
    } else {
      return construct.signingPayload(this._substrateTransaction, {
        registry: this._registry,
      });
    }
  }

  transactionSize(): number {
    return this.toBroadcastFormat().length / 2;
  }

  /** @inheritdoc */
  toJson(): TxData {
    if (!this._substrateTransaction) {
      throw new InvalidTransactionError('Empty transaction');
    }
    const decodedTx = decode(this._substrateTransaction, {
      metadataRpc: this._substrateTransaction.metadataRpc,
      registry: this._registry,
      isImmortalEra: utils.isZeroHex(this._substrateTransaction.era),
    }) as unknown as DecodedTx;

    const result: TxData = {
      id: construct.txHash(this.toBroadcastFormat()),
      sender: decodedTx.address,
      referenceBlock: decodedTx.blockHash,
      blockNumber: decodedTx.blockNumber,
      genesisHash: decodedTx.genesisHash,
      nonce: decodedTx.nonce,
      specVersion: decodedTx.specVersion,
      transactionVersion: decodedTx.transactionVersion,
      eraPeriod: decodedTx.eraPeriod,
      chainName: this._chainName,
      tip: decodedTx.tip ? Number(decodedTx.tip) : 0,
    };

    const txMethod = decodedTx.method.args;
    if (this.type === TransactionType.Send) {
      if (utils.isTransfer(txMethod)) {
        const keypairDest = new KeyPair({
          pub: Buffer.from(decodeAddress(txMethod.dest.id)).toString('hex'),
        });
        result.to = keypairDest.getAddress(this.getAddressFormat());
        result.amount = txMethod.value;
      } else if (utils.isTransferAll(txMethod)) {
        const keypairDest = new KeyPair({
          pub: Buffer.from(decodeAddress(txMethod.dest.id)).toString('hex'),
        });
        result.to = keypairDest.getAddress(this.getAddressFormat());
        result.keepAlive = txMethod.keepAlive;
      } else {
        throw new ParseTransactionError(`Serializing unknown Transfer type parameters`);
      }
    } else if (this.type === TransactionType.StakingActivate) {
      if (utils.isAddStake(txMethod)) {
        const keypairDest = new KeyPair({
          pub: Buffer.from(decodeAddress(txMethod.hotkey)).toString('hex'),
        });
        // hotkey address of validator
        result.to = keypairDest.getAddress(this.getAddressFormat());
        result.amount = txMethod.amountStaked.toString();
        result.netuid = txMethod.netuid;
      } else if (utils.isBond(txMethod)) {
        result.amount = txMethod.value;
        result.payee = typeof txMethod.payee === 'string' ? txMethod.payee : txMethod.payee.Account;
      } else if (utils.isBondExtra(txMethod)) {
        result.amount = txMethod.maxAdditional;
      }
    } else if (this.type === TransactionType.StakingDeactivate) {
      if (utils.isRemoveStake(txMethod)) {
        const keypairDest = new KeyPair({
          pub: Buffer.from(decodeAddress(txMethod.hotkey)).toString('hex'),
        });
        // hotkey address of validator
        result.to = keypairDest.getAddress(this.getAddressFormat());
        result.amount = txMethod.amountUnstaked.toString();
        result.netuid = txMethod.netuid;
      } else if (utils.isUnbond(txMethod)) {
        result.amount = txMethod.value;
      } else if (utils.isWithdrawUnbonded(txMethod)) {
        result.numSlashingSpans = txMethod.numSlashingSpans;
      }
    } else if (this.type === TransactionType.Batch) {
      if (utils.isBatch(txMethod)) {
        result.batchCalls = txMethod.calls;
        // Extract amount from batch calls for display
        if (txMethod.calls && txMethod.calls.length === 2) {
          const firstCall = txMethod.calls[0];
          const secondCall = txMethod.calls[1];
          if (firstCall.method === 'bond' && secondCall.method === 'nominate') {
            // Staking batch: bond + nominate
            const bondArgs = firstCall.args as Record<string, unknown>;
            result.amount = bondArgs.value as string;
          } else if (firstCall.method === 'chill' && secondCall.method === 'unbond') {
            // Unstaking batch: chill + unbond
            const unbondArgs = secondCall.args as Record<string, unknown>;
            result.amount = unbondArgs.value as string;
          }
        }
      }
    }

    return result;
  }

  explainTransferTransaction(json: TxData, explanationResult: TransactionExplanation): TransactionExplanation {
    return {
      ...explanationResult,
      outputs: [
        {
          address: json.to?.toString() || '',
          amount: json.amount?.toString() || '',
        },
      ],
    };
  }

  explainStakeTransaction(json: TxData, explanationResult: TransactionExplanation): TransactionExplanation {
    return {
      ...explanationResult,
      outputs: [
        {
          address: json.to?.toString() || '',
          amount: json.amount?.toString() || '',
        },
      ],
    };
  }

  explainUnstakeTransaction(json: TxData, explanationResult: TransactionExplanation): TransactionExplanation {
    return {
      ...explanationResult,
      outputs: [
        {
          address: json.sender.toString() || '',
          amount: json.amount?.toString() || '',
        },
      ],
    };
  }

  /** @inheritdoc */
  explainTransaction(): TransactionExplanation {
    const result = this.toJson();
    const outputs: TransactionRecipient[] = [];
    const explanationResult: TransactionExplanation = {
      // txhash used to identify the transactions
      id: result.id,
      outputAmount: result.amount?.toString() || '0',
      changeAmount: '0',
      changeOutputs: [],
      outputs,
      fee: {
        fee: result.tip?.toString() || '',
        type: 'tip',
      },
      type: this.type,
    };
    switch (this.type) {
      case TransactionType.Send:
        return this.explainTransferTransaction(result, explanationResult);
      case TransactionType.StakingActivate:
        return this.explainStakeTransaction(result, explanationResult);
      case TransactionType.StakingDeactivate:
        return this.explainUnstakeTransaction(result, explanationResult);
      default:
        throw new InvalidTransactionError('Transaction type not supported');
    }
  }

  /**
   * Load the input and output data on this transaction.
   */
  loadInputsAndOutputs(): void {
    if (!this._substrateTransaction) {
      return;
    }
    const decodedTx = decode(this._substrateTransaction, {
      metadataRpc: this._substrateTransaction.metadataRpc,
      registry: this._registry,
      isImmortalEra: utils.isZeroHex(this._substrateTransaction.era),
    }) as unknown as DecodedTx;

    if (this.type === TransactionType.Send) {
      this.decodeInputsAndOutputsForSend(decodedTx);
    } else if (this.type === TransactionType.StakingActivate) {
      this.decodeInputsAndOutputsForStakingActivate(decodedTx);
    } else if (this.type === TransactionType.StakingDeactivate) {
      this.decodeInputsAndOutputsForStakingDeactivate(decodedTx);
    } else if (this.type === TransactionType.Batch) {
      this.decodeInputsAndOutputsForBatch(decodedTx);
    }
  }

  private decodeInputsAndOutputsForSend(decodedTx: DecodedTx) {
    const txMethod = decodedTx.method.args;
    let to: string;
    let value: string;
    let from: string;
    if (utils.isTransferAll(txMethod)) {
      const keypairDest = new KeyPair({
        pub: Buffer.from(decodeAddress(txMethod.dest.id)).toString('hex'),
      });
      to = keypairDest.getAddress(this.getAddressFormat());
      value = '0'; // substrate transferAll's do not deserialize amounts
      from = decodedTx.address;
    } else if (utils.isTransfer(txMethod)) {
      const keypairDest = new KeyPair({
        pub: Buffer.from(decodeAddress(txMethod.dest.id)).toString('hex'),
      });
      to = keypairDest.getAddress(this.getAddressFormat());
      value = txMethod.value;
      from = decodedTx.address;
    } else {
      throw new ParseTransactionError(`Loading inputs of unknown Transfer type parameters`);
    }
    this._outputs = [
      {
        address: to,
        value,
        coin: this._coinConfig.name,
      },
    ];

    this._inputs = [
      {
        address: from,
        value,
        coin: this._coinConfig.name,
      },
    ];
  }

  private decodeInputsAndOutputsForStakingActivate(decodedTx: DecodedTx) {
    const txMethod = decodedTx.method.args;
    let to: string;
    let value: string;
    let from: string;
    if (utils.isAddStake(txMethod)) {
      const keypairDest = new KeyPair({
        pub: Buffer.from(decodeAddress(txMethod.hotkey)).toString('hex'),
      });
      to = keypairDest.getAddress(this.getAddressFormat());
      value = txMethod.amountStaked.toString();
      from = decodedTx.address;
    } else if (utils.isBond(txMethod)) {
      to = decodedTx.address; // For bond, funds are locked in the same account
      value = txMethod.value;
      from = decodedTx.address;
    } else if (utils.isBondExtra(txMethod)) {
      to = decodedTx.address; // For bond extra, funds are locked in the same account
      value = txMethod.maxAdditional;
      from = decodedTx.address;
    } else {
      throw new ParseTransactionError(`Loading inputs of unknown StakingActivate type parameters`);
    }
    this._outputs = [
      {
        address: to,
        value,
        coin: this._coinConfig.name,
      },
    ];

    this._inputs = [
      {
        address: from,
        value,
        coin: this._coinConfig.name,
      },
    ];
  }

  private decodeInputsAndOutputsForStakingDeactivate(decodedTx: DecodedTx) {
    const txMethod = decodedTx.method.args;
    let to: string;
    let value: string;
    let from: string;
    if (utils.isRemoveStake(txMethod)) {
      const keypairDest = new KeyPair({
        pub: Buffer.from(decodeAddress(txMethod.hotkey)).toString('hex'),
      });
      to = keypairDest.getAddress(this.getAddressFormat());
      value = txMethod.amountUnstaked.toString();
      from = decodedTx.address;
    } else if (utils.isUnbond(txMethod)) {
      to = decodedTx.address; // For unbond, funds are unlocked from the same account
      value = txMethod.value;
      from = decodedTx.address;
    } else if (utils.isWithdrawUnbonded(txMethod)) {
      to = decodedTx.address; // For withdraw unbonded, funds are returned to the same account
      value = '0'; // Amount is not specified in withdraw unbonded
      from = decodedTx.address;
    } else {
      throw new ParseTransactionError(`Loading inputs of unknown StakingDeactivate type parameters`);
    }
    this._outputs = [
      {
        address: from,
        value,
        coin: this._coinConfig.name,
      },
    ];

    this._inputs = [
      {
        address: to,
        value,
        coin: this._coinConfig.name,
      },
    ];
  }

  private decodeInputsAndOutputsForBatch(decodedTx: DecodedTx) {
    const txMethod = decodedTx.method.args;
    const sender = decodedTx.address;
    this._inputs = [];
    this._outputs = [];

    if (utils.isBatch(txMethod)) {
      if (!txMethod.calls) {
        throw new InvalidTransactionError('failed to decode calls from batch transaction');
      }
      // Handle different types of batch operations
      let totalStakingValue = '0';
      let hasStakingOperations = false;
      let hasUnstakingOperations = false;

      for (const call of txMethod.calls) {
        // Handle both possible formats: simple method names or callIndex with registry lookup
        let methodName: string;

        if (typeof call.method === 'string') {
          methodName = call.method;
        } else {
          try {
            const callIndex = call.method as string;
            const decodedCall = this._registry.findMetaCall(
              new Uint8Array(Buffer.from(callIndex.replace('0x', ''), 'hex'))
            );
            methodName = decodedCall.method;
          } catch (e) {
            methodName = call.method as string;
          }
        }

        if (methodName === 'bond') {
          const args = call.args as Record<string, unknown>;
          const value = (args.value as string) || '0';
          totalStakingValue = value;
          hasStakingOperations = true;
        } else if (methodName === 'chill') {
          hasUnstakingOperations = true;
        } else if (methodName === 'unbond') {
          const args = call.args as Record<string, unknown>;
          const value = (args.value as string) || '0';
          totalStakingValue = value;
          hasUnstakingOperations = true;
        }
      }

      // For staking batch operations (bond + nominate or bondExtra + nominate)
      if (hasStakingOperations && !hasUnstakingOperations) {
        this._inputs.push({
          address: sender,
          value: totalStakingValue,
          coin: this._coinConfig.name,
        });
        this._outputs.push({
          address: sender, // For staking, funds are locked in the same account
          value: totalStakingValue,
          coin: this._coinConfig.name,
        });
      }
      // For unstaking batch operations (chill + unbond)
      else if (hasUnstakingOperations && !hasStakingOperations) {
        this._inputs.push({
          address: sender,
          value: totalStakingValue,
          coin: this._coinConfig.name,
        });
        this._outputs.push({
          address: sender, // For unstaking, funds are unlocked from the same account
          value: totalStakingValue,
          coin: this._coinConfig.name,
        });
      }
    }
  }

  /**
   * Constructs a signed payload using construct.signTx
   * This method will be called during the build step if a TSS signature
   * is added and will set the signTransaction which is the txHex that will be broadcasted
   * As well as add the signature used to sign to the signature array in hex format
   *
   * @param {Buffer} signature The signature to be added to a substrate transaction
   */
  constructSignedPayload(signature: Buffer): void {
    // 0x00 means its an ED25519 signature
    const edSignature = `0x00${signature.toString('hex')}` as HexString;

    try {
      this._signedTransaction = construct.signedTx(this._substrateTransaction, edSignature, {
        registry: this._registry,
        metadataRpc: this._substrateTransaction.metadataRpc,
      });
    } catch (e) {
      throw new SigningError(`Unable to sign transaction with signature ${edSignature} ` + e);
    }

    this._signatures = [signature.toString('hex')];
  }

  setTransaction(tx: UnsignedTransaction): void {
    this._substrateTransaction = tx;
  }

  /** @inheritdoc **/
  get signablePayload(): Buffer {
    const extrinsicPayload = this._registry.createType('ExtrinsicPayload', this._substrateTransaction, {
      version: EXTRINSIC_VERSION,
    });
    return u8aToBuffer(extrinsicPayload.toU8a({ method: true }));
  }

  /**
   * Set the transaction type.
   *
   * @param {TransactionType} transactionType The transaction type to be set.
   */
  transactionType(transactionType: TransactionType): void {
    this._type = transactionType;
  }

  protected getAddressFormat(): number {
    return DEFAULT_SUBSTRATE_PREFIX;
  }
}
