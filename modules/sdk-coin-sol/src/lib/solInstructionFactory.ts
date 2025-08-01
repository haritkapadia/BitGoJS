import { SolCoin } from '@bitgo/statics';
import {
  createAssociatedTokenAccountInstruction,
  createCloseAccountInstruction,
  createMintToInstruction,
  createBurnInstruction,
  createTransferCheckedInstruction,
  TOKEN_2022_PROGRAM_ID,
} from '@solana/spl-token';
import {
  Authorized,
  Lockup,
  PublicKey,
  StakeAuthorizationLayout,
  StakeProgram,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  ComputeBudgetProgram,
} from '@solana/web3.js';
import assert from 'assert';
import BigNumber from 'bignumber.js';
import { InstructionBuilderTypes, MEMO_PROGRAM_PK } from './constants';
import {
  AtaClose,
  AtaInit,
  InstructionParams,
  Memo,
  MintTo,
  Burn,
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
  CustomInstruction,
} from './iface';
import { getSolTokenFromTokenName } from './utils';

/**
 * Construct Solana instructions from instructions params
 *
 * @param {InstructionParams} instructionToBuild - the data containing the instruction params
 * @returns {TransactionInstruction[]} An array containing supported Solana instructions
 */
export function solInstructionFactory(instructionToBuild: InstructionParams): TransactionInstruction[] {
  switch (instructionToBuild.type) {
    case InstructionBuilderTypes.NonceAdvance:
      return advanceNonceInstruction(instructionToBuild);
    case InstructionBuilderTypes.Memo:
      return memoInstruction(instructionToBuild);
    case InstructionBuilderTypes.Transfer:
      return transferInstruction(instructionToBuild);
    case InstructionBuilderTypes.TokenTransfer:
      return tokenTransferInstruction(instructionToBuild);
    case InstructionBuilderTypes.CreateNonceAccount:
      return createNonceAccountInstruction(instructionToBuild);
    case InstructionBuilderTypes.StakingActivate:
      return stakingInitializeInstruction(instructionToBuild);
    case InstructionBuilderTypes.StakingDeactivate:
      return stakingDeactivateInstruction(instructionToBuild);
    case InstructionBuilderTypes.StakingWithdraw:
      return stakingWithdrawInstruction(instructionToBuild);
    case InstructionBuilderTypes.CreateAssociatedTokenAccount:
      return createATAInstruction(instructionToBuild);
    case InstructionBuilderTypes.CloseAssociatedTokenAccount:
      return closeATAInstruction(instructionToBuild);
    case InstructionBuilderTypes.StakingAuthorize:
      return stakingAuthorizeInstruction(instructionToBuild);
    case InstructionBuilderTypes.StakingDelegate:
      return stakingDelegateInstruction(instructionToBuild);
    case InstructionBuilderTypes.SetPriorityFee:
      return fetchPriorityFeeInstruction(instructionToBuild);
    case InstructionBuilderTypes.MintTo:
      return mintToInstruction(instructionToBuild);
    case InstructionBuilderTypes.Burn:
      return burnInstruction(instructionToBuild);
    case InstructionBuilderTypes.CustomInstruction:
      return customInstruction(instructionToBuild);
    default:
      throw new Error(`Invalid instruction type or not supported`);
  }
}

/**
 * Construct Advance Nonce Solana instructions
 *
 * @param {Nonce} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Advance Nonce Solana instruction
 */
function advanceNonceInstruction(data: Nonce): TransactionInstruction[] {
  const {
    params: { authWalletAddress, walletNonceAddress },
  } = data;
  assert(authWalletAddress, 'Missing authWalletAddress param');
  assert(walletNonceAddress, 'Missing walletNonceAddress param');
  const nonceInstruction = SystemProgram.nonceAdvance({
    noncePubkey: new PublicKey(walletNonceAddress),
    authorizedPubkey: new PublicKey(authWalletAddress),
  });
  return [nonceInstruction];
}

