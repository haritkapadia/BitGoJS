# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.2.6](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@6.2.5...@bitgo/abstract-lightning@6.2.6) (2025-07-31)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [6.2.5](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@6.2.4...@bitgo/abstract-lightning@6.2.5) (2025-07-30)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [6.2.4](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@6.2.2...@bitgo/abstract-lightning@6.2.4) (2025-07-25)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [6.2.3](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@6.2.2...@bitgo/abstract-lightning@6.2.3) (2025-07-23)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [6.2.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@6.2.1...@bitgo/abstract-lightning@6.2.2) (2025-07-15)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [6.2.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@6.2.0...@bitgo/abstract-lightning@6.2.1) (2025-07-10)

**Note:** Version bump only for package @bitgo/abstract-lightning

# [6.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@6.1.1...@bitgo/abstract-lightning@6.2.0) (2025-07-03)

### Bug Fixes

- **abstract-lightning:** correct derivation index computation ([6800e77](https://github.com/BitGo/BitGoJS/commit/6800e779ba84d639a6dcd9e81a6789543c6422d6))

### Features

- added withdrawStatus in response lightning ([8666309](https://github.com/BitGo/BitGoJS/commit/866630934dfdea696d5f185e18785278999bb9cc))
- primary key changes for payment apis ([b398ae3](https://github.com/BitGo/BitGoJS/commit/b398ae3ee3af9749c16ebfb5c630e3b2ce26b043))

## [6.1.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@6.1.0...@bitgo/abstract-lightning@6.1.1) (2025-06-25)

**Note:** Version bump only for package @bitgo/abstract-lightning

# [6.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@6.0.2...@bitgo/abstract-lightning@6.1.0) (2025-06-24)

### Bug Fixes

- added payment_already_exist failure reason lightning ([220ca18](https://github.com/BitGo/BitGoJS/commit/220ca18417c2c9e196600f59a6eb921ecae31fd3))
- creating transfer before sending tx ([c7e30c5](https://github.com/BitGo/BitGoJS/commit/c7e30c5565c8485ff383fe5d24b9472e9328bafe))
- not send a error if get transfer fail lightning ([47a0568](https://github.com/BitGo/BitGoJS/commit/47a0568eba4509fb83c773ecc0d27a19e2d88ca3))

### Features

- **abstract-lightning:** add utility to compute BIP32 derivation index ([0ef9228](https://github.com/BitGo/BitGoJS/commit/0ef9228da2014e4a806c0735a05e41a5cc7a4414))
- **statics:** add middleware public key field to LightningNetwork ([579a9a3](https://github.com/BitGo/BitGoJS/commit/579a9a35cf96213b7ece8c6f38b99f53df61fec4))
- **statics:** add TAT shared secret derivation function ([8a75e82](https://github.com/BitGo/BitGoJS/commit/8a75e82068a9d8d44db7b276079c88fb46eefaee))

## [6.0.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@6.0.1...@bitgo/abstract-lightning@6.0.2) (2025-06-18)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [6.0.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@6.0.0...@bitgo/abstract-lightning@6.0.1) (2025-06-10)

**Note:** Version bump only for package @bitgo/abstract-lightning

# [6.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@5.0.0...@bitgo/abstract-lightning@6.0.0) (2025-06-05)

### Bug Fixes

- removed InvoiceInfo codec ([9864abf](https://github.com/BitGo/BitGoJS/commit/9864abf35bc721059204377a359583c82556df92))

### Features

- added common withdraw codecs in abstract-lightning ([af6d555](https://github.com/BitGo/BitGoJS/commit/af6d55576fd83359387e42b0997ab3b64c1e8c23))
- **root:** support node 22 ([c4ad6af](https://github.com/BitGo/BitGoJS/commit/c4ad6af2e8896221417c303f0f6b84652b493216))

### BREAKING CHANGES

- create invoice response changed

TICKET: BTC-2155

# [5.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.3.4...@bitgo/abstract-lightning@5.0.0) (2025-06-02)

### Features

- **abstract-lightning:** locked to outbound locked balance name ([f0dcff0](https://github.com/BitGo/BitGoJS/commit/f0dcff01597fc6b30e7a10ec6a1c87b2a5f18207))
- **abstract-lightning:** make offchain lightning balance composed ([2a0ebfa](https://github.com/BitGo/BitGoJS/commit/2a0ebfa4a63533811bb4fa76cdcc72fe5325853b))
- added pagination in invoice ([3ce776b](https://github.com/BitGo/BitGoJS/commit/3ce776b40f4ad98b19e88568479cb7586bded5d7))
- added pagination in payments ([2389a6d](https://github.com/BitGo/BitGoJS/commit/2389a6dd952989d67143f078ad8dbd01348e8c6c))
- rename audit function naming and signature ([1a885ab](https://github.com/BitGo/BitGoJS/commit/1a885ab60d30ca8595e284a728f2ab9d3c09994e))

### BREAKING CHANGES

- response structure changed
- response structure changed

## [4.3.4](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.3.3...@bitgo/abstract-lightning@4.3.4) (2025-05-28)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [4.3.3](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.3.2...@bitgo/abstract-lightning@4.3.3) (2025-05-22)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [4.3.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.3.1...@bitgo/abstract-lightning@4.3.2) (2025-05-20)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [4.3.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.3.0...@bitgo/abstract-lightning@4.3.1) (2025-05-07)

### Bug Fixes

- making satsPerVbyte compulsory ([db457bb](https://github.com/BitGo/BitGoJS/commit/db457bb07ffbc90aab4d1f67bf525a3e438e7069))

# [4.3.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.2.4...@bitgo/abstract-lightning@4.3.0) (2025-04-29)

### Features

- added withdraw route ([3206726](https://github.com/BitGo/BitGoJS/commit/32067263f63afdc2d1eb46a118643eb1dd066e6d))

## [4.2.4](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.2.3...@bitgo/abstract-lightning@4.2.4) (2025-04-25)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [4.2.3](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.2.2...@bitgo/abstract-lightning@4.2.3) (2025-04-15)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [4.2.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.2.1...@bitgo/abstract-lightning@4.2.2) (2025-04-04)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [4.2.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.2.0...@bitgo/abstract-lightning@4.2.1) (2025-04-02)

**Note:** Version bump only for package @bitgo/abstract-lightning

# [4.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.1.1...@bitgo/abstract-lightning@4.2.0) (2025-03-28)

### Features

- **abstract-lightning:** add manually failed failure type ([3ea064d](https://github.com/BitGo/BitGoJS/commit/3ea064ddda7383b3a85bb64e965787623b465176))
- **abstract-lightning:** make encrypted prv key optional in get key ([be728ab](https://github.com/BitGo/BitGoJS/commit/be728ab7935fe00476647cb7b7e002a5af304d88))

## [4.1.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.1.0...@bitgo/abstract-lightning@4.1.1) (2025-03-20)

**Note:** Version bump only for package @bitgo/abstract-lightning

# [4.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.0.1...@bitgo/abstract-lightning@4.1.0) (2025-03-18)

### Bug Fixes

- **abstract-lightning:** nest intent ([bba99ce](https://github.com/BitGo/BitGoJS/commit/bba99cec98e3ed6c3d7ab48dec6ddb5f6c47b5e7))

### Features

- **abstract-lightning:** add custodial lightning api functions ([16b825a](https://github.com/BitGo/BitGoJS/commit/16b825a4d052399d4360c689b24888ab327ff6c0))
- **abstract-lightning:** add dev docs for pay invoice function ([8214e9e](https://github.com/BitGo/BitGoJS/commit/8214e9eae28b94a7592dfcccf84763158963fc16))
- **abstract-lightning:** get transfer for lightning pay invoice ([cfc6127](https://github.com/BitGo/BitGoJS/commit/cfc61278903976c8409574ba773c29dea7cfd743))
- **abstract-lightning:** move lightning wallet update ([f374f41](https://github.com/BitGo/BitGoJS/commit/f374f416e8ab907ef340dedd6c9d6c271d34253d))
- **express:** remove unneeded express routes and use subtype on wallet ([3356783](https://github.com/BitGo/BitGoJS/commit/335678378737608280f768b8306ced454d88a7c2))
- set a base factor for lightning ([32d0e48](https://github.com/BitGo/BitGoJS/commit/32d0e487cacf5ce6c840217ea0ab2bb7cedf79a2))

## [4.0.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@4.0.0...@bitgo/abstract-lightning@4.0.1) (2025-03-06)

**Note:** Version bump only for package @bitgo/abstract-lightning

# [4.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.44...@bitgo/abstract-lightning@4.0.0) (2025-03-04)

### Features

- **abstract-lightning:** add codecs for more lightning apis ([1b6d238](https://github.com/BitGo/BitGoJS/commit/1b6d238a3538f7059ce773f8bd218ad8b723f17c))
- **abstract-lightning:** move lnv2 logic from sdk-core ([5c9114d](https://github.com/BitGo/BitGoJS/commit/5c9114d6a4dbdd5a130bde7cb897ff6f1f8132e0))
- **abstract-lightning:** wire up lnv2 invoices ([dba5411](https://github.com/BitGo/BitGoJS/commit/dba5411dea805ab3bf5e3937736d5c0d6f166e49))
- add express endpoints for lightning ([97a163d](https://github.com/BitGo/BitGoJS/commit/97a163dc2465fc3b64a8993ca0099431df2583d6))
- add express endpoints for lightning ([d431322](https://github.com/BitGo/BitGoJS/commit/d431322aa8d76df8f88867c554df61574fd25b7a))
- add express endpoints for lightning invoice ([01d89de](https://github.com/BitGo/BitGoJS/commit/01d89de0aaa33d47953edd3aede9b8161b734195))
- add express endpoints for lightning invoice ([563c250](https://github.com/BitGo/BitGoJS/commit/563c250f1c028f10a3a0662c9faae900d6ee137c))
- add support to create lightning payments ([ffa5e71](https://github.com/BitGo/BitGoJS/commit/ffa5e71f12b640d9e5bffd41fd47cc144858d09d))

### BREAKING CHANGES

- **abstract-lightning:** Lightning v2
- **abstract-lightning:** Lightning v2

# [3.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.44...@bitgo/abstract-lightning@3.0.0) (2025-02-26)

### Features

- **abstract-lightning:** add codecs for more lightning apis ([1b6d238](https://github.com/BitGo/BitGoJS/commit/1b6d238a3538f7059ce773f8bd218ad8b723f17c))
- **abstract-lightning:** move lnv2 logic from sdk-core ([5c9114d](https://github.com/BitGo/BitGoJS/commit/5c9114d6a4dbdd5a130bde7cb897ff6f1f8132e0))
- **abstract-lightning:** wire up lnv2 invoices ([dba5411](https://github.com/BitGo/BitGoJS/commit/dba5411dea805ab3bf5e3937736d5c0d6f166e49))

### BREAKING CHANGES

- **abstract-lightning:** Lightning v2
- **abstract-lightning:** Lightning v2

# [2.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.44...@bitgo/abstract-lightning@2.0.0) (2025-02-20)

### Features

- **abstract-lightning:** move lnv2 logic from sdk-core ([5c9114d](https://github.com/BitGo/BitGoJS/commit/5c9114d6a4dbdd5a130bde7cb897ff6f1f8132e0))
- **abstract-lightning:** wire up lnv2 invoices ([dba5411](https://github.com/BitGo/BitGoJS/commit/dba5411dea805ab3bf5e3937736d5c0d6f166e49))

### BREAKING CHANGES

- **abstract-lightning:** Lightning v2

## [1.2.44](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.42...@bitgo/abstract-lightning@1.2.44) (2025-02-19)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.43](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.42...@bitgo/abstract-lightning@1.2.43) (2025-02-11)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.42](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.41...@bitgo/abstract-lightning@1.2.42) (2025-02-05)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.41](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.40...@bitgo/abstract-lightning@1.2.41) (2025-01-28)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.40](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.39...@bitgo/abstract-lightning@1.2.40) (2025-01-23)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.39](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.38...@bitgo/abstract-lightning@1.2.39) (2025-01-23)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.38](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.37...@bitgo/abstract-lightning@1.2.38) (2025-01-20)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.37](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.36...@bitgo/abstract-lightning@1.2.37) (2025-01-15)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.36](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.35...@bitgo/abstract-lightning@1.2.36) (2025-01-09)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.35](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.34...@bitgo/abstract-lightning@1.2.35) (2025-01-03)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.34](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.33...@bitgo/abstract-lightning@1.2.34) (2024-12-24)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.33](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.32...@bitgo/abstract-lightning@1.2.33) (2024-12-19)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.32](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.30...@bitgo/abstract-lightning@1.2.32) (2024-12-17)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.31](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.30...@bitgo/abstract-lightning@1.2.31) (2024-12-17)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.30](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.29...@bitgo/abstract-lightning@1.2.30) (2024-12-12)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.29](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.28...@bitgo/abstract-lightning@1.2.29) (2024-12-11)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.28](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.27...@bitgo/abstract-lightning@1.2.28) (2024-12-03)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.27](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.26...@bitgo/abstract-lightning@1.2.27) (2024-11-26)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.26](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.25...@bitgo/abstract-lightning@1.2.26) (2024-11-21)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.25](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.23...@bitgo/abstract-lightning@1.2.25) (2024-11-19)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.24](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.23...@bitgo/abstract-lightning@1.2.24) (2024-11-14)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.23](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.22...@bitgo/abstract-lightning@1.2.23) (2024-11-08)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.22](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.21...@bitgo/abstract-lightning@1.2.22) (2024-11-07)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.21](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.20...@bitgo/abstract-lightning@1.2.21) (2024-11-01)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.20](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.19...@bitgo/abstract-lightning@1.2.20) (2024-10-22)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.19](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.18...@bitgo/abstract-lightning@1.2.19) (2024-10-15)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.18](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.17...@bitgo/abstract-lightning@1.2.18) (2024-10-08)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.17](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.16...@bitgo/abstract-lightning@1.2.17) (2024-10-04)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.16](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.15...@bitgo/abstract-lightning@1.2.16) (2024-09-24)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.15](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.14...@bitgo/abstract-lightning@1.2.15) (2024-09-19)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.14](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.13...@bitgo/abstract-lightning@1.2.14) (2024-09-16)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.13](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.12...@bitgo/abstract-lightning@1.2.13) (2024-09-10)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.12](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.11...@bitgo/abstract-lightning@1.2.12) (2024-09-03)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.11](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.10...@bitgo/abstract-lightning@1.2.11) (2024-08-29)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.10](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.9...@bitgo/abstract-lightning@1.2.10) (2024-08-27)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.9](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.7...@bitgo/abstract-lightning@1.2.9) (2024-08-20)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.8](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.7...@bitgo/abstract-lightning@1.2.8) (2024-08-13)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.7](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.6...@bitgo/abstract-lightning@1.2.7) (2024-08-07)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.6](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.5...@bitgo/abstract-lightning@1.2.6) (2024-07-30)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.5](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.4...@bitgo/abstract-lightning@1.2.5) (2024-07-24)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.4](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.3...@bitgo/abstract-lightning@1.2.4) (2024-07-16)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.3](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.2...@bitgo/abstract-lightning@1.2.3) (2024-07-04)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.1...@bitgo/abstract-lightning@1.2.2) (2024-07-02)

**Note:** Version bump only for package @bitgo/abstract-lightning

## [1.2.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.2.0...@bitgo/abstract-lightning@1.2.1) (2024-06-27)

**Note:** Version bump only for package @bitgo/abstract-lightning

# [1.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/abstract-lightning@1.1.0...@bitgo/abstract-lightning@1.2.0) (2024-06-26)

### Features

- **sdk-coin-lnbtc:** add new sdk coin lnbtc module ([0da600b](https://github.com/BitGo/BitGoJS/commit/0da600b44f258149d186ba3500a8359ca79b5444))

# 1.1.0 (2024-06-21)

### Features

- **abstract-lightning:** add new abstract lightning coin module ([6490b9a](https://github.com/BitGo/BitGoJS/commit/6490b9ad83d618317f2e92821e580d283110a865))
