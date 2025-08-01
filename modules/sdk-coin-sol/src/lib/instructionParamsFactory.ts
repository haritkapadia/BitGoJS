import {
  DecodedTransferCheckedInstruction,
  decodeTransferCheckedInstruction,
  DecodedBurnInstruction,
  decodeBurnInstruction,
  DecodedMintToInstruction,
  decodeMintToInstruction,
  TOKEN_2022_PROGRAM_ID,
} from '@solana/spl-token';
import {
  AllocateParams,
  AssignParams,
  AuthorizeStakeParams,
  CreateAccountParams,
  DeactivateStakeParams,
  DecodedTransferInstruction,
  DelegateStakeParams,
  InitializeStakeParams,
  SplitStakeParams,
  StakeInstruction,
  StakeProgram,
  SystemInstruction,
  TransactionInstruction,
  ComputeBudgetInstruction,
} from '@solana/web3.js';

import { NotSupported, TransactionType } from '@bitgo/sdk-core';
import { coins, SolCoin } from '@bitgo/statics';
import assert from 'assert';
import { InstructionBuilderTypes, ValidInstructionTypesEnum, walletInitInstructionIndexes } from './constants';
import {
  AtaClose,
  AtaInit,
  Burn,
  InstructionParams,
  Memo,
  MintTo,
  Nonce,
  StakingActivate,
  StakingAuthorize,
  StakingDeactivate,
  StakingDelegate,
  StakingWithdraw,
  TokenTransfer,
  Transfer,
  WalletInit,
  SetPriorityFee,
} from './iface';
import { getInstructionType } from './utils';

/**
 * Construct instructions params from Solana instructions
 *
 * @param {TransactionType} type - the transaction type
 * @param {TransactionInstruction[]} instructions - solana instructions
 * @returns {InstructionParams[]} An array containing instruction params
 */
export function instructionParamsFactory(
  type: TransactionType,
  instructions: TransactionInstruction[],
  coinName?: string,
  instructionMetadata?: InstructionParams[],
  _useTokenAddressTokenName?: boolean
): InstructionParams[] {
  switch (type) {
    case TransactionType.WalletInitialization:
      return parseWalletInitInstructions(instructions);
    case TransactionType.Send:
      return parseSendInstructions(instructions, instructionMetadata, _useTokenAddressTokenName);
    case TransactionType.StakingActivate:
      return parseStakingActivateInstructions(instructions);
    case TransactionType.StakingDeactivate:
      return parseStakingDeactivateInstructions(instructions, coinName);
    case TransactionType.StakingWithdraw:
      return parseStakingWithdrawInstructions(instructions);
    case TransactionType.AssociatedTokenAccountInitialization:
      return parseAtaInitInstructions(instructions, instructionMetadata, _useTokenAddressTokenName);
    case TransactionType.CloseAssociatedTokenAccount:
      return parseAtaCloseInstructions(instructions);
    case TransactionType.StakingAuthorize:
      return parseStakingAuthorizeInstructions(instructions);
    case TransactionType.StakingAuthorizeRaw:
      return parseStakingAuthorizeRawInstructions(instructions);
    case TransactionType.StakingDelegate:
      return parseStakingDelegateInstructions(instructions);
    default:
      throw new NotSupported('Invalid transaction, transaction type not supported: ' + type);
  }
}

/**
 * Parses Solana instructions to Wallet initialization tx instructions params
 *
 * @param {TransactionInstruction[]} instructions - containing create and initialize nonce solana instructions
 * @returns {InstructionParams[]} An array containing instruction params for Wallet initialization tx
 */
function parseWalletInitInstructions(instructions: TransactionInstruction[]): Array<WalletInit | Memo> {
  const instructionData: Array<WalletInit | Memo> = [];
  const createInstruction = SystemInstruction.decodeCreateAccount(instructions[walletInitInstructionIndexes.Create]);
  const nonceInitInstruction = SystemInstruction.decodeNonceInitialize(
    instructions[walletInitInstructionIndexes.InitializeNonceAccount]
  );

  const walletInit: WalletInit = {
    type: InstructionBuilderTypes.CreateNonceAccount,
    params: {
      fromAddress: createInstruction.fromPubkey.toString(),
      nonceAddress: nonceInitInstruction.noncePubkey.toString(),
      authAddress: nonceInitInstruction.authorizedPubkey.toString(),
      amount: createInstruction.lamports.toString(),
    },
  };
  instructionData.push(walletInit);

  const memo = getMemo(instructions, walletInitInstructionIndexes);
  if (memo) {
    instructionData.push(memo);
  }

  return instructionData;
}

