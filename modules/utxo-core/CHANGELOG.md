# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.14.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.12.1...@bitgo/utxo-core@1.14.0) (2025-07-25)

### Bug Fixes

- run test in /dist to avoid strip-only mode for node 24 ([868a01a](https://github.com/BitGo/BitGoJS/commit/868a01ab0a21fdf04fa352396c6a5cb825e01c36))
- **utxo-core:** improve property extraction in toPlainObject ([f0cad57](https://github.com/BitGo/BitGoJS/commit/f0cad5738c55dccc63d0618203dc8f96784fd0bf))

### Features

- **utxo-core:** implement pattern matcher for descriptor parsing ([9e528cc](https://github.com/BitGo/BitGoJS/commit/9e528cc79efcf519b98e3757f4164443f0e08821))

# [1.13.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.12.1...@bitgo/utxo-core@1.13.0) (2025-07-23)

### Bug Fixes

- **utxo-core:** improve property extraction in toPlainObject ([f0cad57](https://github.com/BitGo/BitGoJS/commit/f0cad5738c55dccc63d0618203dc8f96784fd0bf))

### Features

- **utxo-core:** implement pattern matcher for descriptor parsing ([9e528cc](https://github.com/BitGo/BitGoJS/commit/9e528cc79efcf519b98e3757f4164443f0e08821))

## [1.12.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.12.0...@bitgo/utxo-core@1.12.1) (2025-07-15)

**Note:** Version bump only for package @bitgo/utxo-core

# [1.12.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.11.0...@bitgo/utxo-core@1.12.0) (2025-07-10)

### Features

- **utxo-core:** add selectTapLeafScript option to createPsbt ([b8ecac2](https://github.com/BitGo/BitGoJS/commit/b8ecac2cd5df48e6c773935e9dc6f20b9a33673c))
- **utxo-core:** allow Buffer message type in signMessage/verifyMessage ([3c35f37](https://github.com/BitGo/BitGoJS/commit/3c35f37a539e59f9a6959414042dfb717fd93d5a))
- **utxo-core:** remove lodash dependency ([b07644c](https://github.com/BitGo/BitGoJS/commit/b07644c99924a2ce64fbd052994fb647b3fdcca4))
- **utxo-core:** replace lodash type checks with native JavaScript ([2265a49](https://github.com/BitGo/BitGoJS/commit/2265a499304c88fc605eb54d5d96971547a9e50e))
- **utxo-core:** replace should.js with assert in bip32utils test ([62776df](https://github.com/BitGo/BitGoJS/commit/62776df6ae6c638f70c08c458f5faa6cab5ca98e))

# [1.11.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.10.0...@bitgo/utxo-core@1.11.0) (2025-06-24)

### Features

- **utxo-core:** extractMsgBufferFromPayGoAttestationProof refactor ([b9d2a45](https://github.com/BitGo/BitGoJS/commit/b9d2a453e162cf529a042bf00e16d593a00e6556))

# [1.10.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.9.1...@bitgo/utxo-core@1.10.0) (2025-06-18)

### Features

- **utxo-core:** export fromFixedScriptWallet ([2af49d9](https://github.com/BitGo/BitGoJS/commit/2af49d97fcccf39ab6f24234bc8872ef15b2a26e))
- **utxo-core:** improve fromFixedScriptWallet descriptor handling ([3f9ab49](https://github.com/BitGo/BitGoJS/commit/3f9ab499f0f33bb457b0abb31c6484dbeaf7efb6))

## [1.9.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.9.0...@bitgo/utxo-core@1.9.1) (2025-06-10)

**Note:** Version bump only for package @bitgo/utxo-core

# [1.9.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.8.0...@bitgo/utxo-core@1.9.0) (2025-06-05)

### Features

- **utxo-core:** add descriptor support for fixed script wallets ([090bac5](https://github.com/BitGo/BitGoJS/commit/090bac5797961ec963438e17220885211eaa8f07))

# [1.8.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.7.0...@bitgo/utxo-core@1.8.0) (2025-04-15)

### Features

- **utxo-core:** add PSBT signing utilities ([d46fecf](https://github.com/BitGo/BitGoJS/commit/d46fecfcd6a435951162cdfcd8dd12efb2fbed35))
- **utxo-core:** extract TestParams type for cleaner PSBT tests ([e83ece1](https://github.com/BitGo/BitGoJS/commit/e83ece12310635f6473c4f27f3af959b3b6d137e))
- **utxo-core:** support custom input sequence in transaction creation ([89fad6b](https://github.com/BitGo/BitGoJS/commit/89fad6bb233689d4ca32eb0f33ef5b2df0597f6d))

# [1.7.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.6.0...@bitgo/utxo-core@1.7.0) (2025-04-04)

### Features

- **utxo-core:** export derive from descriptor index ([87270df](https://github.com/BitGo/BitGoJS/commit/87270df9b44fab48fe05b602cd0595a6200ed75b))

# [1.6.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.5.0...@bitgo/utxo-core@1.6.0) (2025-03-28)

### Features

- **utxo-core:** add toXOnlyPublicKey utility function ([bc527b5](https://github.com/BitGo/BitGoJS/commit/bc527b5d8169453e8438c839acb5c20f1ab124cf))

# [1.5.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.2.0...@bitgo/utxo-core@1.5.0) (2025-03-04)

### Bug Fixes

- **utxo-core:** identify internal/external output correctly ([45a1b29](https://github.com/BitGo/BitGoJS/commit/45a1b296bd7e8b79ad38a79bd4e00a0eaa1bf2e3))
- **utxo-lib:** fix psbt clone to preserve network and class type ([d5c4e52](https://github.com/BitGo/BitGoJS/commit/d5c4e5236662441322a974b9aa706a2d31b6b2c3))

### Features

- **utxo-core:** add BIP65 CLTV locktime encoding functions ([f3ace39](https://github.com/BitGo/BitGoJS/commit/f3ace391ca2f1169b0f57fdb4e927aabd8cb970f))
- **utxo-core:** add dust threshold calculations for UTXO coins ([f1b5c2d](https://github.com/BitGo/BitGoJS/commit/f1b5c2db131f558d806c5e0ccb48a9250a1d5a28))
- **utxo-core:** add output utilities for transaction building ([678906f](https://github.com/BitGo/BitGoJS/commit/678906fe9ee15db40fa83473572a524ac0f438d9))
- **utxo-core:** add PSBT virtual size estimation ([bf51d1d](https://github.com/BitGo/BitGoJS/commit/bf51d1d8412a1e64fceca1a4ca523a0371a8cddf))
- **utxo-core:** add support for descriptors with plain keys ([52616ac](https://github.com/BitGo/BitGoJS/commit/52616acf94b189732ad8ae9ae89b91637ada1545))
- **utxo-core:** add taproot 1-of-3 descriptor template ([b394636](https://github.com/BitGo/BitGoJS/commit/b3946364a16ab461b5ada77d4c7576a381b1171e))
- **utxo-core:** add VirtualSize export ([a80b121](https://github.com/BitGo/BitGoJS/commit/a80b121e7d9aed446e7dcc216411ffc76c634a75))
- **utxo-core:** auto-detect descriptor type from string ([1dc56bb](https://github.com/BitGo/BitGoJS/commit/1dc56bb831721ff93e89d9ec096b1de04de94047))
- **utxo-core:** export dustThreshold utils ([4ab3d9d](https://github.com/BitGo/BitGoJS/commit/4ab3d9de7f8750e54197e6deef4f95950fc868fc))
- **utxo-core:** simplify module exports ([ea7cd0f](https://github.com/BitGo/BitGoJS/commit/ea7cd0f90977894c25fc0734386b9e8d27465fd5))
- **utxo-core:** use wrapped psbt for test stages ([0133ac9](https://github.com/BitGo/BitGoJS/commit/0133ac9f3c64a6c8f7c8fbd905ac182267ff12cc))

# [1.4.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.2.0...@bitgo/utxo-core@1.4.0) (2025-02-26)

### Bug Fixes

- **utxo-lib:** fix psbt clone to preserve network and class type ([d5c4e52](https://github.com/BitGo/BitGoJS/commit/d5c4e5236662441322a974b9aa706a2d31b6b2c3))

### Features

- **utxo-core:** add output utilities for transaction building ([678906f](https://github.com/BitGo/BitGoJS/commit/678906fe9ee15db40fa83473572a524ac0f438d9))
- **utxo-core:** add taproot 1-of-3 descriptor template ([b394636](https://github.com/BitGo/BitGoJS/commit/b3946364a16ab461b5ada77d4c7576a381b1171e))
- **utxo-core:** use wrapped psbt for test stages ([0133ac9](https://github.com/BitGo/BitGoJS/commit/0133ac9f3c64a6c8f7c8fbd905ac182267ff12cc))

# [1.3.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/utxo-core@1.2.0...@bitgo/utxo-core@1.3.0) (2025-02-20)

### Features

- **utxo-core:** add output utilities for transaction building ([678906f](https://github.com/BitGo/BitGoJS/commit/678906fe9ee15db40fa83473572a524ac0f438d9))

# 1.2.0 (2025-02-19)

### Features

- **abstract-utxo:** remove script hash wrapper from coredao stake ([c5ebf47](https://github.com/BitGo/BitGoJS/commit/c5ebf478ad9864b5c903698a27612407abcbe443))
- **utxo-core:** add new module for UTXO types and functions ([7046b8a](https://github.com/BitGo/BitGoJS/commit/7046b8a53d6b56982d4813fae620eb4b03bbd208))
- **utxo-core:** add txt encoding support for test fixtures ([8ce5aa8](https://github.com/BitGo/BitGoJS/commit/8ce5aa8a176c94d9f3fbc8c3bb4ea54ff92ccd1e))
- **utxo-core:** update descriptor test util to use AST types ([d29e0dc](https://github.com/BitGo/BitGoJS/commit/d29e0dcb09352f2ba9910d224ac3ac9c92cc9e81))

# 1.1.0 (2025-02-11)

### Features

- **utxo-core:** add new module for UTXO types and functions ([7046b8a](https://github.com/BitGo/BitGoJS/commit/7046b8a53d6b56982d4813fae620eb4b03bbd208))
