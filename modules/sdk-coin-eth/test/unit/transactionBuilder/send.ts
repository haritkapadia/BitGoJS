import { TransactionType, BaseTransaction } from '@bitgo/sdk-core';
import { coins, EthereumNetwork } from '@bitgo/statics';
import EthereumAbi from 'ethereumjs-abi';
import assert from 'assert';
import should from 'should';
import * as ethUtil from 'ethereumjs-util';

import {
  decodeTransferData,
  getCommon,
  Transaction,
  TransactionBuilder,
  TransferBuilder,
  KeyPair,
  sendMultiSigTypes,
} from '../../../src';
import * as testData from '../../resources/eth';
import { getBuilder } from '../getBuilder';

describe('Eth transaction builder send', () => {
  it('should validate a send type transaction', () => {
    const txBuilder = getBuilder('teth') as TransactionBuilder;
    const coinConfig = coins.get('eth');
    const common = getCommon(coinConfig.network as EthereumNetwork);
    const tx = new Transaction(coinConfig, common);
    txBuilder.counter(1);
    txBuilder.type(TransactionType.Send);
    assert.throws(() => txBuilder.validateTransaction(tx), /Invalid transaction: missing fee/);
    txBuilder.fee({
      fee: '10',
      gasLimit: '1000',
    });
    assert.throws(() => txBuilder.validateTransaction(tx), /Invalid transaction: missing contract address/);
    assert.throws(() => txBuilder.validateTransaction(tx), /Invalid transaction: missing contract address/);
  });

  describe('should sign and build', () => {
    let txBuilder;
    let key;
    let contractAddress;

    const getOperationHash = function (tx: BaseTransaction): string {
      const { data } = tx.toJson();
      const { tokenContractAddress, expireTime, sequenceId, amount, to } = decodeTransferData(data);
      const operationParams = [
        ['string', 'address', 'uint', 'address', 'uint', 'uint'],
        [
          'ERC20',
          new ethUtil.BN(ethUtil.stripHexPrefix(to), 16),
          amount,
          new ethUtil.BN(ethUtil.stripHexPrefix(tokenContractAddress || ''), 16),
          expireTime,
          sequenceId,
        ],
      ];
      return EthereumAbi.soliditySHA3(...operationParams);
    };

    beforeEach(() => {
      contractAddress = '0x8f977e912ef500548a0c3be6ddde9899f1199b81';
      txBuilder = getBuilder('hteth') as TransactionBuilder;
      key = testData.KEYPAIR_PRV.getKeys().prv as string;
      txBuilder.fee({
        fee: '1000000000',
        gasLimit: '12100000',
      });
      txBuilder.counter(2);
      txBuilder.type(TransactionType.Send);
      txBuilder.contract(contractAddress);
    });

    it('a send funds transaction', async () => {
      const recipient = '0x19645032c7f1533395d44a629462e751084d3e4c';
      const amount = '1000000000';
      const expireTime = 1590066728;
      const sequenceId = 5;
      txBuilder
        .transfer()
        .amount(amount)
        .to(recipient)
        .expirationTime(expireTime)
        .contractSequenceId(sequenceId)
        .key(key);
      txBuilder.sign({ key: testData.PRIVATE_KEY });
      const tx = await txBuilder.build();

      should.equal(tx.toJson().chainId, 560048);
      should.equal(tx.toBroadcastFormat(), testData.SEND_TX_BROADCAST_LEGACY);
      should.equal(tx.signature.length, 2);
      should.equal(tx.inputs.length, 1);
      should.equal(tx.inputs[0].address, contractAddress);
      should.equal(tx.inputs[0].value, amount);

      should.equal(tx.outputs.length, 1);
      should.equal(tx.outputs[0].address, recipient);
      should.equal(tx.outputs[0].value, amount);

      const data = tx.toJson().data;
      const {
        to,
        amount: parsedAmount,
        expireTime: parsedExpireTime,
        sequenceId: parsedSequenceId,
      } = decodeTransferData(data);
      should.equal(to, recipient);
      should.equal(parsedAmount, amount);
      should.equal(parsedExpireTime, expireTime);
      should.equal(parsedSequenceId, sequenceId);
    });

    it('a send funds transaction built for a first signer', async () => {
      const recipient = '0x19645032c7f1533395d44a629462e751084d3e4c';
      const amount = '1000000000';
      const expireTime = 1590066728;
      const sequenceId = 5;
      txBuilder.fee({
        eip1559: {
          maxFeePerGas: '100',
          maxPriorityFeePerGas: '10',
        },
        fee: '10',
        gasLimit: '1000',
      });
      const transfer: TransferBuilder = txBuilder.transfer();
      transfer
        .amount(amount)
        .to(recipient)
        .expirationTime(expireTime)
        .contractSequenceId(sequenceId)
        .isFirstSigner(true);
      const tx: Transaction = await txBuilder.build();

      const methodId = EthereumAbi.methodID('sendMultiSig', sendMultiSigTypes);
      const decodedData = EthereumAbi.rawDecode(
        ['string', 'address', 'uint', 'bytes', 'uint', 'uint'],
        Buffer.from(ethUtil.stripHexPrefix(tx.toJson().data).slice(methodId.toString('hex').length, -2), 'hex')
      );

      should.equal(decodedData[0], 'ETHER');
      should.equal(decodedData[1], ethUtil.stripHexPrefix(recipient));
      should.equal(decodedData[2].toString(), amount);
      should.equal(decodedData[3].toString('hex'), '');
      should.equal(decodedData[4].toString(), expireTime);
      should.equal(decodedData[5].toString(), sequenceId);
      should.equal(tx.toJson().chainId, 560048);
      should.equal(tx.toBroadcastFormat(), testData.SEND_TX_BROADCAST_RECOVERY);
      should.equal(tx.signature.length, 0);
      should.equal(tx.inputs.length, 1);
      should.equal(tx.inputs[0].address, contractAddress);
      should.equal(tx.inputs[0].value, amount);

      should.equal(tx.outputs.length, 1);
      should.equal(tx.outputs[0].address, recipient);
      should.equal(tx.outputs[0].value, amount);

      const data = tx.toJson().data;
      const {
        to,
        amount: parsedAmount,
        expireTime: parsedExpireTime,
        sequenceId: parsedSequenceId,
      } = decodeTransferData(data, true);
      should.equal(to, recipient);
      should.equal(parsedAmount, amount);
      should.equal(parsedExpireTime, expireTime);
      should.equal(parsedSequenceId, sequenceId);
      // Add signature from first signer
      transfer.setSignature('0x1234567890abcdef').isFirstSigner(false);
      const signedTx = await txBuilder.build();
      const {
        to: toSigned,
        amount: parsedAmountSigned,
        expireTime: parsedExpireTimeSigned,
        sequenceId: parsedSequenceIdSigned,
        signature,
      } = decodeTransferData(signedTx.toJson().data);
      should.equal(toSigned, recipient);
      should.equal(parsedAmountSigned, amount);
      should.equal(parsedExpireTimeSigned, expireTime);
      should.equal(parsedSequenceIdSigned, sequenceId);
      should.equal(signature, '0x1234567890abcdef');

      const fromSerializedTxBuilder = getBuilder('hteth') as TransactionBuilder;
      fromSerializedTxBuilder.from(testData.SEND_TX_BROADCAST_RECOVERY, true);
      const fromSerializedTx = await fromSerializedTxBuilder.build();
      const {
        to: toFromSerialized,
        amount: amountFromSerialized,
        expireTime: expireTimeFromSerialized,
        sequenceId: sequenceIdFromSerialized,
      } = decodeTransferData(fromSerializedTx.toJson().data, true);
      should.equal(toFromSerialized, recipient);
      should.equal(amountFromSerialized, amount);
      should.equal(expireTimeFromSerialized, expireTime);
      should.equal(sequenceIdFromSerialized, sequenceId);
    });

    it('should send funds for wallet version 4', async () => {
      const recipient = '0x19645032c7f1533395d44a629462e751084d3e4c';
      const amount = '1000000000';
      const expireTime = 1590066728;
      const sequenceId = 5;
      txBuilder.walletVersion(4);
      txBuilder
        .transfer()
        .amount(amount)
        .to(recipient)
        .expirationTime(expireTime)
        .contractSequenceId(sequenceId)
        .key(key);
      txBuilder.sign({ key: testData.PRIVATE_KEY });
      await txBuilder.build();
      const operationData = txBuilder.transfer().getOperationData();
      should.equal(operationData[1][0], '560048');
      should.equal(txBuilder.coinUsesNonPackedEncodingForTxData(), true);
    });

    it('a send funds with amount 0 transaction', async () => {
      txBuilder
        .transfer()
        .amount('0')
        .to('0x19645032c7f1533395d44a629462e751084d3e4c')
        .expirationTime(1590066728)
        .contractSequenceId(5)
        .key(key);
      txBuilder.sign({ key: testData.PRIVATE_KEY });
      const tx = await txBuilder.build();
      should.equal(tx.toBroadcastFormat(), testData.SEND_TX_AMOUNT_ZERO_BROADCAST);
    });

    it('Goerli chain id should be correct', async () => {
      const txBuilder = getBuilder('gteth') as TransactionBuilder;
      txBuilder.fee({
        fee: '1000000000',
        gasLimit: '12100000',
      });
      txBuilder.counter(2);
      txBuilder.type(TransactionType.Send);
      txBuilder.contract(contractAddress);
      const transferBuilder = txBuilder.transfer() as TransferBuilder;
      transferBuilder
        .amount('0')
        .to('0x19645032c7f1533395d44a629462e751084d3e4c')
        .expirationTime(1590066728)
        .contractSequenceId(5)
        .key(key);
      txBuilder.sign({ key: testData.PRIVATE_KEY });
      const tx = await txBuilder.build();
      should.equal(tx.toJson().chainId, 5);
    });

    it('Hoodi chain id should be correct', async () => {
      const txBuilder = getBuilder('hteth') as TransactionBuilder;
      txBuilder.fee({
        fee: '1000000000',
        gasLimit: '12100000',
      });
      txBuilder.counter(2);
      txBuilder.type(TransactionType.Send);
      txBuilder.contract(contractAddress);
      const transferBuilder = txBuilder.transfer() as TransferBuilder;
      transferBuilder
        .amount('0')
        .to('0x19645032c7f1533395d44a629462e751084d3e4c')
        .expirationTime(1590066728)
        .contractSequenceId(5)
        .key(key);
      txBuilder.sign({ key: testData.PRIVATE_KEY });
      const tx = await txBuilder.build();
      should.equal(tx.toJson().chainId, 560048);
    });

    it('a send token transaction', async () => {
      const recipient = '0x72c2c8e08bf91d755cd7d26b49a2ee3dc99de1b9';
      const contractAddress = '0xdf7decb1baa8f529f0c8982cbb4be50357195299';
      const amount = '100';
      txBuilder.contract(contractAddress);
      txBuilder
        .transfer()
        .coin('trif')
        .amount(amount)
        .to(recipient)
        .expirationTime(1590066728)
        .contractSequenceId(5)
        .key(key);
      txBuilder.sign({
        key: testData.PRIVATE_KEY,
      });
      const tx = await txBuilder.build();
      should.equal(tx.toBroadcastFormat(), testData.SEND_TOKEN_TX_BROADCAST);
      should.equal(tx.signature.length, 2);
      should.equal(tx.inputs.length, 1);
      should.equal(tx.inputs[0].address, contractAddress);
      should.equal(tx.inputs[0].value, amount);
      should.equal(tx.inputs[0].coin, 'trif');

      should.equal(tx.outputs.length, 1);
      should.equal(tx.outputs[0].address, recipient);
      should.equal(tx.outputs[0].value, amount);
      should.equal(tx.outputs[0].coin, 'trif');

      const { signature } = decodeTransferData(tx.toJson().data);
      const operationHash = getOperationHash(tx);

      const { v, r, s } = ethUtil.fromRpcSig(signature);
      const senderPubKey = ethUtil.ecrecover(Buffer.from(operationHash, 'hex'), v, r, s);
      const senderAddress = ethUtil.pubToAddress(senderPubKey);
      const senderKey = new KeyPair({ prv: testData.PRIVATE_KEY });
      ethUtil.bufferToHex(senderAddress).should.equal(senderKey.getAddress());
    });

    it('a send token transactions from serialized', async () => {
      const txBuilder = new TransactionBuilder(coins.get('hteth'));
      txBuilder.from(testData.SEND_TOKEN_TX_BROADCAST);
      const tx = await txBuilder.build();
      should.equal(tx.toBroadcastFormat(), testData.SEND_TOKEN_TX_BROADCAST);

      const { signature } = decodeTransferData(tx.toJson().data);
      const operationHash = getOperationHash(tx);

      const { v, r, s } = ethUtil.fromRpcSig(signature);
      const senderPubKey = ethUtil.ecrecover(Buffer.from(operationHash || ''), v, r, s);
      const senderAddress = ethUtil.pubToAddress(senderPubKey);
      const senderKey = new KeyPair({ prv: testData.PRIVATE_KEY });
      ethUtil.bufferToHex(senderAddress).should.equal(senderKey.getAddress());
    });
  });

  describe('sign and build from serialized', () => {
    {
      const testParams = [
        ['Legacy', testData.SEND_TX_BROADCAST_LEGACY],
        ['EIP1559', testData.SEND_TX_BROADCAST_EIP1559],
      ];

      testParams.map(([txnType, txnHex]) => {
        it(`should be able to create a send transaction from serialized ${txnType} tx hex`, async () => {
          const txBuilder = getBuilder('hteth') as TransactionBuilder;
          txBuilder.from(txnHex);
          const signedTx = await txBuilder.build();
          should.equal(signedTx.toBroadcastFormat(), txnHex);
        });
      });
    }

    it('a send funds transaction with amount 0 from serialized', async () => {
      const txBuilder = getBuilder('hteth') as TransactionBuilder;
      txBuilder.from(testData.SEND_TX_AMOUNT_ZERO_BROADCAST);
      const signedTx = await txBuilder.build();
      should.equal(signedTx.toBroadcastFormat(), testData.SEND_TX_AMOUNT_ZERO_BROADCAST);
    });
  });
});