function fetchPriorityFeeInstruction(instructionToBuild: SetPriorityFee): TransactionInstruction[] {
  const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
    microLamports: instructionToBuild.params.fee,
  });

  return [addPriorityFee];
}

/**
 * Construct Memo Solana instructions
 *
 * @param {Memo} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Memo Solana instruction
 */
function memoInstruction(data: Memo): TransactionInstruction[] {
  const {
    params: { memo },
  } = data;
  assert(memo, 'Missing memo param');
  const memoInstruction = new TransactionInstruction({
    keys: [],
    programId: new PublicKey(MEMO_PROGRAM_PK),
    data: Buffer.from(memo),
  });
  return [memoInstruction];
}

/**
 * Construct Transfer Solana instructions
 *
 * @param {Transfer} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Transfer Solana instruction
 */
function transferInstruction(data: Transfer): TransactionInstruction[] {
  const {
    params: { fromAddress, toAddress, amount },
  } = data;
  assert(fromAddress, 'Missing fromAddress param');
  assert(toAddress, 'Missing toAddress param');
  assert(amount, 'Missing toAddress param');
  const transferInstruction = SystemProgram.transfer({
    fromPubkey: new PublicKey(fromAddress),
    toPubkey: new PublicKey(toAddress),
    lamports: parseInt(amount, 10),
  });
  return [transferInstruction];
}

/**
 * Construct Transfer Solana instructions
 *
 * @param {Transfer} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Transfer Solana instruction
 */
function tokenTransferInstruction(data: TokenTransfer): TransactionInstruction[] {
  const {
    params: { fromAddress, toAddress, amount, tokenName, sourceAddress },
  } = data;
  assert(fromAddress, 'Missing fromAddress (owner) param');
  assert(toAddress, 'Missing toAddress param');
  assert(amount, 'Missing amount param');
  assert(tokenName, 'Missing token name');
  assert(sourceAddress, 'Missing ata address');
  const token = getSolTokenFromTokenName(data.params.tokenName);
  let tokenAddress: string;
  let programId: string | undefined;
  let decimalPlaces: number;
  if (data.params.tokenAddress && data.params.decimalPlaces) {
    tokenAddress = data.params.tokenAddress;
    decimalPlaces = data.params.decimalPlaces;
    programId = data.params.programId;
  } else if (token) {
    assert(token instanceof SolCoin);
    tokenAddress = token.tokenAddress;
    decimalPlaces = token.decimalPlaces;
    programId = token.programId;
  } else {
    throw new Error('Invalid token name, got:' + data.params.tokenName);
  }

  let transferInstruction: TransactionInstruction;
  if (programId === TOKEN_2022_PROGRAM_ID.toString()) {
    transferInstruction = createTransferCheckedInstruction(
      new PublicKey(sourceAddress),
      new PublicKey(tokenAddress),
      new PublicKey(toAddress),
      new PublicKey(fromAddress),
      BigInt(amount),
      decimalPlaces,
      [],
      TOKEN_2022_PROGRAM_ID
    );
  } else {
    transferInstruction = createTransferCheckedInstruction(
      new PublicKey(sourceAddress),
      new PublicKey(tokenAddress),
      new PublicKey(toAddress),
      new PublicKey(fromAddress),
      BigInt(amount),
      decimalPlaces
    );
  }
  return [transferInstruction];
}

/**
 * Construct Create and Initialize Nonce Solana instructions
 *
 * @param {WalletInit} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Create and Initialize Nonce Solana instruction
 */
function createNonceAccountInstruction(data: WalletInit): TransactionInstruction[] {
  const {
    params: { fromAddress, nonceAddress, authAddress, amount },
  } = data;
  assert(fromAddress, 'Missing fromAddress param');
  assert(nonceAddress, 'Missing nonceAddress param');
  assert(authAddress, 'Missing authAddress param');
  assert(amount, 'Missing amount param');
  const nonceAccountInstruction = SystemProgram.createNonceAccount({
    fromPubkey: new PublicKey(fromAddress),
    noncePubkey: new PublicKey(nonceAddress),
    authorizedPubkey: new PublicKey(authAddress),
    lamports: new BigNumber(amount).toNumber(),
  });
  return nonceAccountInstruction.instructions;
}

