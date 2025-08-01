import { BaseCoin, BaseUnit, CoinFeature, CoinKind, KeyCurve, UnderlyingAsset } from './base';
import { BaseNetwork, Networks, OfcNetwork } from './networks';

export interface OfcConstructorOptions {
  id: string;
  fullName: string;
  name: string;
  network: BaseNetwork;
  asset: UnderlyingAsset;
  baseUnit: BaseUnit;
  features: CoinFeature[];
  decimalPlaces: number;
  isToken: boolean;
  kind: CoinKind;
  prefix?: string;
  suffix?: string;
  addressCoin?: string;
  primaryKeyCurve: KeyCurve;
}

/**
 * OFC (off chain) coins. These are virtual coins used to represent off chain assets on the BitGo platform.
 */
export class OfcCoin extends BaseCoin {
  public static readonly DEFAULT_FEATURES = [
    CoinFeature.ACCOUNT_MODEL,
    CoinFeature.REQUIRES_BIG_NUMBER,
    CoinFeature.CUSTODY,
    CoinFeature.CUSTODY_BITGO_TRUST,
    CoinFeature.CUSTODY_BITGO_MENA_FZE,
    CoinFeature.CUSTODY_BITGO_CUSTODY_MENA_FZE,
    CoinFeature.CUSTODY_BITGO_INDIA,
  ];

  // If set, this coin is the native address format for this token.
  public readonly addressCoin?: string;
  public readonly minimumDenomination: number;

  constructor(options: OfcConstructorOptions) {
    const { addressCoin, ...baseOptions } = options;
    super(baseOptions);
    this.addressCoin = addressCoin;
    this.minimumDenomination = Math.pow(10, this.decimalPlaces);
  }

  protected requiredFeatures(): Set<CoinFeature> {
    return new Set<CoinFeature>([CoinFeature.ACCOUNT_MODEL, CoinFeature.REQUIRES_BIG_NUMBER]);
  }

  protected disallowedFeatures(): Set<CoinFeature> {
    return new Set<CoinFeature>([
      CoinFeature.UNSPENT_MODEL,
      CoinFeature.CHILD_PAYS_FOR_PARENT,
      CoinFeature.PAYGO,
      CoinFeature.SUPPORTS_TOKENS,
    ]);
  }
}

/**
 * Function to convert AMS inputs into OFC coin instance.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName complete human-readable name of the coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param features Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param prefix Optional coin prefix. Defaults to empty string
 * @param suffix Optional coin suffix. Defaults to coin name.
 * @param network Network object for this coin
 * @param primaryKeyCurve The elliptic curve for this chain/token
 * @param baseUnit base unit of the token
 * @param isToken Whether or not this account coin is a token of another coin
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @returns {Readonly<OfcCoin>} OFC coin instance
 */
export function ofcToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1,
  baseUnit: BaseUnit = BaseUnit.OFC,
  isToken = true,
  kind: CoinKind = CoinKind.CRYPTO
): Readonly<OfcCoin> {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      primaryKeyCurve,
      baseUnit,
    })
  );
}

/**
 * Factory function for ofc coin instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofc(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  /** OFC tokens use SECP256K1 under the hood even if the chain doesn't **/
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      primaryKeyCurve,
      baseUnit: BaseUnit.OFC,
    })
  );
}

/**
 * Factory function for testnet ofc coin instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofc(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      primaryKeyCurve,
      baseUnit: BaseUnit.OFC,
    })
  );
}

/**
 * Factory function for ofc erc20 coin instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcerc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'eth',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}
/**
 * Factory function for testnet ofc erc20 coin instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcerc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'teth',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}

/**
 * Factory function for ofc solana token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param features
 * @param prefix
 * @param suffix
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param isToken
 * @param addressCoin
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */

export function ofcsolToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  features: CoinFeature[] = [...OfcCoin.DEFAULT_FEATURES, CoinFeature.REQUIRES_RESERVE],
  kind: CoinKind = CoinKind.CRYPTO,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'sol',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.SOL,
    })
  );
}

/**
 * Factory function for testnet ofc solana token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param features
 * @param prefix
 * @param suffix
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param isToken
 * @param addressCoin
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */

export function tofcsolToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  features: CoinFeature[] = [...OfcCoin.DEFAULT_FEATURES, CoinFeature.REQUIRES_RESERVE],
  kind: CoinKind = CoinKind.CRYPTO,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'tsol',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.SOL,
    })
  );
}