/**
 * Parses Solana instructions to Send tx instructions params
 * Only supports Memo, Transfer and Advance Nonce Solana instructions
 *
 * @param {TransactionInstruction[]} instructions - an array of supported Solana instructions
 * @returns {InstructionParams[]} An array containing instruction params for Send tx
 */
function parseSendInstructions(
  instructions: TransactionInstruction[],
  instructionMetadata?: InstructionParams[],
  _useTokenAddressTokenName?: boolean
): Array<Nonce | Memo | Transfer | TokenTransfer | AtaInit | AtaClose | SetPriorityFee | MintTo | Burn> {
  const instructionData: Array<
    Nonce | Memo | Transfer | TokenTransfer | AtaInit | AtaClose | SetPriorityFee | MintTo | Burn
  > = [];
  for (const instruction of instructions) {
    const type = getInstructionType(instruction);
    switch (type) {
      case ValidInstructionTypesEnum.Memo:
        const memo: Memo = { type: InstructionBuilderTypes.Memo, params: { memo: instruction.data.toString() } };
        instructionData.push(memo);
        break;
      case ValidInstructionTypesEnum.AdvanceNonceAccount:
        const advanceNonceInstruction = SystemInstruction.decodeNonceAdvance(instruction);
        const nonce: Nonce = {
          type: InstructionBuilderTypes.NonceAdvance,
          params: {
            walletNonceAddress: advanceNonceInstruction.noncePubkey.toString(),
            authWalletAddress: advanceNonceInstruction.authorizedPubkey.toString(),
          },
        };
        instructionData.push(nonce);
        break;
      case ValidInstructionTypesEnum.Transfer:
        const transferInstruction = SystemInstruction.decodeTransfer(instruction);
        const transfer: Transfer = {
          type: InstructionBuilderTypes.Transfer,
          params: {
            fromAddress: transferInstruction.fromPubkey.toString(),
            toAddress: transferInstruction.toPubkey.toString(),
            amount: transferInstruction.lamports.toString(),
          },
        };
        instructionData.push(transfer);
        break;
      case ValidInstructionTypesEnum.TokenTransfer:
        let tokenTransferInstruction: DecodedTransferCheckedInstruction;
        if (instruction.programId.toString() !== TOKEN_2022_PROGRAM_ID.toString()) {
          tokenTransferInstruction = decodeTransferCheckedInstruction(instruction);
        } else {
          tokenTransferInstruction = decodeTransferCheckedInstruction(instruction, TOKEN_2022_PROGRAM_ID);
        }
        const tokenAddress = tokenTransferInstruction.keys.mint.pubkey.toString();
        const tokenName = findTokenName(tokenAddress, instructionMetadata, _useTokenAddressTokenName);
        let programIDForTokenTransfer: string | undefined;
        if (instruction.programId) {
          programIDForTokenTransfer = instruction.programId.toString();
        }
        const tokenTransfer: TokenTransfer = {
          type: InstructionBuilderTypes.TokenTransfer,
          params: {
            fromAddress: tokenTransferInstruction.keys.owner.pubkey.toString(),
            toAddress: tokenTransferInstruction.keys.destination.pubkey.toString(),
            amount: tokenTransferInstruction.data.amount.toString(),
            tokenName,
            sourceAddress: tokenTransferInstruction.keys.source.pubkey.toString(),
            tokenAddress: tokenAddress,
            programId: programIDForTokenTransfer,
            decimalPlaces: tokenTransferInstruction.data.decimals,
          },
        };
        instructionData.push(tokenTransfer);
        break;
      case ValidInstructionTypesEnum.InitializeAssociatedTokenAccount:
        const mintAddress = instruction.keys[ataInitInstructionKeysIndexes.MintAddress].pubkey.toString();
        const mintTokenName = findTokenName(mintAddress, instructionMetadata, _useTokenAddressTokenName);
        let programID: string | undefined;
        if (instruction.programId) {
          programID = instruction.programId.toString();
        }

        const ataInit: AtaInit = {
          type: InstructionBuilderTypes.CreateAssociatedTokenAccount,
          params: {
            mintAddress,
            ataAddress: instruction.keys[ataInitInstructionKeysIndexes.ATAAddress].pubkey.toString(),
            ownerAddress: instruction.keys[ataInitInstructionKeysIndexes.OwnerAddress].pubkey.toString(),
            payerAddress: instruction.keys[ataInitInstructionKeysIndexes.PayerAddress].pubkey.toString(),
            tokenName: mintTokenName,
            programId: programID,
          },
        };
        instructionData.push(ataInit);
        break;
      case ValidInstructionTypesEnum.CloseAssociatedTokenAccount:
        const accountAddress = instruction.keys[closeAtaInstructionKeysIndexes.AccountAddress].pubkey.toString();
        const destinationAddress =
          instruction.keys[closeAtaInstructionKeysIndexes.DestinationAddress].pubkey.toString();
        const authorityAddress = instruction.keys[closeAtaInstructionKeysIndexes.AuthorityAddress].pubkey.toString();

        const ataClose: AtaClose = {
          type: InstructionBuilderTypes.CloseAssociatedTokenAccount,
          params: {
            accountAddress,
            destinationAddress,
            authorityAddress,
          },
        };
        instructionData.push(ataClose);
        break;
      case ValidInstructionTypesEnum.SetPriorityFee:
        const setComputeUnitPriceParams = ComputeBudgetInstruction.decodeSetComputeUnitPrice(instruction);
        const setPriorityFee: SetPriorityFee = {
          type: InstructionBuilderTypes.SetPriorityFee,
          params: {
            fee: setComputeUnitPriceParams.microLamports,
          },
        };
        instructionData.push(setPriorityFee);
        break;
      case ValidInstructionTypesEnum.MintTo:
        let mintToInstruction: DecodedMintToInstruction;
        if (instruction.programId.toString() !== TOKEN_2022_PROGRAM_ID.toString()) {
          mintToInstruction = decodeMintToInstruction(instruction);
        } else {
          mintToInstruction = decodeMintToInstruction(instruction, TOKEN_2022_PROGRAM_ID);
        }
        const mintAddressForMint = mintToInstruction.keys.mint.pubkey.toString();
        const tokenNameForMint = findTokenName(mintAddressForMint, instructionMetadata, _useTokenAddressTokenName);
        let programIDForMint: string | undefined;
        if (instruction.programId) {
          programIDForMint = instruction.programId.toString();
        }
        const mintTo: MintTo = {
          type: InstructionBuilderTypes.MintTo,
          params: {
            mintAddress: mintAddressForMint,
            destinationAddress: mintToInstruction.keys.destination.pubkey.toString(),
            authorityAddress: mintToInstruction.keys.authority.pubkey.toString(),
            amount: mintToInstruction.data.amount.toString(),
            tokenName: tokenNameForMint,
            decimalPlaces: undefined,
            programId: programIDForMint,
          },
        };
        instructionData.push(mintTo);
        break;
      case ValidInstructionTypesEnum.Burn:
        let burnInstruction: DecodedBurnInstruction;
        if (instruction.programId.toString() !== TOKEN_2022_PROGRAM_ID.toString()) {
          burnInstruction = decodeBurnInstruction(instruction);
        } else {
          burnInstruction = decodeBurnInstruction(instruction, TOKEN_2022_PROGRAM_ID);
        }
        const mintAddressForBurn = burnInstruction.keys.mint.pubkey.toString();
        const tokenNameForBurn = findTokenName(mintAddressForBurn, instructionMetadata, _useTokenAddressTokenName);
        let programIDForBurn: string | undefined;
        if (instruction.programId) {
          programIDForBurn = instruction.programId.toString();
        }
        const burn: Burn = {
          type: InstructionBuilderTypes.Burn,
          params: {
            mintAddress: mintAddressForBurn,
            accountAddress: burnInstruction.keys.account.pubkey.toString(),
            authorityAddress: burnInstruction.keys.owner.pubkey.toString(),
            amount: burnInstruction.data.amount.toString(),
            tokenName: tokenNameForBurn,
            decimalPlaces: undefined,
            programId: programIDForBurn,
          },
        };
        instructionData.push(burn);
        break;
      default:
        throw new NotSupported(
          'Invalid transaction, instruction type not supported: ' + getInstructionType(instruction)
        );
    }
  }
  return instructionData;
}

