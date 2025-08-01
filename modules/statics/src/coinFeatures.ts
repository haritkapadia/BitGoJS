import { CoinFeature } from './base';
import { Ada } from './ada';

export const ACCOUNT_COIN_DEFAULT_FEATURES = [
  CoinFeature.ACCOUNT_MODEL,
  CoinFeature.REQUIRES_BIG_NUMBER,
  CoinFeature.VALUELESS_TRANSFER,
  CoinFeature.TRANSACTION_DATA,
  CoinFeature.CUSTODY,
  CoinFeature.CUSTODY_BITGO_TRUST,
  CoinFeature.CUSTODY_BITGO_MENA_FZE,
  CoinFeature.CUSTODY_BITGO_CUSTODY_MENA_FZE,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.CUSTODY_BITGO_KOREA,
  CoinFeature.CUSTODY_BITGO_EUROPE_APS,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_INDIA,
];

export const ACCOUNT_COIN_DEFAULT_FEATURES_EXCLUDE_SINGAPORE = ACCOUNT_COIN_DEFAULT_FEATURES.filter(
  (feature) => feature !== CoinFeature.CUSTODY_BITGO_SINGAPORE
);

export const ETH_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.ENTERPRISE_PAYS_FEES,
  CoinFeature.WALLET_CONNECT_DEFI,
  CoinFeature.EVM_COIN,
];
export const ETH_FEATURES_WITH_MMI = [...ETH_FEATURES, CoinFeature.METAMASK_INSTITUTIONAL];
export const ETH_FEATURES_WITH_STAKING = [...ETH_FEATURES, CoinFeature.STAKING];
export const ETH_FEATURES_WITH_STAKING_AND_MMI = [...ETH_FEATURES_WITH_STAKING, CoinFeature.METAMASK_INSTITUTIONAL];
export const ETC_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_NEW_YORK,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.STUCK_TRANSACTION_MANAGEMENT_ONCHAIN,
  CoinFeature.STUCK_TRANSACTION_MANAGEMENT_TSS,
];
export const EVM_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.MPCV2,
  CoinFeature.EVM_WALLET,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.STUCK_TRANSACTION_MANAGEMENT_TSS,
  CoinFeature.EIP1559,
];
export const AVAXC_FEATURES = [
  ...ETH_FEATURES_WITH_MMI,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_SWITZERLAND,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.EIP1559,
];
export const CELO_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.EIP1559,
].filter(
  (feature) =>
    feature !== CoinFeature.CUSTODY &&
    feature !== CoinFeature.CUSTODY_BITGO_GERMANY &&
    feature !== CoinFeature.CUSTODY_BITGO_FRANKFURT &&
    feature !== CoinFeature.CUSTODY_BITGO_SINGAPORE &&
    feature !== CoinFeature.CUSTODY_BITGO_TRUST &&
    feature !== CoinFeature.CUSTODY_BITGO_MENA_FZE &&
    feature !== CoinFeature.CUSTODY_BITGO_CUSTODY_MENA_FZE &&
    feature !== CoinFeature.CUSTODY_BITGO_KOREA &&
    feature !== CoinFeature.CUSTODY_BITGO_EUROPE_APS &&
    feature !== CoinFeature.CUSTODY_BITGO_NEW_YORK &&
    feature !== CoinFeature.CUSTODY_BITGO_SWITZERLAND &&
    feature !== CoinFeature.CUSTODY_BITGO_SISTER_TRUST_ONE &&
    feature !== CoinFeature.CUSTODY_BITGO_INDIA &&
    feature !== CoinFeature.DISTRIBUTED_CUSTODY
);