/**
 * Construct Create Staking Account and Delegate Solana instructions
 *
 * @param {StakingActivate} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Create Staking Account and Delegate Solana instructions
 */
function stakingInitializeInstruction(data: StakingActivate): TransactionInstruction[] {
  const {
    params: { fromAddress, stakingAddress, amount, validator, isMarinade },
  } = data;
  assert(fromAddress, 'Missing fromAddress param');
  assert(stakingAddress, 'Missing stakingAddress param');
  assert(amount, 'Missing amount param');
  assert(validator, 'Missing validator param');
  assert(isMarinade !== undefined, 'Missing isMarinade param');

  const fromPubkey = new PublicKey(fromAddress);
  const stakePubkey = new PublicKey(stakingAddress);
  const validatorPubkey = new PublicKey(validator);
  const tx = new Transaction();

  const stakerPubkey = isMarinade ? validatorPubkey : fromPubkey;
  const walletInitStaking = StakeProgram.createAccount({
    fromPubkey,
    stakePubkey,
    authorized: new Authorized(stakerPubkey, fromPubkey), // staker and withdrawer
    lockup: new Lockup(0, 0, fromPubkey), // No minimum epoch to withdraw
    lamports: new BigNumber(amount).toNumber(),
  });
  tx.add(walletInitStaking);

  if (!isMarinade) {
    const delegateStaking = StakeProgram.delegate({
      stakePubkey: new PublicKey(stakingAddress),
      authorizedPubkey: new PublicKey(fromAddress),
      votePubkey: new PublicKey(validator),
    });
    tx.add(delegateStaking);
  }

  return tx.instructions;
}

/**
 * Construct staking deactivate Solana instructions
 *
 * @param {StakingDeactivate} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing staking deactivate instruction
 */
function stakingDeactivateInstruction(data: StakingDeactivate): TransactionInstruction[] {
  const {
    params: { fromAddress, stakingAddress, isMarinade, recipients },
  } = data;
  assert(fromAddress, 'Missing fromAddress param');
  if (!isMarinade) {
    assert(stakingAddress, 'Missing stakingAddress param');
  }

  if (isMarinade) {
    const tx = new Transaction();
    assert(recipients, 'Missing recipients param');
    const toPubkeyAddress = new PublicKey(recipients[0].address || '');
    const transferInstruction = SystemProgram.transfer({
      fromPubkey: new PublicKey(fromAddress),
      toPubkey: toPubkeyAddress,
      lamports: parseInt(recipients[0].amount, 10),
    });

    tx.add(transferInstruction);
    return tx.instructions;
  }

  if (data.params.amount && data.params.unstakingAddress) {
    const tx = new Transaction();
    const unstakingAddress = new PublicKey(data.params.unstakingAddress);

    const allocateAccount = SystemProgram.allocate({
      accountPubkey: unstakingAddress,
      space: StakeProgram.space,
    });
    tx.add(allocateAccount);

    const assignAccount = SystemProgram.assign({
      accountPubkey: unstakingAddress,
      programId: StakeProgram.programId,
    });
    tx.add(assignAccount);

    const splitStake = StakeProgram.split(
      {
        stakePubkey: new PublicKey(stakingAddress),
        authorizedPubkey: new PublicKey(fromAddress),
        splitStakePubkey: unstakingAddress,
        lamports: new BigNumber(data.params.amount).toNumber(),
      },
      0
    );
    tx.add(splitStake.instructions[1]);

    const deactivateStaking = StakeProgram.deactivate({
      stakePubkey: unstakingAddress,
      authorizedPubkey: new PublicKey(fromAddress),
    });
    tx.add(deactivateStaking);

    return tx.instructions;
  } else {
    const deactivateStaking = StakeProgram.deactivate({
      stakePubkey: new PublicKey(stakingAddress),
      authorizedPubkey: new PublicKey(fromAddress),
    });

    return deactivateStaking.instructions;
  }
}