/**
 * Parses Solana instructions to create staking tx and delegate tx instructions params
 * Only supports Nonce, StakingActivate and Memo Solana instructions
 *
 * @param {TransactionInstruction[]} instructions - an array of supported Solana instructions
 * @returns {InstructionParams[]} An array containing instruction params for staking activate tx
 */
function parseStakingActivateInstructions(
  instructions: TransactionInstruction[]
): Array<Nonce | StakingActivate | Memo> {
  const instructionData: Array<Nonce | StakingActivate | Memo> = [];
  const stakingInstructions = {} as StakingInstructions;
  for (const instruction of instructions) {
    const type = getInstructionType(instruction);
    switch (type) {
      case ValidInstructionTypesEnum.AdvanceNonceAccount:
        const advanceNonceInstruction = SystemInstruction.decodeNonceAdvance(instruction);
        const nonce: Nonce = {
          type: InstructionBuilderTypes.NonceAdvance,
          params: {
            walletNonceAddress: advanceNonceInstruction.noncePubkey.toString(),
            authWalletAddress: advanceNonceInstruction.authorizedPubkey.toString(),
          },
        };
        instructionData.push(nonce);
        break;

      case ValidInstructionTypesEnum.Memo:
        const memo: Memo = { type: InstructionBuilderTypes.Memo, params: { memo: instruction.data.toString() } };
        instructionData.push(memo);
        break;

      case ValidInstructionTypesEnum.Create:
        stakingInstructions.create = SystemInstruction.decodeCreateAccount(instruction);
        break;

      case ValidInstructionTypesEnum.StakingInitialize:
        stakingInstructions.initialize = StakeInstruction.decodeInitialize(instruction);
        break;

      case ValidInstructionTypesEnum.StakingDelegate:
        stakingInstructions.delegate = StakeInstruction.decodeDelegate(instruction);
        break;
    }
  }

  validateStakingInstructions(stakingInstructions);
  const stakingActivate: StakingActivate = {
    type: InstructionBuilderTypes.StakingActivate,
    params: {
      fromAddress: stakingInstructions.create?.fromPubkey.toString() || '',
      stakingAddress: stakingInstructions.initialize?.stakePubkey.toString() || '',
      amount: stakingInstructions.create?.lamports.toString() || '',
      validator:
        stakingInstructions.delegate?.votePubkey.toString() ||
        stakingInstructions.initialize?.authorized.staker.toString() ||
        '',
      isMarinade: stakingInstructions.delegate === undefined,
    },
  };
  instructionData.push(stakingActivate);

  return instructionData;
}
/**
 * Parses Solana instructions to create delegate tx
 * Only supports Nonce, StakingDelegate
 *
 * @param {TransactionInstruction[]} instructions - an array of supported Solana instructions
 * @returns {InstructionParams[]} An array containing instruction params for staking delegate tx
 */