export const CELO_TOKEN_FEATURES = [...ACCOUNT_COIN_DEFAULT_FEATURES].filter(
  (feature) =>
    feature !== CoinFeature.CUSTODY &&
    feature !== CoinFeature.CUSTODY_BITGO_TRUST &&
    feature !== CoinFeature.CUSTODY_BITGO_MENA_FZE &&
    feature !== CoinFeature.CUSTODY_BITGO_CUSTODY_MENA_FZE &&
    feature !== CoinFeature.CUSTODY_BITGO_SINGAPORE &&
    feature !== CoinFeature.CUSTODY_BITGO_KOREA &&
    feature !== CoinFeature.CUSTODY_BITGO_EUROPE_APS &&
    feature !== CoinFeature.CUSTODY_BITGO_FRANKFURT &&
    feature !== CoinFeature.CUSTODY_BITGO_INDIA
);

export const RBTC_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
];
export const XLM_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_NEW_YORK,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
];
export const XTZ_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.ENTERPRISE_PAYS_FEES,
].filter(
  (feature) =>
    feature !== CoinFeature.CUSTODY_BITGO_MENA_FZE &&
    feature !== CoinFeature.CUSTODY_BITGO_CUSTODY_MENA_FZE &&
    feature !== CoinFeature.CUSTODY_BITGO_SINGAPORE &&
    feature !== CoinFeature.CUSTODY_BITGO_KOREA &&
    feature !== CoinFeature.CUSTODY_BITGO_EUROPE_APS &&
    feature !== CoinFeature.CUSTODY_BITGO_FRANKFURT
);

export const XRP_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_NEW_YORK,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
];
export const POLYGON_TOKEN_FEATURES_WITH_FRANKFURT = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.BULK_TRANSACTION,
];
export const CSPR_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.REQUIRES_RESERVE,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_SWITZERLAND,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.STAKING,
];
export const ALGO_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.CUSTODY_BITGO_SWITZERLAND,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.BULK_TRANSACTION,
];
export const HTETH_TOKEN_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.EIP1559,
  CoinFeature.WALLET_CONNECT_DEFI,
];
export const ADA_FEATURES = [...Ada.DEFAULT_FEATURES, CoinFeature.BULK_TRANSACTION];
export const ADA_FEATURES_WITH_FRANKFURT = [...ADA_FEATURES, CoinFeature.CUSTODY_BITGO_FRANKFURT];
export const DOT_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.STAKING,
  CoinFeature.EXPIRING_TRANSACTIONS,
  CoinFeature.REBUILD_ON_CUSTODY_SIGNING,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
];
export const EOS_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
];
export const HBAR_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.ALPHANUMERIC_MEMO_ID,
];
export const POLYGON_FEATURES = [
  ...ETH_FEATURES_WITH_MMI,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.EVM_WALLET,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_SWITZERLAND,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.MPCV2,
  CoinFeature.STUCK_TRANSACTION_MANAGEMENT_TSS,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.ERC20_BULK_TRANSACTION,
];

