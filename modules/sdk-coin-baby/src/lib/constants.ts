import { CosmosUtils } from '@bitgo/abstract-cosmos';

const cosmosUtils = new CosmosUtils();
export const validDenoms = ['baby', 'tbaby', 'ubbn', ...cosmosUtils.getTokenDenomsUsingCoinFamily('baby')];
export const accountAddressRegex = /^(bbn)1(['qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38})$/;
export const validatorAddressRegex = /^(bbnvaloper)1(['qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38})$/;
export const contractAddressRegex = /^(bbn)1(['qpzry9x8gf2tvdw0s3jn54khce6mua7l]+)$/;
export const ADDRESS_PREFIX = 'bbn';
export const GAS_AMOUNT = '7000';
export const GAS_LIMIT = 200000;
export const UNAVAILABLE_TEXT = 'UNAVAILABLE';
export const wrappedDelegateMsgTypeUrl = '/babylon.epoching.v1.MsgWrappedDelegate';
export const wrappedUndelegateMsgTypeUrl = '/babylon.epoching.v1.MsgWrappedUndelegate';
export const wrappedBeginRedelegateTypeUrl = '/babylon.epoching.v1.MsgWrappedBeginRedelegate';
export const createBTCDelegationMsgTypeUrl = '/babylon.btcstaking.v1.MsgCreateBTCDelegation';
export const withdrawRewardMsgTypeUrl = '/babylon.incentive.MsgWithdrawReward';