function parseStakingDelegateInstructions(instructions: TransactionInstruction[]): Array<Nonce | StakingDelegate> {
  const instructionData: Array<Nonce | StakingDelegate> = [];
  for (const instruction of instructions) {
    const type = getInstructionType(instruction);
    switch (type) {
      case ValidInstructionTypesEnum.AdvanceNonceAccount:
        const advanceNonceInstruction = SystemInstruction.decodeNonceAdvance(instruction);
        const nonce: Nonce = {
          type: InstructionBuilderTypes.NonceAdvance,
          params: {
            walletNonceAddress: advanceNonceInstruction.noncePubkey.toString(),
            authWalletAddress: advanceNonceInstruction.authorizedPubkey.toString(),
          },
        };
        instructionData.push(nonce);
        break;

      case ValidInstructionTypesEnum.StakingDelegate:
        const stakingDelegateParams = StakeInstruction.decodeDelegate(instruction);
        const stakingDelegate: StakingDelegate = {
          type: InstructionBuilderTypes.StakingDelegate,
          params: {
            fromAddress: stakingDelegateParams.authorizedPubkey.toString() || '',
            stakingAddress: stakingDelegateParams.stakePubkey.toString() || '',
            validator: stakingDelegateParams.votePubkey.toString() || '',
          },
        };
        instructionData.push(stakingDelegate);
        break;
    }
  }
  return instructionData;
}

interface StakingInstructions {
  create?: CreateAccountParams;
  initialize?: InitializeStakeParams;
  delegate?: DelegateStakeParams;
  authorize?: AuthorizeStakeParams[];
}

function validateStakingInstructions(stakingInstructions: StakingInstructions) {
  if (!stakingInstructions.create) {
    throw new NotSupported('Invalid staking activate transaction, missing create stake account instruction');
  }

  if (!stakingInstructions.initialize && stakingInstructions.delegate) {
    return;
  } else if (!stakingInstructions.delegate && stakingInstructions.initialize) {
    return;
  } else if (!stakingInstructions.delegate && !stakingInstructions.initialize) {
    // If both are missing something is wrong
    throw new NotSupported(
      'Invalid staking activate transaction, missing initialize stake account/delegate instruction'
    );
  }
}

/**
 * Parses Solana instructions to create deactivate stake tx instructions params. Supports full stake
 * account deactivation and partial stake account deactivation.
 *
 * When partially deactivating a stake account this method expects the following instructions: Allocate,
 * to allocate a new staking account, Assign, to assign the newly created staking account to the
 * Stake Program, Split, to split the current stake account, and StakingDeactivate to deactivate the
 * newly created stake account.
 *
 * Supports Nonce, StakingDeactivate, Memo, Allocate, Assign, and Split Solana instructions.
 *
 * @param {TransactionInstruction[]} instructions - an array of supported Solana instructions
 * @returns {InstructionParams[]} An array containing instruction params for staking deactivate tx
 */