export const POLYGON_TOKEN_FEATURES = [...ACCOUNT_COIN_DEFAULT_FEATURES, CoinFeature.BULK_TRANSACTION];
export const POLYGON_TOKEN_FEATURES_EXCLUDE_SINGAPORE = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES_EXCLUDE_SINGAPORE,
  CoinFeature.BULK_TRANSACTION,
];
export const POL_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.STAKING,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.CUSTODY_BITGO_SWITZERLAND,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
];
export const SOL_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.REQUIRES_RESERVE,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.STAKING,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.BULK_TRANSACTION,
];
export const TSOL_FEATURES = [...SOL_FEATURES, CoinFeature.BULK_TRANSACTION, CoinFeature.CUSTODY_BITGO_SINGAPORE];
export const SOL_TOKEN_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.BULK_TRANSACTION,
];
export const SOL_TOKEN_FEATURES_EXCLUDE_SINGAPORE = SOL_TOKEN_FEATURES.filter(
  (feature) => feature !== CoinFeature.CUSTODY_BITGO_SINGAPORE
);
export const SOL_OFC_TOKEN_FEATURES = [...ACCOUNT_COIN_DEFAULT_FEATURES, CoinFeature.TSS, CoinFeature.TSS_COLD];
export const APT_OFC_TOKEN_FEATURES = [...ACCOUNT_COIN_DEFAULT_FEATURES, CoinFeature.TSS, CoinFeature.TSS_COLD];
export const BSC_TOKEN_FEATURES = [...ACCOUNT_COIN_DEFAULT_FEATURES, CoinFeature.BULK_TRANSACTION];
export const BSC_TOKEN_FEATURES_EXCLUDE_SINGAPORE = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES_EXCLUDE_SINGAPORE,
  CoinFeature.BULK_TRANSACTION,
];
export const STX_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.STAKING,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.ALPHANUMERIC_MEMO_ID,
];
export const STX_TOKEN_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.ALPHANUMERIC_MEMO_ID,
];
export const NEAR_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.STAKING,
  CoinFeature.REBUILD_ON_CUSTODY_SIGNING,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.SUPPORTS_TOKENS,
];
export const NEAR_TOKEN_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.REBUILD_ON_CUSTODY_SIGNING,
];
export const MATIC_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.STAKING,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.METAMASK_INSTITUTIONAL,
  CoinFeature.CUSTODY_BITGO_SWITZERLAND,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
];
export const MATIC_FEATURES_WITH_FRANKFURT = [...MATIC_FEATURES, CoinFeature.CUSTODY_BITGO_FRANKFURT];