/**
 * Construct Staking Withdraw Solana instructions
 *
 * @param {StakingWithdraw} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Staking Withdraw  Solana instructions
 */
function stakingWithdrawInstruction(data: StakingWithdraw): TransactionInstruction[] {
  const {
    params: { fromAddress, stakingAddress, amount },
  } = data;
  assert(fromAddress, 'Missing fromAddress param');
  assert(stakingAddress, 'Missing stakingAddress param');
  assert(amount, 'Missing amount param');

  const withdrawStaking = StakeProgram.withdraw({
    stakePubkey: new PublicKey(stakingAddress),
    authorizedPubkey: new PublicKey(fromAddress),
    toPubkey: new PublicKey(fromAddress),
    lamports: new BigNumber(amount).toNumber(),
  });

  return withdrawStaking.instructions;
}

/**
 * Construct Create and Initialize Nonce Solana instructions
 *
 * @param {WalletInit} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Create and Initialize Nonce Solana instruction
 */
function createATAInstruction(data: AtaInit): TransactionInstruction[] {
  const {
    params: { mintAddress, ataAddress, ownerAddress, payerAddress, programId },
  } = data;
  assert(mintAddress, 'Missing mintAddress param');
  assert(ataAddress, 'Missing ataAddress param');
  assert(ownerAddress, 'Missing ownerAddress param');
  assert(payerAddress, 'Missing payerAddress param');

  let associatedTokenAccountInstruction: TransactionInstruction;
  if (programId && programId === TOKEN_2022_PROGRAM_ID.toString()) {
    associatedTokenAccountInstruction = createAssociatedTokenAccountInstruction(
      new PublicKey(payerAddress),
      new PublicKey(ataAddress),
      new PublicKey(ownerAddress),
      new PublicKey(mintAddress),
      TOKEN_2022_PROGRAM_ID
    );
  } else {
    associatedTokenAccountInstruction = createAssociatedTokenAccountInstruction(
      new PublicKey(payerAddress),
      new PublicKey(ataAddress),
      new PublicKey(ownerAddress),
      new PublicKey(mintAddress)
    );
  }
  return [associatedTokenAccountInstruction];
}

/**
 * Construct Close ATA Solana instructions
 *
 * @param {WalletInit} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Close ATA Solana instruction
 */
function closeATAInstruction(data: AtaClose): TransactionInstruction[] {
  const {
    params: { accountAddress, destinationAddress, authorityAddress },
  } = data;
  assert(accountAddress, 'Missing accountAddress param');
  assert(destinationAddress, 'Missing destinationAddress param');
  assert(authorityAddress, 'Missing authorityAddress param');

  const closeAssociatedTokenAccountInstruction = createCloseAccountInstruction(
    new PublicKey(accountAddress),
    new PublicKey(destinationAddress),
    new PublicKey(authorityAddress)
  );
  return [closeAssociatedTokenAccountInstruction];
}

/**
 * Construct Staking Account Authorize Solana instructions
 *
 * @param {StakingAuthorize} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Staking Account Authorize instructions
 */
function stakingAuthorizeInstruction(data: StakingAuthorize): TransactionInstruction[] {
  const {
    params: { stakingAddress, oldAuthorizeAddress, newAuthorizeAddress, newWithdrawAddress },
  } = data;
  assert(stakingAddress, 'Missing stakingAddress param');
  assert(oldAuthorizeAddress, 'Missing oldAuthorizeAddress param');
  assert(newAuthorizeAddress, 'Missing newAuthorizeAddress param');
  assert(newWithdrawAddress, 'Missing newWithdrawAddress param');

  const tx = new Transaction();

  const authorizeStaking = StakeProgram.authorize({
    stakePubkey: new PublicKey(stakingAddress),
    authorizedPubkey: new PublicKey(oldAuthorizeAddress),
    newAuthorizedPubkey: new PublicKey(newAuthorizeAddress),
    stakeAuthorizationType: StakeAuthorizationLayout.Staker,
  });

  const authorizeWithdraw = StakeProgram.authorize({
    stakePubkey: new PublicKey(stakingAddress),
    authorizedPubkey: new PublicKey(oldAuthorizeAddress),
    newAuthorizedPubkey: new PublicKey(newAuthorizeAddress),
    stakeAuthorizationType: StakeAuthorizationLayout.Withdrawer,
    custodianPubkey: new PublicKey(newWithdrawAddress),
  });
  tx.add(authorizeStaking);
  tx.add(authorizeWithdraw);

  return tx.instructions;
}