function parseStakingDeactivateInstructions(
  instructions: TransactionInstruction[],
  coinName?: string
): Array<Nonce | StakingDeactivate | Memo> {
  const instructionData: Array<Nonce | StakingDeactivate | Memo> = [];
  const unstakingInstructions: UnstakingInstructions[] = [];
  for (const instruction of instructions) {
    const type = getInstructionType(instruction);
    switch (type) {
      case ValidInstructionTypesEnum.AdvanceNonceAccount:
        const advanceNonceInstruction = SystemInstruction.decodeNonceAdvance(instruction);
        const nonce: Nonce = {
          type: InstructionBuilderTypes.NonceAdvance,
          params: {
            walletNonceAddress: advanceNonceInstruction.noncePubkey.toString(),
            authWalletAddress: advanceNonceInstruction.authorizedPubkey.toString(),
          },
        };
        instructionData.push(nonce);
        break;

      case ValidInstructionTypesEnum.Memo:
        const memo: Memo = {
          type: InstructionBuilderTypes.Memo,
          params: { memo: instruction.data.toString() },
        };
        instructionData.push(memo);
        break;

      case ValidInstructionTypesEnum.Allocate:
        if (
          unstakingInstructions.length > 0 &&
          unstakingInstructions[unstakingInstructions.length - 1].allocate === undefined
        ) {
          unstakingInstructions[unstakingInstructions.length - 1].allocate =
            SystemInstruction.decodeAllocate(instruction);
        } else {
          unstakingInstructions.push({
            allocate: SystemInstruction.decodeAllocate(instruction),
          });
        }
        break;

      case ValidInstructionTypesEnum.Assign:
        if (
          unstakingInstructions.length > 0 &&
          unstakingInstructions[unstakingInstructions.length - 1].assign === undefined
        ) {
          unstakingInstructions[unstakingInstructions.length - 1].assign = SystemInstruction.decodeAssign(instruction);
        } else {
          unstakingInstructions.push({
            assign: SystemInstruction.decodeAssign(instruction),
          });
        }
        break;

      case ValidInstructionTypesEnum.Split:
        if (
          unstakingInstructions.length > 0 &&
          unstakingInstructions[unstakingInstructions.length - 1].split === undefined
        ) {
          unstakingInstructions[unstakingInstructions.length - 1].split = StakeInstruction.decodeSplit(instruction);
        } else {
          unstakingInstructions.push({
            split: StakeInstruction.decodeSplit(instruction),
          });
        }
        break;

      case ValidInstructionTypesEnum.StakingDeactivate:
        if (
          unstakingInstructions.length > 0 &&
          unstakingInstructions[unstakingInstructions.length - 1].deactivate === undefined
        ) {
          unstakingInstructions[unstakingInstructions.length - 1].deactivate =
            StakeInstruction.decodeDeactivate(instruction);
        } else {
          unstakingInstructions.push({
            deactivate: StakeInstruction.decodeDeactivate(instruction),
          });
        }
        break;

      case ValidInstructionTypesEnum.Transfer:
        if (
          unstakingInstructions.length > 0 &&
          unstakingInstructions[unstakingInstructions.length - 1].transfer === undefined
        ) {
          unstakingInstructions[unstakingInstructions.length - 1].transfer =
            SystemInstruction.decodeTransfer(instruction);
        } else {
          unstakingInstructions.push({
            transfer: SystemInstruction.decodeTransfer(instruction),
          });
        }
        break;
    }
  }

  for (const unstakingInstruction of unstakingInstructions) {
    validateUnstakingInstructions(unstakingInstruction);
    const stakingDeactivate: StakingDeactivate = {
      type: InstructionBuilderTypes.StakingDeactivate,
      params: {
        fromAddress: unstakingInstruction.deactivate?.authorizedPubkey.toString() || '',
        stakingAddress:
          unstakingInstruction.split?.stakePubkey.toString() ||
          unstakingInstruction.deactivate?.stakePubkey.toString() ||
          '',
        amount: unstakingInstruction.split?.lamports.toString(),
        unstakingAddress: unstakingInstruction.split?.splitStakePubkey.toString(),
        isMarinade: unstakingInstruction.deactivate === undefined,
        recipients:
          unstakingInstruction.deactivate === undefined
            ? [
                {
                  address: unstakingInstruction.transfer?.toPubkey.toString() || '',
                  amount: unstakingInstruction.transfer?.lamports.toString() || '',
                },
              ]
            : undefined,
      },
    };
    instructionData.push(stakingDeactivate);
  }

  return instructionData;
}

interface UnstakingInstructions {
  allocate?: AllocateParams;
  assign?: AssignParams;
  split?: SplitStakeParams;
  deactivate?: DeactivateStakeParams;
  transfer?: DecodedTransferInstruction;
}