export const WETH_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.METAMASK_INSTITUTIONAL,
  CoinFeature.CUSTODY_BITGO_SWITZERLAND,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.LIQUID_STAKING,
];
export const TWETH_FEATURES = [...WETH_FEATURES, CoinFeature.STAKING];
export const EIGEN_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.STAKING,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.METAMASK_INSTITUTIONAL,
  CoinFeature.CUSTODY_BITGO_SWITZERLAND,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.LIQUID_STAKING,
];
export const RETH_ROCKET_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.STAKING,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.METAMASK_INSTITUTIONAL,
  CoinFeature.CUSTODY_BITGO_SWITZERLAND,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.LIQUID_STAKING,
];
export const SUI_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.STAKING,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.BULK_STAKING_TRANSACTION,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
];
export const SUI_TOKEN_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.BULK_TRANSACTION,
];
export const SUI_TOKEN_FEATURES_STAKING = [
  ...SUI_TOKEN_FEATURES,
  CoinFeature.STAKING,
  CoinFeature.BULK_STAKING_TRANSACTION,
];
export const TRX_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_SINGAPORE,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.STAKING,
];
export const COSMOS_SIDECHAIN_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.MPCV2,
  CoinFeature.SHA256_WITH_ECDSA_TSS,
  CoinFeature.COSMOS_LIKE_COINS,
  CoinFeature.REBUILD_ON_CUSTODY_SIGNING,
  CoinFeature.INCREASED_TX_REQUEST_REBUILD_LIMIT,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.STUCK_TRANSACTION_MANAGEMENT_TSS,
  CoinFeature.ALPHANUMERIC_MEMO_ID,
  CoinFeature.SUPPORTS_TOKENS,
];
export const COSMOS_SIDECHAIN_FEATURES_WITH_STAKING = [
  ...COSMOS_SIDECHAIN_FEATURES,
  CoinFeature.STAKING,
  CoinFeature.BULK_STAKING_TRANSACTION,
];
export const COSMOS_TOKEN_FEATURES = [...COSMOS_SIDECHAIN_FEATURES];
export const COSMOS_TOKEN_FEATURES_WITH_STAKING = [...COSMOS_SIDECHAIN_FEATURES_WITH_STAKING];
export const ATOM_FEATURES = [...COSMOS_SIDECHAIN_FEATURES_WITH_STAKING, CoinFeature.CUSTODY_BITGO_FRANKFURT];
export const INJECTIVE_FEATURES = [
  ...COSMOS_SIDECHAIN_FEATURES_WITH_STAKING,
  CoinFeature.CUSTODY_BITGO_SWITZERLAND,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
];
export const COREUM_FEATURES = [...COSMOS_SIDECHAIN_FEATURES_WITH_STAKING, CoinFeature.CUSTODY_BITGO_FRANKFURT];
export const SEI_FEATURES = [...COSMOS_SIDECHAIN_FEATURES_WITH_STAKING, CoinFeature.CUSTODY_BITGO_FRANKFURT];
export const TOKEN_FEATURES_WITH_SWISS = [...ACCOUNT_COIN_DEFAULT_FEATURES, CoinFeature.CUSTODY_BITGO_SWITZERLAND];
export const TOKEN_FEATURES_WITH_FRANKFURT = [...ACCOUNT_COIN_DEFAULT_FEATURES, CoinFeature.CUSTODY_BITGO_FRANKFURT];
export const TOKEN_FEATURES_WITH_NY_GERMANY_FRANKFURT = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.CUSTODY_BITGO_NEW_YORK,
  CoinFeature.CUSTODY_BITGO_GERMANY,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
];
export const GENERIC_TOKEN_FEATURES = [
  CoinFeature.ACCOUNT_MODEL,
  CoinFeature.REQUIRES_BIG_NUMBER,
  CoinFeature.VALUELESS_TRANSFER,
  CoinFeature.TRANSACTION_DATA,
  CoinFeature.GENERIC_TOKEN,
];
export const TON_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.STAKING,
  CoinFeature.REBUILD_ON_CUSTODY_SIGNING,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.ALPHANUMERIC_MEMO_ID,
];
export const ARBETH_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.MPCV2,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.EVM_WALLET,
  CoinFeature.USES_NON_PACKED_ENCODING_FOR_TXDATA,
  CoinFeature.ETH_ROLLUP_CHAIN,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.EIP1559,
  CoinFeature.WALLET_CONNECT_DEFI,
  CoinFeature.MULTISIG,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.ERC20_BULK_TRANSACTION,
];
export const OPETH_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.MPCV2,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.EVM_WALLET,
  CoinFeature.USES_NON_PACKED_ENCODING_FOR_TXDATA,
  CoinFeature.ETH_ROLLUP_CHAIN,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.EIP1559,
  CoinFeature.WALLET_CONNECT_DEFI,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.ERC20_BULK_TRANSACTION,
];
export const ZKETH_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG,
  CoinFeature.EVM_WALLET,
  CoinFeature.USES_NON_PACKED_ENCODING_FOR_TXDATA,
  CoinFeature.ETH_ROLLUP_CHAIN,
  CoinFeature.EIP1559,
];
export const BERA_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.MPCV2,
  CoinFeature.EVM_WALLET,
  CoinFeature.USES_NON_PACKED_ENCODING_FOR_TXDATA,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.STUCK_TRANSACTION_MANAGEMENT_TSS,
  CoinFeature.EIP1559,
  CoinFeature.STAKING,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_GERMANY,
];
export const OAS_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.MPCV2,
  CoinFeature.EVM_WALLET,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.STUCK_TRANSACTION_MANAGEMENT_TSS,
  CoinFeature.EIP1559,
];
export const COREDAO_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.MPCV2,
  CoinFeature.EVM_WALLET,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.STUCK_TRANSACTION_MANAGEMENT_TSS,
  CoinFeature.EIP1559,
  CoinFeature.STAKING,
  CoinFeature.EIP1559,
];
export const APECHAIN_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.MPCV2,
  CoinFeature.EVM_WALLET,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.STUCK_TRANSACTION_MANAGEMENT_TSS,
  CoinFeature.EIP1559,
];
export const APT_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.BULK_STAKING_TRANSACTION,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.ENTERPRISE_PAYS_FEES,
  CoinFeature.TSS_ENTERPRISE_PAYS_FEES,
];

