# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.2.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@2.2.1...@bitgo/sdk-coin-vet@2.2.2) (2025-07-31)

**Note:** Version bump only for package @bitgo/sdk-coin-vet

## [2.2.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@2.2.0...@bitgo/sdk-coin-vet@2.2.1) (2025-07-30)

### Bug Fixes

- **sdk-coin-vet:** add gastankfactor vet ([4120bf7](https://github.com/BitGo/BitGoJS/commit/4120bf70d3df6b7af722f97f3e55ebc6640e33d7))
- **sdk-coin-vet:** fix issue in verifyTx ([67e2258](https://github.com/BitGo/BitGoJS/commit/67e225830b43f834087a68eb4f360524529a2c2d))
- **sdk-coin-vet:** fix issue with consolidation tx ([bd7c37e](https://github.com/BitGo/BitGoJS/commit/bd7c37ea4c74edfca475ba990afe65a97a86061e))

# [2.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@2.0.1...@bitgo/sdk-coin-vet@2.2.0) (2025-07-25)

### Bug Fixes

- **sdk-coin-vet:** implement getHashFunction for vet sdk ([10e0db8](https://github.com/BitGo/BitGoJS/commit/10e0db869cdf5aa5ab2416b174c6b8357715819f))
- **sdk-coin-vet:** make nonce field string type ([31e3a21](https://github.com/BitGo/BitGoJS/commit/31e3a21a4e99a132393efbc808d4735167b2a5d3))
- **sdk-coin-vet:** use expiration variable in tx ([88b2765](https://github.com/BitGo/BitGoJS/commit/88b27650717370385475a35adfaeff61b19d5921))

### Features

- **sdk-coin-vet:** add token transaction builder for vechain ([86036b8](https://github.com/BitGo/BitGoJS/commit/86036b83f8d3c5c27dbe91e0cc915b2548b0a6ba))

# [2.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@2.0.1...@bitgo/sdk-coin-vet@2.1.0) (2025-07-23)

### Bug Fixes

- **sdk-coin-vet:** make nonce field string type ([31e3a21](https://github.com/BitGo/BitGoJS/commit/31e3a21a4e99a132393efbc808d4735167b2a5d3))
- **sdk-coin-vet:** use expiration variable in tx ([88b2765](https://github.com/BitGo/BitGoJS/commit/88b27650717370385475a35adfaeff61b19d5921))

### Features

- **sdk-coin-vet:** add token transaction builder for vechain ([86036b8](https://github.com/BitGo/BitGoJS/commit/86036b83f8d3c5c27dbe91e0cc915b2548b0a6ba))

## [2.0.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@2.0.0...@bitgo/sdk-coin-vet@2.0.1) (2025-07-15)

### Bug Fixes

- **sdk-coin-vet:** fix deserialization in vet sdk ([5a7ce8e](https://github.com/BitGo/BitGoJS/commit/5a7ce8e834b0815a0e8315869e6a13b5ba2af6ec))

# [2.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@1.6.2...@bitgo/sdk-coin-vet@2.0.0) (2025-07-10)

### Bug Fixes

- **sdk-coin-vet:** correct signable payload for vechain transaction ([9152ce6](https://github.com/BitGo/BitGoJS/commit/9152ce6cf781a69762d0298aa88133438f70fda9))
- **sdk-coin-vet:** fix issues in addressinit builder and flushtoken builder ([ac55b9f](https://github.com/BitGo/BitGoJS/commit/ac55b9ff10331bdd864ea7e903ee983944ca4cd0))
- **sdk-coin-vet:** fix issues in fromRawTransaction ([3502030](https://github.com/BitGo/BitGoJS/commit/35020301db5ea6ef21afa44c5830d6a53a624174))

### Features

- **sdk-coin-vet:** add address init builder ([09f5b21](https://github.com/BitGo/BitGoJS/commit/09f5b211deb3ee0b29b13d9844937ea02d712525))
- **sdk-coin-vet:** add flushtoken txbuilder ([f28db93](https://github.com/BitGo/BitGoJS/commit/f28db93b1a2a48dca326e4a01fcc2bac00b458e0))

### BREAKING CHANGES

- **sdk-coin-vet:** interface TxData has been removed from sdk-coin-vet

interface VetTransactionData has been moved from modules/sdk-coin-vet/src/lib/transaction/transaction.ts to modules/sdk-coin-vet/src/lib/iface.ts

fromImplementation method has been moved from modules/sdk-coin-vet/src/lib/transactionBuilder/transactionBuilder.ts to modules/sdk-coin-vet/src/lib/transactionBuilder/transferBuilder.ts

## [1.6.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@1.6.1...@bitgo/sdk-coin-vet@1.6.2) (2025-07-03)

**Note:** Version bump only for package @bitgo/sdk-coin-vet

## [1.6.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@1.6.0...@bitgo/sdk-coin-vet@1.6.1) (2025-06-25)

**Note:** Version bump only for package @bitgo/sdk-coin-vet

# [1.6.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@1.5.0...@bitgo/sdk-coin-vet@1.6.0) (2025-06-24)

### Features

- add vechain token standard support ([f81cf23](https://github.com/BitGo/BitGoJS/commit/f81cf230afe4636ac87a2d94821b49947605d1ff))

# [1.5.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@1.4.0...@bitgo/sdk-coin-vet@1.5.0) (2025-06-18)

### Features

- **sdk-coin-vet:** implement isValidBlockId for vet ([2a7e6e7](https://github.com/BitGo/BitGoJS/commit/2a7e6e78b3972ef8d3858c9b2d9a83e713ae4437))

# [1.4.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@1.3.0...@bitgo/sdk-coin-vet@1.4.0) (2025-06-10)

### Features

- **sdk-coin-vet:** add transaction builder logic for vechain ([96c089f](https://github.com/BitGo/BitGoJS/commit/96c089fcbd2401c921d2bc9a43ef7bc112c80e8b))

# [1.3.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@1.2.0...@bitgo/sdk-coin-vet@1.3.0) (2025-06-05)

### Features

- **root:** support node 22 ([c4ad6af](https://github.com/BitGo/BitGoJS/commit/c4ad6af2e8896221417c303f0f6b84652b493216))
- **sdk-coin-vet:** add vechain keyPair ([3231af0](https://github.com/BitGo/BitGoJS/commit/3231af0679051bb6034a90f811707713075033ba))
- **sdk-coin-vet:** address and wallet creation ([7964875](https://github.com/BitGo/BitGoJS/commit/79648755454faac413c82761ca287aac721eb0e5))

# [1.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@1.1.1...@bitgo/sdk-coin-vet@1.2.0) (2025-06-02)

### Features

- rename audit function naming and signature ([1a885ab](https://github.com/BitGo/BitGoJS/commit/1a885ab60d30ca8595e284a728f2ab9d3c09994e))

## [1.1.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-coin-vet@1.1.0...@bitgo/sdk-coin-vet@1.1.1) (2025-05-28)

**Note:** Version bump only for package @bitgo/sdk-coin-vet

# 1.1.0 (2025-05-22)

### Features

- **sdk-coin-vet:** add sdk skeleton for vet ([8ccd9a4](https://github.com/BitGo/BitGoJS/commit/8ccd9a4a4919c9fe283932a8593ac858038ac284))