function validateUnstakingInstructions(unstakingInstructions: UnstakingInstructions) {
  if (!unstakingInstructions.deactivate) {
    if (
      unstakingInstructions.transfer &&
      !unstakingInstructions.allocate &&
      !unstakingInstructions.assign &&
      !unstakingInstructions.split
    ) {
      return;
    }
    throw new NotSupported('Invalid deactivate stake transaction, missing deactivate stake account instruction');
  } else if (
    unstakingInstructions.allocate ||
    unstakingInstructions.assign ||
    unstakingInstructions.split ||
    unstakingInstructions.transfer
  ) {
    if (!unstakingInstructions.allocate) {
      throw new NotSupported(
        'Invalid partial deactivate stake transaction, missing allocate unstake account instruction'
      );
    } else if (!unstakingInstructions.assign) {
      throw new NotSupported(
        'Invalid partial deactivate stake transaction, missing assign unstake account instruction'
      );
    } else if (!unstakingInstructions.split) {
      throw new NotSupported('Invalid partial deactivate stake transaction, missing split stake account instruction');
    } else if (
      unstakingInstructions.allocate.accountPubkey.toString() !== unstakingInstructions.assign.accountPubkey.toString()
    ) {
      throw new NotSupported(
        'Invalid partial deactivate stake transaction, must allocate and assign the same public key'
      );
    } else if (unstakingInstructions.allocate.space !== StakeProgram.space) {
      throw new NotSupported(
        `Invalid partial deactivate stake transaction, unstaking account must allocate ${StakeProgram.space} bytes`
      );
    } else if (unstakingInstructions.assign.programId.toString() !== StakeProgram.programId.toString()) {
      throw new NotSupported(
        'Invalid partial deactivate stake transaction, the unstake account must be assigned to the Stake Program'
      );
    } else if (
      unstakingInstructions.allocate.accountPubkey.toString() !==
      unstakingInstructions.split.splitStakePubkey.toString()
    ) {
      throw new NotSupported('Invalid partial deactivate stake transaction, must allocate the unstaking account');
    } else if (
      unstakingInstructions.split.stakePubkey.toString() === unstakingInstructions.split.splitStakePubkey.toString()
    ) {
      throw new NotSupported(
        'Invalid partial deactivate stake transaction, the unstaking account must be different from the Stake Account'
      );
    } else if (!unstakingInstructions.transfer) {
      throw new NotSupported(
        'Invalid partial deactivate stake transaction, missing funding of unstake address instruction'
      );
    }
  }
}

/**
 * Parses Solana instructions to create staking  withdraw tx instructions params
 * Only supports Nonce, StakingWithdraw, and Memo Solana instructions
 *
 * @param {TransactionInstruction[]} instructions - an array of supported Solana instructions
 * @returns {InstructionParams[]} An array containing instruction params for staking withdraw tx
 */
function parseStakingWithdrawInstructions(
  instructions: TransactionInstruction[]
): Array<Nonce | StakingWithdraw | Memo> {
  const instructionData: Array<Nonce | StakingWithdraw | Memo> = [];
  for (const instruction of instructions) {
    const type = getInstructionType(instruction);
    switch (type) {
      case ValidInstructionTypesEnum.AdvanceNonceAccount:
        const advanceNonceInstruction = SystemInstruction.decodeNonceAdvance(instruction);
        const nonce: Nonce = {
          type: InstructionBuilderTypes.NonceAdvance,
          params: {
            walletNonceAddress: advanceNonceInstruction.noncePubkey.toString(),
            authWalletAddress: advanceNonceInstruction.authorizedPubkey.toString(),
          },
        };
        instructionData.push(nonce);
        break;

      case ValidInstructionTypesEnum.Memo:
        const memo: Memo = {
          type: InstructionBuilderTypes.Memo,
          params: { memo: instruction.data.toString() },
        };
        instructionData.push(memo);
        break;

      case ValidInstructionTypesEnum.StakingWithdraw:
        const withdrawInstruction = StakeInstruction.decodeWithdraw(instruction);
        const stakingWithdraw: StakingWithdraw = {
          type: InstructionBuilderTypes.StakingWithdraw,
          params: {
            fromAddress: withdrawInstruction.authorizedPubkey.toString(),
            stakingAddress: withdrawInstruction.stakePubkey.toString(),
            amount: withdrawInstruction.lamports.toString(),
          },
        };
        instructionData.push(stakingWithdraw);
        break;
    }
  }

  return instructionData;
}

/**
 * Get the memo object from instructions if it exists
 *
 * @param {TransactionInstruction[]} instructions - the array of supported Solana instructions to be parsed
 * @param {Record<string, number>} instructionIndexes - the instructions indexes of the current transaction
 * @returns {Memo | undefined} - memo object or undefined
 */