/**
 * Factory function for ofc stellar token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcStellarToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'xlm',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.XLM,
    })
  );
}
/**
 * Factory function for testnet ofc stellar token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcStellarToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'txlm',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.XLM,
    })
  );
}

/**
 * Factory function for ofc algo token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcAlgoToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'algo',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ALGO,
    })
  );
}
/**
 * Factory function for testnet ofc algo token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcAlgoToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'talgo',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ALGO,
    })
  );
}

/**
 * Factory function for ofc hedera token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcHederaToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'hbar',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.HBAR,
    })
  );
}
/**
 * Factory function for testnet ofc hedera token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcHederaToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'thbar',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.HBAR,
    })
  );
}

/**
 * Factory function for ofc arbethErc20 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcArbethErc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'arbeth',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}

/**
 * Factory function for testnet ofc arbethErc20 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcArbethErc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'tarbeth',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}

/**
 * Factory function for ofc avaxErc20 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcAvaxErc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'avaxc',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}

/**
 * Factory function for testnet ofc avaxErc20 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcAvaxErc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'tavaxc',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}

/**
 * Factory function for ofc polygonErc20 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcPolygonErc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'polygon',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}

/**
 * Factory function for testnet ofc polygonErc20 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcPolygonErc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'tpolygon',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}

/**
 * Factory function for ofc bsc token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcBscToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'bsc',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.BSC,
    })
  );
}

/**
 * Factory function for testnet ofc bsc token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcBscToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'tbsc',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.BSC,
    })
  );
}

/**
 * Factory function for mainnet ofc xrp instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcXrpToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'xrp',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.XRP,
    })
  );
}

/**
 * Factory function for testnet ofc xrp token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcXrpToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'txrp',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.XRP,
    })
  );
}

/**
 * Factory function for mainnet ofc stx instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix Optional coin prefix. Defaults to empty string
 * @param suffix Optional coin suffix. Defaults to coin name.
 * @param isToken Whether or not this account coin is a token of another coin
 * @param features Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcStxToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'stx',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.STX,
    })
  );
}

/**
 * Factory function for testnet ofc stx instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix Optional coin prefix. Defaults to empty string
 * @param suffix Optional coin suffix. Defaults to coin name.
 * @param isToken Whether or not this account coin is a token of another coin
 * @param features Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcStxToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'tstx',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.STX,
    })
  );
}

/**
 * Factory function for ofc opetherc20 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcOpethErc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'opeth',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}

/**
 * Factory function for ofc tron token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcTronToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'trx',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.TRX,
    })
  );
}

/**
 * Factory function for ofc tron token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcTronToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'ttrx',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.TRX,
    })
  );
}

/**
 * Factory function for ofc aptos token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param features
 * @param prefix
 * @param suffix
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param isToken
 * @param addressCoin
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */

export function ofcaptToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  features: CoinFeature[] = [...OfcCoin.DEFAULT_FEATURES, CoinFeature.TSS_ENTERPRISE_PAYS_FEES], // TSS_ENTERPRISE_PAYS_FEE is a mandatory field for APTOS being a TSS & having Gas tank as fee payer
  kind: CoinKind = CoinKind.CRYPTO,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'apt',
  primaryKeyCurve: KeyCurve = KeyCurve.Ed25519
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.APT,
    })
  );
}

/**
 * Factory function for testnet ofc aptos token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param features
 * @param prefix
 * @param suffix
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param isToken
 * @param addressCoin
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */

export function tofcaptToken(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  features: CoinFeature[] = [...OfcCoin.DEFAULT_FEATURES, CoinFeature.TSS_ENTERPRISE_PAYS_FEES], // TSS_ENTERPRISE_PAYS_FEE is a mandatory field for APTOS being a TSS & having Gas tank as fee payer
  kind: CoinKind = CoinKind.CRYPTO,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'tapt',
  primaryKeyCurve: KeyCurve = KeyCurve.Ed25519
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.APT,
    })
  );
}

/**
 * Factory function for ofc nep141 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param features
 * @param prefix
 * @param suffix
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param isToken
 * @param addressCoin
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */

export function ofcnep141Token(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  kind: CoinKind = CoinKind.CRYPTO,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'near',
  primaryKeyCurve: KeyCurve = KeyCurve.Ed25519
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.NEAR,
    })
  );
}

/**
 * Factory function for tofc nep141 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param features
 * @param prefix
 * @param suffix
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param isToken
 * @param addressCoin
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */

export function tofcnep141Token(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  kind: CoinKind = CoinKind.CRYPTO,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'tnear',
  primaryKeyCurve: KeyCurve = KeyCurve.Ed25519
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.NEAR,
    })
  );
}

/**
 * Factory function for ofc WorldErc20 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcWorldErc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'world',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}

/**
 * Factory function for testnet ofc WorldErc20 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcWorldErc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'tworld',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}

/**
 * Factory function for ofc CoredaoErc20 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function ofcCoredaoErc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.main.ofc,
  isToken = true,
  addressCoin = 'coredao',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}

/**
 * Factory function for testnet ofc CoredaoErc20 token instances.
 *
 * @param id uuid v4
 * @param name unique identifier of the coin
 * @param fullName Complete human-readable name of the coin
 * @param network Network object for this coin
 * @param decimalPlaces Number of decimal places this coin supports (divisibility exponent)
 * @param asset Asset which this coin represents. This is the same for both mainnet and testnet variants of a coin.
 * @param kind Differentiates coins which represent fiat assets from those which represent crypto assets
 * @param prefix? Optional coin prefix. Defaults to empty string
 * @param suffix? Optional coin suffix. Defaults to coin name.
 * @param isToken? Whether or not this account coin is a token of another coin
 * @param features? Features of this coin. Defaults to the DEFAULT_FEATURES defined in `OfcCoin`
 * @param primaryKeyCurve The elliptic curve for this chain/token
 */
export function tofcCoredaoErc20(
  id: string,
  name: string,
  fullName: string,
  decimalPlaces: number,
  asset: UnderlyingAsset,
  kind: CoinKind = CoinKind.CRYPTO,
  features: CoinFeature[] = OfcCoin.DEFAULT_FEATURES,
  prefix = '',
  suffix: string = name.replace(/^ofc/, '').toUpperCase(),
  network: OfcNetwork = Networks.test.ofc,
  isToken = true,
  addressCoin = 'tcoredao',
  primaryKeyCurve: KeyCurve = KeyCurve.Secp256k1
) {
  return Object.freeze(
    new OfcCoin({
      id,
      name,
      fullName,
      network,
      prefix,
      suffix,
      features,
      decimalPlaces,
      isToken,
      asset,
      kind,
      addressCoin,
      primaryKeyCurve,
      baseUnit: BaseUnit.ETH,
    })
  );
}