/**
 * Construct Delegate Solana instructions
 *
 * @param {StakingActivate} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Delegate Solana instructions
 */
function stakingDelegateInstruction(data: StakingDelegate): TransactionInstruction[] {
  const {
    params: { fromAddress, stakingAddress, validator },
  } = data;
  assert(fromAddress, 'Missing fromAddress param');
  assert(stakingAddress, 'Missing stakingAddress param');
  assert(validator, 'Missing validator param');
  const tx = new Transaction();
  const delegateStaking = StakeProgram.delegate({
    stakePubkey: new PublicKey(stakingAddress),
    authorizedPubkey: new PublicKey(fromAddress),
    votePubkey: new PublicKey(validator),
  });
  tx.add(delegateStaking);

  return tx.instructions;
}

/**
 * Construct MintTo Solana instructions
 *
 * @param {MintTo} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing MintTo Solana instructions
 */
function mintToInstruction(data: MintTo): TransactionInstruction[] {
  const {
    params: { mintAddress, destinationAddress, authorityAddress, amount, programId },
  } = data;
  assert(mintAddress, 'Missing mintAddress param');
  assert(destinationAddress, 'Missing destinationAddress param');
  assert(authorityAddress, 'Missing authorityAddress param');
  assert(amount, 'Missing amount param');

  const mint = new PublicKey(mintAddress);
  const destination = new PublicKey(destinationAddress);
  const authority = new PublicKey(authorityAddress);

  let mintToInstr: TransactionInstruction;
  if (programId && programId === TOKEN_2022_PROGRAM_ID.toString()) {
    mintToInstr = createMintToInstruction(mint, destination, authority, BigInt(amount), [], TOKEN_2022_PROGRAM_ID);
  } else {
    mintToInstr = createMintToInstruction(mint, destination, authority, BigInt(amount));
  }

  return [mintToInstr];
}

/**
 * Construct Burn Solana instructions
 *
 * @param {Burn} data - the data to build the instruction
 * @returns {TransactionInstruction[]} An array containing Burn Solana instructions
 */
function burnInstruction(data: Burn): TransactionInstruction[] {
  const {
    params: { mintAddress, accountAddress, authorityAddress, amount, programId },
  } = data;
  assert(mintAddress, 'Missing mintAddress param');
  assert(accountAddress, 'Missing accountAddress param');
  assert(authorityAddress, 'Missing authorityAddress param');
  assert(amount, 'Missing amount param');

  const mint = new PublicKey(mintAddress);
  const account = new PublicKey(accountAddress);
  const authority = new PublicKey(authorityAddress);

  let burnInstr: TransactionInstruction;
  if (programId && programId === TOKEN_2022_PROGRAM_ID.toString()) {
    burnInstr = createBurnInstruction(account, mint, authority, BigInt(amount), [], TOKEN_2022_PROGRAM_ID);
  } else {
    burnInstr = createBurnInstruction(account, mint, authority, BigInt(amount));
  }

  return [burnInstr];
}

/**
 * Process custom instruction - simply returns the raw instruction
 *
 * @param {CustomInstruction} data - the data containing the custom instruction
 * @returns {TransactionInstruction[]} An array containing the custom instruction
 */
function customInstruction(data: InstructionParams): TransactionInstruction[] {
  const {
    params: { instruction },
  } = data as CustomInstruction;
  assert(instruction, 'Missing instruction param');
  return [instruction];
}