function getMemo(instructions: TransactionInstruction[], instructionIndexes: Record<string, number>): Memo | undefined {
  const instructionsLength = Object.keys(instructionIndexes).length;
  if (instructions.length === instructionsLength && instructions[instructionIndexes.Memo]) {
    return {
      type: InstructionBuilderTypes.Memo,
      params: { memo: instructions[instructionIndexes.Memo].data.toString() },
    };
  }
}

const ataInitInstructionKeysIndexes = {
  PayerAddress: 0,
  ATAAddress: 1,
  OwnerAddress: 2,
  MintAddress: 3,
};

const closeAtaInstructionKeysIndexes = {
  AccountAddress: 0,
  DestinationAddress: 1,
  AuthorityAddress: 2,
};

/**
 * Parses Solana instructions to initialize associated token account tx instructions params
 *
 * @param {TransactionInstruction[]} instructions - an array of supported Solana instructions
 * @returns {InstructionParams[]} An array containing instruction params for Send tx
 */
function parseAtaInitInstructions(
  instructions: TransactionInstruction[],
  instructionMetadata?: InstructionParams[],
  _useTokenAddressTokenName?: boolean
): Array<AtaInit | Memo | Nonce> {
  const instructionData: Array<AtaInit | Memo | Nonce> = [];
  let memo: Memo | undefined;

  for (const instruction of instructions) {
    const type = getInstructionType(instruction);
    switch (type) {
      case ValidInstructionTypesEnum.Memo:
        memo = { type: InstructionBuilderTypes.Memo, params: { memo: instruction.data.toString() } };
        break;
      case ValidInstructionTypesEnum.AdvanceNonceAccount:
        const advanceNonceInstruction = SystemInstruction.decodeNonceAdvance(instruction);
        const nonce: Nonce = {
          type: InstructionBuilderTypes.NonceAdvance,
          params: {
            walletNonceAddress: advanceNonceInstruction.noncePubkey.toString(),
            authWalletAddress: advanceNonceInstruction.authorizedPubkey.toString(),
          },
        };
        instructionData.push(nonce);
        break;
      case ValidInstructionTypesEnum.InitializeAssociatedTokenAccount:
        const mintAddress = instruction.keys[ataInitInstructionKeysIndexes.MintAddress].pubkey.toString();
        const tokenName = findTokenName(mintAddress, instructionMetadata, _useTokenAddressTokenName);
        let programID: string | undefined;
        if (instruction.programId) {
          programID = instruction.programId.toString();
        }
        const ataInit: AtaInit = {
          type: InstructionBuilderTypes.CreateAssociatedTokenAccount,
          params: {
            mintAddress,
            ataAddress: instruction.keys[ataInitInstructionKeysIndexes.ATAAddress].pubkey.toString(),
            ownerAddress: instruction.keys[ataInitInstructionKeysIndexes.OwnerAddress].pubkey.toString(),
            payerAddress: instruction.keys[ataInitInstructionKeysIndexes.PayerAddress].pubkey.toString(),
            tokenName,
            programId: programID,
          },
        };
        instructionData.push(ataInit);
        break;
      default:
        throw new NotSupported(
          'Invalid transaction, instruction type not supported: ' + getInstructionType(instruction)
        );
    }
  }
  if (memo) {
    instructionData.push(memo);
  }
  return instructionData;
}

const ataCloseInstructionKeysIndexes = {
  AccountAddress: 0,
  DestinationAddress: 1,
  AuthorityAddress: 2,
};

/**
 * Parses Solana instructions to close associated token account tx instructions params
 *
 * @param {TransactionInstruction[]} instructions - an array of supported Solana instructions
 * @returns {InstructionParams[]} An array containing instruction params for Send tx
 */
function parseAtaCloseInstructions(instructions: TransactionInstruction[]): Array<AtaClose | Nonce> {
  const instructionData: Array<AtaClose | Nonce> = [];
  for (const instruction of instructions) {
    const type = getInstructionType(instruction);
    switch (type) {
      case ValidInstructionTypesEnum.AdvanceNonceAccount:
        const advanceNonceInstruction = SystemInstruction.decodeNonceAdvance(instruction);
        const nonce: Nonce = {
          type: InstructionBuilderTypes.NonceAdvance,
          params: {
            walletNonceAddress: advanceNonceInstruction.noncePubkey.toString(),
            authWalletAddress: advanceNonceInstruction.authorizedPubkey.toString(),
          },
        };
        instructionData.push(nonce);
        break;
      case ValidInstructionTypesEnum.CloseAssociatedTokenAccount:
        const ataClose: AtaClose = {
          type: InstructionBuilderTypes.CloseAssociatedTokenAccount,
          params: {
            accountAddress: instruction.keys[ataCloseInstructionKeysIndexes.AccountAddress].pubkey.toString(),
            destinationAddress: instruction.keys[ataCloseInstructionKeysIndexes.DestinationAddress].pubkey.toString(),
            authorityAddress: instruction.keys[ataCloseInstructionKeysIndexes.AuthorityAddress].pubkey.toString(),
          },
        };
        instructionData.push(ataClose);
        break;
      default:
        throw new NotSupported(
          'Invalid transaction, instruction type not supported: ' + getInstructionType(instruction)
        );
    }
  }
  return instructionData;
}