export const ICP_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.MPCV2,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.SHA256_WITH_ECDSA_TSS,
  CoinFeature.REBUILD_ON_CUSTODY_SIGNING,
];

export const TAO_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.STAKING,
  CoinFeature.SUPPORTS_TOKENS,
];

export const TAO_TOKEN_FEATURES = [...ACCOUNT_COIN_DEFAULT_FEATURES, CoinFeature.TSS, CoinFeature.TSS_COLD];

export const SONEIUM_FEATURES = [
  ...ETH_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.MPCV2,
  CoinFeature.EVM_WALLET,
  CoinFeature.BULK_TRANSACTION,
  CoinFeature.STUCK_TRANSACTION_MANAGEMENT_TSS,
  CoinFeature.EIP1559,
  CoinFeature.MULTISIG,
  CoinFeature.MULTISIG_COLD,
  CoinFeature.MULTISIG_SUPPORT_GATED,
  CoinFeature.USES_NON_PACKED_ENCODING_FOR_TXDATA,
];

export const POLYX_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.STAKING,
];

export const ETH_FEATURES_WITH_FRANKFURT = [...ETH_FEATURES, CoinFeature.CUSTODY_BITGO_FRANKFURT];
export const ETH_FEATURES_WITH_GERMANY = [...ETH_FEATURES, CoinFeature.CUSTODY_BITGO_GERMANY];
export const ETH_FEATURES_WITH_FRANKFURT_GERMANY = [...ETH_FEATURES_WITH_FRANKFURT, CoinFeature.CUSTODY_BITGO_GERMANY];
export const SOL_TOKEN_FEATURES_WITH_FRANKFURT = [
  ...SOL_TOKEN_FEATURES,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.BULK_TRANSACTION,
];
export const SOL_TOKEN_FEATURES_WITH_FRANKFURT_GERMANY = [
  ...SOL_TOKEN_FEATURES_WITH_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_GERMANY,
];
export const XLM_TOKEN_FEATURES_WITH_FRANKFURT = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
];
export const ZETA_FEATURES = [...COSMOS_SIDECHAIN_FEATURES_WITH_STAKING, CoinFeature.CUSTODY_BITGO_SINGAPORE];
export const ZETA_EVM_FEATURES = [...ACCOUNT_COIN_DEFAULT_FEATURES, CoinFeature.CUSTODY_BITGO_SINGAPORE];
export const ETH_FEATURES_WITH_FRANKFURT_EXCLUDE_SINGAPORE = ETH_FEATURES_WITH_FRANKFURT.filter(
  (feature) => feature !== CoinFeature.CUSTODY_BITGO_SINGAPORE
);
export const TIA_FEATURES = [
  ...COSMOS_SIDECHAIN_FEATURES_WITH_STAKING,
  CoinFeature.CUSTODY_BITGO_SWITZERLAND,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
];
export const WCT_FEATURES = [...ACCOUNT_COIN_DEFAULT_FEATURES, CoinFeature.STAKING, CoinFeature.WALLET_CONNECT_DEFI];
export const BERA_BGT_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.CUSTODY_BITGO_FRANKFURT,
  CoinFeature.CUSTODY_BITGO_GERMANY,
];

export const VET_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.SUPPORTS_TOKENS,
  CoinFeature.ENTERPRISE_PAYS_FEES,
  CoinFeature.TSS_ENTERPRISE_PAYS_FEES,
  CoinFeature.FEES_PAID_WITH_TOKEN,
  CoinFeature.MPCV2,
];
export const VET_TOKEN_FEATURES = [
  ...ACCOUNT_COIN_DEFAULT_FEATURES,
  CoinFeature.TSS,
  CoinFeature.TSS_COLD,
  CoinFeature.ENTERPRISE_PAYS_FEES,
  CoinFeature.TSS_ENTERPRISE_PAYS_FEES,
  CoinFeature.MPCV2,
  CoinFeature.FEES_PAID_WITH_TOKEN,
];
