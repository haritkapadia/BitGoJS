import { BaseCoin as CoinConfig } from '@bitgo/statics';
import { BaseTransactionBuilderFactory, InvalidTransactionError, TransactionType } from '@bitgo/sdk-core';
import { TransferBuilder } from './transferBuilder';
import { WalletInitializationBuilder } from './walletInitializationBuilder';
import { TransactionBuilder } from './transactionBuilder';
import { Transaction } from './transaction';
import { StakingActivateBuilder } from './stakingActivateBuilder';
import { StakingDeactivateBuilder } from './stakingDeactivateBuilder';
import { StakingWithdrawBuilder } from './stakingWithdrawBuilder';
import { FungibleTokenTransferBuilder } from './fungibleTokenTransferBuilder';
import { StorageDepositTransferBuilder } from './storageDepositTransferBuilder';

export class TransactionBuilderFactory extends BaseTransactionBuilderFactory {
  constructor(_coinConfig: Readonly<CoinConfig>) {
    super(_coinConfig);
  }

  /** @inheritdoc */
  from(raw: string): TransactionBuilder {
    try {
      const tx = new Transaction(this._coinConfig);
      tx.fromRawTransaction(raw);
      switch (tx.type) {
        case TransactionType.Send:
          if (FungibleTokenTransferBuilder.isFungibleTokenTransferTransaction(tx.nearTransaction.actions)) {
            return this.getFungibleTokenTransferBuilder(tx);
          }
          return this.getTransferBuilder(tx);
        case TransactionType.WalletInitialization:
          return this.getWalletInitializationBuilder(tx);
        case TransactionType.StakingActivate:
          return this.getStakingActivateBuilder(tx);
        case TransactionType.StakingDeactivate:
          return this.getStakingDeactivateBuilder(tx);
        case TransactionType.StakingWithdraw:
          return this.getStakingWithdrawBuilder(tx);
        case TransactionType.StorageDeposit:
          return this.getStorageDepositTransferBuilder(tx);
        default:
          throw new InvalidTransactionError('unsupported transaction');
      }
    } catch (e) {
      throw e;
    }
  }

  /** @inheritdoc */
  getWalletInitializationBuilder(tx?: Transaction): WalletInitializationBuilder {
    return TransactionBuilderFactory.initializeBuilder(tx, new WalletInitializationBuilder(this._coinConfig));
  }

  /** @inheritdoc */
  getTransferBuilder(tx?: Transaction): TransferBuilder {
    return TransactionBuilderFactory.initializeBuilder(tx, new TransferBuilder(this._coinConfig));
  }

  getStakingActivateBuilder(tx?: Transaction): StakingActivateBuilder {
    return TransactionBuilderFactory.initializeBuilder(tx, new StakingActivateBuilder(this._coinConfig));
  }

  getStakingDeactivateBuilder(tx?: Transaction): StakingDeactivateBuilder {
    return TransactionBuilderFactory.initializeBuilder(tx, new StakingDeactivateBuilder(this._coinConfig));
  }

  getStakingWithdrawBuilder(tx?: Transaction): StakingWithdrawBuilder {
    return TransactionBuilderFactory.initializeBuilder(tx, new StakingWithdrawBuilder(this._coinConfig));
  }

  getFungibleTokenTransferBuilder(tx?: Transaction): FungibleTokenTransferBuilder {
    return TransactionBuilderFactory.initializeBuilder(tx, new FungibleTokenTransferBuilder(this._coinConfig));
  }

  getStorageDepositTransferBuilder(tx?: Transaction): StorageDepositTransferBuilder {
    return TransactionBuilderFactory.initializeBuilder(tx, new StorageDepositTransferBuilder(this._coinConfig));
  }

  /**
   * Initialize the builder with the given transaction
   *
   * @param {Transaction | undefined} tx - the transaction used to initialize the builder
   * @param {TransactionBuilder} builder - the builder to be initialized
   * @returns {TransactionBuilder} the builder initialized
   */
  private static initializeBuilder<T extends TransactionBuilder>(tx: Transaction | undefined, builder: T): T {
    if (tx) {
      builder.initBuilder(tx);
    }
    return builder;
  }
}