/**
 * Parses Solana instructions to authorized staking account params
 * Only supports Nonce, Authorize instructions
 *
 * @param {TransactionInstruction[]} instructions - an array of supported Solana instructions
 * @returns {InstructionParams[]} An array containing instruction params for staking authorize tx
 */
function parseStakingAuthorizeInstructions(
  instructions: TransactionInstruction[]
): Array<Nonce | StakingAuthorize | Memo> {
  const instructionData: Array<Nonce | StakingAuthorize | Memo> = [];
  for (const instruction of instructions) {
    const type = getInstructionType(instruction);
    switch (type) {
      case ValidInstructionTypesEnum.AdvanceNonceAccount:
        const advanceNonceInstruction = SystemInstruction.decodeNonceAdvance(instruction);
        const nonce: Nonce = {
          type: InstructionBuilderTypes.NonceAdvance,
          params: {
            walletNonceAddress: advanceNonceInstruction.noncePubkey.toString(),
            authWalletAddress: advanceNonceInstruction.authorizedPubkey.toString(),
          },
        };
        instructionData.push(nonce);
        break;

      case ValidInstructionTypesEnum.Memo:
        const memo: Memo = { type: InstructionBuilderTypes.Memo, params: { memo: instruction.data.toString() } };
        instructionData.push(memo);
        break;

      case ValidInstructionTypesEnum.Authorize:
        const authorize = StakeInstruction.decodeAuthorize(instruction);
        instructionData.push({
          type: InstructionBuilderTypes.StakingAuthorize,
          params: {
            stakingAddress: authorize.stakePubkey.toString(),
            oldAuthorizeAddress: authorize.authorizedPubkey.toString(),
            newAuthorizeAddress: authorize.newAuthorizedPubkey.toString(),
            newWithdrawAddress: authorize.custodianPubkey?.toString() || '',
          },
        });
        break;
    }
  }

  return instructionData;
}

/**
 * Parses Solana instructions to authorized staking account params
 * Only supports Nonce, Authorize instructions
 *
 * @param {TransactionInstruction[]} instructions - an array of supported Solana instructions
 * @returns {InstructionParams[]} An array containing instruction params for staking authorize tx
 */
function parseStakingAuthorizeRawInstructions(instructions: TransactionInstruction[]): Array<Nonce | StakingAuthorize> {
  const instructionData: Array<Nonce | StakingAuthorize> = [];
  assert(instructions.length === 2, 'Invalid number of instructions');
  const advanceNonceInstruction = SystemInstruction.decodeNonceAdvance(instructions[0]);
  const nonce: Nonce = {
    type: InstructionBuilderTypes.NonceAdvance,
    params: {
      walletNonceAddress: advanceNonceInstruction.noncePubkey.toString(),
      authWalletAddress: advanceNonceInstruction.authorizedPubkey.toString(),
    },
  };
  instructionData.push(nonce);
  const authorize = instructions[1];
  assert(authorize.keys.length === 5, 'Invalid number of keys in authorize instruction');
  instructionData.push({
    type: InstructionBuilderTypes.StakingAuthorize,
    params: {
      stakingAddress: authorize.keys[0].pubkey.toString(),
      oldAuthorizeAddress: authorize.keys[2].pubkey.toString(),
      newAuthorizeAddress: authorize.keys[3].pubkey.toString(),
      custodianAddress: authorize.keys[4].pubkey.toString(),
    },
  });
  return instructionData;
}

function findTokenName(
  mintAddress: string,
  instructionMetadata?: InstructionParams[],
  _useTokenAddressTokenName?: boolean
): string {
  let token: string | undefined;

  coins.forEach((value, key) => {
    if (value instanceof SolCoin && value.tokenAddress === mintAddress) {
      token = value.name;
    }
  });

  if (!token && instructionMetadata) {
    instructionMetadata.forEach((instruction) => {
      if (
        instruction.type === InstructionBuilderTypes.CreateAssociatedTokenAccount &&
        instruction.params.mintAddress === mintAddress
      ) {
        token = instruction.params.tokenName;
      } else if (
        instruction.type === InstructionBuilderTypes.TokenTransfer &&
        instruction.params.tokenAddress === mintAddress
      ) {
        token = instruction.params.tokenName;
      }
    });
  }

  if (!token && _useTokenAddressTokenName) {
    token = mintAddress;
  }

  assert(token);

  return token;
}
