import { CosmosUtils } from '@bitgo/abstract-cosmos';

const cosmosUtils = new CosmosUtils();
export const validDenoms = ['nosmo', 'uosmo', 'mosmo', 'osmo', ...cosmosUtils.getTokenDenomsUsingCoinFamily('osmo')];
export const accountAddressRegex = /^(osmo)1(['qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38})$/;
export const validatorAddressRegex = /^(osmovaloper)1(['qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38})$/;
export const contractAddressRegex = /^(osmo)1(['qpzry9x8gf2tvdw0s3jn54khce6mua7l]+)$/;
