# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [36.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.10.0...@bitgo/sdk-core@36.0.0) (2025-07-31)

### Features

- deprecate holesky and onboard hoodi testnet ([88c1f1e](https://github.com/BitGo/BitGoJS/commit/88c1f1edc98b1429d237259d95323b1b7f2939d0))
- **sdk-coin-sol:** added api key for full node ([7b301db](https://github.com/BitGo/BitGoJS/commit/7b301db27714ae82bfa440c5b1aef0c980b81741))
- **sdk-core:** add on-prem subType to wallet generate types ([f686e70](https://github.com/BitGo/BitGoJS/commit/f686e70aa9f0e2c3cab1e087ba167c0fc2ace5f5))

### BREAKING CHANGES

- deprecate holesky and onboard hoodi for ethereum testnet

Ticket: COIN-5021

# [35.10.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.9.0...@bitgo/sdk-core@35.10.0) (2025-07-30)

### Bug Fixes

- build token enable hard code error ([b31452b](https://github.com/BitGo/BitGoJS/commit/b31452b6bfd7cb88d634bdcd7ee1496da8e1f33a))
- **sdk-coin-soneium:** update recoveryBlockchainExplorerQuery ([fcb7ab4](https://github.com/BitGo/BitGoJS/commit/fcb7ab47e04e9164bf33a82aa4ab8ac7d6db30fa))
- update api url for Monad ([1ed0c3d](https://github.com/BitGo/BitGoJS/commit/1ed0c3d19dbbdb8f84c0e360b9077f95971288d2))

### Features

- modify bulkCreate/Accept share error messages ([7bcd592](https://github.com/BitGo/BitGoJS/commit/7bcd592b9ffcfbbda1611ef9a13591ace31994d0))
- **root:** enable passing apiKey for recovery on eth likes ([dc8d3c2](https://github.com/BitGo/BitGoJS/commit/dc8d3c201b5ab82b05e1db69f310a0860e21bf78))
- **sdk-coin-near:** handle near token recoveries ([675f3b4](https://github.com/BitGo/BitGoJS/commit/675f3b44c94a762591bc79deee8d2cbd362cfa85))
- **sdk-core:** enable hardcoded gpg keys for signature verification ([76eaa01](https://github.com/BitGo/BitGoJS/commit/76eaa019d199ea68511e1ac0960e335e32c39121))

# [35.9.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.7.0...@bitgo/sdk-core@35.9.0) (2025-07-25)

### Bug Fixes

- **account-lib:** create Buffer from hex string ([3c3c187](https://github.com/BitGo/BitGoJS/commit/3c3c187feab5ace123cdb47d7ca97ff253f8f783))

### Features

- added new error NeedsUserSignupError ([8c9c64a](https://github.com/BitGo/BitGoJS/commit/8c9c64ac54db5fc85bbaaf652e25b0e47eadf702))
- **sdk-core:** handle TSS EDDSA message signing ([b032e79](https://github.com/BitGo/BitGoJS/commit/b032e790f6aecaa02aa15ccf663b55929ea9509a))
- **statics:** add irys chain configs ([89fb371](https://github.com/BitGo/BitGoJS/commit/89fb371a3d9e2b8137539450b8f6aad713a2a0f7))
- **statics:** add kaia chain configs ([494066f](https://github.com/BitGo/BitGoJS/commit/494066fa94e362f09d27e2274178da5b89653087))
- **statics:** add seievm chain configs ([6d618d0](https://github.com/BitGo/BitGoJS/commit/6d618d0d67d53d8cafd39bdfe4c8583a78ec8a59))
- **statics:** implement common Cosmos blockchain infrastructure ([22abed6](https://github.com/BitGo/BitGoJS/commit/22abed6977d6ba182801e4747ba3f08825aa2908))

# [35.8.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.7.0...@bitgo/sdk-core@35.8.0) (2025-07-23)

### Bug Fixes

- **account-lib:** create Buffer from hex string ([3c3c187](https://github.com/BitGo/BitGoJS/commit/3c3c187feab5ace123cdb47d7ca97ff253f8f783))

### Features

- added new error NeedsUserSignupError ([8c9c64a](https://github.com/BitGo/BitGoJS/commit/8c9c64ac54db5fc85bbaaf652e25b0e47eadf702))
- **sdk-core:** handle TSS EDDSA message signing ([b032e79](https://github.com/BitGo/BitGoJS/commit/b032e790f6aecaa02aa15ccf663b55929ea9509a))
- **statics:** add irys chain configs ([89fb371](https://github.com/BitGo/BitGoJS/commit/89fb371a3d9e2b8137539450b8f6aad713a2a0f7))
- **statics:** add kaia chain configs ([494066f](https://github.com/BitGo/BitGoJS/commit/494066fa94e362f09d27e2274178da5b89653087))
- **statics:** add seievm chain configs ([6d618d0](https://github.com/BitGo/BitGoJS/commit/6d618d0d67d53d8cafd39bdfe4c8583a78ec8a59))
- **statics:** implement common Cosmos blockchain infrastructure ([22abed6](https://github.com/BitGo/BitGoJS/commit/22abed6977d6ba182801e4747ba3f08825aa2908))

# [35.7.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.6.0...@bitgo/sdk-core@35.7.0) (2025-07-15)

### Features

- **account-lib:** return hex broadcastable message string ([757d9f4](https://github.com/BitGo/BitGoJS/commit/757d9f4f4a17b58055153f900f09294faad52634))
- **statics:** add hypeevm chain config ([64ebb46](https://github.com/BitGo/BitGoJS/commit/64ebb464a6ce1155779243599265d89ebf72c27e))
- **statics:** add Sonic chain configs ([b6a27e0](https://github.com/BitGo/BitGoJS/commit/b6a27e033acb3268d4560bb0d2a0038ce326aff8))

# [35.6.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.5.0...@bitgo/sdk-core@35.6.0) (2025-07-10)

### Features

- **account-lib:** verify encoded message ([71a7dd6](https://github.com/BitGo/BitGoJS/commit/71a7dd6cf56010c94364483b7c83221d9a26688e))
- **sdk-coin-ada:** add CIP-8 message builder ([50c53ec](https://github.com/BitGo/BitGoJS/commit/50c53ecc998815ad25a0b08f27a167a9d2d8d948))
- **sdk-core:** add simple message builder for sol ([d5af5c8](https://github.com/BitGo/BitGoJS/commit/d5af5c8d45f88feb01387b45f9b1e2cfeb70a2e8))
- **sdk-core:** create message sign request ([2152ad4](https://github.com/BitGo/BitGoJS/commit/2152ad4bb03851f0a14a1523219dc8052c773750))
- **statics:** add creditcoin chain config ([104014d](https://github.com/BitGo/BitGoJS/commit/104014d70bfabb3962172af98501a85410c16f9c))
- **statics:** add pharos chain config ([9dd76f9](https://github.com/BitGo/BitGoJS/commit/9dd76f9d7e7328d1999131b270efafa092720005))

# [35.5.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.4.1...@bitgo/sdk-core@35.5.0) (2025-07-03)

### Features

- **account-lib:** register message builder factory ([bc5c71c](https://github.com/BitGo/BitGoJS/commit/bc5c71cd92266ec1011d85f0568bf174c3743bc2))
- add go staking service endpoints to sdk ([13c4430](https://github.com/BitGo/BitGoJS/commit/13c44306137cf1c5e74f2b9fa6fcc7485b91c88b))
- **sdk-core:** add message builder and message builder factory ([5741739](https://github.com/BitGo/BitGoJS/commit/57417395029ec064485ac9ee69eb38fb08c592ec))

## [35.4.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.4.0...@bitgo/sdk-core@35.4.1) (2025-06-25)

**Note:** Version bump only for package @bitgo/sdk-core

# [35.4.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.3.0...@bitgo/sdk-core@35.4.0) (2025-06-24)

### Bug Fixes

- creating transfer before sending tx ([c7e30c5](https://github.com/BitGo/BitGoJS/commit/c7e30c5565c8485ff383fe5d24b9472e9328bafe))

### Features

- **sdk-coin-evm:** add EvmCoin & transaction builder ([0682aea](https://github.com/BitGo/BitGoJS/commit/0682aeadffded4847c8bf70aa52e9d0b9bbf113b))

# [35.3.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.2.1...@bitgo/sdk-core@35.3.0) (2025-06-18)

### Features

- add the transaction builder changes for ape chain ([2b82d82](https://github.com/BitGo/BitGoJS/commit/2b82d826313d87dfa7af39ed3fcd3125f08a6e1d))
- **sdk-coin-near:** added fungible token transfer builder ([15fc2c5](https://github.com/BitGo/BitGoJS/commit/15fc2c5378a428a4903bfd6c44ab64c1848f6f56))
- **sdk-core:** add method to check if coin is present in map ([b1b0ead](https://github.com/BitGo/BitGoJS/commit/b1b0ead36d160e7f8daaa347c86ccc4af73ceac8))
- **sdk-core:** add onprem to wallet subtype ([9d30112](https://github.com/BitGo/BitGoJS/commit/9d3011265ef0e340a2acb577a832dccf4ce8118b))

## [35.2.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.2.0...@bitgo/sdk-core@35.2.1) (2025-06-10)

### Bug Fixes

- **statics:** update explorer URLs for Cronos, Initia, and ASI networks ([d148897](https://github.com/BitGo/BitGoJS/commit/d148897dfcc788ca7b94331e81d326f424c311c2))

# [35.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.1.0...@bitgo/sdk-core@35.2.0) (2025-06-05)

### Features

- **sdk-coin-asi:** add statics and SDK support for ASI ([38baf3c](https://github.com/BitGo/BitGoJS/commit/38baf3ce3f4d8b8e2f454a92de4fce7245665e7e))
- **sdk-core:** implement method to add token in coin map and constructor map ([8366309](https://github.com/BitGo/BitGoJS/commit/83663098483fb4ee164abe5e200c2a09548304ad))

# [35.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.0.1...@bitgo/sdk-core@35.1.0) (2025-06-02)

### Bug Fixes

- fix ada public rest endpoint ([81ff959](https://github.com/BitGo/BitGoJS/commit/81ff959ce0d5e3e514361ea075a5b582dc4a248d))
- remove duplicate literal ([2d4a6c3](https://github.com/BitGo/BitGoJS/commit/2d4a6c3ba320d0e3cc02d1bff0cc04590b7f9ba0))
- remove latest Env type ([a556391](https://github.com/BitGo/BitGoJS/commit/a55639173702514b2abe028777549da2c653055d))
- rename admin latest ([e73202d](https://github.com/BitGo/BitGoJS/commit/e73202d8b207793e4fc22f47d1dcd43b9dfb5b84))

### Features

- consolidate NFTs without address input ([015bd4f](https://github.com/BitGo/BitGoJS/commit/015bd4ffc7963eb114c4137ad75f0d22a3f25983))
- rename audit function naming and signature ([1a885ab](https://github.com/BitGo/BitGoJS/commit/1a885ab60d30ca8595e284a728f2ab9d3c09994e))
- **root:** add new audit key baseCoin method ([57c1778](https://github.com/BitGo/BitGoJS/commit/57c17784a72ea364f18e3af9dbd83da877827e69))
- **sdk-coin-trx:** add delegate txbuilder ([efecbf3](https://github.com/BitGo/BitGoJS/commit/efecbf3b001148f5edf3a1729958f5f3e77ea3ec))
- use bitgo/secp256k1 for bip32/xprv/xpub operations ([e78a1d9](https://github.com/BitGo/BitGoJS/commit/e78a1d9f72fc94eed604e96d107e5634112eae4a))

## [35.0.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@35.0.0...@bitgo/sdk-core@35.0.1) (2025-05-28)

**Note:** Version bump only for package @bitgo/sdk-core

# [35.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@34.0.0...@bitgo/sdk-core@35.0.0) (2025-05-22)

### Bug Fixes

- **express:** validate amount as integer type in sendCoins ([c571b13](https://github.com/BitGo/BitGoJS/commit/c571b13a94fa3649f3874c43e981752ceeec5852))
- fix near public rest endpoint ([934706a](https://github.com/BitGo/BitGoJS/commit/934706ab1b733d2ed5a189d7756c0f0606848832))
- **sdk-coin-fetchai:** change asset name from fetch to fetchai ([9cc7236](https://github.com/BitGo/BitGoJS/commit/9cc72360dbb7c025000fe5cccc5d05a974cae6f5))

### Features

- **sdk-coin-vet:** add sdk skeleton for vet ([8ccd9a4](https://github.com/BitGo/BitGoJS/commit/8ccd9a4a4919c9fe283932a8593ac858038ac284))
- update opengpg version ([5304e88](https://github.com/BitGo/BitGoJS/commit/5304e88ff65467b8cd3ff21b1fc98aa00ddcde8f))

### BREAKING CHANGES

- **sdk-coin-fetchai:** Changing module/asset name from fetch to fetchai

# [34.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@33.2.0...@bitgo/sdk-core@34.0.0) (2025-05-20)

### Bug Fixes

- **sdk-coin-initia:** change asset name from init to initia ([87c65dd](https://github.com/BitGo/BitGoJS/commit/87c65dd98c132fa22ba145e7acafaa703b60f484))
- update rest endpoint for cronos ([37b4107](https://github.com/BitGo/BitGoJS/commit/37b41071a0095359c5aadd56aa961f11e7b8aa05))

### Features

- add NFT consolidation script ([9a37718](https://github.com/BitGo/BitGoJS/commit/9a3771832456f142496634138b6267224cf6f526))
- **sdk-coin-icp:** integrate ic0 library for account balance retrieval ([63df09e](https://github.com/BitGo/BitGoJS/commit/63df09e1e1f4c77a67322d5f4155cfdc20e1146b))

### BREAKING CHANGES

- **sdk-coin-initia:** Changing module/asset name from init to initia

# [33.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@33.1.0...@bitgo/sdk-core@33.2.0) (2025-05-07)

### Bug Fixes

- cosmos batch rpc to rest urls and dorado testnet for fetch ([3175a5c](https://github.com/BitGo/BitGoJS/commit/3175a5c5f81d758f241ffb120dc6046369216a54))
- fix accept wallet share return type ([a9069cf](https://github.com/BitGo/BitGoJS/commit/a9069cf5093841a1e6ca6a2f142988ce5dadac81))
- **sdk-coin-icp:** update verifyTransaction to include signableHex parameter ([9153969](https://github.com/BitGo/BitGoJS/commit/91539695e0aab177196a9b527f7ec33e63c487fa))

### Features

- change error type for password error in bulkshareoption ([ee00443](https://github.com/BitGo/BitGoJS/commit/ee004439f3fe8fec5cc45d5c998d08747f4fb699))
- **sdk-coin-cronos:** add SDK Skeleton for Cronos ([7209807](https://github.com/BitGo/BitGoJS/commit/72098072ef9278ee7843cfeb6fcd0c95d5cae420))
- **sdk-coin-fetch:** add SDK Skeleton for Fetch ([2990b21](https://github.com/BitGo/BitGoJS/commit/2990b21ca37641ba4573828bc550362cb1b0ab3f))
- **sdk-coin-init:** add SDK Skeleton for Initia ([d93936f](https://github.com/BitGo/BitGoJS/commit/d93936f3cf011acba2ded8ffb4dc40315ed44cd1))
- **sdk-coin-stx:** added recover method for wrw to support stx & sip10 token ([1ff6572](https://github.com/BitGo/BitGoJS/commit/1ff6572f8aa93b6c487efe17018fc730aaffef44))

# [33.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@33.0.0...@bitgo/sdk-core@33.1.0) (2025-04-29)

### Bug Fixes

- **sdk-core:** add validation for unsigned txHex ([eff30e3](https://github.com/BitGo/BitGoJS/commit/eff30e3febbfc3c5f987ba5a0e54d4716983c4b5))

### Features

- add option to not decorate utxo transfers ([1d17680](https://github.com/BitGo/BitGoJS/commit/1d17680fe34f897c52ab992b249672c70e66c63d))
- list wallet addresses sorted by balance ([6835c5d](https://github.com/BitGo/BitGoJS/commit/6835c5d629be21be17a364d46968106e84be18bb))
- **sdk-coin-soneium:** add transaction builder ([921cdbd](https://github.com/BitGo/BitGoJS/commit/921cdbd641574faf06880bfbb0a37db03fac55b6))

# [33.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@32.2.0...@bitgo/sdk-core@33.0.0) (2025-04-25)

### Bug Fixes

- **abstract-eth:** fix building using from for first signer ([c8ec337](https://github.com/BitGo/BitGoJS/commit/c8ec3377d5502a580801fabdcece528b4c3ac03a))

### chore

- fix bls coderemoval build issue ([2cd5d6e](https://github.com/BitGo/BitGoJS/commit/2cd5d6e6871b22b0c125ddc372c5cfe1db45cb43))

### Code Refactoring

- remove unused bls and eth2 codebase ([4ffd5bd](https://github.com/BitGo/BitGoJS/commit/4ffd5bd13bc2e8d43b57bef4aae0b5880bbf9e2b))
- **root:** remove bitgo backup provider "bitgoTrustAsKrs" ([f5f38b1](https://github.com/BitGo/BitGoJS/commit/f5f38b1b20cb04c11ad9321250c88f7e763f42e6))

### Features

- **abstract-eth:** support building eth tx for a first signer ([cbd4d4c](https://github.com/BitGo/BitGoJS/commit/cbd4d4cdee97a6ff51df2c854e945791ac0df4b4))
- add bulk update functionality for wallet shares ([ef5a1b1](https://github.com/BitGo/BitGoJS/commit/ef5a1b1d6241b65c7d30cf13806ef4b89ee1d909))
- add isTssSupportGated method and gate arb and op ([c2a38cd](https://github.com/BitGo/BitGoJS/commit/c2a38cd1e23bcb5f3919c3de6235aae55c27b8be))
- get max spendable given unspent ids ([1720ac3](https://github.com/BitGo/BitGoJS/commit/1720ac377fe5ad10b65ba911717f2eb83cd8aa08))
- handle rejected promises in bulk wallet share updates ([cb79082](https://github.com/BitGo/BitGoJS/commit/cb7908210a91f8811fd987182655f5b33c6930aa))
- **sdk-coin-mon:** add transaction builder ([cff759f](https://github.com/BitGo/BitGoJS/commit/cff759f5c91711ec81af7effc7fe3d32320930fb))
- **sdk-coin-stt:** add transaction builder ([1e77306](https://github.com/BitGo/BitGoJS/commit/1e7730665a74235085d4dfe0c48ddecceb400624))
- **sdk-coin-ton:** add support for recovery for ton ([bdeb737](https://github.com/BitGo/BitGoJS/commit/bdeb7373785b99cdbebf2aa228a3d861cae942c1))
- **sdk-coin-world:** add transaction builder ([30e888e](https://github.com/BitGo/BitGoJS/commit/30e888ed7bb4a9325f873ad3ce30bbdd39a77893))
- **sdk-core:** add RBF as a transaction acceleration option ([d14ab4b](https://github.com/BitGo/BitGoJS/commit/d14ab4b1513643928fae7e58ab1ba416ebcab359))
- send digital asset ([e4f9135](https://github.com/BitGo/BitGoJS/commit/e4f913543a39fc1eb062cebcc5c62984a3bdde1a))
- **statics:** add coin feature TSS_SUPPORT_GATED and gate arb and op ([bb217aa](https://github.com/BitGo/BitGoJS/commit/bb217aa49b169187189f5cb8119feab204fcd931))
- **statics:** map NFT collection ID to BaseCoin ([827a1ac](https://github.com/BitGo/BitGoJS/commit/827a1ac69f64839dfccd6be11c526dc1f1ae85d3))
- update bulkUpdateWalletShareRequest to wrap params in shares object ([7d85925](https://github.com/BitGo/BitGoJS/commit/7d8592509a40630ad0aef77958b4b9d2df2c28af))

### BREAKING CHANGES

- remove bls and eth2 sdk

TICKET: WP-3961

- remove bls and eth2 sdk

TICKET: WP-3961

- **root:** remove bitgo backup provider "bitgoTrustAsKrs"

TICKET: WP-4186

# [32.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@32.1.0...@bitgo/sdk-core@32.2.0) (2025-04-15)

### Bug Fixes

- **sdk-core:** messageEncoded is encoded as hex ([39efcfd](https://github.com/BitGo/BitGoJS/commit/39efcfdd09082e852a5139f217bc51bbd9531a7d))

### Features

- add approveToken function for erc20 sendMany ([6c5f1db](https://github.com/BitGo/BitGoJS/commit/6c5f1db55ab0c67c774dc21a16a3b67068e55910))
- **sdk-api:** add decryptKeys method for bulk wallet key decryption ([5a6e36f](https://github.com/BitGo/BitGoJS/commit/5a6e36f4adde42b414cd1e739b6f83103e07afbf))
- **sdk-coin-icp:** implemented recover() for WRW support ([d6bd979](https://github.com/BitGo/BitGoJS/commit/d6bd979f2a52b36a86366ce5f9d5f8e619df155f))

# [32.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@32.0.1...@bitgo/sdk-core@32.1.0) (2025-04-04)

### Bug Fixes

- **sdk-coin-stx:** fix issue in verifyTx for sip10 tokens ([40c7597](https://github.com/BitGo/BitGoJS/commit/40c7597ccafa709da2254fa20621a06ba5d0161a))

### Features

- **abstract-eth:** added support for mpcv2 in recovery ([da92bf8](https://github.com/BitGo/BitGoJS/commit/da92bf80d3f34c35ce73b0a9c2581d1ae201d1cc))

## [32.0.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@32.0.0...@bitgo/sdk-core@32.0.1) (2025-04-02)

**Note:** Version bump only for package @bitgo/sdk-core

# [32.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@31.2.1...@bitgo/sdk-core@32.0.0) (2025-03-28)

### Bug Fixes

- **abstract-eth:** return eip 191 encoded message as a hex string ([6ae1979](https://github.com/BitGo/BitGoJS/commit/6ae19794ff1c738b4984cb4dacc23130da708a17))
- ensure user params are used for tx verification ([b0ec18e](https://github.com/BitGo/BitGoJS/commit/b0ec18ef4f228d713655d39cda378ff464b536d5))
- **sdk-core:** validate unsigned staking transaction before sign ([8121753](https://github.com/BitGo/BitGoJS/commit/8121753962eed3dfaf06da31aec33a8fbed178e3))

### Features

- **express:** add includeBalance option when fetching lightning wallets ([832aa59](https://github.com/BitGo/BitGoJS/commit/832aa593e0b2c739d14f31bcba9fb38d51dd5950))
- **sdk-core:** add GoStakingWallet ([f9d98ab](https://github.com/BitGo/BitGoJS/commit/f9d98abec72526a6afe2f9cbfb904a2855934de4))

### BREAKING CHANGES

- **abstract-eth:** messageEncoded is now encoded as a hex string

## [31.2.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@31.2.0...@bitgo/sdk-core@31.2.1) (2025-03-20)

### Reverts

- Revert "fix(sdk-core): add validation for unsigned txHex" ([4333b10](https://github.com/BitGo/BitGoJS/commit/4333b1014040edbb0f5b347a9f5e343b20e1704f))

# [31.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@31.1.0...@bitgo/sdk-core@31.2.0) (2025-03-18)

### Bug Fixes

- pass isBatch in send API ([b8c0dfc](https://github.com/BitGo/BitGoJS/commit/b8c0dfc0e2748da7aa631dc77e0c505fcd5cbfcb))
- **sdk-core:** add validation for unsigned txHex ([4a5ba60](https://github.com/BitGo/BitGoJS/commit/4a5ba60cc98a3aededc7c3385cb8dd47f8c21353))
- **sdk-core:** set default multisig if empty ([e2727df](https://github.com/BitGo/BitGoJS/commit/e2727dfc89dd314a607b737e761e5eff824606af))
- **sdk-core:** validate sweep destination on utxos ([b480b8c](https://github.com/BitGo/BitGoJS/commit/b480b8cbb2bd36e1dd8f5a3da716a64d46efac8a))

### Features

- **express:** remove unneeded express routes and use subtype on wallet ([3356783](https://github.com/BitGo/BitGoJS/commit/335678378737608280f768b8306ced454d88a7c2))
- **sdk-core:** add aed and sgd ([2ba82d6](https://github.com/BitGo/BitGoJS/commit/2ba82d6b5a9e1522a54b4d086d0a06a60999f1ef))
- **sdk-core:** add babylon and core staking params ([e13d5da](https://github.com/BitGo/BitGoJS/commit/e13d5dac9ccd471c06165b5010dba41073223aed))
- **sdk-core:** add custodial lightning wallet creation ([d19802d](https://github.com/BitGo/BitGoJS/commit/d19802d8f766753f1f227d0145f3e00f9fb57f98))
- **sdk-core:** lightning wallet sharing support ([2d1d566](https://github.com/BitGo/BitGoJS/commit/2d1d566ca9631f2d6c8055d5cd0ca9be70739d74))
- send lightning payment after pending approval ([82e06db](https://github.com/BitGo/BitGoJS/commit/82e06db81d2c5e316a8dd4e501b72ffbc2090eeb))

# [31.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@31.0.0...@bitgo/sdk-core@31.1.0) (2025-03-06)

### Bug Fixes

- **abstract-substrate:** add substrate mainnet link ([7320d6d](https://github.com/BitGo/BitGoJS/commit/7320d6d7c4835c98317c4dd0f076b4b3b5824834))
- default to api version full if none specified ([9dca67f](https://github.com/BitGo/BitGoJS/commit/9dca67f435ef011ab75e9b90713a7a2dbb5de6d8))

### Features

- **abstract-substrate:** add wrw for tao ([9f30890](https://github.com/BitGo/BitGoJS/commit/9f3089000330d47696ab057891cd8d1083004a2a))

# [31.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.25.0...@bitgo/sdk-core@31.0.0) (2025-03-04)

### Bug Fixes

- dependency fixes for secp256 lib ([826db0b](https://github.com/BitGo/BitGoJS/commit/826db0b5481435bb38b251e8bb5ba8ce9f78d017))
- enable tokens for cold wallet ([544733c](https://github.com/BitGo/BitGoJS/commit/544733cdfb3bb64cd283c3f7e4f1f96d2bf9ba3c))
- fix the atom public rest endpoint ([e6973d4](https://github.com/BitGo/BitGoJS/commit/e6973d442b6bb5f887747d8b231155f40bb3f3c0))
- **root:** replace elliptic with noble/curves/secp256k1 ([50a208d](https://github.com/BitGo/BitGoJS/commit/50a208d68d8b313ccb9b8e638212f61617daf92a))
- **sdk-core:** ed tss bug fix ([e424f44](https://github.com/BitGo/BitGoJS/commit/e424f447ec9966e77ee8fc34f8535996b30bbb29))
- **sdk-lib-mpc:** fix time warp during decrypting comms in MPCv2 ([c060690](https://github.com/BitGo/BitGoJS/commit/c060690105001cb9c532d39461d175b109f11a71))
- updating coredao api url ([9f79847](https://github.com/BitGo/BitGoJS/commit/9f79847f2f961be1b0bf9d9ef85267f1893b5899))

### Features

- **abstract-lightning:** move lnv2 logic from sdk-core ([5c9114d](https://github.com/BitGo/BitGoJS/commit/5c9114d6a4dbdd5a130bde7cb897ff6f1f8132e0))
- add support to create lightning payments ([ffa5e71](https://github.com/BitGo/BitGoJS/commit/ffa5e71f12b640d9e5bffd41fd47cc144858d09d))
- remove requirement fee for keyternal ([4b3c1e6](https://github.com/BitGo/BitGoJS/commit/4b3c1e6c8f54dd72a6061c91ac67e2c61e3ccefc))
- **sdk-coin-apt:** recommend min gas tank balance for next 1000 txns ([74071ab](https://github.com/BitGo/BitGoJS/commit/74071aba4c0754242fc96f7334cec74edba6c73b))

### BREAKING CHANGES

- **abstract-lightning:** Lightning v2

# [30.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.25.0...@bitgo/sdk-core@30.0.0) (2025-02-26)

### Bug Fixes

- fix the atom public rest endpoint ([e6973d4](https://github.com/BitGo/BitGoJS/commit/e6973d442b6bb5f887747d8b231155f40bb3f3c0))
- **root:** replace elliptic with noble/curves/secp256k1 ([50a208d](https://github.com/BitGo/BitGoJS/commit/50a208d68d8b313ccb9b8e638212f61617daf92a))
- **sdk-core:** ed tss bug fix ([e424f44](https://github.com/BitGo/BitGoJS/commit/e424f447ec9966e77ee8fc34f8535996b30bbb29))
- **sdk-lib-mpc:** fix time warp during decrypting comms in MPCv2 ([c060690](https://github.com/BitGo/BitGoJS/commit/c060690105001cb9c532d39461d175b109f11a71))
- updating coredao api url ([9f79847](https://github.com/BitGo/BitGoJS/commit/9f79847f2f961be1b0bf9d9ef85267f1893b5899))

### Features

- **abstract-lightning:** move lnv2 logic from sdk-core ([5c9114d](https://github.com/BitGo/BitGoJS/commit/5c9114d6a4dbdd5a130bde7cb897ff6f1f8132e0))
- **sdk-coin-apt:** recommend min gas tank balance for next 1000 txns ([74071ab](https://github.com/BitGo/BitGoJS/commit/74071aba4c0754242fc96f7334cec74edba6c73b))

### BREAKING CHANGES

- **abstract-lightning:** Lightning v2

# [29.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.25.0...@bitgo/sdk-core@29.0.0) (2025-02-20)

### Bug Fixes

- fix the atom public rest endpoint ([e6973d4](https://github.com/BitGo/BitGoJS/commit/e6973d442b6bb5f887747d8b231155f40bb3f3c0))

### Features

- **abstract-lightning:** move lnv2 logic from sdk-core ([5c9114d](https://github.com/BitGo/BitGoJS/commit/5c9114d6a4dbdd5a130bde7cb897ff6f1f8132e0))
- **sdk-coin-apt:** recommend min gas tank balance for next 1000 txns ([74071ab](https://github.com/BitGo/BitGoJS/commit/74071aba4c0754242fc96f7334cec74edba6c73b))

### BREAKING CHANGES

- **abstract-lightning:** Lightning v2

# [28.25.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.23.0...@bitgo/sdk-core@28.25.0) (2025-02-19)

### Bug Fixes

- **root:** bump elliptic to 6.6.1 ([f588850](https://github.com/BitGo/BitGoJS/commit/f588850a3817db709213c3d44451b1ed93d8ac86))
- **sdk-core:** use DateFromISOString in invoice expiry ([080eb32](https://github.com/BitGo/BitGoJS/commit/080eb320f0d25775c18d5c9b263a4805ae5a5844))
- update babyNodeUrl for testnet ([ec7bbe4](https://github.com/BitGo/BitGoJS/commit/ec7bbe406053485afad4f84b4746982c65d086bc))

### Features

- add skeleton for v2 lightning ([5bd613e](https://github.com/BitGo/BitGoJS/commit/5bd613e8569a399d16cf136e4291c58c550e45ce))
- **sdk-core:** move lightning specific wallet functions ([e63129d](https://github.com/BitGo/BitGoJS/commit/e63129dfe0e910ed44fe80bdf42dba5edc7e76a5))
- **sdk-core:** validate update lightning wallet params ([c20ea1f](https://github.com/BitGo/BitGoJS/commit/c20ea1fb7adc59c38babad5d8b70770bff9af744))

# [28.24.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.23.0...@bitgo/sdk-core@28.24.0) (2025-02-11)

### Bug Fixes

- **sdk-core:** use DateFromISOString in invoice expiry ([080eb32](https://github.com/BitGo/BitGoJS/commit/080eb320f0d25775c18d5c9b263a4805ae5a5844))

### Features

- add skeleton for v2 lightning ([5bd613e](https://github.com/BitGo/BitGoJS/commit/5bd613e8569a399d16cf136e4291c58c550e45ce))

# [28.23.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.22.0...@bitgo/sdk-core@28.23.0) (2025-02-05)

### Features

- adding overrides for coredao for non-bitgo recovery support through wrw ([0905dc6](https://github.com/BitGo/BitGoJS/commit/0905dc60b76f6cba605a832fc32711ed07245c71))
- **sdk-coin-apt:** non fungible asset transaction building ([eb84c77](https://github.com/BitGo/BitGoJS/commit/eb84c774cb3e22985a161460b39ab5e52a1af339))
- **sdk-coin-icp:** added address creation and validation logic ([5f28145](https://github.com/BitGo/BitGoJS/commit/5f28145a5a2268b4a76599b353c5a95cd409d286))
- **sdk-core:** add invoice codecs ([ba62f5f](https://github.com/BitGo/BitGoJS/commit/ba62f5ff36710b94ded74852512e140a6e5326a9))
- **sdk-core:** generalize getSignatureShareRoundX mpcv2 helpers ([fb43c7c](https://github.com/BitGo/BitGoJS/commit/fb43c7cf25887c1717a79e7640fac0ff75d2957a))

# [28.22.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.21.1...@bitgo/sdk-core@28.22.0) (2025-01-28)

### Features

- add type exports for base enums ([553c936](https://github.com/BitGo/BitGoJS/commit/553c9364a9db6432d11ca0f8556931b7c470fede))
- **sdk-coin-wemix:** add transaction builder ([3f7133b](https://github.com/BitGo/BitGoJS/commit/3f7133b54dc09456031270aed90cf824e65cc134))

## [28.21.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.21.0...@bitgo/sdk-core@28.21.1) (2025-01-23)

**Note:** Version bump only for package @bitgo/sdk-core

# [28.21.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.20.0...@bitgo/sdk-core@28.21.0) (2025-01-23)

### Features

- **sdk-coin-baby:** add SDK support for babylon ([932541b](https://github.com/BitGo/BitGoJS/commit/932541bad36f5fb3ca0a9a49a7b987ec1f4878a3))
- **sdk-coin-flr:** add transaction builder ([3a69830](https://github.com/BitGo/BitGoJS/commit/3a69830ad63b6b6b0035a4a954fa834372239f16))
- **sdk-coin-sgb:** add transaction builder ([bf2c507](https://github.com/BitGo/BitGoJS/commit/bf2c5079913e9cd3730a9b19e81a704f1db7e211))
- **sdk-coin-xdc:** add transaction builder ([eebe928](https://github.com/BitGo/BitGoJS/commit/eebe92834192f8353c44a8ca4e35f5e4836cd8d9))
- **sdk-core:** add backup codecs ([cddf32c](https://github.com/BitGo/BitGoJS/commit/cddf32ce50db91e094df613ca3026d425f0788b6))
- **sdk-core:** add bera native staking fields ([d38db99](https://github.com/BitGo/BitGoJS/commit/d38db99c25fe887a720e8884bda8ab821f6070e6))
- **sdk-core:** add skipReceiveAddress optional parameter IWallets::list in SDK ([f7eaefe](https://github.com/BitGo/BitGoJS/commit/f7eaefe66bd2171595f03e707ec7b4862edb945e))

# [28.20.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.19.1...@bitgo/sdk-core@28.20.0) (2025-01-20)

### Bug Fixes

- **sdk-core:** add dRepId to StakingOptions ([2a7a77d](https://github.com/BitGo/BitGoJS/commit/2a7a77dd067e68262d42384528d7ace28bb45e9c))

### Features

- **sdk-core:** add static deriveKeyWithSeed implementation ([17f8547](https://github.com/BitGo/BitGoJS/commit/17f854759a557280619180108692729c3a4fb48f))
- **sdk-core:** add WalletBalance codecs ([1d3f09d](https://github.com/BitGo/BitGoJS/commit/1d3f09da7fbcf1977a17c8f4f13ead7b8b583bb6))
- **sdk-core:** return all fields in WalletBalance codecs ([db6c292](https://github.com/BitGo/BitGoJS/commit/db6c292c04d11f1c398ad5b41c157ab2d36ae605))

## [28.19.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.19.0...@bitgo/sdk-core@28.19.1) (2025-01-15)

### Bug Fixes

- **deps:** bump public-types library ([e8679cd](https://github.com/BitGo/BitGoJS/commit/e8679cd5cccd367d26946f2ab14b82a567e39107))
- **root:** add retry mechanism for MPC sendSignatureShareV2 ([ef520da](https://github.com/BitGo/BitGoJS/commit/ef520da47bc84090b4401c5b672f4711835de60c))

# [28.19.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.18.0...@bitgo/sdk-core@28.19.0) (2025-01-09)

### Features

- adding support for non-bitgo recovery for coredao and oas ([37f5e49](https://github.com/BitGo/BitGoJS/commit/37f5e4996c115543d068750d633ea5c5ae723725))

# [28.18.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.17.2...@bitgo/sdk-core@28.18.0) (2025-01-03)

### Bug Fixes

- allow locktime as build param ([b433fc0](https://github.com/BitGo/BitGoJS/commit/b433fc007b5c20c23d3bd63cec1dc55fef5a2318))
- **sdk-core:** fix btc unstaking signing ([25160fb](https://github.com/BitGo/BitGoJS/commit/25160fb7ec6b96c680432906230c9903a22ccb51))
- **sdk-core:** improve createUserKeychain ([8f429c1](https://github.com/BitGo/BitGoJS/commit/8f429c121940a1d827f2eb53bdbcf5dd1df03929))

### Features

- **sdk-core:** enable token enablements for multisig backing wallets ([db1d35d](https://github.com/BitGo/BitGoJS/commit/db1d35d134d8b4eec68d4b8fac7db9a087cb3714))

## [28.17.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.17.1...@bitgo/sdk-core@28.17.2) (2024-12-24)

**Note:** Version bump only for package @bitgo/sdk-core

## [28.17.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.17.0...@bitgo/sdk-core@28.17.1) (2024-12-19)

### Bug Fixes

- **sdk-core:** choose correct default apiVersion for tss ([c3bc7f0](https://github.com/BitGo/BitGoJS/commit/c3bc7f0839477321c9bd415d7b3036a32ef6d3aa))
- **sdk-core:** ignore case for btc unstaking transaction type ([aed4488](https://github.com/BitGo/BitGoJS/commit/aed448848ef90967b9eaf44e3e4d25ed2901822c))

# [28.17.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.15.2...@bitgo/sdk-core@28.17.0) (2024-12-17)

### Bug Fixes

- **abstract-utxo:** pass actual wallet to signTransaction ([55caa4a](https://github.com/BitGo/BitGoJS/commit/55caa4a6ddcb7699732d6259f1a2db014008a815))

### Features

- **sdk-coin-ada:** support vote delegation ([6b9ddd8](https://github.com/BitGo/BitGoJS/commit/6b9ddd867ecb458e2d5d9890829c20a22cf7658b))

# [28.16.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.15.2...@bitgo/sdk-core@28.16.0) (2024-12-17)

### Bug Fixes

- **abstract-utxo:** pass actual wallet to signTransaction ([55caa4a](https://github.com/BitGo/BitGoJS/commit/55caa4a6ddcb7699732d6259f1a2db014008a815))

### Features

- **sdk-coin-ada:** support vote delegation ([6b9ddd8](https://github.com/BitGo/BitGoJS/commit/6b9ddd867ecb458e2d5d9890829c20a22cf7658b))

## [28.15.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.15.1...@bitgo/sdk-core@28.15.2) (2024-12-12)

### Bug Fixes

- use max spendable amount to sweep balance ([19eba51](https://github.com/BitGo/BitGoJS/commit/19eba513ea1a5fe4e3760ebfd5c5fc8922acdaa3))

## [28.15.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.15.0...@bitgo/sdk-core@28.15.1) (2024-12-11)

### Bug Fixes

- **sdk-core:** fix MPCv2 SMC wallet generation ([4782337](https://github.com/BitGo/BitGoJS/commit/4782337f8905d95ebbe6c82d29cc4d5c46243c89))

# [28.15.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.14.2...@bitgo/sdk-core@28.15.0) (2024-12-03)

### Bug Fixes

- **sdk-core:** deprecate displayOrder in ITransactionExplanation ([316ea22](https://github.com/BitGo/BitGoJS/commit/316ea22b4e834d4f850ef3589e2d6f66a6d62fe5))

### Features

- add @types/keccak to packages that use it ([7e25872](https://github.com/BitGo/BitGoJS/commit/7e25872a5749cb6b3281b5355d4f45151d042d67))
- **sdk-core:** add sender walletId for btc unstaking ([ab12948](https://github.com/BitGo/BitGoJS/commit/ab12948c11455eb96bf21aaf0f3987227ca00603))
- **sdk-core:** enable dkls cold and custody wallet creation ([5360e06](https://github.com/BitGo/BitGoJS/commit/5360e06bca19430324e48e30ce5d0e4df1d79125))

## [28.14.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.14.1...@bitgo/sdk-core@28.14.2) (2024-11-26)

### Bug Fixes

- **sdk-core:** change expireAt for btc staking to string ([1fd302b](https://github.com/BitGo/BitGoJS/commit/1fd302b5c1a506c3e4a3bf158aa3476de5e784a3))
- **sdk-core:** preprocess recipients before initiate ([c71ca11](https://github.com/BitGo/BitGoJS/commit/c71ca11a0c084d52b795299f62a457a22be83c0e))

## [28.14.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.14.0...@bitgo/sdk-core@28.14.1) (2024-11-21)

### Bug Fixes

- validate addresses created matches the requested format ([01006ee](https://github.com/BitGo/BitGoJS/commit/01006ee65a4e036c0268ca96e2c435df8337027b))

# [28.14.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.13.1...@bitgo/sdk-core@28.14.0) (2024-11-19)

### Features

- **sdk-coin-coredao:** add coredao sdk skeleton ([0e6ce18](https://github.com/BitGo/BitGoJS/commit/0e6ce183f378968ea1453395ba28f7eb5ab26d96))
- **sdk-coin-oas:** add oas sdk skeleton ([d04f601](https://github.com/BitGo/BitGoJS/commit/d04f601103e949da4ff50653b6d593c678536ea5))

## [28.13.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.13.1...@bitgo/sdk-core@28.13.2) (2024-11-14)

**Note:** Version bump only for package @bitgo/sdk-core

## [28.13.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.13.0...@bitgo/sdk-core@28.13.1) (2024-11-08)

### Bug Fixes

- **sdk-core:** update mpcv1 gpg key for prod ([4402dcc](https://github.com/BitGo/BitGoJS/commit/4402dcc6bb5ccc95def1d6ad41f96667dbd571d8))

# [28.13.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.12.0...@bitgo/sdk-core@28.13.0) (2024-11-07)

### Bug Fixes

- **sdk-core:** add ui field for btc staking ([c932add](https://github.com/BitGo/BitGoJS/commit/c932add9d829144f7f625c13b3d699c97007159e))
- **sdk-core:** update mpcv1 gpg key on prod ([05da48f](https://github.com/BitGo/BitGoJS/commit/05da48f236368adf803989134ca5a18af1f92854))

### Features

- retrofit during eth tss recovery ([4a743ac](https://github.com/BitGo/BitGoJS/commit/4a743ac3eb11486d3917ca6c71429ec7b331dcab))
- **sdk-core:** update `prebuildSelfManagedStakingTransaction` ([92c8c9d](https://github.com/BitGo/BitGoJS/commit/92c8c9dcfc7aca71a331087a7af402f843149c8c))

# [28.12.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.11.0...@bitgo/sdk-core@28.12.0) (2024-11-01)

### Bug Fixes

- **sdk-core:** pass correct walletVersion to wallet platform ([6564098](https://github.com/BitGo/BitGoJS/commit/6564098f79dab328128bea52e86b18d0d6684568))

### Features

- **sdk-coin-xrp:** add tokenTransferBuilder ([ce6e142](https://github.com/BitGo/BitGoJS/commit/ce6e1427bfd7d1b5f7f63bba5dd374313cfa9307))
- **sdk-coin-xrp:** add trustsetBuilder ([9c23193](https://github.com/BitGo/BitGoJS/commit/9c231930cfe54221ccc023b2aedfd39bc0c77c3b))
- **sdk-core:** add support for eth v6 wallet ([6ac4ba3](https://github.com/BitGo/BitGoJS/commit/6ac4ba33a985e9c2f5c09e8fad68573320e1ca5d))
- **sdk-core:** add tests for new pick mpc gpg pub key function ([fbcfcbf](https://github.com/BitGo/BitGoJS/commit/fbcfcbf58b852c466c8e49c35acc77119348ee50))
- **sdk-core:** refactor tss ecdsa hot wallet signing logic to be in sdk ([27c4c7d](https://github.com/BitGo/BitGoJS/commit/27c4c7de6f428364f324c0188446b4a154056d51))
- **sdk-core:** support hardcoded gpg keys for non-express hot wallet flow ([7dda747](https://github.com/BitGo/BitGoJS/commit/7dda747f22dc30eb24461da3acfc137fa8605686))
- **sdk-core:** support hardcoding bitgo pgp keys in external signer ([f2db18f](https://github.com/BitGo/BitGoJS/commit/f2db18ffeab5194e31eab0280e0039ca9c380985))
- update public-types ([85f8d0f](https://github.com/BitGo/BitGoJS/commit/85f8d0fcf1c1e8bf85088406b0ff3de62aab180d))

# [28.11.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.10.0...@bitgo/sdk-core@28.11.0) (2024-10-22)

### Features

- **sdk-core:** fix deriveLightningServiceSharedSecret test ([696c91a](https://github.com/BitGo/BitGoJS/commit/696c91afb30bb1ee3a1cc075f265db4ed647810d))

# [28.10.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.9.0...@bitgo/sdk-core@28.10.0) (2024-10-15)

### Features

- add support for withdrawals from receive addr for ADA ([ed90e7d](https://github.com/BitGo/BitGoJS/commit/ed90e7d1b9fdebb96b5e2b5ea4afdcb42a9d2fd1))

# [28.9.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.8.0...@bitgo/sdk-core@28.9.0) (2024-10-08)

### Features

- **sdk-core:** add BUILD_ONLY flag to fanoutUnspents ([667c366](https://github.com/BitGo/BitGoJS/commit/667c3662691600eb8bc0715eeab7353c89277f3c))

# [28.8.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.7.0...@bitgo/sdk-core@28.8.0) (2024-10-04)

### Features

- **sdk-coin-ton:** add single nominator withdraw txn (Ticket: SC-370) ([f89be52](https://github.com/BitGo/BitGoJS/commit/f89be5262524a00803f7e31e89866bf58a613b30))
- **sdk-core:** add new param to fanout interface ([7c98f35](https://github.com/BitGo/BitGoJS/commit/7c98f35a2da5da6708bec7cd8d3285a0518cca34))
- **sdk-core:** reserve unspents from the SDK ([42ffe16](https://github.com/BitGo/BitGoJS/commit/42ffe168022efc5828cb2f5e8747158ba4105ffd))

# [28.7.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.6.0...@bitgo/sdk-core@28.7.0) (2024-09-24)

### Bug Fixes

- **express:** adding missing external signer mode sig param ([6a69aef](https://github.com/BitGo/BitGoJS/commit/6a69aef6af99bacfa887e96a01df3574ec1017e2))

### Features

- **sdk-core:** add utility function for get sharing keys API ([c2234f2](https://github.com/BitGo/BitGoJS/commit/c2234f2cc7e96eaf6d03a92811ae70887829bafc))

# [28.6.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.5.0...@bitgo/sdk-core@28.6.0) (2024-09-19)

### Features

- **sdk-coin-sui:** recover tokens ([218b1af](https://github.com/BitGo/BitGoJS/commit/218b1af7b100930976171dfc601b600f847877a0))

# [28.5.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.4.0...@bitgo/sdk-core@28.5.0) (2024-09-16)

### Bug Fixes

- add wallet type check for sign transaction ([ddc04f5](https://github.com/BitGo/BitGoJS/commit/ddc04f5569f9e636d44faa502bc0af7b07e07116))

### Features

- **express:** encrypt signer macaroon using ecdh ([62cbd00](https://github.com/BitGo/BitGoJS/commit/62cbd0090748a697017e9adcb49bb0cf34d044b8))
- **sdk-core:** add bulkAcceptShare function ([fac2743](https://github.com/BitGo/BitGoJS/commit/fac27439fb9fd84fa3001443e28831fced58dabc))
- **sdk-core:** add bulkShareWallet method ([577d631](https://github.com/BitGo/BitGoJS/commit/577d631889e89571444b7b3e6613bce0110b8c6e))

# [28.4.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.3.0...@bitgo/sdk-core@28.4.0) (2024-09-10)

### Bug Fixes

- **sdk-core:** generate wallet cleanup ([9cb02bd](https://github.com/BitGo/BitGoJS/commit/9cb02bd60f775da5332fa0fd142db87d2415a2a4))

### Features

- **express:** add apis to init lnd signer at express ([5c84196](https://github.com/BitGo/BitGoJS/commit/5c84196856194390bfda98cec64058915903da82))
- **sdk-core:** mark buildSignAndSend and expose buildAndSign ([2ef604d](https://github.com/BitGo/BitGoJS/commit/2ef604df7b337455bd7530575cf089a0eb510301))

# [28.3.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.2.0...@bitgo/sdk-core@28.3.0) (2024-09-03)

### Features

- **sdk-core:** add lightning wallet functions ([7b48023](https://github.com/BitGo/BitGoJS/commit/7b48023cc5f59cbc8f07befeb43b49479a7a5c74))
- **sdk-core:** add utils for signer lnd init ([719135d](https://github.com/BitGo/BitGoJS/commit/719135d6493dd17e338007c3b2e28391302a27de))
- **sdk-core:** enforce eddsa commitment validation ([dccc590](https://github.com/BitGo/BitGoJS/commit/dccc5907a465ebe3e9e617b86060632ab81dabbd))

# [28.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.1.0...@bitgo/sdk-core@28.2.0) (2024-08-29)

### Features

- **sdk-core:** add provider as stake options ([7e57620](https://github.com/BitGo/BitGoJS/commit/7e576201e5130579e62ea00387f35ee76a5dd6e1))
- **sdk-core:** improve wallet.signTransaction to get the user key ([c52a484](https://github.com/BitGo/BitGoJS/commit/c52a4846504eedd3e3c70f5824aca8f0c202a067))

# [28.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@28.0.0...@bitgo/sdk-core@28.1.0) (2024-08-27)

### Features

- **sdk-coin-bera:** add bera sdk skeleton ([94f1338](https://github.com/BitGo/BitGoJS/commit/94f133878b49eee3a52caae07091a449b53e0950))
- **sdk-coin-bera:** add bera sdk skeleton ([db64fa8](https://github.com/BitGo/BitGoJS/commit/db64fa81cd46d6c5ff6505c30173223a817e2540))
- **sdk-core:** add encryptedWalletPassphrase to generateWallet method ([bce6011](https://github.com/BitGo/BitGoJS/commit/bce6011bec5567fec84645bfd3fe26f77397f916))

# [28.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.8.0...@bitgo/sdk-core@28.0.0) (2024-08-20)

### Bug Fixes

- **root:** bump public-types and fix SMC MPCv2 format ([c739aa8](https://github.com/BitGo/BitGoJS/commit/c739aa8fef418276d0a5c812010153b770eac5e7))
- **sdk-core:** add back state checks for MPCv2 SMC utils ([c6f673d](https://github.com/BitGo/BitGoJS/commit/c6f673d8fe810e586a99df5be3e8f7a1c1977816))
- **sdk-core:** add hash for external signer for ecdsa gg18 ([bc5e4d6](https://github.com/BitGo/BitGoJS/commit/bc5e4d6193b18528d4f78802f0386f69c8b605c8))
- **sdk-core:** update ADATA to include the derivationPath ([b4c9d8d](https://github.com/BitGo/BitGoJS/commit/b4c9d8d5d2e0efff8cf9e1338bdbe91715776c64))

### Features

- move opensslbytes to own package ([e23c562](https://github.com/BitGo/BitGoJS/commit/e23c5627957916055e68329541dd1eb775704ca5))
- **sdk-coin-etc:** non-bitgo recovery support for wrw ([017155b](https://github.com/BitGo/BitGoJS/commit/017155b5a9b008377189bc94b69ed4b45d8004fe))
- **sdk-coin-sui:** create broadcastable MPC transaction ([9b69f25](https://github.com/BitGo/BitGoJS/commit/9b69f257abff7f01dae5f0feb4ec7ee89e0a91cc))
- **sdk-core:** add create and verify message signature ([9275d11](https://github.com/BitGo/BitGoJS/commit/9275d11f8fd4f21a712b94b937fdbb28f8b0a98a))
- **sdk-core:** add lightning utils ([08ef8ac](https://github.com/BitGo/BitGoJS/commit/08ef8accc3137dbdb074b31c81722b4bf34ac2b3))
- **sdk-core:** add new field to stake request ([6a5b9c9](https://github.com/BitGo/BitGoJS/commit/6a5b9c987e57821ab6f4e5a3a583bbe23540f343))
- **sdk-core:** add new lightning to index ([20b1b7b](https://github.com/BitGo/BitGoJS/commit/20b1b7bc52da7a89c27cdf66870949f54b614e28))
- **sdk-core:** add Signable type and canonicalizeObject ([aacc76a](https://github.com/BitGo/BitGoJS/commit/aacc76a608d2bef0ada4a8eebeea0f5dd9e991f5))
- **sdk-core:** add tests for canonicalizeObject ([c4cc112](https://github.com/BitGo/BitGoJS/commit/c4cc1122f4bdbb62bba263c2e86bc31fac34c895))
- **sdk-core:** add tests for signatures ([edefc9e](https://github.com/BitGo/BitGoJS/commit/edefc9eb836845077f948f96722597600f61bb1c))
- **sdk-core:** lightning signature use mainnet ([84bce9e](https://github.com/BitGo/BitGoJS/commit/84bce9efb45fa38220448fe26b43780c55a88011))
- **sdk-core:** use testnet for lightning signature ([34c7e04](https://github.com/BitGo/BitGoJS/commit/34c7e04f206e9edba547843185c6affc63a22c8c))
- support specifying unspents in SUI sendmany ([6823a26](https://github.com/BitGo/BitGoJS/commit/6823a26af5aecba5731d29061d61a0a7690c6562))

### BREAKING CHANGES

- clients using challenge
  generation & TSS Recovery functions must now
  install @bitgo/sdk-opensslbytes separately &
  provide the openSSLBytes WASM themselves.

Ticket: CE-4329

# [27.9.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.8.0...@bitgo/sdk-core@27.9.0) (2024-08-13)

### Bug Fixes

- **root:** bump public-types and fix SMC MPCv2 format ([c739aa8](https://github.com/BitGo/BitGoJS/commit/c739aa8fef418276d0a5c812010153b770eac5e7))
- **sdk-core:** add back state checks for MPCv2 SMC utils ([c6f673d](https://github.com/BitGo/BitGoJS/commit/c6f673d8fe810e586a99df5be3e8f7a1c1977816))
- **sdk-core:** add hash for external signer for ecdsa gg18 ([bc5e4d6](https://github.com/BitGo/BitGoJS/commit/bc5e4d6193b18528d4f78802f0386f69c8b605c8))
- **sdk-core:** update ADATA to include the derivationPath ([b4c9d8d](https://github.com/BitGo/BitGoJS/commit/b4c9d8d5d2e0efff8cf9e1338bdbe91715776c64))

### Features

- **sdk-core:** add create and verify message signature ([9275d11](https://github.com/BitGo/BitGoJS/commit/9275d11f8fd4f21a712b94b937fdbb28f8b0a98a))
- **sdk-core:** add lightning utils ([08ef8ac](https://github.com/BitGo/BitGoJS/commit/08ef8accc3137dbdb074b31c81722b4bf34ac2b3))
- **sdk-core:** add new field to stake request ([6a5b9c9](https://github.com/BitGo/BitGoJS/commit/6a5b9c987e57821ab6f4e5a3a583bbe23540f343))
- **sdk-core:** add new lightning to index ([20b1b7b](https://github.com/BitGo/BitGoJS/commit/20b1b7bc52da7a89c27cdf66870949f54b614e28))
- **sdk-core:** add Signable type and canonicalizeObject ([aacc76a](https://github.com/BitGo/BitGoJS/commit/aacc76a608d2bef0ada4a8eebeea0f5dd9e991f5))
- **sdk-core:** add tests for canonicalizeObject ([c4cc112](https://github.com/BitGo/BitGoJS/commit/c4cc1122f4bdbb62bba263c2e86bc31fac34c895))
- **sdk-core:** add tests for signatures ([edefc9e](https://github.com/BitGo/BitGoJS/commit/edefc9eb836845077f948f96722597600f61bb1c))
- **sdk-core:** lightning signature use mainnet ([84bce9e](https://github.com/BitGo/BitGoJS/commit/84bce9efb45fa38220448fe26b43780c55a88011))
- **sdk-core:** use testnet for lightning signature ([34c7e04](https://github.com/BitGo/BitGoJS/commit/34c7e04f206e9edba547843185c6affc63a22c8c))

# [27.8.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.7.0...@bitgo/sdk-core@27.8.0) (2024-08-07)

### Bug Fixes

- **root:** replace MPCv2 SMC types for public-types ([cb4c68f](https://github.com/BitGo/BitGoJS/commit/cb4c68f08035da7742a740ee7e220117a2143805))

### Features

- **abstract-cosmos:** add dkls support for cosmos hot wallet recovery ([da24a55](https://github.com/BitGo/BitGoJS/commit/da24a559d42ac0f2975fd03ec335f5e72bcd8f49))
- **sdk-coin-sui:** non-bitgo recovery ([a60531a](https://github.com/BitGo/BitGoJS/commit/a60531aabd0708d7f67226a0c5a4a4ea84f83d66))
- **sdk-lib-mpc:** support dep injection of dkls wasm in dsg ([a8c09ab](https://github.com/BitGo/BitGoJS/commit/a8c09abbe4feef656d80187969121e845f0c6656))

# [27.7.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.6.0...@bitgo/sdk-core@27.7.0) (2024-07-30)

### Bug Fixes

- **sdk-core:** support backup party id in mpcv2 signing utils ([de20f6d](https://github.com/BitGo/BitGoJS/commit/de20f6d505262f645a27ef1fdb5f0f35a855ca60))

### Features

- **root:** implement MPCv2 SMC wallet creation utils ([8c91b19](https://github.com/BitGo/BitGoJS/commit/8c91b19d969ca07f153f458fa398e2cd58a14841))

# [27.6.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.5.0...@bitgo/sdk-core@27.6.0) (2024-07-24)

### Bug Fixes

- **sdk-core:** fixing nocks for tests ([4d66d5d](https://github.com/BitGo/BitGoJS/commit/4d66d5dfd4a6b1362bc50265f997faa11594ba65))
- **sdk-core:** removing message signing logic in signTxRequest ([a41d38d](https://github.com/BitGo/BitGoJS/commit/a41d38dae03a61b409becc2d0af6c5e340242c60))

### Features

- **sdk-core:** create lightning wallet document ([6519f8f](https://github.com/BitGo/BitGoJS/commit/6519f8f167df38003b7fbf8c2f8a2e0186546c20))
- **sdk-core:** list wallet accepting enterprise id ([f012e7c](https://github.com/BitGo/BitGoJS/commit/f012e7c37655a802c1cf74759fa1b0fad90d3e76))
- **sdk-core:** logic for which requesttype ([e6ebd94](https://github.com/BitGo/BitGoJS/commit/e6ebd94b6f77e2c89e8605a7c1f56c4013650be2))
- **sdk-core:** script for message signing test ([404eb80](https://github.com/BitGo/BitGoJS/commit/404eb80d913b9d59048da86e6ffa2a3996d8f7f0))
- **sdk-core:** tweaking message signing response type ([4e0041e](https://github.com/BitGo/BitGoJS/commit/4e0041e8f28f8b824072ac87e9b47c3f746f7fc0))

# [27.5.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.4.1...@bitgo/sdk-core@27.5.0) (2024-07-16)

### Bug Fixes

- **sdk-core:** enterprise id is required for recraete mpc ([0c693f3](https://github.com/BitGo/BitGoJS/commit/0c693f37e1d12de5e334b18368f80382d8fbd4ec))

### Features

- **root:** add Adata validation for DSG session validation ([2f01009](https://github.com/BitGo/BitGoJS/commit/2f0100912f7258625228ee058092900be8693d55))
- sdk recreate keychain for mpc v1 to v2 ([eded21f](https://github.com/BitGo/BitGoJS/commit/eded21f92210599b69f273f32512e3f974cec3c4))
- **sdk-core:** add base utils for MPCv2 external signer ([3928f9b](https://github.com/BitGo/BitGoJS/commit/3928f9bb3b271bc6020824fb554a013663c521b9))
- **sdk-core:** implemented signing with external signer for MPCv2 ([b6cb2b0](https://github.com/BitGo/BitGoJS/commit/b6cb2b021bc64efc34dca5b97a0156719c804283))
- support specifying unspents in Ada sendmany calls ([2bb92dd](https://github.com/BitGo/BitGoJS/commit/2bb92dde3b967d69461678aa7b04029fd89dd7c8))

## [27.4.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.4.0...@bitgo/sdk-core@27.4.1) (2024-07-04)

**Note:** Version bump only for package @bitgo/sdk-core

# [27.4.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.3.0...@bitgo/sdk-core@27.4.0) (2024-07-02)

### Features

- **sdk-api:** add bscscan config ([2df7f75](https://github.com/BitGo/BitGoJS/commit/2df7f75caf9ff29be9a96150933b942701091e9a))

# [27.3.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.2.0...@bitgo/sdk-core@27.3.0) (2024-06-27)

### Bug Fixes

- add reqid to already extended prebuildParams ([90309fd](https://github.com/BitGo/BitGoJS/commit/90309fdc5a5cf26acbd769ace374b1b48ec53df7))

### Features

- **sdk-core:** add prebuild staking transaction function (Ticket: SC-96) ([58f6cef](https://github.com/BitGo/BitGoJS/commit/58f6cefef570a0643c39a191dcefafe408599055))

# [27.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.1.2...@bitgo/sdk-core@27.2.0) (2024-06-26)

### Bug Fixes

- **sdk-core:** change signTransactionTss return output ([0462ac5](https://github.com/BitGo/BitGoJS/commit/0462ac5f6e9ed81ae5db9c6005e327488d36d19d))
- **sdk-core:** default to MPCv2 for ecdsa ([67f656f](https://github.com/BitGo/BitGoJS/commit/67f656fbc3cdad8e16da04baed6a58bc13a98a7f))

### Features

- also check if network supports script type ([1420565](https://github.com/BitGo/BitGoJS/commit/14205655948b67cc325638d3b0be54a772ed9122))
- enable p2trMusig2 for testnet cold wallets ([d1bba0a](https://github.com/BitGo/BitGoJS/commit/d1bba0aad21db76dd32ec6bce8105c4f6c1ccf65))
- **root:** bumped WP public types ([41e2f87](https://github.com/BitGo/BitGoJS/commit/41e2f87921bb99b3dbaa279e16d4e50fe1de91a5))
- **sdk-core:** add tss coins method to BaseCoin class ([65ba76e](https://github.com/BitGo/BitGoJS/commit/65ba76ef3a930eed4e111c5613ded97fede57e65))
- **sdk-core:** added missing request tracer propagation ([29447f9](https://github.com/BitGo/BitGoJS/commit/29447f9bb2aa26b3576210e56348b38b3d90efed))
- **sdk-core:** adding MPCv1 to MPCv2 retrofit helper ([8b13b16](https://github.com/BitGo/BitGoJS/commit/8b13b167463533a051143374b9fea8ccc1ad63b9))

## [27.1.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.1.0...@bitgo/sdk-core@27.1.2) (2024-06-21)

**Note:** Version bump only for package @bitgo/sdk-core

## [27.1.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.1.0...@bitgo/sdk-core@27.1.1) (2024-06-20)

**Note:** Version bump only for package @bitgo/sdk-core

# [27.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@27.0.0...@bitgo/sdk-core@27.1.0) (2024-06-14)

### Features

- **sdk-coin-ethlike:** add new eth like coin packages ([ba305cb](https://github.com/BitGo/BitGoJS/commit/ba305cb7f7b564d499d0f931f50919058e85652f))
- **sdk-core:** added propagation of reqId to sendMany ([411efa7](https://github.com/BitGo/BitGoJS/commit/411efa76673fa1fb4b3e24fef4a6bf10bbd63af8))

# [27.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.16.0...@bitgo/sdk-core@27.0.0) (2024-06-11)

### Features

- encrypt and return backup key by default ([f80d834](https://github.com/BitGo/BitGoJS/commit/f80d834984598eebfdcfa1b8252a898b30fbceec))
- **sdk-core:** added reqId propagation to ecdsa methods ([35d6beb](https://github.com/BitGo/BitGoJS/commit/35d6beb5c1cfc678eb451dd09203d9348dfaea49))
- **sdk-core:** added unit tests ([f77473f](https://github.com/BitGo/BitGoJS/commit/f77473fe3fb7536842df67226fbffb0d8aca1272))
- **sdk-core:** propagate reqId for prebuildTransaction downstream methods ([789d305](https://github.com/BitGo/BitGoJS/commit/789d3057cb519198e38530e5ef15d2b55b0305da))
- **sdk-core:** use new sign and send apis ([4bf737c](https://github.com/BitGo/BitGoJS/commit/4bf737c7cc357c9f46b655fa9f056ba7a29bfa9d))

### BREAKING CHANGES

- changes the default behavior of generateWallet

# [26.16.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.15.0...@bitgo/sdk-core@26.16.0) (2024-06-05)

### Bug Fixes

- **sdk-core:** call txRequest migration for all apiVersion=full ([53b5c2b](https://github.com/BitGo/BitGoJS/commit/53b5c2bd96fa15658ae9ce8d3e87338fc9579703))
- **sdk-core:** pad alpha and mu shares of MPCV1 ([3235e8c](https://github.com/BitGo/BitGoJS/commit/3235e8c61a32fd3e6985a68a38d73068d43d1e67))

### Features

- **sdk-coin-sol:** add sol close ATA recovery support ([b1fdb64](https://github.com/BitGo/BitGoJS/commit/b1fdb6471bd1f5331e7a690056cf9380c5c2b5f1))
- **sdk-core:** make sendManyTss backwards compatible with sendMany ([37553bd](https://github.com/BitGo/BitGoJS/commit/37553bd62854867770a22410e5d652ec7c4d06bb))
- **sdk-core:** supply isMPCv2 for MPCv2 key creation ([64bd55a](https://github.com/BitGo/BitGoJS/commit/64bd55ac018797645b719f1bc8e4886ee7ed9443))

# [26.15.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.14.0...@bitgo/sdk-core@26.15.0) (2024-05-31)

### Features

- **abstract-eth:** add recovery support for bsc and polygon mpcv2 ([820e7b4](https://github.com/BitGo/BitGoJS/commit/820e7b40574add1bc7a05954961c7e7473972168))
- add bitgo network connection schema ([2324060](https://github.com/BitGo/BitGoJS/commit/2324060a06f0441a9c8bfa848ff24158b63e097a))

# [26.14.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.13.0...@bitgo/sdk-core@26.14.0) (2024-05-28)

### Bug Fixes

- should be able to generate onchain custodial wallet with express ([355dc8c](https://github.com/BitGo/BitGoJS/commit/355dc8cabe1b4432020947c22a663fd1e22eb1ac))

### Features

- **sdk-core:** remove hardcoded coinSpecific forwarderVersions ([6c9eff2](https://github.com/BitGo/BitGoJS/commit/6c9eff2b6a603d9e77b9c5bd139adfff7a6e0d15))
- **statics:** enable cosmosLike MPCv2 ([231d25e](https://github.com/BitGo/BitGoJS/commit/231d25eccaeb8e4cd96a3b5b79ae3c11e73ea991))
- update @bitgo/public-types to latest ([4ce79f1](https://github.com/BitGo/BitGoJS/commit/4ce79f1e812478ac5f2eaffdb5d0bed39d90cb8b))
- use settings API to switch between MPCv2 and v1 ([85e2df2](https://github.com/BitGo/BitGoJS/commit/85e2df2856fd0b673bae29b9d6e9aabaa8c8a932))

# [26.13.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.12.0...@bitgo/sdk-core@26.13.0) (2024-05-22)

### Features

- **sdk-core:** support smaller mpcv2 keycard ([63512d4](https://github.com/BitGo/BitGoJS/commit/63512d4279d012c0a151720cffb195b198d25e21))

# [26.12.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.11.1...@bitgo/sdk-core@26.12.0) (2024-05-17)

### Features

- remove conditional p2trMusig2 check ([9683f33](https://github.com/BitGo/BitGoJS/commit/9683f3325fd454a804a60894c618ee0212acc6b2))

## [26.11.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.11.0...@bitgo/sdk-core@26.11.1) (2024-05-13)

**Note:** Version bump only for package @bitgo/sdk-core

# [26.11.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.10.0...@bitgo/sdk-core@26.11.0) (2024-05-08)

### Bug Fixes

- **root:** fix keychains updatePassword for tss ([4cc09a8](https://github.com/BitGo/BitGoJS/commit/4cc09a8882194e19b55c10f21937ef0ffff39465))
- rsa decrypt only needed for node ([3ce36cc](https://github.com/BitGo/BitGoJS/commit/3ce36ccc65b1f6a82fd15a6c7a49359a8eb7098e))
- **sdk-core:** fix ci check issue ([d0eb311](https://github.com/BitGo/BitGoJS/commit/d0eb311141bee9b52919178a5f033212a299ddcf))
- **sdk-core:** route PA flow to use MPCv2 ([7c116e9](https://github.com/BitGo/BitGoJS/commit/7c116e9e84d858953746b68ee693c25845feaebd))
- use native crypto when overridden ([027245e](https://github.com/BitGo/BitGoJS/commit/027245eff5e320ecc679d97081a3c94a8e22c55b))

### Features

- add network connection encryption function ([8d43b26](https://github.com/BitGo/BitGoJS/commit/8d43b26d99ba7a07ce5e35cbf1906131e2779269))
- breakout encryption logic functions ([af048f7](https://github.com/BitGo/BitGoJS/commit/af048f76709aa89c000b7bf43cdb2931cb00d7fa))
- **sdk-lib-mpc:** support mpcv1 to mpcv2 retrofit ([b54a465](https://github.com/BitGo/BitGoJS/commit/b54a46575be40a51b4791cfc082695591dfd5d14))

# [26.10.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.9.0...@bitgo/sdk-core@26.10.0) (2024-05-01)

### Bug Fixes

- **root:** fix tests ([1324cda](https://github.com/BitGo/BitGoJS/commit/1324cdad62f64da99b645b3c6bd9c4e53639611d))

### Features

- **sdk-core:** add MPCv2 wallet creation ([3b15e71](https://github.com/BitGo/BitGoJS/commit/3b15e715a5cdb165ce671bd216d1191170ee8980))
- **sdk-core:** create dkls wallets with version 3 as well ([a14151a](https://github.com/BitGo/BitGoJS/commit/a14151a34047326334ed434ea3b16454f61c12a5))
- **sdk-core:** dkls signing with wallet platform ([90341a9](https://github.com/BitGo/BitGoJS/commit/90341a9cdce6a0c3eb3a5b5b253486070e8a03ed))
- **sdk-core:** switch tss signing b/w mpc v1/v2 ([c3d05f8](https://github.com/BitGo/BitGoJS/commit/c3d05f80b45faacea8e588b91633c1594ffc1070))
- **wp:** add sig combine verification check on client side ([c069f8b](https://github.com/BitGo/BitGoJS/commit/c069f8b61b0a62d6e5fddd35fc72fcdeb618024a))
- **wp:** update public-types and pass signatureR ([b0dba88](https://github.com/BitGo/BitGoJS/commit/b0dba888413230b6727713c0a8aec73959d62915))

# [26.9.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.8.2...@bitgo/sdk-core@26.9.0) (2024-04-25)

### Features

- **sdk-coin-stx:** add max amount and auth-id for self-stack pox-4 ([bf12091](https://github.com/BitGo/BitGoJS/commit/bf12091d0230f3b9fb82683a1dc32b5e270d0c8c))
- **sdk-core:** modify accept share method ([74cba44](https://github.com/BitGo/BitGoJS/commit/74cba44bc994ead576ac7d03a7b8171df9298f4b))

## [26.8.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.8.1...@bitgo/sdk-core@26.8.2) (2024-04-24)

### Bug Fixes

- superagent upgrade to 9.0 ([6e9aa43](https://github.com/BitGo/BitGoJS/commit/6e9aa43a6d2999298abd450ceb168d664b8b926d))

## [26.8.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.8.0...@bitgo/sdk-core@26.8.1) (2024-04-22)

**Note:** Version bump only for package @bitgo/sdk-core

# [26.8.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.7.0...@bitgo/sdk-core@26.8.0) (2024-04-17)

### Features

- **sdk-lib-mpc:** combine partial signatures util support ([c7f126f](https://github.com/BitGo/BitGoJS/commit/c7f126f68f9ebfed370248daa3321fb14145c5c0))

### Reverts

- Revert "feat: protect pass by value when sending data out" ([ef1497f](https://github.com/BitGo/BitGoJS/commit/ef1497ffdc9c158300c32a596828081d32eb6f3a))

# [26.7.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.6.2...@bitgo/sdk-core@26.7.0) (2024-04-12)

### Bug Fixes

- pending approvals for txRequestLite should not use multiSig flow ([7802998](https://github.com/BitGo/BitGoJS/commit/7802998082594a970c8ef71a794cf48b748cc555))

### Features

- **bitgo:** add PATCH and OPTIONS to redirectRequest ([4c8ba7a](https://github.com/BitGo/BitGoJS/commit/4c8ba7abb5718261774352e1a191f0ab5dc5e616))
- **sdk-coin-stx:** add support to nakamoto updgrade stack-stx tx ([f9cab3a](https://github.com/BitGo/BitGoJS/commit/f9cab3a0f836f3411f45e3ab1a04ee131680f649))

## [26.6.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.6.1...@bitgo/sdk-core@26.6.2) (2024-04-10)

**Note:** Version bump only for package @bitgo/sdk-core

## [26.6.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.6.0...@bitgo/sdk-core@26.6.1) (2024-04-09)

**Note:** Version bump only for package @bitgo/sdk-core

# [26.6.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.5.0...@bitgo/sdk-core@26.6.0) (2024-04-08)

### Features

- protect pass by value when sending data out ([8755bdd](https://github.com/BitGo/BitGoJS/commit/8755bdd5f4174de21f0b7e4c1e7bb74fb9b8e40f))

# [26.5.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.4.0...@bitgo/sdk-core@26.5.0) (2024-04-05)

### Features

- **sdk-coin-avaxp:** update avaxp staking ([b6df6ce](https://github.com/BitGo/BitGoJS/commit/b6df6ce84484c3f20898eeb6bc01f04a69086b42))
- **sdk-core:** deprecate openssl class ([9fa06ba](https://github.com/BitGo/BitGoJS/commit/9fa06ba7a6e3c3938addbcad5a22241214c0bb65))

# [26.4.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.3.0...@bitgo/sdk-core@26.4.0) (2024-03-28)

### Bug Fixes

- **sdk-core:** remove onToken validation when creating address ([75f7fb7](https://github.com/BitGo/BitGoJS/commit/75f7fb7d3a98995f8086743d9db1662808d2315f))

### Features

- **sdk-coin-avaxp:** add skeleton for addPermissionLessValidator tx ([08ad690](https://github.com/BitGo/BitGoJS/commit/08ad6909f9a51153bc0e76f67d4892cecb5ab805))
- **sdk-core:** add 2 new fields for staking options ([abdddd7](https://github.com/BitGo/BitGoJS/commit/abdddd7f5520ea67b930b9b96bc7099ebbf6be19))

# [26.3.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.2.0...@bitgo/sdk-core@26.3.0) (2024-03-19)

### Features

- **sdk-core:** add support for wallet shares without admin approvals ([734478d](https://github.com/BitGo/BitGoJS/commit/734478de791832ee95c1d52dedead30634260e02))

# [26.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.1.1...@bitgo/sdk-core@26.2.0) (2024-03-11)

### Features

- **sdk-core:** add new supportsDeriveKeyWithSeed flag ([c82bc46](https://github.com/BitGo/BitGoJS/commit/c82bc4686806d572be158b3862c232ab58547657))

## [26.1.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.1.0...@bitgo/sdk-core@26.1.1) (2024-02-28)

**Note:** Version bump only for package @bitgo/sdk-core

# [26.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@26.0.0...@bitgo/sdk-core@26.1.0) (2024-02-22)

### Bug Fixes

- **sdk-core:** deprecate derivedHardened for eddsa KeyPair ([34d8fb0](https://github.com/BitGo/BitGoJS/commit/34d8fb050db3d18024b7e25a8a5a9084580a059d))

### Features

- **sdk-core:** implement root key creation for eddsa multisig ([69bcaac](https://github.com/BitGo/BitGoJS/commit/69bcaac18a8ad049ea47fb43f09a0e3bc4457d9a))

# [26.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@26.0.0) (2024-02-19)

### Bug Fixes

- add pendingApprovaId in prebuildTxTss response ([049466b](https://github.com/BitGo/BitGoJS/commit/049466b56b5353899b6f9172a369f2d3dad58003))
- **bitgo:** fix updating the wallet build defaults ([fed02a4](https://github.com/BitGo/BitGoJS/commit/fed02a45d14da7b18934106739aa223665963573))
- downgrade from `io-ts@2.2.x` to `io-ts@2.1.3` ([78f138a](https://github.com/BitGo/BitGoJS/commit/78f138a595b7fca8e4ebb63f7c2012157118cbfc))
- remove unused dynamic headers ([4243c1d](https://github.com/BitGo/BitGoJS/commit/4243c1d02a59793f30b50a9efb80d1da8709aa4c))
- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add check to validate if PA triggered another condition ([0d773ec](https://github.com/BitGo/BitGoJS/commit/0d773ecf4eb476e7a45bb6dafa0faa2bfc338812))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** allow v4 forwarders ([90104b8](https://github.com/BitGo/BitGoJS/commit/90104b820d6d128990b1c2f907cd09ed9ebd29c6))
- **sdk-core:** do not hardcode eddsa tss utils in PA ([366ffd2](https://github.com/BitGo/BitGoJS/commit/366ffd2ccfd52c220e74b32914dcfebc3ae307d3))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix hash for tss ecdsa PA signing ([e57f6f9](https://github.com/BitGo/BitGoJS/commit/e57f6f926d1b99fb3cad3953f05550163474bcfb))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** only add headers if they exist and nonempty ([e85c55a](https://github.com/BitGo/BitGoJS/commit/e85c55a15c579fb44b853c8937c3dada562210b6))
- **sdk-core:** sign txRequest full in pendingApproval.approve ([c9f6eea](https://github.com/BitGo/BitGoJS/commit/c9f6eea52ad230f6b5485aba8b70f0b6ec11e8b9))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **sdk-core:** whitelist tx format param for sweep api ([8645f99](https://github.com/BitGo/BitGoJS/commit/8645f990218e5611d4ff35520430683b46163bbb))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### chore

- update `BitGo/public-types` to `2.0.0` ([a74148d](https://github.com/BitGo/BitGoJS/commit/a74148d8f16e565bcd0e64f79b0b0d0b9e683145))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- add address book methods to wallet class ([ff315b3](https://github.com/BitGo/BitGoJS/commit/ff315b33c225e1b56870cf2bc41b68fab520bb92))
- add bitgo network methods to trading class ([94b3093](https://github.com/BitGo/BitGoJS/commit/94b3093e8cd5791e5fd1877341d4ab7ab5a7009f))
- add enterprise-id to header ([31dd71b](https://github.com/BitGo/BitGoJS/commit/31dd71b7185e473390488af723d8783cd07fedf4))
- add rbf params to accelerateTransaction ([605dd31](https://github.com/BitGo/BitGoJS/commit/605dd317321279f320c17460df12f5ac2c959960))
- add walletFlags property, helper methods ([f0fd760](https://github.com/BitGo/BitGoJS/commit/f0fd760122334d86b0d4239bc3b23e0983a1d524))
- **bitgo:** use holesky etherscan url instead of goerli ([61962f6](https://github.com/BitGo/BitGoJS/commit/61962f6e273fd654575d3c93d9faf1a46bd361e4))
- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- pass down `includeRbf: true` while fetching tx to be replaced ([4a5d9f0](https://github.com/BitGo/BitGoJS/commit/4a5d9f02db9a45a179bcaa3369493e2c57ecdf40))
- **root:** whitelist apiVersion for buildAccountConsolidations ([83003de](https://github.com/BitGo/BitGoJS/commit/83003de987b49b5c462d08623d6687501958e4b5))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-hbar:** implement recover method for native hbar ([45c4b7a](https://github.com/BitGo/BitGoJS/commit/45c4b7a7591176cb665efbdbb4279d40f3a869dd))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-coin-zeta:** zeta redelegate txn support with tests ([b9bf137](https://github.com/BitGo/BitGoJS/commit/b9bf137d59f370c7d5be820131442bc48fb92825))
- **sdk-coin-zketh:** add zketh token support ([086b86c](https://github.com/BitGo/BitGoJS/commit/086b86c7886174997a01bea04617256f66e08720))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add delegationId to claim reward options ([c6007cf](https://github.com/BitGo/BitGoJS/commit/c6007cf52dc06ccbbc8f79a1be4a9c1e354f8381))
- **sdk-core:** add function to transfer nfts ([b77b386](https://github.com/BitGo/BitGoJS/commit/b77b386bf77408d4b1617ba3bc44e5899a65f2e0))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add limit as a valid build param ([e538192](https://github.com/BitGo/BitGoJS/commit/e5381929667ab4ea622deb7bc2cc916764fce2d3))
- **sdk-core:** add new fields to StakeOptions ([ed90855](https://github.com/BitGo/BitGoJS/commit/ed90855118014238684643597c8cc9a024d223bf))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add optional StakeOptions fields ([bff557c](https://github.com/BitGo/BitGoJS/commit/bff557c5d5cc6f5e53096d7ea8a9848b97e18249))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add support to allow external change address ([cbef823](https://github.com/BitGo/BitGoJS/commit/cbef823c431271ce542124e5a6a079549eec3099))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** flag to do segwit override for bulk consolidations ([2bcdaf0](https://github.com/BitGo/BitGoJS/commit/2bcdaf01953daf68734e96a0046cf69f85a602f1))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** provide skipKeychain to wallet share API request ([4fcc705](https://github.com/BitGo/BitGoJS/commit/4fcc705e04de4c6beed541b096f2fe65b44c0a53))
- **sdk-core:** support authenticated encryption using pgp detached signatures ([1b3b925](https://github.com/BitGo/BitGoJS/commit/1b3b92507c5160817dc37f705b00a64bcbc5e666))
- **sdk-core:** support webauthn decryption in base wallet fn ([d6dea1a](https://github.com/BitGo/BitGoJS/commit/d6dea1a02affb57ac03bd9019ec02581d897565c))
- **sdk-core:** update wallet ([12e39d6](https://github.com/BitGo/BitGoJS/commit/12e39d63cd25843a84d04b7be8620deb89a6e33c))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** util func to get the avail scripts for wallettype ([0fcfbb3](https://github.com/BitGo/BitGoJS/commit/0fcfbb3353314421017d555f95d286af049523a9))
- **sdk-core:** util to decrypt webauthn encrypted keys ([84a30c4](https://github.com/BitGo/BitGoJS/commit/84a30c4baf7aac110685aa73852f6d3ffb3bd579))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- **sdk-lib-mpc:** support DKLS DKG primitives ([ccd6e66](https://github.com/BitGo/BitGoJS/commit/ccd6e660120c7a0456c1e9f2f950d8c557ec9f75))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))
- whitelist rbf build params ([208bc83](https://github.com/BitGo/BitGoJS/commit/208bc833deedcd620832a7695e0cad1bbd53c59f))

### BREAKING CHANGES

- **sdk-lib-mpc:** moves and renames authenticated encryption utility functions to sdk-lib-mpc
- Update `public-types` to `2.0.0`

Ticket: VL-000

- BitGo requires using `io-ts@2.1.3` in it's
  entire stack. this downgrades the version of `io-ts` to
  adhere to this requirement.

VL-000

- **bitgo:** changed default eth testnet etherscan url to holesky
- rename coin module, coin name, named exports for coreum

# [25.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@25.0.0) (2024-01-30)

### Bug Fixes

- add pendingApprovaId in prebuildTxTss response ([049466b](https://github.com/BitGo/BitGoJS/commit/049466b56b5353899b6f9172a369f2d3dad58003))
- downgrade from `io-ts@2.2.x` to `io-ts@2.1.3` ([78f138a](https://github.com/BitGo/BitGoJS/commit/78f138a595b7fca8e4ebb63f7c2012157118cbfc))
- remove unused dynamic headers ([4243c1d](https://github.com/BitGo/BitGoJS/commit/4243c1d02a59793f30b50a9efb80d1da8709aa4c))
- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not hardcode eddsa tss utils in PA ([366ffd2](https://github.com/BitGo/BitGoJS/commit/366ffd2ccfd52c220e74b32914dcfebc3ae307d3))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix hash for tss ecdsa PA signing ([e57f6f9](https://github.com/BitGo/BitGoJS/commit/e57f6f926d1b99fb3cad3953f05550163474bcfb))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** only add headers if they exist and nonempty ([e85c55a](https://github.com/BitGo/BitGoJS/commit/e85c55a15c579fb44b853c8937c3dada562210b6))
- **sdk-core:** sign txRequest full in pendingApproval.approve ([c9f6eea](https://github.com/BitGo/BitGoJS/commit/c9f6eea52ad230f6b5485aba8b70f0b6ec11e8b9))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### chore

- update `BitGo/public-types` to `2.0.0` ([a74148d](https://github.com/BitGo/BitGoJS/commit/a74148d8f16e565bcd0e64f79b0b0d0b9e683145))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- add address book methods to wallet class ([ff315b3](https://github.com/BitGo/BitGoJS/commit/ff315b33c225e1b56870cf2bc41b68fab520bb92))
- add bitgo network methods to trading class ([94b3093](https://github.com/BitGo/BitGoJS/commit/94b3093e8cd5791e5fd1877341d4ab7ab5a7009f))
- add rbf params to accelerateTransaction ([605dd31](https://github.com/BitGo/BitGoJS/commit/605dd317321279f320c17460df12f5ac2c959960))
- add walletFlags property, helper methods ([f0fd760](https://github.com/BitGo/BitGoJS/commit/f0fd760122334d86b0d4239bc3b23e0983a1d524))
- **bitgo:** use holesky etherscan url instead of goerli ([61962f6](https://github.com/BitGo/BitGoJS/commit/61962f6e273fd654575d3c93d9faf1a46bd361e4))
- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **root:** whitelist apiVersion for buildAccountConsolidations ([83003de](https://github.com/BitGo/BitGoJS/commit/83003de987b49b5c462d08623d6687501958e4b5))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-hbar:** implement recover method for native hbar ([45c4b7a](https://github.com/BitGo/BitGoJS/commit/45c4b7a7591176cb665efbdbb4279d40f3a869dd))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-coin-zketh:** add zketh token support ([086b86c](https://github.com/BitGo/BitGoJS/commit/086b86c7886174997a01bea04617256f66e08720))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add function to transfer nfts ([b77b386](https://github.com/BitGo/BitGoJS/commit/b77b386bf77408d4b1617ba3bc44e5899a65f2e0))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add limit as a valid build param ([e538192](https://github.com/BitGo/BitGoJS/commit/e5381929667ab4ea622deb7bc2cc916764fce2d3))
- **sdk-core:** add new fields to StakeOptions ([ed90855](https://github.com/BitGo/BitGoJS/commit/ed90855118014238684643597c8cc9a024d223bf))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add optional StakeOptions fields ([bff557c](https://github.com/BitGo/BitGoJS/commit/bff557c5d5cc6f5e53096d7ea8a9848b97e18249))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add support to allow external change address ([cbef823](https://github.com/BitGo/BitGoJS/commit/cbef823c431271ce542124e5a6a079549eec3099))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** flag to do segwit override for bulk consolidations ([2bcdaf0](https://github.com/BitGo/BitGoJS/commit/2bcdaf01953daf68734e96a0046cf69f85a602f1))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** provide skipKeychain to wallet share API request ([4fcc705](https://github.com/BitGo/BitGoJS/commit/4fcc705e04de4c6beed541b096f2fe65b44c0a53))
- **sdk-core:** support webauthn decryption in base wallet fn ([d6dea1a](https://github.com/BitGo/BitGoJS/commit/d6dea1a02affb57ac03bd9019ec02581d897565c))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** util to decrypt webauthn encrypted keys ([84a30c4](https://github.com/BitGo/BitGoJS/commit/84a30c4baf7aac110685aa73852f6d3ffb3bd579))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))
- whitelist rbf build params ([208bc83](https://github.com/BitGo/BitGoJS/commit/208bc833deedcd620832a7695e0cad1bbd53c59f))

### BREAKING CHANGES

- Update `public-types` to `2.0.0`

Ticket: VL-000

- BitGo requires using `io-ts@2.1.3` in it's
  entire stack. this downgrades the version of `io-ts` to
  adhere to this requirement.

VL-000

- **bitgo:** changed default eth testnet etherscan url to holesky
- rename coin module, coin name, named exports for coreum

# [24.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@24.0.0) (2024-01-26)

### Bug Fixes

- add pendingApprovaId in prebuildTxTss response ([049466b](https://github.com/BitGo/BitGoJS/commit/049466b56b5353899b6f9172a369f2d3dad58003))
- downgrade from `io-ts@2.2.x` to `io-ts@2.1.3` ([78f138a](https://github.com/BitGo/BitGoJS/commit/78f138a595b7fca8e4ebb63f7c2012157118cbfc))
- remove unused dynamic headers ([4243c1d](https://github.com/BitGo/BitGoJS/commit/4243c1d02a59793f30b50a9efb80d1da8709aa4c))
- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** only add headers if they exist and nonempty ([e85c55a](https://github.com/BitGo/BitGoJS/commit/e85c55a15c579fb44b853c8937c3dada562210b6))
- **sdk-core:** sign txRequest full in pendingApproval.approve ([c9f6eea](https://github.com/BitGo/BitGoJS/commit/c9f6eea52ad230f6b5485aba8b70f0b6ec11e8b9))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### chore

- update `BitGo/public-types` to `2.0.0` ([a74148d](https://github.com/BitGo/BitGoJS/commit/a74148d8f16e565bcd0e64f79b0b0d0b9e683145))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- add address book methods to wallet class ([ff315b3](https://github.com/BitGo/BitGoJS/commit/ff315b33c225e1b56870cf2bc41b68fab520bb92))
- add bitgo network methods to trading class ([94b3093](https://github.com/BitGo/BitGoJS/commit/94b3093e8cd5791e5fd1877341d4ab7ab5a7009f))
- add rbf params to accelerateTransaction ([605dd31](https://github.com/BitGo/BitGoJS/commit/605dd317321279f320c17460df12f5ac2c959960))
- add walletFlags property, helper methods ([f0fd760](https://github.com/BitGo/BitGoJS/commit/f0fd760122334d86b0d4239bc3b23e0983a1d524))
- **bitgo:** use holesky etherscan url instead of goerli ([61962f6](https://github.com/BitGo/BitGoJS/commit/61962f6e273fd654575d3c93d9faf1a46bd361e4))
- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **root:** whitelist apiVersion for buildAccountConsolidations ([83003de](https://github.com/BitGo/BitGoJS/commit/83003de987b49b5c462d08623d6687501958e4b5))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-hbar:** implement recover method for native hbar ([45c4b7a](https://github.com/BitGo/BitGoJS/commit/45c4b7a7591176cb665efbdbb4279d40f3a869dd))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-coin-zketh:** add zketh token support ([086b86c](https://github.com/BitGo/BitGoJS/commit/086b86c7886174997a01bea04617256f66e08720))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add function to transfer nfts ([b77b386](https://github.com/BitGo/BitGoJS/commit/b77b386bf77408d4b1617ba3bc44e5899a65f2e0))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add limit as a valid build param ([e538192](https://github.com/BitGo/BitGoJS/commit/e5381929667ab4ea622deb7bc2cc916764fce2d3))
- **sdk-core:** add new fields to StakeOptions ([ed90855](https://github.com/BitGo/BitGoJS/commit/ed90855118014238684643597c8cc9a024d223bf))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add optional StakeOptions fields ([bff557c](https://github.com/BitGo/BitGoJS/commit/bff557c5d5cc6f5e53096d7ea8a9848b97e18249))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** flag to do segwit override for bulk consolidations ([2bcdaf0](https://github.com/BitGo/BitGoJS/commit/2bcdaf01953daf68734e96a0046cf69f85a602f1))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** provide skipKeychain to wallet share API request ([4fcc705](https://github.com/BitGo/BitGoJS/commit/4fcc705e04de4c6beed541b096f2fe65b44c0a53))
- **sdk-core:** support webauthn decryption in base wallet fn ([d6dea1a](https://github.com/BitGo/BitGoJS/commit/d6dea1a02affb57ac03bd9019ec02581d897565c))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** util to decrypt webauthn encrypted keys ([84a30c4](https://github.com/BitGo/BitGoJS/commit/84a30c4baf7aac110685aa73852f6d3ffb3bd579))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))
- whitelist rbf build params ([208bc83](https://github.com/BitGo/BitGoJS/commit/208bc833deedcd620832a7695e0cad1bbd53c59f))

### BREAKING CHANGES

- Update `public-types` to `2.0.0`

Ticket: VL-000

- BitGo requires using `io-ts@2.1.3` in it's
  entire stack. this downgrades the version of `io-ts` to
  adhere to this requirement.

VL-000

- **bitgo:** changed default eth testnet etherscan url to holesky
- rename coin module, coin name, named exports for coreum

# [23.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@23.0.0) (2024-01-26)

### Bug Fixes

- add pendingApprovaId in prebuildTxTss response ([049466b](https://github.com/BitGo/BitGoJS/commit/049466b56b5353899b6f9172a369f2d3dad58003))
- downgrade from `io-ts@2.2.x` to `io-ts@2.1.3` ([78f138a](https://github.com/BitGo/BitGoJS/commit/78f138a595b7fca8e4ebb63f7c2012157118cbfc))
- remove unused dynamic headers ([4243c1d](https://github.com/BitGo/BitGoJS/commit/4243c1d02a59793f30b50a9efb80d1da8709aa4c))
- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** only add headers if they exist and nonempty ([e85c55a](https://github.com/BitGo/BitGoJS/commit/e85c55a15c579fb44b853c8937c3dada562210b6))
- **sdk-core:** sign txRequest full in pendingApproval.approve ([c9f6eea](https://github.com/BitGo/BitGoJS/commit/c9f6eea52ad230f6b5485aba8b70f0b6ec11e8b9))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### chore

- update `BitGo/public-types` to `2.0.0` ([a74148d](https://github.com/BitGo/BitGoJS/commit/a74148d8f16e565bcd0e64f79b0b0d0b9e683145))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- add address book methods to wallet class ([ff315b3](https://github.com/BitGo/BitGoJS/commit/ff315b33c225e1b56870cf2bc41b68fab520bb92))
- add bitgo network methods to trading class ([94b3093](https://github.com/BitGo/BitGoJS/commit/94b3093e8cd5791e5fd1877341d4ab7ab5a7009f))
- add rbf params to accelerateTransaction ([605dd31](https://github.com/BitGo/BitGoJS/commit/605dd317321279f320c17460df12f5ac2c959960))
- add walletFlags property, helper methods ([f0fd760](https://github.com/BitGo/BitGoJS/commit/f0fd760122334d86b0d4239bc3b23e0983a1d524))
- **bitgo:** use holesky etherscan url instead of goerli ([61962f6](https://github.com/BitGo/BitGoJS/commit/61962f6e273fd654575d3c93d9faf1a46bd361e4))
- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **root:** whitelist apiVersion for buildAccountConsolidations ([83003de](https://github.com/BitGo/BitGoJS/commit/83003de987b49b5c462d08623d6687501958e4b5))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-hbar:** implement recover method for native hbar ([45c4b7a](https://github.com/BitGo/BitGoJS/commit/45c4b7a7591176cb665efbdbb4279d40f3a869dd))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-coin-zketh:** add zketh token support ([086b86c](https://github.com/BitGo/BitGoJS/commit/086b86c7886174997a01bea04617256f66e08720))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add function to transfer nfts ([b77b386](https://github.com/BitGo/BitGoJS/commit/b77b386bf77408d4b1617ba3bc44e5899a65f2e0))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add limit as a valid build param ([e538192](https://github.com/BitGo/BitGoJS/commit/e5381929667ab4ea622deb7bc2cc916764fce2d3))
- **sdk-core:** add new fields to StakeOptions ([ed90855](https://github.com/BitGo/BitGoJS/commit/ed90855118014238684643597c8cc9a024d223bf))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add optional StakeOptions fields ([bff557c](https://github.com/BitGo/BitGoJS/commit/bff557c5d5cc6f5e53096d7ea8a9848b97e18249))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** flag to do segwit override for bulk consolidations ([2bcdaf0](https://github.com/BitGo/BitGoJS/commit/2bcdaf01953daf68734e96a0046cf69f85a602f1))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** provide skipKeychain to wallet share API request ([4fcc705](https://github.com/BitGo/BitGoJS/commit/4fcc705e04de4c6beed541b096f2fe65b44c0a53))
- **sdk-core:** support webauthn decryption in base wallet fn ([d6dea1a](https://github.com/BitGo/BitGoJS/commit/d6dea1a02affb57ac03bd9019ec02581d897565c))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** util to decrypt webauthn encrypted keys ([84a30c4](https://github.com/BitGo/BitGoJS/commit/84a30c4baf7aac110685aa73852f6d3ffb3bd579))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))
- whitelist rbf build params ([208bc83](https://github.com/BitGo/BitGoJS/commit/208bc833deedcd620832a7695e0cad1bbd53c59f))

### BREAKING CHANGES

- Update `public-types` to `2.0.0`

Ticket: VL-000

- BitGo requires using `io-ts@2.1.3` in it's
  entire stack. this downgrades the version of `io-ts` to
  adhere to this requirement.

VL-000

- **bitgo:** changed default eth testnet etherscan url to holesky
- rename coin module, coin name, named exports for coreum

# [22.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@22.0.0) (2024-01-25)

### Bug Fixes

- add pendingApprovaId in prebuildTxTss response ([049466b](https://github.com/BitGo/BitGoJS/commit/049466b56b5353899b6f9172a369f2d3dad58003))
- downgrade from `io-ts@2.2.x` to `io-ts@2.1.3` ([78f138a](https://github.com/BitGo/BitGoJS/commit/78f138a595b7fca8e4ebb63f7c2012157118cbfc))
- remove unused dynamic headers ([4243c1d](https://github.com/BitGo/BitGoJS/commit/4243c1d02a59793f30b50a9efb80d1da8709aa4c))
- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** only add headers if they exist and nonempty ([e85c55a](https://github.com/BitGo/BitGoJS/commit/e85c55a15c579fb44b853c8937c3dada562210b6))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### chore

- update `BitGo/public-types` to `2.0.0` ([a74148d](https://github.com/BitGo/BitGoJS/commit/a74148d8f16e565bcd0e64f79b0b0d0b9e683145))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- add address book methods to wallet class ([ff315b3](https://github.com/BitGo/BitGoJS/commit/ff315b33c225e1b56870cf2bc41b68fab520bb92))
- add bitgo network methods to trading class ([94b3093](https://github.com/BitGo/BitGoJS/commit/94b3093e8cd5791e5fd1877341d4ab7ab5a7009f))
- add rbf params to accelerateTransaction ([605dd31](https://github.com/BitGo/BitGoJS/commit/605dd317321279f320c17460df12f5ac2c959960))
- add walletFlags property, helper methods ([f0fd760](https://github.com/BitGo/BitGoJS/commit/f0fd760122334d86b0d4239bc3b23e0983a1d524))
- **bitgo:** use holesky etherscan url instead of goerli ([61962f6](https://github.com/BitGo/BitGoJS/commit/61962f6e273fd654575d3c93d9faf1a46bd361e4))
- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **root:** whitelist apiVersion for buildAccountConsolidations ([83003de](https://github.com/BitGo/BitGoJS/commit/83003de987b49b5c462d08623d6687501958e4b5))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-coin-zketh:** add zketh token support ([086b86c](https://github.com/BitGo/BitGoJS/commit/086b86c7886174997a01bea04617256f66e08720))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add function to transfer nfts ([b77b386](https://github.com/BitGo/BitGoJS/commit/b77b386bf77408d4b1617ba3bc44e5899a65f2e0))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new fields to StakeOptions ([ed90855](https://github.com/BitGo/BitGoJS/commit/ed90855118014238684643597c8cc9a024d223bf))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add optional StakeOptions fields ([bff557c](https://github.com/BitGo/BitGoJS/commit/bff557c5d5cc6f5e53096d7ea8a9848b97e18249))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** flag to do segwit override for bulk consolidations ([2bcdaf0](https://github.com/BitGo/BitGoJS/commit/2bcdaf01953daf68734e96a0046cf69f85a602f1))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** provide skipKeychain to wallet share API request ([4fcc705](https://github.com/BitGo/BitGoJS/commit/4fcc705e04de4c6beed541b096f2fe65b44c0a53))
- **sdk-core:** support webauthn decryption in base wallet fn ([d6dea1a](https://github.com/BitGo/BitGoJS/commit/d6dea1a02affb57ac03bd9019ec02581d897565c))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** util to decrypt webauthn encrypted keys ([84a30c4](https://github.com/BitGo/BitGoJS/commit/84a30c4baf7aac110685aa73852f6d3ffb3bd579))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))
- whitelist rbf build params ([208bc83](https://github.com/BitGo/BitGoJS/commit/208bc833deedcd620832a7695e0cad1bbd53c59f))

### BREAKING CHANGES

- Update `public-types` to `2.0.0`

Ticket: VL-000

- BitGo requires using `io-ts@2.1.3` in it's
  entire stack. this downgrades the version of `io-ts` to
  adhere to this requirement.

VL-000

- **bitgo:** changed default eth testnet etherscan url to holesky
- rename coin module, coin name, named exports for coreum

# [21.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@21.0.0) (2024-01-22)

### Bug Fixes

- add pendingApprovaId in prebuildTxTss response ([049466b](https://github.com/BitGo/BitGoJS/commit/049466b56b5353899b6f9172a369f2d3dad58003))
- downgrade from `io-ts@2.2.x` to `io-ts@2.1.3` ([78f138a](https://github.com/BitGo/BitGoJS/commit/78f138a595b7fca8e4ebb63f7c2012157118cbfc))
- remove unused dynamic headers ([4243c1d](https://github.com/BitGo/BitGoJS/commit/4243c1d02a59793f30b50a9efb80d1da8709aa4c))
- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** only add headers if they exist and nonempty ([e85c55a](https://github.com/BitGo/BitGoJS/commit/e85c55a15c579fb44b853c8937c3dada562210b6))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### chore

- update `BitGo/public-types` to `2.0.0` ([a74148d](https://github.com/BitGo/BitGoJS/commit/a74148d8f16e565bcd0e64f79b0b0d0b9e683145))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- add address book methods to wallet class ([ff315b3](https://github.com/BitGo/BitGoJS/commit/ff315b33c225e1b56870cf2bc41b68fab520bb92))
- add bitgo network methods to trading class ([94b3093](https://github.com/BitGo/BitGoJS/commit/94b3093e8cd5791e5fd1877341d4ab7ab5a7009f))
- add rbf params to accelerateTransaction ([605dd31](https://github.com/BitGo/BitGoJS/commit/605dd317321279f320c17460df12f5ac2c959960))
- add walletFlags property, helper methods ([f0fd760](https://github.com/BitGo/BitGoJS/commit/f0fd760122334d86b0d4239bc3b23e0983a1d524))
- **bitgo:** use holesky etherscan url instead of goerli ([61962f6](https://github.com/BitGo/BitGoJS/commit/61962f6e273fd654575d3c93d9faf1a46bd361e4))
- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **root:** whitelist apiVersion for buildAccountConsolidations ([83003de](https://github.com/BitGo/BitGoJS/commit/83003de987b49b5c462d08623d6687501958e4b5))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-coin-zketh:** add zketh token support ([086b86c](https://github.com/BitGo/BitGoJS/commit/086b86c7886174997a01bea04617256f66e08720))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add function to transfer nfts ([b77b386](https://github.com/BitGo/BitGoJS/commit/b77b386bf77408d4b1617ba3bc44e5899a65f2e0))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new fields to StakeOptions ([ed90855](https://github.com/BitGo/BitGoJS/commit/ed90855118014238684643597c8cc9a024d223bf))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add optional StakeOptions fields ([bff557c](https://github.com/BitGo/BitGoJS/commit/bff557c5d5cc6f5e53096d7ea8a9848b97e18249))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** flag to do segwit override for bulk consolidations ([2bcdaf0](https://github.com/BitGo/BitGoJS/commit/2bcdaf01953daf68734e96a0046cf69f85a602f1))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** provide skipKeychain to wallet share API request ([4fcc705](https://github.com/BitGo/BitGoJS/commit/4fcc705e04de4c6beed541b096f2fe65b44c0a53))
- **sdk-core:** support webauthn decryption in base wallet fn ([d6dea1a](https://github.com/BitGo/BitGoJS/commit/d6dea1a02affb57ac03bd9019ec02581d897565c))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** util to decrypt webauthn encrypted keys ([84a30c4](https://github.com/BitGo/BitGoJS/commit/84a30c4baf7aac110685aa73852f6d3ffb3bd579))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))
- whitelist rbf build params ([208bc83](https://github.com/BitGo/BitGoJS/commit/208bc833deedcd620832a7695e0cad1bbd53c59f))

### BREAKING CHANGES

- Update `public-types` to `2.0.0`

Ticket: VL-000

- BitGo requires using `io-ts@2.1.3` in it's
  entire stack. this downgrades the version of `io-ts` to
  adhere to this requirement.

VL-000

- **bitgo:** changed default eth testnet etherscan url to holesky
- rename coin module, coin name, named exports for coreum

# [20.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@20.0.0) (2024-01-09)

### Bug Fixes

- remove unused dynamic headers ([4243c1d](https://github.com/BitGo/BitGoJS/commit/4243c1d02a59793f30b50a9efb80d1da8709aa4c))
- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** only add headers if they exist and nonempty ([e85c55a](https://github.com/BitGo/BitGoJS/commit/e85c55a15c579fb44b853c8937c3dada562210b6))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- add address book methods to wallet class ([ff315b3](https://github.com/BitGo/BitGoJS/commit/ff315b33c225e1b56870cf2bc41b68fab520bb92))
- add bitgo network methods to trading class ([94b3093](https://github.com/BitGo/BitGoJS/commit/94b3093e8cd5791e5fd1877341d4ab7ab5a7009f))
- add walletFlags property, helper methods ([f0fd760](https://github.com/BitGo/BitGoJS/commit/f0fd760122334d86b0d4239bc3b23e0983a1d524))
- **bitgo:** use holesky etherscan url instead of goerli ([61962f6](https://github.com/BitGo/BitGoJS/commit/61962f6e273fd654575d3c93d9faf1a46bd361e4))
- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **root:** whitelist apiVersion for buildAccountConsolidations ([83003de](https://github.com/BitGo/BitGoJS/commit/83003de987b49b5c462d08623d6687501958e4b5))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-coin-zketh:** add zketh token support ([086b86c](https://github.com/BitGo/BitGoJS/commit/086b86c7886174997a01bea04617256f66e08720))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add function to transfer nfts ([b77b386](https://github.com/BitGo/BitGoJS/commit/b77b386bf77408d4b1617ba3bc44e5899a65f2e0))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new fields to StakeOptions ([ed90855](https://github.com/BitGo/BitGoJS/commit/ed90855118014238684643597c8cc9a024d223bf))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add optional StakeOptions fields ([bff557c](https://github.com/BitGo/BitGoJS/commit/bff557c5d5cc6f5e53096d7ea8a9848b97e18249))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** flag to do segwit override for bulk consolidations ([2bcdaf0](https://github.com/BitGo/BitGoJS/commit/2bcdaf01953daf68734e96a0046cf69f85a602f1))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** provide skipKeychain to wallet share API request ([4fcc705](https://github.com/BitGo/BitGoJS/commit/4fcc705e04de4c6beed541b096f2fe65b44c0a53))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- **bitgo:** changed default eth testnet etherscan url to holesky
- rename coin module, coin name, named exports for coreum

# [19.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@19.0.0) (2024-01-03)

### Bug Fixes

- remove unused dynamic headers ([4243c1d](https://github.com/BitGo/BitGoJS/commit/4243c1d02a59793f30b50a9efb80d1da8709aa4c))
- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** only add headers if they exist and nonempty ([e85c55a](https://github.com/BitGo/BitGoJS/commit/e85c55a15c579fb44b853c8937c3dada562210b6))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- add address book methods to wallet class ([ff315b3](https://github.com/BitGo/BitGoJS/commit/ff315b33c225e1b56870cf2bc41b68fab520bb92))
- add bitgo network methods to trading class ([94b3093](https://github.com/BitGo/BitGoJS/commit/94b3093e8cd5791e5fd1877341d4ab7ab5a7009f))
- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **root:** whitelist apiVersion for buildAccountConsolidations ([83003de](https://github.com/BitGo/BitGoJS/commit/83003de987b49b5c462d08623d6687501958e4b5))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-coin-zketh:** add zketh token support ([086b86c](https://github.com/BitGo/BitGoJS/commit/086b86c7886174997a01bea04617256f66e08720))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add function to transfer nfts ([b77b386](https://github.com/BitGo/BitGoJS/commit/b77b386bf77408d4b1617ba3bc44e5899a65f2e0))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new fields to StakeOptions ([ed90855](https://github.com/BitGo/BitGoJS/commit/ed90855118014238684643597c8cc9a024d223bf))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add optional StakeOptions fields ([bff557c](https://github.com/BitGo/BitGoJS/commit/bff557c5d5cc6f5e53096d7ea8a9848b97e18249))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** flag to do segwit override for bulk consolidations ([2bcdaf0](https://github.com/BitGo/BitGoJS/commit/2bcdaf01953daf68734e96a0046cf69f85a602f1))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** provide skipKeychain to wallet share API request ([4fcc705](https://github.com/BitGo/BitGoJS/commit/4fcc705e04de4c6beed541b096f2fe65b44c0a53))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- rename coin module, coin name, named exports for coreum

# [18.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@18.0.0) (2023-12-18)

### Bug Fixes

- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- add address book methods to wallet class ([ff315b3](https://github.com/BitGo/BitGoJS/commit/ff315b33c225e1b56870cf2bc41b68fab520bb92))
- add bitgo network methods to trading class ([94b3093](https://github.com/BitGo/BitGoJS/commit/94b3093e8cd5791e5fd1877341d4ab7ab5a7009f))
- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **root:** whitelist apiVersion for buildAccountConsolidations ([83003de](https://github.com/BitGo/BitGoJS/commit/83003de987b49b5c462d08623d6687501958e4b5))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add function to transfer nfts ([b77b386](https://github.com/BitGo/BitGoJS/commit/b77b386bf77408d4b1617ba3bc44e5899a65f2e0))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new fields to StakeOptions ([ed90855](https://github.com/BitGo/BitGoJS/commit/ed90855118014238684643597c8cc9a024d223bf))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add optional StakeOptions fields ([bff557c](https://github.com/BitGo/BitGoJS/commit/bff557c5d5cc6f5e53096d7ea8a9848b97e18249))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** flag to do segwit override for bulk consolidations ([2bcdaf0](https://github.com/BitGo/BitGoJS/commit/2bcdaf01953daf68734e96a0046cf69f85a602f1))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** provide skipKeychain to wallet share API request ([4fcc705](https://github.com/BitGo/BitGoJS/commit/4fcc705e04de4c6beed541b096f2fe65b44c0a53))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- rename coin module, coin name, named exports for coreum

# [17.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@17.0.0) (2023-12-12)

### Bug Fixes

- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- add address book methods to wallet class ([ff315b3](https://github.com/BitGo/BitGoJS/commit/ff315b33c225e1b56870cf2bc41b68fab520bb92))
- add bitgo network methods to trading class ([94b3093](https://github.com/BitGo/BitGoJS/commit/94b3093e8cd5791e5fd1877341d4ab7ab5a7009f))
- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new fields to StakeOptions ([ed90855](https://github.com/BitGo/BitGoJS/commit/ed90855118014238684643597c8cc9a024d223bf))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add optional StakeOptions fields ([bff557c](https://github.com/BitGo/BitGoJS/commit/bff557c5d5cc6f5e53096d7ea8a9848b97e18249))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** flag to do segwit override for bulk consolidations ([2bcdaf0](https://github.com/BitGo/BitGoJS/commit/2bcdaf01953daf68734e96a0046cf69f85a602f1))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** provide skipKeychain to wallet share API request ([4fcc705](https://github.com/BitGo/BitGoJS/commit/4fcc705e04de4c6beed541b096f2fe65b44c0a53))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- rename coin module, coin name, named exports for coreum

# [16.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@16.0.0) (2023-12-09)

### Bug Fixes

- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- add address book methods to wallet class ([ff315b3](https://github.com/BitGo/BitGoJS/commit/ff315b33c225e1b56870cf2bc41b68fab520bb92))
- add bitgo network methods to trading class ([94b3093](https://github.com/BitGo/BitGoJS/commit/94b3093e8cd5791e5fd1877341d4ab7ab5a7009f))
- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new fields to StakeOptions ([ed90855](https://github.com/BitGo/BitGoJS/commit/ed90855118014238684643597c8cc9a024d223bf))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add optional StakeOptions fields ([bff557c](https://github.com/BitGo/BitGoJS/commit/bff557c5d5cc6f5e53096d7ea8a9848b97e18249))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- rename coin module, coin name, named exports for coreum

# [15.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@15.0.0) (2023-12-05)

### Bug Fixes

- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** improve error handling for consolidateAccount ([0d74c2a](https://github.com/BitGo/BitGoJS/commit/0d74c2aaca1076ad6b9ca9bd2de38ade56c886e3))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- rename coin module, coin name, named exports for coreum

# [14.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@14.0.0) (2023-11-28)

### Bug Fixes

- **root:** add source to tss smc wallet creation ([316ff20](https://github.com/BitGo/BitGoJS/commit/316ff200f5eb8803f3591ab28a5c1b1f27f28e38))
- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add sol token recovery support ([8a46e48](https://github.com/BitGo/BitGoJS/commit/8a46e482205fb33439e123dc288720225926b443))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add custodial and smc tss wallet to generateWallet method ([ea80f4f](https://github.com/BitGo/BitGoJS/commit/ea80f4fa208ca6874fdd7d99d597c347e4628ecc))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- rename coin module, coin name, named exports for coreum

# [13.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@13.0.0) (2023-11-24)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- rename coin module, coin name, named exports for coreum

# [12.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@12.0.0) (2023-11-17)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix coreum node url ([936c76d](https://github.com/BitGo/BitGoJS/commit/936c76d65d7d6b0eaf42ed96c63db1e5efaa62f7))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- **statics:** make corrections for arbeth and opeth ([5dfc405](https://github.com/BitGo/BitGoJS/commit/5dfc405a36fc97b2c902fec44562b169d8013a18))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))
- use whitelisted send params for tx initiate ([0cf9f4c](https://github.com/BitGo/BitGoJS/commit/0cf9f4c4aeb8a74cd81aad4b0da08d1de30d73a0))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- deprecate old settlement code ([550380d](https://github.com/BitGo/BitGoJS/commit/550380d7838586a407bfb805d2ac7e99c6cf1cec))
- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add support for bulk unspent consolidation ([daee9f0](https://github.com/BitGo/BitGoJS/commit/daee9f0a3480bbae08a5b06d1c7c683ce979210a))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** allow tss signing with unencrypted prv ([306dd37](https://github.com/BitGo/BitGoJS/commit/306dd37d61f8648b65be6ca99b0f4014fdc5a61b))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- rename coin module, coin name, named exports for coreum

# [11.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@11.0.0) (2023-11-13)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- rename coin module, coin name, named exports for coreum

# [10.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@10.0.0) (2023-11-13)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- rename coin module, coin name, named exports for coreum

# [9.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@9.0.0) (2023-11-13)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** fix issue related to bignumber version ([519fe47](https://github.com/BitGo/BitGoJS/commit/519fe479ef51a72ddc1e94f87c10e031c0fd2c3f))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))
- **sdk-core:** use BuildParams.encode when consolidating unspents ([f83f096](https://github.com/BitGo/BitGoJS/commit/f83f096b2839a0324d891d81c01e5265d10e4b97))
- use public types for tx send ([6a0e5c7](https://github.com/BitGo/BitGoJS/commit/6a0e5c74d27d4a7ed5e9972e184fb9744b15793e))

### Code Refactoring

- rename coin 'core' to 'coreum' ([baecc01](https://github.com/BitGo/BitGoJS/commit/baecc013ff7243ce78ebd767bffdb0763b8b4cdb))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** get utxo script types by coin ([b3cbc61](https://github.com/BitGo/BitGoJS/commit/b3cbc617565547b05d6ae2b1df184e9c0e2e247c))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))
- use psbt for prebuild when wallet is distributedCustody ([10f5e1a](https://github.com/BitGo/BitGoJS/commit/10f5e1ab37d2bea6acd93f94defbe786e4a027b9))

### BREAKING CHANGES

- rename coin module, coin name, named exports for coreum

# [8.26.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.26.0) (2023-10-20)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix dc wallet creation ([70c5e35](https://github.com/BitGo/BitGoJS/commit/70c5e35525c2803f739265ebbc734ab8de4d1870))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))

# [8.25.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.25.0) (2023-10-18)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** fix ecdsa with external signer ([09884c0](https://github.com/BitGo/BitGoJS/commit/09884c03f971e71c55f0461b449c18cf68c095db))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-algo:** support for token enablement ([af718c9](https://github.com/BitGo/BitGoJS/commit/af718c992d0663722fe951f0a29a20825ba0e91c))
- **sdk-coin-bera:** add Berachain skeleton ([b3d43c5](https://github.com/BitGo/BitGoJS/commit/b3d43c52c7fd10d5fdc40123b3ad61cfe4784e5d))
- **sdk-coin-core:** add coreum sdk ([af73ccd](https://github.com/BitGo/BitGoJS/commit/af73ccd445b52dcf378ebd18260e628de0687043))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-islm:** add Islamic Coin ([c49bdd1](https://github.com/BitGo/BitGoJS/commit/c49bdd18df36a20d6e27cdd2686ec687bf653596))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add new method to sign tss txs ([3e2654d](https://github.com/BitGo/BitGoJS/commit/3e2654d31baae8723d5a449ed79be14980410e1b))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** create distributed custody wallet ([e53c9a4](https://github.com/BitGo/BitGoJS/commit/e53c9a489b557198fc1606856f32d7ede85e269b))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** generate and verify schnorr proof of X_i ([ff58298](https://github.com/BitGo/BitGoJS/commit/ff58298c21ee8de4f6cee4fec857666e9556d0f3))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-core:** whitelist distributed custody params ([2536388](https://github.com/BitGo/BitGoJS/commit/253638867d28e874d7d1ba808558cea16bc743f7))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))

# [8.24.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.24.0) (2023-09-25)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add change address type for utxo coins ([711ba2d](https://github.com/BitGo/BitGoJS/commit/711ba2d8bd00cbb0ec644eefd20356507a50adb1))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** do not sign txRequest full with PA ([6558de2](https://github.com/BitGo/BitGoJS/commit/6558de263edea51ff2c87dc37889af5ba0654a4d))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** add tx builder for delegate and deactivate ([a7cdaaa](https://github.com/BitGo/BitGoJS/commit/a7cdaaa5a7b3bab83bccc82a7c001a9f23e94207))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-sui:** add custom tx type ([8136220](https://github.com/BitGo/BitGoJS/commit/81362200468f8a2d25b97186f56de5d5729fa0cf))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** phase 5 of gg18 signing ([d8ab3df](https://github.com/BitGo/BitGoJS/commit/d8ab3df38c7f0dc445117f68340cd3f17dfc9a68))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))
- update secp256k1 to 5.0.0 and keccak to 3.0.3 ([e2c37e6](https://github.com/BitGo/BitGoJS/commit/e2c37e6b0139c9f6948a22d8921bc3e1f88bed4c))

# [8.23.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.23.0) (2023-09-09)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))

# [8.22.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.22.0) (2023-09-09)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))

# [8.21.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.21.0) (2023-09-07)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** add rebuild step before eddsa signing ([462c7f8](https://github.com/BitGo/BitGoJS/commit/462c7f8519a96fcbc8d333a49b24d2d07479590b))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))

# [8.20.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.20.0) (2023-09-05)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-sol:** create method to produce broadcastable sol sweep txn ([d69ca4e](https://github.com/BitGo/BitGoJS/commit/d69ca4ea0688c4cf7c738ca826a9231438bb49c5))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))

# [8.19.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.19.0) (2023-09-01)

### Bug Fixes

- **root:** update @types/node ([cedc1a0](https://github.com/BitGo/BitGoJS/commit/cedc1a0035e79bb42fda57bf6ac29d606242f50b))
- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-dot:** create function to produce broadcastable dot sweep ([ad9c9c4](https://github.com/BitGo/BitGoJS/commit/ad9c9c4cc79639a5745e82f62566afa6db2b8c6d))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-trx:** batch consolidate native TRX to base ([a781709](https://github.com/BitGo/BitGoJS/commit/a781709e296ac37edd8c49587fb46a3ae0202cce))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))

# [8.18.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.18.0) (2023-08-29)

### Bug Fixes

- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-coin-zeta:** add recovery functionality for zeta ([b7d428f](https://github.com/BitGo/BitGoJS/commit/b7d428fcd69a22add44399a9a0e4eeb4519c4113))
- **sdk-core:** add helpers to support resigning ent challenges ([e9bb150](https://github.com/BitGo/BitGoJS/commit/e9bb1505af331f6caa7b0bcda2037483f57238fd))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add type for serializedNtilde with verifiers ([b8ba323](https://github.com/BitGo/BitGoJS/commit/b8ba323b5a00fceb1017c1c953375edbd5459f60))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))

# [8.17.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.17.0) (2023-08-25)

### Bug Fixes

- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** export bip32HdTree as BIP32 ([cc80aa6](https://github.com/BitGo/BitGoJS/commit/cc80aa6dfc7ba7ac0657df6a685c7ebd6dc094a0))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **express:** add external signer support for signig with derivation paths ([ceb89dd](https://github.com/BitGo/BitGoJS/commit/ceb89dd72b7f5f7c59484d5517ac32c4f499fd32))
- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))
- **sdk-core:** use BuildParams codec in Wallet.sendAccountConsolidation ([7d340ec](https://github.com/BitGo/BitGoJS/commit/7d340ec674116badf3b05aadf1d9aae130a8c69d))
- **sdk-lib-mpc:** move ecdsa hdtree from core ([f0311a8](https://github.com/BitGo/BitGoJS/commit/f0311a8606b1a6aa82309ef7bb9a349782819c28))
- **sdk-lib-mpc:** move shamir ([42fc946](https://github.com/BitGo/BitGoJS/commit/42fc946c8a5c4a1f7a09e5a9cb6c64a0b266a2a7))
- **sdk-lib-mpc:** move types to types.ts ([cf2f482](https://github.com/BitGo/BitGoJS/commit/cf2f4821792172b1657fbcecd8886df5bacd817a))

# [8.16.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.16.0) (2023-08-24)

### Bug Fixes

- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** handle txRequest full PA before signing ([9de0eae](https://github.com/BitGo/BitGoJS/commit/9de0eae7cab1ad406e80a818555a7c8557b47eb3))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))
- **sdk-core:** add, use SendTransactionRequest and BuildParams codecs ([724fc6c](https://github.com/BitGo/BitGoJS/commit/724fc6c3adee3ef7dbeb39e023f2270ff36a233d))
- **sdk-core:** extend build param codec ([e224ca3](https://github.com/BitGo/BitGoJS/commit/e224ca306608e9618d080fdb623db09307a91910))
- **sdk-core:** use BuildParams codec in Wallet.accelerateTransaction ([a9fab81](https://github.com/BitGo/BitGoJS/commit/a9fab813f27cdb40123c49b01570ecb6b9a67d91))

# [8.15.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.15.0) (2023-08-16)

### Bug Fixes

- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))

# [8.14.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.13.0...@bitgo/sdk-core@8.14.0) (2023-08-16)

### Bug Fixes

- **sdk-core:** add pendingappr id in build api ([3ace9ac](https://github.com/BitGo/BitGoJS/commit/3ace9ac74a0729f8ade84e8a0c8cd67429563147))
- **sdk-core:** include tests in tsconfig.json ([91c1c6c](https://github.com/BitGo/BitGoJS/commit/91c1c6c47f809cbd826db2a7a59c96b74f0273e9))
- **sdk-core:** move --recursive flag to package.json ([1147ebe](https://github.com/BitGo/BitGoJS/commit/1147ebe3d2ab1868fe1c6bbf343f68becc7d1169))

### Features

- **sdk-coin-sol:** add transaction message authorize builder ([649b7df](https://github.com/BitGo/BitGoJS/commit/649b7df0f65c2eee08e7c1e009ebb3c03cf4d011))
- **sdk-core:** add postWithCodec utility function ([ff1ad07](https://github.com/BitGo/BitGoJS/commit/ff1ad07dfe476d38ae17cfb691ef0e6375a394ea))

# [8.13.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.11.0...@bitgo/sdk-core@8.13.0) (2023-08-04)

### Bug Fixes

- **sdk-core:** include paillier in tests ([1de3bc2](https://github.com/BitGo/BitGoJS/commit/1de3bc2cd6a8eb2164f975f317c53dd23af68b96))
- **sdk-core:** use prebuilt-tx with tss full sendmany ([4adebcb](https://github.com/BitGo/BitGoJS/commit/4adebcba016d4ea163da4346f07af931daefaf43))
- **sdk-core:** Use PrebuiltTx with Tss Full SendMany ([24af742](https://github.com/BitGo/BitGoJS/commit/24af7429ec4215ddd728f6ed16a6b3b07173bde6))

### Features

- **express:** support ECDSA TSS in external signer ([03356c1](https://github.com/BitGo/BitGoJS/commit/03356c15f6ddb274c1e529f0efe21ed62168c807))
- **sdk-coin-sol:** add staking authorize builder ([57475b7](https://github.com/BitGo/BitGoJS/commit/57475b7249b7cf195b9f2c0073da77e67287f015))
- **sdk-coin-zeta:** zeta sdk init along with testcases ([b92d793](https://github.com/BitGo/BitGoJS/commit/b92d793a59ee1116e8f202b0f97c6720f6a76ab5))
- **sdk-core:** add pallier pub to bitgo tss key creation ([7461c85](https://github.com/BitGo/BitGoJS/commit/7461c85fe847a5b3b8f7963bc25fb66ad4762612))
- **sdk-core:** add util to get public key from commonKeychain ([289fba0](https://github.com/BitGo/BitGoJS/commit/289fba02eaa137cb3f8f0cfd81d9e886a5ae3f7d))

# [8.12.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.11.0...@bitgo/sdk-core@8.12.0) (2023-07-28)

### Bug Fixes

- **sdk-core:** include paillier in tests ([1de3bc2](https://github.com/BitGo/BitGoJS/commit/1de3bc2cd6a8eb2164f975f317c53dd23af68b96))
- **sdk-core:** use prebuilt-tx with tss full sendmany ([4adebcb](https://github.com/BitGo/BitGoJS/commit/4adebcba016d4ea163da4346f07af931daefaf43))
- **sdk-core:** Use PrebuiltTx with Tss Full SendMany ([24af742](https://github.com/BitGo/BitGoJS/commit/24af7429ec4215ddd728f6ed16a6b3b07173bde6))

### Features

- **express:** support ECDSA TSS in external signer ([03356c1](https://github.com/BitGo/BitGoJS/commit/03356c15f6ddb274c1e529f0efe21ed62168c807))
- **sdk-coin-sol:** add staking authorize builder ([57475b7](https://github.com/BitGo/BitGoJS/commit/57475b7249b7cf195b9f2c0073da77e67287f015))
- **sdk-coin-zeta:** zeta sdk init along with testcases ([b92d793](https://github.com/BitGo/BitGoJS/commit/b92d793a59ee1116e8f202b0f97c6720f6a76ab5))
- **sdk-core:** add pallier pub to bitgo tss key creation ([7461c85](https://github.com/BitGo/BitGoJS/commit/7461c85fe847a5b3b8f7963bc25fb66ad4762612))
- **sdk-core:** add util to get public key from commonKeychain ([289fba0](https://github.com/BitGo/BitGoJS/commit/289fba02eaa137cb3f8f0cfd81d9e886a5ae3f7d))

# [8.11.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.10.0...@bitgo/sdk-core@8.11.0) (2023-07-18)

### Bug Fixes

- **sdk-core:** do not treat sol as a utxo-coin for approval ([a1cc144](https://github.com/BitGo/BitGoJS/commit/a1cc14489b7d8998f4a5fc53d95d30b3cc6c48a5))
- **sdk-core:** fix createTssBitGoKeyFromOvcShares method ([70e3e13](https://github.com/BitGo/BitGoJS/commit/70e3e136b3a6217d2c543a101d4e6068371d82a1))
- **sdk-core:** fix prebuildTransactionTss method ([d65487a](https://github.com/BitGo/BitGoJS/commit/d65487a42227faa290737b978fd9f94e51bf1da3))
- **sdk-core:** make amount optional in stake options ([19039a5](https://github.com/BitGo/BitGoJS/commit/19039a58987c2bfadd7466af6cb9c2397e56188f))

### Features

- **abstract-utxo:** move keysSignatures test to separate file ([b9fa5c5](https://github.com/BitGo/BitGoJS/commit/b9fa5c57ae6207974612c96c4cf0941665703a4e))
- **express:** implement EdDSA commitments for external signer ([52ccfe7](https://github.com/BitGo/BitGoJS/commit/52ccfe7ee79ee78e32448eedb91a955fe56cb8b2))
- **sdk-coin-ada:** split claim rewards and claim unstaked ([271ccca](https://github.com/BitGo/BitGoJS/commit/271ccca2be0d562cb8f204002f229c11f1f80094))
- **sdk-coin-injective:** injective sdk init along with testcases ([3cf36cc](https://github.com/BitGo/BitGoJS/commit/3cf36cc94eee7439109516e344c6d278443ff019))
- **sdk-core:** add stakeMany to stake options ([0a8772a](https://github.com/BitGo/BitGoJS/commit/0a8772a4980a97b32c2117ae7a191ebd1933be83))

### Reverts

- Revert "chore(sdk-coin-bnb): create new bnb module" ([e998a04](https://github.com/BitGo/BitGoJS/commit/e998a04de3df1069a7cc59a7f6d9fc7ca7f515d0))

# [8.10.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.9.0...@bitgo/sdk-core@8.10.0) (2023-06-21)

### Bug Fixes

- **sdk-core:** recreate tx for account coins ([16d1244](https://github.com/BitGo/BitGoJS/commit/16d1244ce79a72474ce21dee5ec79499c5cc2963))

### Features

- **abstract-utxo:** support express external signer for musig2 inputs ([4401367](https://github.com/BitGo/BitGoJS/commit/44013673d564c976ae7b55788369dc48acbec64f))
- **sdk-coin-bld:** agoric sdk along with testcases ([3cba328](https://github.com/BitGo/BitGoJS/commit/3cba3289ea2d37122ff5274c8d373986c53b33d2))
- **sdk-coin-hash:** provenance sdk init along with testcases ([7ab7cca](https://github.com/BitGo/BitGoJS/commit/7ab7ccad66e394298befdbb993abc182943ecf5c))
- **sdk-coin-sei:** sei sdk init along with testcases ([d7fac3f](https://github.com/BitGo/BitGoJS/commit/d7fac3f17ca99535a9d0aa81acd6d1d84bf5d54d))

# [8.9.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.8.0...@bitgo/sdk-core@8.9.0) (2023-06-14)

### Features

- **root:** use eddsa commitment for tss utils and signing ([b14b64f](https://github.com/BitGo/BitGoJS/commit/b14b64fbcb4cf65880154586b777992be0e49d37))
- **sdk-core:** remove ecdsa tss feature flag ([1382684](https://github.com/BitGo/BitGoJS/commit/1382684250102d13ff829f84d724331f8c8dd073))

# [8.8.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.7.1...@bitgo/sdk-core@8.8.0) (2023-06-13)

### Features

- **sdk-coin-tia:** celestia sdk along with testcases ([1d104e0](https://github.com/BitGo/BitGoJS/commit/1d104e0d0ac0c813d16cd6da759b1a904bab4641))
- **sdk-core:** accelerateTransaction always uses txFormat=psbt ([41da856](https://github.com/BitGo/BitGoJS/commit/41da85613862753e301f57163f3e5c10ed7477de))
- **sdk-core:** make paillier proofs mandatory ([4c62dd8](https://github.com/BitGo/BitGoJS/commit/4c62dd8bae41b0a66a4aa840c16f2cdf5abc9997))
- **sdk-core:** manageUnspents overrides txFormat during bss ([1f53a9d](https://github.com/BitGo/BitGoJS/commit/1f53a9d91767c8e0c3deca74a66b881f92a2d2b6))
- **sdk-core:** sendMany always builds with psbt format for non-tss ([8c894b2](https://github.com/BitGo/BitGoJS/commit/8c894b2adef167abb1e8eb57b5643e1eaf69cc77))
- **sdk-core:** sweepWallet uses txFormat='psbt' ([bc80b3d](https://github.com/BitGo/BitGoJS/commit/bc80b3db5d917961bd5f8446bba8bef2f89f5c8e))

## [8.7.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.7.0...@bitgo/sdk-core@8.7.1) (2023-06-07)

### Bug Fixes

- **sdk-core:** add previewPendingTxs flag ([c3c5eb0](https://github.com/BitGo/BitGoJS/commit/c3c5eb02ff62ce33cb8e42c306fb72196a802536))

# [8.7.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.6.0...@bitgo/sdk-core@8.7.0) (2023-06-05)

### Bug Fixes

- **sdk-core:** add previewPendingApprovals flag ([7efad87](https://github.com/BitGo/BitGoJS/commit/7efad873b339e4a246859383e099a6d022962e05))
- **sdk-core:** fix pending approval for consolidation ([3589434](https://github.com/BitGo/BitGoJS/commit/35894347a5e03e67ae97c37f921f803878b89396))
- **sdk-core:** pass correct n value for keyDerive ([7c7e82f](https://github.com/BitGo/BitGoJS/commit/7c7e82fd1d473ce31bd2a12b1d0496c4df8c050a))
- **sdk-core:** retrieve bitgo modulus for ecdsa signing ([b43279b](https://github.com/BitGo/BitGoJS/commit/b43279beecba52fa21a480d994d01b3706bdf583))
- **sdk-lib-mpc:** pallier -> paillier ([9d0a12d](https://github.com/BitGo/BitGoJS/commit/9d0a12dd1d2e1d6e3107f62e2757263fb2fd258e))

### Features

- **root:** add optional paillier proof plumbing ([18093bf](https://github.com/BitGo/BitGoJS/commit/18093bfc370745130958075349814d493d5a8c72))
- **sdk-coin-osmo:** staking implementation with testcases ([a90c00b](https://github.com/BitGo/BitGoJS/commit/a90c00bd6e49d2a7898b8d4624514708c4f90fb9))
- **sdk-core:** paillier proof user<>backup ([8c0a381](https://github.com/BitGo/BitGoJS/commit/8c0a381318be2088572e06e34c3627323d7bfe38))
- **sdk-core:** refactor signConvert to steps ([94e2cae](https://github.com/BitGo/BitGoJS/commit/94e2cae6e1292a4e9684c3c2ab7141221137d52e))
- **sdk-core:** simplify mpc.appendChallenge ([67bee8f](https://github.com/BitGo/BitGoJS/commit/67bee8f1b4f37cd12d6d14ea4d51ddcfde679563))
- **sdk-lib-mpc:** add tests for palierproof and utils ([7c4674b](https://github.com/BitGo/BitGoJS/commit/7c4674b430741ccb33f4b447b4efca7942ee70e7))
- **sdk-lib-mpc:** make rangeProof challenges mandatory for appendChallenge ([1f68b30](https://github.com/BitGo/BitGoJS/commit/1f68b30676966720cb1a42c039e35d3ddeea4974))

# [8.6.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.5.0...@bitgo/sdk-core@8.6.0) (2023-05-25)

### Bug Fixes

- **bitgo:** should skip password validation in external signing ([a0cde4d](https://github.com/BitGo/BitGoJS/commit/a0cde4dacf7a48669f487d17f896e414fb5ee9df))
- **sdk-core:** fix time issue when checking gpg wallet signatures from bitgo ([a7fa97b](https://github.com/BitGo/BitGoJS/commit/a7fa97b5b483168ad2385f4d4590d39f1476ed94))

### Features

- **abstract-utxo:** add psbt and musig2 support for sdk-api ([7a23991](https://github.com/BitGo/BitGoJS/commit/7a23991079e5609d43d7483f8137189163943dfc))
- **root:** implement eddsa signing with commitment ([d67ac81](https://github.com/BitGo/BitGoJS/commit/d67ac81f5b77451de1e03eba3c93a9b0e11e7b7c))
- **sdk-coin-atom:** add recover mechanism for ATOM ([0e4cfc7](https://github.com/BitGo/BitGoJS/commit/0e4cfc74201f9a44ec3b4b9c7591a6fbd3f2efb6))

# [8.5.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.4.0...@bitgo/sdk-core@8.5.0) (2023-05-17)

### Features

- **sdk-core:** method to parse json from OVC to create TSS bitgo key ([c045934](https://github.com/BitGo/BitGoJS/commit/c04593412b5988dbb27769500c64feed27c1a75a))

# [8.4.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.3.0...@bitgo/sdk-core@8.4.0) (2023-05-10)

### Features

- **sdk-core:** add more whitelisted build params ([f468837](https://github.com/BitGo/BitGoJS/commit/f4688370df274e42622cb1e67b617f30c486ab70))
- **sdk-core:** pre validate wallet pass phrase ([77f37e6](https://github.com/BitGo/BitGoJS/commit/77f37e6e811aa61a8ba577136f01fab073ef8fe4))
- **sdk-core:** stop calling staking service send api for full version ([49d13f1](https://github.com/BitGo/BitGoJS/commit/49d13f1c4a3660bfd75b7072f19f612fe040b0e4))

# [8.3.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.2.0...@bitgo/sdk-core@8.3.0) (2023-05-03)

### Bug Fixes

- **sdk-core:** fix incorrect check verifying range proof ([3c74334](https://github.com/BitGo/BitGoJS/commit/3c74334721a1517b474540f38a7443368f0e8e3b))
- **sdk-core:** fix url path of fetching tss config API ([0d61a31](https://github.com/BitGo/BitGoJS/commit/0d61a31f3dfd6b5e892bbeb38889f56540a12cda))
- **sdk-core:** use coin agnostic url for get challenges ([3661ff8](https://github.com/BitGo/BitGoJS/commit/3661ff8a8fcf52d8290c5fff54339c53938bdcbf))

### Features

- **sdk-core:** enable signing with enterprise challenge ([68391c1](https://github.com/BitGo/BitGoJS/commit/68391c1b165ae63f67ef37f2ea2344aeb21cc9d8))
- **sdk-core:** move ntilde (de/se)rialize methods ([5ee0e41](https://github.com/BitGo/BitGoJS/commit/5ee0e41f8aff8bbc232f6c504a3938dd1e27cba1))
- **sdk-core:** save enterprise data on get ([58109d3](https://github.com/BitGo/BitGoJS/commit/58109d3a916d09c0e29072fbaecc442fea930873))

# [8.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.1.0...@bitgo/sdk-core@8.2.0) (2023-04-25)

### Features

- **sdk-core:** add enterprise method to fetch ecdsa config ([59a2eae](https://github.com/BitGo/BitGoJS/commit/59a2eaea91c03bca95f485e933bfdd3b52896796))
- **sdk-core:** generate and verify Ntilde Proofs ([e3dbb1b](https://github.com/BitGo/BitGoJS/commit/e3dbb1b58f41656c594035b1c7b50dbe4bc3cd33))
- **sdk-core:** initate, sign and verify ecdsa challenges for enterprise ([529ad9e](https://github.com/BitGo/BitGoJS/commit/529ad9e43e5123359c7417f3af2f5766e752474e))
- **sdk-core:** update ecdsa signing to use enterprise challenge ([c626f00](https://github.com/BitGo/BitGoJS/commit/c626f00e141db2ef4147b3e0c4badf1776729465))

# [8.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@8.0.0...@bitgo/sdk-core@8.1.0) (2023-04-20)

### Bug Fixes

- **bitgo:** restrict receive address withdrawals ([8257552](https://github.com/BitGo/BitGoJS/commit/8257552085e8fd7a6e41865db902d10a3f1c8cc8)), closes [#3486](https://github.com/BitGo/BitGoJS/issues/3486)
- **bitgo:** restrict receive address withdrawals ([c563742](https://github.com/BitGo/BitGoJS/commit/c5637420dea8904f45bf9b75ced69839301ee315))
- **root:** update tests using safe primes ([5a275ff](https://github.com/BitGo/BitGoJS/commit/5a275ffbf3eecf351dfbb0b4538d62dd0a2f2a43))

### Features

- **sdk-core:** implement openssl wasm class ([dce32e3](https://github.com/BitGo/BitGoJS/commit/dce32e3fb6b5238f4791068cbdf5a2a797f9a157))

# [8.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@7.0.1...@bitgo/sdk-core@8.0.0) (2023-04-13)

### Bug Fixes

- **bitgo:** add argument to create address on ofc wallets ([b1a212d](https://github.com/BitGo/BitGoJS/commit/b1a212d05962719822c8420acf4f01dc6e012d16))
- conditional check to custodial consolidation ([46cda4e](https://github.com/BitGo/BitGoJS/commit/46cda4e97bf060dd886d86bc254a6f709c09fe11))
- **sdk-core:** add new function in BaseCoin to get hash-function ([e028b31](https://github.com/BitGo/BitGoJS/commit/e028b31b3954810ee6c3fd7fdfa6ed4a07aa458e))
- **sdk-core:** add walletpassphrase to message signing ([7265c67](https://github.com/BitGo/BitGoJS/commit/7265c674e4934c00309525b4474d34c137a53cb9))
- **sdk-core:** change testnet ada node url in config ([8e7e185](https://github.com/BitGo/BitGoJS/commit/8e7e185c20c4c631a89ffb8a4074d80bd673b2dc))
- **sdk-core:** create reqid if not present ([758c198](https://github.com/BitGo/BitGoJS/commit/758c198aaf6a04553d0031f4a429aa109aa8f11e))
- **sdk-core:** eth tss receive address ([a67a98a](https://github.com/BitGo/BitGoJS/commit/a67a98a82e8a19c1f1c126900e273691be08d70c))
- **sdk-core:** fix parameter misordering for user gpg key ([225246e](https://github.com/BitGo/BitGoJS/commit/225246e7d52974c216e3b4ff7cfaf9edb213eb3e))
- **sdk-core:** return txreqid and raw message ([89944a5](https://github.com/BitGo/BitGoJS/commit/89944a5b23caea91bf7e9f61732abcd90bd0c61a))
- used derived keys and use xonly public key for script ([382ce07](https://github.com/BitGo/BitGoJS/commit/382ce073b660f2d002176e3a8fdcadcf5bbaff6a))

### Features

- add inscription builder class ([214eafe](https://github.com/BitGo/BitGoJS/commit/214eafe48e8d12fd5d58efac289bab33bbd46fd3))
- express route for signing arbitrary payloads ([808acec](https://github.com/BitGo/BitGoJS/commit/808acecc68d40edeb93f8365e45a01746cf98f97))
- **sdk-coin-btc:** transfer an inscription ([bc2eda8](https://github.com/BitGo/BitGoJS/commit/bc2eda86f73a4e4451fd6accbc2a794f08649b78))
- **sdk-coin-polygon:** support evm based cross chain recovery ([a88681f](https://github.com/BitGo/BitGoJS/commit/a88681f8428bcb6617ee2c7cfe5e8294b603af9f))
- **sdk-coin-sui:** add mystenlab types and remove old impl of transfer ([4a8aeaa](https://github.com/BitGo/BitGoJS/commit/4a8aeaa97cb372dfaa2b364fd9c617f47f037d03))
- **sdk-core:** add `switchValidator` for stakingWallet ([c067695](https://github.com/BitGo/BitGoJS/commit/c0676959b9f103ef45439ce32412cca27bf81642))
- **sdk-core:** add sha256 hash support in ecdsa tss signing ([b43d733](https://github.com/BitGo/BitGoJS/commit/b43d7330aa15174fdc07fc6800d19dd88055deb2))
- **sdk-core:** add signedChildPsbt to halfSigned object ([f1c1ac5](https://github.com/BitGo/BitGoJS/commit/f1c1ac59e9c45ea01d8133bcac502c67a465a000))
- **sdk-core:** allow passing a list of delegations for eth ([e6b7022](https://github.com/BitGo/BitGoJS/commit/e6b70226eb7735931c433c0888b8bbd0f8594234))
- **sdk-core:** enable fillNonce and acceleration tx for receive address ([09f05f3](https://github.com/BitGo/BitGoJS/commit/09f05f3f18994e5bd0600ba2f98f2f860ea85bd0))
- **utxo-lib:** create p2tr address using musig2 ([699e829](https://github.com/BitGo/BitGoJS/commit/699e8291f4a205ba0b2071c6369f2c8843b8a945))

### BREAKING CHANGES

- **sdk-core:** return txreqid, raw message, and txhash instead of just txhash

Ticket: BG-68940

## [7.0.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@7.0.0...@bitgo/sdk-core@7.0.1) (2023-02-17)

### Bug Fixes

- append bitgo challenge to bitgo a share ([4ef60e5](https://github.com/BitGo/BitGoJS/commit/4ef60e56d33d36c6ac0ba74986c45d19b52914e3))
- polygon recovery with range proof ([19317f7](https://github.com/BitGo/BitGoJS/commit/19317f709354e61b3e4947870049e99f85556029))
- use post on get challenge end-point ([f2a8320](https://github.com/BitGo/BitGoJS/commit/f2a8320ea985132e052ab81472043a47ec7f57c1))

# [7.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@5.1.0...@bitgo/sdk-core@7.0.0) (2023-02-16)

### Bug Fixes

- **account-lib:** modify ECDSA keyShare to use bip32 lib ([9ce8f23](https://github.com/BitGo/BitGoJS/commit/9ce8f2330307e884cec99900433a7085c82e2b3c))
- **bitgo:** remove enforcement of HMAC verification on all non-prod environments ([118722c](https://github.com/BitGo/BitGoJS/commit/118722c80bfcf8cfc850e07d575ecf10aacb3fd2))
- **sdk-core:** correct ecdsa verifyWalletSigs() ([3b1476c](https://github.com/BitGo/BitGoJS/commit/3b1476cab6ae9a4888a03e15685e70f539df02c2))
- **sdk-core:** ecdsa signing vss share ([c9acc46](https://github.com/BitGo/BitGoJS/commit/c9acc46a64d3468f5bfa644f1c22b0348b096f7c))
- **sdk-core:** eddsa signing vss share ([ae40423](https://github.com/BitGo/BitGoJS/commit/ae404230eec93c0eb2ddfc386fdb18fc42e17c12))
- **sdk-core:** fix ecdsa tss wallet creation ([cd0eaec](https://github.com/BitGo/BitGoJS/commit/cd0eaec629da42cddcc9a2d16b93f5a8ba0ce3c1))
- **sdk-core:** fix tau and gamma selection according to whitepaper ([0a647e1](https://github.com/BitGo/BitGoJS/commit/0a647e1345716557f8c3320f16caf4c6aa13259e))
- **sdk-core:** get low balance forwarder ([6b8205c](https://github.com/BitGo/BitGoJS/commit/6b8205c449e2f5fe3dca0247d92dfdf2fdb6ef58))
- **sdk-core:** make derivation play nicely with rangeproofs ([26ad5b5](https://github.com/BitGo/BitGoJS/commit/26ad5b58ff72caa1859a9e6d9c8376f140e8213b))
- **sdk-core:** mark pub as optional in Keychain interface ([7d6012c](https://github.com/BitGo/BitGoJS/commit/7d6012cf1058e43d96e129dc2b1607b5316dca1c))
- **sdk-core:** reduce size of beta0 and nu0 per revised whitepaper ([94d50c9](https://github.com/BitGo/BitGoJS/commit/94d50c91b375aa8155eae71f1ad41d66ffbd37c5))
- **sdk-core:** sign typed data json stringify ([8adbb76](https://github.com/BitGo/BitGoJS/commit/8adbb76667a54c2e460f6d72a5de5bd6ce793d19))
- **sdk-core:** update fixtures and fix tests ([c936478](https://github.com/BitGo/BitGoJS/commit/c9364786d7d11c9fbb621109efb1fb43a894e9d4))
- **sdk-core:** update password for tss ([ab83d5d](https://github.com/BitGo/BitGoJS/commit/ab83d5d440e5624cadc1f0f247634ac310b68c8d))
- **sdk-core:** use hex toString() verify ecdsa ([aead4a4](https://github.com/BitGo/BitGoJS/commit/aead4a4e02842b552e7fc21927fedc8320148cb5))

### Features

- **account-lib:** make rangeproof stuff async ([380f288](https://github.com/BitGo/BitGoJS/commit/380f288e9cc5f6e98834e118bad65787e836c5a2))
- move vss proof data to be with signature share ([a2d2e11](https://github.com/BitGo/BitGoJS/commit/a2d2e11c26c36f15f4463fb50da8de4a399b7f34))
- **sdk-coin-sui:** add switch delegation tx ([08e6f94](https://github.com/BitGo/BitGoJS/commit/08e6f94d1640dd1796bafc7bd18bc7a35e76f8fd))
- **sdk-core:** add challenge endpoint for tss rangeproof ([fbd1019](https://github.com/BitGo/BitGoJS/commit/fbd101980fb88813cf1971d7f2915a830e10088e))
- **sdk-core:** add ecdsa to verifyShareProof() ([9be664b](https://github.com/BitGo/BitGoJS/commit/9be664b8ee4267e20e0a40d30653d3bd3795b205))
- **sdk-core:** add ecdsa wallet sig verification ([375be2d](https://github.com/BitGo/BitGoJS/commit/375be2d86002258ba11012888fea41094dabc39b))
- **sdk-core:** add range proofs ([0087be9](https://github.com/BitGo/BitGoJS/commit/0087be954030cf375aaa1ac1f6e78dee390addba))
- **sdk-core:** add type property to Keychain ([5092b29](https://github.com/BitGo/BitGoJS/commit/5092b29a653ae5e5abb7320f65a7d926a7e4cc9f))
- **sdk-core:** allow consolidateUnspents method to only build the tx also ([790f2d1](https://github.com/BitGo/BitGoJS/commit/790f2d1d1451c3ce4ffade7609eb0cd23424f43c))
- **sdk-core:** change beta to random coprime ([48f4dc6](https://github.com/BitGo/BitGoJS/commit/48f4dc69342989bdc386413656dc8f35255c0975))
- **sdk-core:** delete unused proof from mu share ([c621945](https://github.com/BitGo/BitGoJS/commit/c6219450ab99d716ba7bf7d3d9d8936bd2e1a994))
- **sdk-core:** ecdsa signing use derivation path ([f4ca720](https://github.com/BitGo/BitGoJS/commit/f4ca720587822fd295b1a97f78c9127c2576a46d))
- **sdk-core:** include keyShares in third party backup tss keychain ([c5997de](https://github.com/BitGo/BitGoJS/commit/c5997de87f85bb012665cfe538705eeadbb522cc))
- **sdk-core:** only generate range proof if ntilde present ([d332395](https://github.com/BitGo/BitGoJS/commit/d332395aa29f0491e3ff34681da156850f556766))
- **sdk-core:** rename type ([c81221f](https://github.com/BitGo/BitGoJS/commit/c81221f3961abe3d73f4bf3c8801fb7f1b4f9b27))
- **sdk-core:** use fix sized buffers when filling e preimage ([77cca38](https://github.com/BitGo/BitGoJS/commit/77cca388c54c6fb3e94e66ab394e52ea11dba329))
- **sdk-core:** use trust backup gpg for encrypting ([400a9af](https://github.com/BitGo/BitGoJS/commit/400a9af34a5eb1933965bfc675911cd24b8c605b))
- send enterprise id to backupkeys end-point ([701ff7c](https://github.com/BitGo/BitGoJS/commit/701ff7c1aa41ea82ce06b09b36613f0781ad5e9d))

### BREAKING CHANGES

- **sdk-core:** Keychain.pub is now optional
- **sdk-core:** rename type backupGpgKey to BackupGpgKey
- **sdk-core:** The `verifyEdShareProof` function is renamed to
  `verifyShareProof` and now expects a 4th parameter which must be a
  string of either `eddsa` or `ecdsa`.

# [6.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@5.1.0...@bitgo/sdk-core@6.0.0) (2023-02-08)

### Bug Fixes

- **bitgo:** remove enforcement of HMAC verification on all non-prod environments ([118722c](https://github.com/BitGo/BitGoJS/commit/118722c80bfcf8cfc850e07d575ecf10aacb3fd2))
- **sdk-core:** correct ecdsa verifyWalletSigs() ([3b1476c](https://github.com/BitGo/BitGoJS/commit/3b1476cab6ae9a4888a03e15685e70f539df02c2))
- **sdk-core:** fix ecdsa tss wallet creation ([cd0eaec](https://github.com/BitGo/BitGoJS/commit/cd0eaec629da42cddcc9a2d16b93f5a8ba0ce3c1))
- **sdk-core:** get low balance forwarder ([6b8205c](https://github.com/BitGo/BitGoJS/commit/6b8205c449e2f5fe3dca0247d92dfdf2fdb6ef58))
- **sdk-core:** make derivation play nicely with rangeproofs ([26ad5b5](https://github.com/BitGo/BitGoJS/commit/26ad5b58ff72caa1859a9e6d9c8376f140e8213b))
- **sdk-core:** sign typed data json stringify ([8adbb76](https://github.com/BitGo/BitGoJS/commit/8adbb76667a54c2e460f6d72a5de5bd6ce793d19))
- **sdk-core:** update fixtures and fix tests ([c936478](https://github.com/BitGo/BitGoJS/commit/c9364786d7d11c9fbb621109efb1fb43a894e9d4))
- **sdk-core:** update password for tss ([ab83d5d](https://github.com/BitGo/BitGoJS/commit/ab83d5d440e5624cadc1f0f247634ac310b68c8d))
- **sdk-core:** use hex toString() verify ecdsa ([aead4a4](https://github.com/BitGo/BitGoJS/commit/aead4a4e02842b552e7fc21927fedc8320148cb5))

### Features

- **account-lib:** make rangeproof stuff async ([380f288](https://github.com/BitGo/BitGoJS/commit/380f288e9cc5f6e98834e118bad65787e836c5a2))
- **sdk-core:** add challenge endpoint for tss rangeproof ([fbd1019](https://github.com/BitGo/BitGoJS/commit/fbd101980fb88813cf1971d7f2915a830e10088e))
- **sdk-core:** add ecdsa to verifyShareProof() ([9be664b](https://github.com/BitGo/BitGoJS/commit/9be664b8ee4267e20e0a40d30653d3bd3795b205))
- **sdk-core:** add ecdsa wallet sig verification ([375be2d](https://github.com/BitGo/BitGoJS/commit/375be2d86002258ba11012888fea41094dabc39b))
- **sdk-core:** add range proofs ([0087be9](https://github.com/BitGo/BitGoJS/commit/0087be954030cf375aaa1ac1f6e78dee390addba))
- **sdk-core:** add type property to Keychain ([5092b29](https://github.com/BitGo/BitGoJS/commit/5092b29a653ae5e5abb7320f65a7d926a7e4cc9f))
- **sdk-core:** change beta to random coprime ([48f4dc6](https://github.com/BitGo/BitGoJS/commit/48f4dc69342989bdc386413656dc8f35255c0975))
- **sdk-core:** delete unused proof from mu share ([c621945](https://github.com/BitGo/BitGoJS/commit/c6219450ab99d716ba7bf7d3d9d8936bd2e1a994))
- **sdk-core:** ecdsa signing use derivation path ([f4ca720](https://github.com/BitGo/BitGoJS/commit/f4ca720587822fd295b1a97f78c9127c2576a46d))
- **sdk-core:** include keyShares in third party backup tss keychain ([c5997de](https://github.com/BitGo/BitGoJS/commit/c5997de87f85bb012665cfe538705eeadbb522cc))
- **sdk-core:** only generate range proof if ntilde present ([d332395](https://github.com/BitGo/BitGoJS/commit/d332395aa29f0491e3ff34681da156850f556766))
- **sdk-core:** rename type ([c81221f](https://github.com/BitGo/BitGoJS/commit/c81221f3961abe3d73f4bf3c8801fb7f1b4f9b27))
- **sdk-core:** use fix sized buffers when filling e preimage ([77cca38](https://github.com/BitGo/BitGoJS/commit/77cca388c54c6fb3e94e66ab394e52ea11dba329))
- **sdk-core:** use trust backup gpg for encrypting ([400a9af](https://github.com/BitGo/BitGoJS/commit/400a9af34a5eb1933965bfc675911cd24b8c605b))
- send enterprise id to backupkeys end-point ([701ff7c](https://github.com/BitGo/BitGoJS/commit/701ff7c1aa41ea82ce06b09b36613f0781ad5e9d))

### BREAKING CHANGES

- **sdk-core:** rename type backupGpgKey to BackupGpgKey
- **sdk-core:** The `verifyEdShareProof` function is renamed to
  `verifyShareProof` and now expects a 4th parameter which must be a
  string of either `eddsa` or `ecdsa`.

# [5.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@5.1.0...@bitgo/sdk-core@5.2.0) (2023-01-30)

### Bug Fixes

- **bitgo:** remove enforcement of HMAC verification on all non-prod environments ([118722c](https://github.com/BitGo/BitGoJS/commit/118722c80bfcf8cfc850e07d575ecf10aacb3fd2))
- **sdk-core:** get low balance forwarder ([6b8205c](https://github.com/BitGo/BitGoJS/commit/6b8205c449e2f5fe3dca0247d92dfdf2fdb6ef58))

### Features

- **sdk-core:** add ecdsa wallet sig verification ([375be2d](https://github.com/BitGo/BitGoJS/commit/375be2d86002258ba11012888fea41094dabc39b))

# [5.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@5.0.0...@bitgo/sdk-core@5.1.0) (2023-01-25)

### Bug Fixes

- **sdk-core:** allow sync pallier key generation for ovc ([3a91129](https://github.com/BitGo/BitGoJS/commit/3a9112963c89a960fc81ea12207ae7ca67faf378))
- **sdk-core:** remove generic typing from typeddata associated with eip712 ([ac1047e](https://github.com/BitGo/BitGoJS/commit/ac1047ea482f7751dd145d538de3412e738e30e9))
- **sdk-core:** send the passphrase as correct field for eddsa ([1aea3c2](https://github.com/BitGo/BitGoJS/commit/1aea3c285001e409cdcf4c5eacfb83426d46b14f))

### Features

- **sdk-core:** add extra params for addKey ([43e095e](https://github.com/BitGo/BitGoJS/commit/43e095efa52fefd25dd977ed8cd271fb146780ca))
- **sdk-core:** add keepAlive as a whitelisted consolidate param ([f503969](https://github.com/BitGo/BitGoJS/commit/f5039697f04941ed04e4e96e42d794fc09aaf429))
- **sdk-core:** add u value proof for ecdsa ([1ae0107](https://github.com/BitGo/BitGoJS/commit/1ae01076e503d57729a528a21044940526bfe917))
- **sdk-core:** change third party to backupGpgKey ([817fd86](https://github.com/BitGo/BitGoJS/commit/817fd86f7269bd3a62ddf3aad14b4bc1f6beb2d7))
- **sdk-core:** ecdsa tss return tx request detail ([90a6b6d](https://github.com/BitGo/BitGoJS/commit/90a6b6de6112e61b5d2cca142d12c9e7bac9c072))
- **sdk-core:** forwarder version 3 ([82e6deb](https://github.com/BitGo/BitGoJS/commit/82e6debac071486435c51ce3f52f8352bdb8a8fb))
- **sdk-core:** get bitgo public key based on coin and feature flags ([c5cee95](https://github.com/BitGo/BitGoJS/commit/c5cee95fa8005a8a83cf5c5afc01f35e3235d970))
- send vss proof and privateShareProof to bitgo as backup ([dd348e7](https://github.com/BitGo/BitGoJS/commit/dd348e7a02600965d96460010ef7dd37cf672f82))

# [5.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@4.3.0...@bitgo/sdk-core@5.0.0) (2022-12-23)

### Bug Fixes

- remove final sig construction for message signing ([c7c8a98](https://github.com/BitGo/BitGoJS/commit/c7c8a988449264c0be0d422b89f4390d713e9064))

### Features

- **sdk-core:** support fund forwader ([7dbab14](https://github.com/BitGo/BitGoJS/commit/7dbab14c74ae5faf99289f1cf2a3aacc558f6987))

### BREAKING CHANGES

- remove final sig construction

# [4.3.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@4.2.1...@bitgo/sdk-core@4.3.0) (2022-12-20)

### Bug Fixes

- **sdk-coin-avaxp:** fix parseTransaction throwing error for pending ([c9fea95](https://github.com/BitGo/BitGoJS/commit/c9fea9505616557ea7e27d34829adc4ffa922697))
- **sdk-core:** fix generate wallets isCold param ([ff22908](https://github.com/BitGo/BitGoJS/commit/ff229088405cf09be4bc86bdbdee340b37b551a6))

### Features

- added eip712 sign typed data ([6d2cbea](https://github.com/BitGo/BitGoJS/commit/6d2cbeaa04de80c12b41dcd1e88f886011f46b30))
- **core:** add register to base interface ([2c08793](https://github.com/BitGo/BitGoJS/commit/2c087937608f6fa6246cf44a29c91ef40713fb74))
- **sdk-coin-eth:** add support for tss recoveries ([5954c7d](https://github.com/BitGo/BitGoJS/commit/5954c7dd1d32b2f60e8c41d31d7b205ccc51ecc4))
- **sdk-core:** allow forwarder version 2 ([7b9a05b](https://github.com/BitGo/BitGoJS/commit/7b9a05b89f68ac13858911e002be7adf3304646f))
- **sdk-core:** derive unhardened method for ecdsa ([4684bff](https://github.com/BitGo/BitGoJS/commit/4684bff6cfaf7071f3b454327afe4067d65318c9))

## [4.2.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@4.2.0...@bitgo/sdk-core@4.2.1) (2022-12-09)

**Note:** Version bump only for package @bitgo/sdk-core

# [4.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@4.1.0...@bitgo/sdk-core@4.2.0) (2022-12-06)

### Features

- **sdk-coin-polygon:** crossChainRecovery support ([9b42813](https://github.com/BitGo/BitGoJS/commit/9b4281333a8d3835219e566e31cba28ab448c85f))
- **sdk-core:** add source destination chain to send many ([1b27a48](https://github.com/BitGo/BitGoJS/commit/1b27a486e4be24cb2a66606e9ddf35699280393c))

# [4.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@4.0.0...@bitgo/sdk-core@4.1.0) (2022-12-01)

### Bug Fixes

- **sdk-core:** fix tss signing ([79882b1](https://github.com/BitGo/BitGoJS/commit/79882b1b3a2f722877aaa1def76aba10776717aa))
- **sdk-core:** whitelist source and destination chain params ([5724d22](https://github.com/BitGo/BitGoJS/commit/5724d22130ebacf65e1545cab18ee602e1dff231))
- update ofc coin for ibasecoin changes ([65986c6](https://github.com/BitGo/BitGoJS/commit/65986c6405e2771b6c7c85dd8b62bf99d6cd8c41))

### Features

- **bitgo:** add api version input ([42f353f](https://github.com/BitGo/BitGoJS/commit/42f353f0b33857963d66739d34b0d0cac85e82db))
- **sdk-core:** add keyDerive to ECDSA TSS implementation ([9ff1d89](https://github.com/BitGo/BitGoJS/commit/9ff1d89ba0e42d53640f0fe7b71c53d1a2eb4a10))

# [4.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@2.2.0...@bitgo/sdk-core@4.0.0) (2022-11-29)

### Bug Fixes

- disable vss verification ([5cdc53b](https://github.com/BitGo/BitGoJS/commit/5cdc53b2e2440524c6ba11109f50eb41222c3f3e))
- fix eddsa proof generation ([8a9253b](https://github.com/BitGo/BitGoJS/commit/8a9253bd2339b5c6bc7ca5093a09750b81931e32))
- fix unit-test-all errors ([4adab4d](https://github.com/BitGo/BitGoJS/commit/4adab4dd363cdd4c21bd964fd3b6d5581bd63e46))
- multiple issues with message signing ([d703b9a](https://github.com/BitGo/BitGoJS/commit/d703b9a6149c4fe26ad16001f5f681389c8f8aba))
- pass custodianId to prebuildTxWithIntent ([1b14921](https://github.com/BitGo/BitGoJS/commit/1b14921d32dd12c0fdaff1c168538c6481f8fbbb))
- remove encoding from message sent to bitgo ([d300963](https://github.com/BitGo/BitGoJS/commit/d300963da1333dc5b970fd3afe9f3dedb3fe9896))
- **sdk-coin-avaxc:** add tx type to fee estimation and build params ([83a12be](https://github.com/BitGo/BitGoJS/commit/83a12be8d41a8796160737ccb48a9a3e98495042))
- **sdk-core:** add chaincode to user->backup public shares ([fef4a1a](https://github.com/BitGo/BitGoJS/commit/fef4a1a4c3a71b97e15fea4502e07f05de4501e3))
- **sdk-core:** add destinationChain to prebuild whitelisted params ([95b3e13](https://github.com/BitGo/BitGoJS/commit/95b3e1372dddc6b5652152416d7451a809beb095))
- **sdk-core:** add hopParams & sourceChain to prebuild whitelisted params ([feef8c9](https://github.com/BitGo/BitGoJS/commit/feef8c96cba79cd7073ad9e18b6fcd66f5a00bcb))
- **sdk-core:** disabling vss for eddsa ([7c91d14](https://github.com/BitGo/BitGoJS/commit/7c91d1485f879ebe7a3435871f1d8dafc8f1eef8))
- **sdk-core:** ecdsa sharing wallet ([8645e3b](https://github.com/BitGo/BitGoJS/commit/8645e3b111406888f544cba2cceb3093f16fcad2))
- **sdk-core:** ecdsa tss wallet creation ([2fd5f41](https://github.com/BitGo/BitGoJS/commit/2fd5f4143f4586bb770d9c508316490d57753a32))
- **sdk-core:** eddsa vss ([de1fbd6](https://github.com/BitGo/BitGoJS/commit/de1fbd6179190cc0dae4054088cfb50402286589))
- **sdk-core:** pass custodianMessageId in signMessage ([84cf0cc](https://github.com/BitGo/BitGoJS/commit/84cf0ccec3f31786b6e38509e3bb73fca1e52a57))
- **sdk-core:** properly translate tx type to transferToken intent BG-60250 ([eb518f9](https://github.com/BitGo/BitGoJS/commit/eb518f97ab973661493170421ad91b18cd370d89))
- **sdk-core:** update the staging Environment ([e8477be](https://github.com/BitGo/BitGoJS/commit/e8477be3d182cd6e3cbfd7fe5e231bcfbcbd0f2d))
- **sdk-core:** use correct api param name for user gpg pubkey ([ccc3237](https://github.com/BitGo/BitGoJS/commit/ccc3237e348f74baf5df7944f7efcd0d06d1eae7))
- **sdk-core:** vss ([01be344](https://github.com/BitGo/BitGoJS/commit/01be34475a036640a9d842f3f657f46d49a45517))
- typo in intent name for message signing ([a855dbb](https://github.com/BitGo/BitGoJS/commit/a855dbbf7f03f49fb56563231f0d434b320f0083))

### Features

- add cancel staking request ([7e053fd](https://github.com/BitGo/BitGoJS/commit/7e053fddd93888ff73a5c03924cc1c42623bff32))
- add units functions to sdk core ([583885d](https://github.com/BitGo/BitGoJS/commit/583885dae0d7ecada83b65b985fc0d35b3fad21f))
- **bitgo:** sdk script to get token balance from wallet ([67086f8](https://github.com/BitGo/BitGoJS/commit/67086f8bf844a91ef4ecebead004fb63f520a23f))
- create txrequest for message signing ([4ee1a9c](https://github.com/BitGo/BitGoJS/commit/4ee1a9ceb748984cbd3b243fbba3ac0b54564e34))
- **express:** consolidate account support in external signer ([414e0df](https://github.com/BitGo/BitGoJS/commit/414e0dfc1f33d02f740db2e2e9d5af28166d9f72))
- implement isWalletAddress for SUI ([a3696ab](https://github.com/BitGo/BitGoJS/commit/a3696ab00f693da2db4ef32034a85504dc5aa4c5))
- pass custodianTransaction and messageId ([35b7953](https://github.com/BitGo/BitGoJS/commit/35b795395d1f8fc142bf852ea2b211921671225b))
- **sdk-coin-eth:** add fillnonce capability to sdk ([6d9a965](https://github.com/BitGo/BitGoJS/commit/6d9a9657cbd1ee273294e1ed4e44ed192915648b))
- **sdk-core:** add fetchCrossChainUTXOs in wallet ([cf3a51b](https://github.com/BitGo/BitGoJS/commit/cf3a51bd9ddbbda38f241d4570ce26936a4c16ca))
- **sdk-core:** add function to verify wallet signatures for TSS ([0e6840e](https://github.com/BitGo/BitGoJS/commit/0e6840e4b9a89aea30e784e0acede2377937fe6c))
- **sdk-core:** add support for ETH TSS staking ([a8afdb6](https://github.com/BitGo/BitGoJS/commit/a8afdb64d9081ba62ed51bf3050d668868d14843))
- **sdk-core:** add VSS share generation and verification ([619f254](https://github.com/BitGo/BitGoJS/commit/619f2542f9c44f8468460864f78b975a2ccb7b7f))
- **sdk-core:** added date params to getInvoice query ([f782dbb](https://github.com/BitGo/BitGoJS/commit/f782dbb7d5308b9154c27553690cd2ab23774d3d))
- **sdk-core:** added get payments method for lightning ([fd22577](https://github.com/BitGo/BitGoJS/commit/fd22577755be722ac98ddae21108787adf7d4c13))
- **sdk-core:** change sendMany to work for custodial wallets ([45eb658](https://github.com/BitGo/BitGoJS/commit/45eb65883cb5a5f28fca486fec31215cddae8f69))
- **sdk-core:** expect txid response for lightning withdrawal ([22dfeab](https://github.com/BitGo/BitGoJS/commit/22dfeabda3923a104a4f86e820375c32d05d6879))
- **sdk-core:** tss ecdsa key creation flow with 3rd party backup ([08d2065](https://github.com/BitGo/BitGoJS/commit/08d206527df42bdd0cc42270fb19a9d828ba219c))

### BREAKING CHANGES

- **sdk-core:** Key shares require a `v` value for combination.
  ISSUE: BG-57633

# [3.0.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@2.2.0...@bitgo/sdk-core@3.0.0) (2022-11-04)

### Bug Fixes

- disable vss verification ([5cdc53b](https://github.com/BitGo/BitGoJS/commit/5cdc53b2e2440524c6ba11109f50eb41222c3f3e))
- fix eddsa proof generation ([8a9253b](https://github.com/BitGo/BitGoJS/commit/8a9253bd2339b5c6bc7ca5093a09750b81931e32))
- fix unit-test-all errors ([4adab4d](https://github.com/BitGo/BitGoJS/commit/4adab4dd363cdd4c21bd964fd3b6d5581bd63e46))
- remove encoding from message sent to bitgo ([d300963](https://github.com/BitGo/BitGoJS/commit/d300963da1333dc5b970fd3afe9f3dedb3fe9896))
- **sdk-core:** add chaincode to user->backup public shares ([fef4a1a](https://github.com/BitGo/BitGoJS/commit/fef4a1a4c3a71b97e15fea4502e07f05de4501e3))
- **sdk-core:** ecdsa sharing wallet ([8645e3b](https://github.com/BitGo/BitGoJS/commit/8645e3b111406888f544cba2cceb3093f16fcad2))
- **sdk-core:** properly translate tx type to transferToken intent BG-60250 ([eb518f9](https://github.com/BitGo/BitGoJS/commit/eb518f97ab973661493170421ad91b18cd370d89))
- **sdk-core:** update the staging Environment ([e8477be](https://github.com/BitGo/BitGoJS/commit/e8477be3d182cd6e3cbfd7fe5e231bcfbcbd0f2d))
- **sdk-core:** use correct api param name for user gpg pubkey ([ccc3237](https://github.com/BitGo/BitGoJS/commit/ccc3237e348f74baf5df7944f7efcd0d06d1eae7))

### Features

- create txrequest for message signing ([4ee1a9c](https://github.com/BitGo/BitGoJS/commit/4ee1a9ceb748984cbd3b243fbba3ac0b54564e34))
- implement isWalletAddress for SUI ([a3696ab](https://github.com/BitGo/BitGoJS/commit/a3696ab00f693da2db4ef32034a85504dc5aa4c5))
- pass custodianTransaction and messageId ([35b7953](https://github.com/BitGo/BitGoJS/commit/35b795395d1f8fc142bf852ea2b211921671225b))
- **sdk-coin-eth:** add fillnonce capability to sdk ([6d9a965](https://github.com/BitGo/BitGoJS/commit/6d9a9657cbd1ee273294e1ed4e44ed192915648b))
- **sdk-core:** add fetchCrossChainUTXOs in wallet ([cf3a51b](https://github.com/BitGo/BitGoJS/commit/cf3a51bd9ddbbda38f241d4570ce26936a4c16ca))
- **sdk-core:** add support for ETH TSS staking ([a8afdb6](https://github.com/BitGo/BitGoJS/commit/a8afdb64d9081ba62ed51bf3050d668868d14843))
- **sdk-core:** add VSS share generation and verification ([619f254](https://github.com/BitGo/BitGoJS/commit/619f2542f9c44f8468460864f78b975a2ccb7b7f))
- **sdk-core:** allow preBuildTransaction to accept wallet id ([a797e38](https://github.com/BitGo/BitGoJS/commit/a797e38b0269bc0ea6e4834f0aca4605ef297265))
- **sdk-core:** tss ecdsa key creation flow with 3rd party backup ([08d2065](https://github.com/BitGo/BitGoJS/commit/08d206527df42bdd0cc42270fb19a9d828ba219c))

### BREAKING CHANGES

- **sdk-core:** Key shares require a `v` value for combination.
  ISSUE: BG-57633

# [2.4.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@2.2.0...@bitgo/sdk-core@2.4.0) (2022-10-27)

### Bug Fixes

- **sdk-core:** add chaincode to user->backup public shares ([fef4a1a](https://github.com/BitGo/BitGoJS/commit/fef4a1a4c3a71b97e15fea4502e07f05de4501e3))
- **sdk-core:** properly translate tx type to transferToken intent BG-60250 ([eb518f9](https://github.com/BitGo/BitGoJS/commit/eb518f97ab973661493170421ad91b18cd370d89))
- **sdk-core:** update the staging Environment ([e8477be](https://github.com/BitGo/BitGoJS/commit/e8477be3d182cd6e3cbfd7fe5e231bcfbcbd0f2d))
- **sdk-core:** use correct api param name for user gpg pubkey ([ccc3237](https://github.com/BitGo/BitGoJS/commit/ccc3237e348f74baf5df7944f7efcd0d06d1eae7))

### Features

- create txrequest for message signing ([4ee1a9c](https://github.com/BitGo/BitGoJS/commit/4ee1a9ceb748984cbd3b243fbba3ac0b54564e34))
- implement isWalletAddress for SUI ([a3696ab](https://github.com/BitGo/BitGoJS/commit/a3696ab00f693da2db4ef32034a85504dc5aa4c5))
- pass custodianTransaction and messageId ([35b7953](https://github.com/BitGo/BitGoJS/commit/35b795395d1f8fc142bf852ea2b211921671225b))
- **sdk-coin-eth:** add fillnonce capability to sdk ([6d9a965](https://github.com/BitGo/BitGoJS/commit/6d9a9657cbd1ee273294e1ed4e44ed192915648b))
- **sdk-core:** add fetchCrossChainUTXOs in wallet ([cf3a51b](https://github.com/BitGo/BitGoJS/commit/cf3a51bd9ddbbda38f241d4570ce26936a4c16ca))
- **sdk-core:** add support for ETH TSS staking ([a8afdb6](https://github.com/BitGo/BitGoJS/commit/a8afdb64d9081ba62ed51bf3050d668868d14843))
- **sdk-core:** tss ecdsa key creation flow with 3rd party backup ([08d2065](https://github.com/BitGo/BitGoJS/commit/08d206527df42bdd0cc42270fb19a9d828ba219c))

# [2.3.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@2.2.0...@bitgo/sdk-core@2.3.0) (2022-10-25)

### Bug Fixes

- **sdk-core:** properly translate tx type to transferToken intent BG-60250 ([eb518f9](https://github.com/BitGo/BitGoJS/commit/eb518f97ab973661493170421ad91b18cd370d89))
- **sdk-core:** update the staging Environment ([e8477be](https://github.com/BitGo/BitGoJS/commit/e8477be3d182cd6e3cbfd7fe5e231bcfbcbd0f2d))
- **sdk-core:** use correct api param name for user gpg pubkey ([ccc3237](https://github.com/BitGo/BitGoJS/commit/ccc3237e348f74baf5df7944f7efcd0d06d1eae7))

### Features

- create txrequest for message signing ([4ee1a9c](https://github.com/BitGo/BitGoJS/commit/4ee1a9ceb748984cbd3b243fbba3ac0b54564e34))
- implement isWalletAddress for SUI ([a3696ab](https://github.com/BitGo/BitGoJS/commit/a3696ab00f693da2db4ef32034a85504dc5aa4c5))
- **sdk-coin-eth:** add fillnonce capability to sdk ([6d9a965](https://github.com/BitGo/BitGoJS/commit/6d9a9657cbd1ee273294e1ed4e44ed192915648b))
- **sdk-core:** add fetchCrossChainUTXOs in wallet ([cf3a51b](https://github.com/BitGo/BitGoJS/commit/cf3a51bd9ddbbda38f241d4570ce26936a4c16ca))
- **sdk-core:** add support for ETH TSS staking ([a8afdb6](https://github.com/BitGo/BitGoJS/commit/a8afdb64d9081ba62ed51bf3050d668868d14843))
- **sdk-core:** tss ecdsa key creation flow with 3rd party backup ([08d2065](https://github.com/BitGo/BitGoJS/commit/08d206527df42bdd0cc42270fb19a9d828ba219c))

# [2.2.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.29...@bitgo/sdk-core@2.2.0) (2022-10-18)

### Bug Fixes

- **account-lib:** fix EDDSA MPC key validation for small number keys ([f9f7407](https://github.com/BitGo/BitGoJS/commit/f9f740721a91f8351df40b3b4d89f2c393acd7cf))
- **account-lib:** shamir secret indices validity ([4e22783](https://github.com/BitGo/BitGoJS/commit/4e227839d5c1fb84a583f17d8754b46324f4eef9))
- add 'preview' as whitelisted param for token enablement ([a998ecc](https://github.com/BitGo/BitGoJS/commit/a998ecc0b018ac3ce21db91df7cc6c5ad29f76a4))
- allow token enablement for cold wallet ([557e79b](https://github.com/BitGo/BitGoJS/commit/557e79bb543dde8cbddd89ec13f424e9827aa4c3))
- **bitgo:** remove address param from lightning().deposit ([b49ec63](https://github.com/BitGo/BitGoJS/commit/b49ec638e130633508cdc64fe6a3bdaaafed5aef))
- **core:** fix bip32/ecpair, API vs Interface ([bec9c1e](https://github.com/BitGo/BitGoJS/commit/bec9c1e6ff0c23108dc27e171abdd3e4d2cfdfb1))
- **root:** align versions of bitcoinjs-lib ([b7eb929](https://github.com/BitGo/BitGoJS/commit/b7eb92998836a5945627ef1c80d74414b11f4867))
- **root:** resolve [@noble-secp256k1](https://github.com/noble-secp256k1) ([5faefa2](https://github.com/BitGo/BitGoJS/commit/5faefa298d8d366e9f499bca81189b7c0a0eceb8))
- **sdk-coin-eth:** fix convert signature share to/from ([9aed51e](https://github.com/BitGo/BitGoJS/commit/9aed51ee96aefef29ef1cf11b0ce821b996ce08e))
- **sdk-coin-eth:** fixes to the sign and verify functions for eth tss ([ce79269](https://github.com/BitGo/BitGoJS/commit/ce7926985886cfd48a174df4ea1341e1ec388f8b))
- **sdk-core:** add missing ecdsa helper type ([92d49f2](https://github.com/BitGo/BitGoJS/commit/92d49f28bf33940f315754825916aabf0cda072e))
- **sdk-core:** allow for optional passphrase on tss wallets ([f334232](https://github.com/BitGo/BitGoJS/commit/f3342328a85c78ab9d886478bfd027239f2251d8))
- **sdk-core:** allow undefined for amtPaidSats ([7e9e9ea](https://github.com/BitGo/BitGoJS/commit/7e9e9eac7cab9ef41bc08e82704b90a8aeb46de9))
- **sdk-core:** default wallet to non tss ([26febd4](https://github.com/BitGo/BitGoJS/commit/26febd42bc12fe417fecb1896e8ff5313be9fc18))
- **sdk-core:** ecdsa commonkeychain validation ([269e16b](https://github.com/BitGo/BitGoJS/commit/269e16bf694f32396c753e58a78de3c2d036338d))
- **sdk-core:** ecdsa keychain creation types mach ([1224de3](https://github.com/BitGo/BitGoJS/commit/1224de3f707759f4ef22836a80c3b834ec04b98d))
- **sdk-core:** ecdsa send signing bitgo's n share u ([1cb1e93](https://github.com/BitGo/BitGoJS/commit/1cb1e933c692f454de538b3b189ef2feb1b39475))
- **sdk-core:** ecdsa sign serializedTxHex ([2fda8fc](https://github.com/BitGo/BitGoJS/commit/2fda8fc364f357a66645665b7793182baf2efbcb))
- **sdk-core:** ecdsa signing get user share ([acbc700](https://github.com/BitGo/BitGoJS/commit/acbc7002c9ffd62c78e6dd2e72feac0c3ff4fe45))
- **sdk-core:** ecdsa tss signing flow update ([226586c](https://github.com/BitGo/BitGoJS/commit/226586ce2f1af6f5593bb97c3a297f332aee3b34))
- **sdk-core:** eth supports tss ([c0ec96f](https://github.com/BitGo/BitGoJS/commit/c0ec96fac7c5b4131d4f32d09463a78c0e1f8900))
- **sdk-core:** fix lightning requests params ([32b2038](https://github.com/BitGo/BitGoJS/commit/32b2038dab7e93a525efcbf34df65e44ad8eb39a))
- **sdk-core:** fix send token enablements by writing in buildParams in prebuildTx ([9dc933a](https://github.com/BitGo/BitGoJS/commit/9dc933a878b2a70adc69cd329883f668a8943aa0))
- **sdk-core:** fix the signatures of lnurl pay methods ([6ffc17a](https://github.com/BitGo/BitGoJS/commit/6ffc17a025b9a79b33a334abdcbaa0f0d06e8a49))
- **sdk-core:** fix tss ecdsa keychain encryption ([95f9c2d](https://github.com/BitGo/BitGoJS/commit/95f9c2d7d1018d387dc6cabd89e5c0d14b9f07d3))
- **sdk-core:** tss signing ([f17491d](https://github.com/BitGo/BitGoJS/commit/f17491d24db4086bf4b9ae692ea782803723568e))
- **sdk-core:** tss tx signing ([ab7eb80](https://github.com/BitGo/BitGoJS/commit/ab7eb8079ea37e347727db106d01fe9362f36374))
- **sdk-core:** tss wallet creation related bugs ([500c735](https://github.com/BitGo/BitGoJS/commit/500c73527edd902b65cfd784ea1022a21e0f6319))
- update AddWalletOptions ([64578e0](https://github.com/BitGo/BitGoJS/commit/64578e078129aa6503fd9d6193c57eddc5c4d27e))

### Features

- **abstract-eth:** validate istss for evms ([29f0b5a](https://github.com/BitGo/BitGoJS/commit/29f0b5aa875c4a6a727f9b3e9a073740230c4fb8))
- **abstract-utxo:** add support for bigints from new utxo-lib ([77c60dd](https://github.com/BitGo/BitGoJS/commit/77c60ddd4d0ddd1e82a8b1bb041686a9c7f39fae))
- **account-lib:** add option to pass in custom seed ecdsa ([86b205e](https://github.com/BitGo/BitGoJS/commit/86b205e342ca5610ce460877a64f4733f944bf6e))
- **account-lib:** add support for additional hash algorithms ([4e2aefe](https://github.com/BitGo/BitGoJS/commit/4e2aefe8bb7754f891e5f9919f591ad1cc04b34d))
- **account-lib:** custom salt shamir share ([fa34652](https://github.com/BitGo/BitGoJS/commit/fa346529b5dc9897b6bbf6fb4a05ac77f2f05b2d))
- add message signing support for polygon ([ab2bac1](https://github.com/BitGo/BitGoJS/commit/ab2bac13dad55ce8571d014796298aa52a24a5f2))
- add u value proof during tss eddssa key creation ([79d2c91](https://github.com/BitGo/BitGoJS/commit/79d2c91ea5b101f8cad9b107b9e4426939333c5f))
- adding support for message signing ([01c6303](https://github.com/BitGo/BitGoJS/commit/01c63032d067e6ba5aef78804ea747b5e62709fe))
- **bitgo:** support chaincodes on BLS-DKG keychains creation ([bfaa380](https://github.com/BitGo/BitGoJS/commit/bfaa380551d2fe90e041975b392d4398c781074a))
- **express:** adding EdDSA TSS support to external signer ([dbccabc](https://github.com/BitGo/BitGoJS/commit/dbccabc7b1b2c1258108e6b38f853c676f8a6562))
- **express:** support routes to prebuildAndSignTransaction ([b7f0ec3](https://github.com/BitGo/BitGoJS/commit/b7f0ec37f6ea9a948c229003bdee023066d62b68))
- **sdk-coin-ada:** implement recover function for cardano ([9bc3eeb](https://github.com/BitGo/BitGoJS/commit/9bc3eebac95621e1301c258027c87ab69cacc2da))
- **sdk-coin-avaxc:** add recover method for wrw ([40fb9a9](https://github.com/BitGo/BitGoJS/commit/40fb9a9b7a74ee043ee5d5a2618ecae065f8758b))
- **sdk-coin-avaxp:** implement export tx builder ([483d9ce](https://github.com/BitGo/BitGoJS/commit/483d9ce67b75ca5eb4c1330f59820b18043cdb6c))
- **sdk-coin-avaxp:** implement tx builder for import on p ([f52d124](https://github.com/BitGo/BitGoJS/commit/f52d124a1dbf4be9fe7010eaa2460aa6a60a56ea))
- **sdk-coin-dot:** implement recover function for dot ([66f8cba](https://github.com/BitGo/BitGoJS/commit/66f8cba4bd79598ab8197472bb1ad595d0026d60))
- **sdk-coin-eth:** add acceleration capability for eth ([436ba8c](https://github.com/BitGo/BitGoJS/commit/436ba8ceb478c4028d5b05dc34bb623be6fc581f))
- **sdk-coin-ethw:** add ethw sdk module ([63e9850](https://github.com/BitGo/BitGoJS/commit/63e9850c27039d1b614d14426a1d9b090d454b76))
- **sdk-coin-ethw:** use ETHw full node RPC queries to recover funds ([7db9bcd](https://github.com/BitGo/BitGoJS/commit/7db9bcd61549e4e96d8f745211717586eec4535c))
- **sdk-coin-polygon:** support recovery ([15d6021](https://github.com/BitGo/BitGoJS/commit/15d602164d3a2b504d7995e65aa0fbcb38f98e89))
- **sdk-coin-sol:** implemented recover function for solana ([f043033](https://github.com/BitGo/BitGoJS/commit/f0430338371c58bebb53dbc8a7cf45ce51599fc7))
- **sdk-coin-sol:** sol token multi ata init ([736318f](https://github.com/BitGo/BitGoJS/commit/736318fff36f074fa841b97f3bc0c8cd95fae001))
- **sdk-core:** add createDepositAddress to lightning ([e7056dc](https://github.com/BitGo/BitGoJS/commit/e7056dc48448d69328d29bd223c179eb6486a40e))
- **sdk-core:** add createInvoice to lightning ([293a5d6](https://github.com/BitGo/BitGoJS/commit/293a5d6badd73def299b4f8420bc3380bb862cb2))
- **sdk-core:** add deposit() to lightning object ([aeb483d](https://github.com/BitGo/BitGoJS/commit/aeb483d2cd2baf49659674f9b9ad7a9d37fcf672))
- **sdk-core:** add enable token support for sol ([dde3a95](https://github.com/BitGo/BitGoJS/commit/dde3a952b45f9e49d61bdc92d7cddaff1a646c08))
- **sdk-core:** add getBalance for lightning ([ccd2e81](https://github.com/BitGo/BitGoJS/commit/ccd2e817cddda09709ae3d65a91d7fd122661f5c))
- **sdk-core:** add getInvoices to lightning object ([232bea3](https://github.com/BitGo/BitGoJS/commit/232bea30d95a4b6f9554cc0416c54f0f73a979ad))
- **sdk-core:** add helper to create backup TSS key share held by BitGo ([d5921ad](https://github.com/BitGo/BitGoJS/commit/d5921ad6c0a90b9a0e5ec7d60b86fd8741550b5c))
- **sdk-core:** add helper to finish backup TSS key share held by BitGo ([f2d85b5](https://github.com/BitGo/BitGoJS/commit/f2d85b5132c9466a70dea645598dbbf95c677c4d))
- **sdk-core:** add includeTokens wallet.addresses parameter ([8c03d83](https://github.com/BitGo/BitGoJS/commit/8c03d8363e3e3b56b6c7f18b0e098d68f25d54c2))
- **sdk-core:** add logic to handle ERC20 tokens for staking ([c77a253](https://github.com/BitGo/BitGoJS/commit/c77a253d18815483a516de2a83e8778f82e6a5ab))
- **sdk-core:** add more ecdsa helper methods ([aa57eac](https://github.com/BitGo/BitGoJS/commit/aa57eacdc97f2ecac4179f76461d798226178ba8))
- **sdk-core:** add payInvoice to lightning object ([eaaa48d](https://github.com/BitGo/BitGoJS/commit/eaaa48d10a8d0cc74b2ac97e0d0d97feba88d72a))
- **sdk-core:** add recid to fully constructed signature ([a8adcd9](https://github.com/BitGo/BitGoJS/commit/a8adcd9c3f452f1dfc85454668c19103cec7160d))
- **sdk-core:** add specialized enable token functions ([3e60cef](https://github.com/BitGo/BitGoJS/commit/3e60cef71a0ae76b378356508338738eac49a920))
- **sdk-core:** add support for delegation in staking flow ([0c91edb](https://github.com/BitGo/BitGoJS/commit/0c91edb8ef4c76b577726abb3f4899f318f8ca17))
- **sdk-core:** add support for enabling tokens on cold and custodial wallets ([e15c69c](https://github.com/BitGo/BitGoJS/commit/e15c69c4b38b7de74bd73627904960ad086b5f44))
- **sdk-core:** add withdraw to lightning object ([99474b5](https://github.com/BitGo/BitGoJS/commit/99474b581023b228ce6f2713f5b5d58c8d1186d6))
- **sdk-core:** added large value support while calling WP ([870621e](https://github.com/BitGo/BitGoJS/commit/870621e2bc93d15ed6f040379353d039eb17e609))
- **sdk-core:** added verification of private share proofs ([66d6c63](https://github.com/BitGo/BitGoJS/commit/66d6c63bd102da49727e3bdb275cfa6231859ce5))
- **sdk-core:** allow getting a staking wallet for any coin ([cfae0fe](https://github.com/BitGo/BitGoJS/commit/cfae0feeb14c1bcb30dad2840abd8489372bfbc8))
- **sdk-core:** capitalize transaction type enum ([bce263e](https://github.com/BitGo/BitGoJS/commit/bce263e01ebf70119ddefd572f55c3a69f15751c))
- **sdk-core:** create ILightning interface ([6a2f347](https://github.com/BitGo/BitGoJS/commit/6a2f347983ee0e8abba5e457159842e4d1f56f50))
- **sdk-core:** ecdsa type converters ([800b01b](https://github.com/BitGo/BitGoJS/commit/800b01b02194011bc0ac608a5d75094f935d6235))
- **sdk-core:** handle multiple token enables on chains that don't support it ([11302e9](https://github.com/BitGo/BitGoJS/commit/11302e97add128f6c11146373ef40637ec36ce95))
- **sdk-core:** implement signing flow ecdsa ([68aa561](https://github.com/BitGo/BitGoJS/commit/68aa561193fe0574bd7b7080bb51d1d795cf31f9))
- **sdk-core:** parse zero value lightning invoices ([78cab72](https://github.com/BitGo/BitGoJS/commit/78cab722387bd6348cb81951c2e611db231484e0))
- **sdk-core:** support lnurl pay ([6df91a3](https://github.com/BitGo/BitGoJS/commit/6df91a3eac28bf55600d5e856a297dde6b56c826))
- **sdk-core:** support transfertoken type transactions ([6579785](https://github.com/BitGo/BitGoJS/commit/65797851062fb7beb3b1eb6a1db00e23f0a3c209))
- **sdk-core:** use eth wallet for building and signing token txs ([82dd4a9](https://github.com/BitGo/BitGoJS/commit/82dd4a9a19f144dfdf83afd40155532d4df3163c))
- the client needs to generate a gpg key for their backup key share and share it with bitgo ([fb10fae](https://github.com/BitGo/BitGoJS/commit/fb10fae409761363fd8a3bb489011c34f041140c))
- update to work with bitcoinjs-lib@6 ([1950934](https://github.com/BitGo/BitGoJS/commit/1950934d9426385ee12b204cc7456327e4480618))
- **utxo-lib:** export BIP32/ECPair interfaces ([8628507](https://github.com/BitGo/BitGoJS/commit/862850781b2e8b36c71608c5ae71424b9ebe9dee))

### Reverts

- Revert "feat: add keypair to acala module" ([ac4f700](https://github.com/BitGo/BitGoJS/commit/ac4f7001f7e77e6bfce4bb49d7fe4307d51c70b7))

### BREAKING CHANGES

- **sdk-core:** change to upper case first char of addDelegator and addValidator
  BG-56847
- **sdk-core:** The SShare type's `r` field is now `R` (33 bytes encoded as 66 hex characters).
  ISSUE: BG-56664
- **sdk-coin-avaxc:** The interface TransactionPrebuild is no longer exported
  from package. It's defined in @bitgo/sdk-coin-eth.
- **sdk-core:** We need to deal with the new enableToken intent type for solana on wp.
- **bitgo:** This breaks the current ETH2 Hot Wallet creation flow. Needs BG-46182 to be
  implemented and deployed too.

BG-46184

# [1.1.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.29...@bitgo/sdk-core@1.1.0) (2022-07-19)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.29](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.27...@bitgo/sdk-core@1.1.0-rc.29) (2022-07-19)

### Bug Fixes

- **bitgo:** add token to whitelistedParams in eddsa prebuildTxWithIntent BG-52482 ([09c19e9](https://github.com/BitGo/BitGoJS/commit/09c19e950549f6777ee17919514cfb9a1039e73c))

### Features

- **sdk-coin-ada:** implement key pair and utils for ada sdk ([9a1aabb](https://github.com/BitGo/BitGoJS/commit/9a1aabb8a07b5787ab3fa645c29be1b940694892))

# [1.1.0-rc.28](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.27...@bitgo/sdk-core@1.1.0-rc.28) (2022-07-18)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.27](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.26...@bitgo/sdk-core@1.1.0-rc.27) (2022-07-15)

### Features

- support preview mode for consolidation ([3c89b91](https://github.com/BitGo/BitGoJS/commit/3c89b9150f8f073e236953fb1b06a18b7d545bfa))

# [1.1.0-rc.26](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.24...@bitgo/sdk-core@1.1.0-rc.26) (2022-07-15)

### Bug Fixes

- **account-lib:** fix proper format for compressed hex points ([3882452](https://github.com/BitGo/BitGoJS/commit/38824529efbbb2481e951236960833637e6cf5c5))

### Features

- **account-lib:** get rid of old ethereum lib ([abd2247](https://github.com/BitGo/BitGoJS/commit/abd2247047218d8cbd8ec7067d227721357f5fcc))

# [1.1.0-rc.25](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.24...@bitgo/sdk-core@1.1.0-rc.25) (2022-07-14)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.24](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.23...@bitgo/sdk-core@1.1.0-rc.24) (2022-07-11)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.23](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.22...@bitgo/sdk-core@1.1.0-rc.23) (2022-07-07)

### Bug Fixes

- **sdk-core:** make hex representation consistent ([ba493e9](https://github.com/BitGo/BitGoJS/commit/ba493e9a7d286197790c4d7e878aca83cf61d2fa))

### Features

- **account-lib:** token associate transaction builder for hedera accounts ([417c720](https://github.com/BitGo/BitGoJS/commit/417c7201b55c1fc546d52d5fd4daaf9390a3c480))
- **sdk-core:** tss ecdsa utility to create keychains ([0a1ab71](https://github.com/BitGo/BitGoJS/commit/0a1ab71ea981fe8bd833f1b25cc3c90e6cb89565))

# [1.1.0-rc.22](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.21...@bitgo/sdk-core@1.1.0-rc.22) (2022-07-05)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.21](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.20...@bitgo/sdk-core@1.1.0-rc.21) (2022-07-01)

### Features

- **sdk-core:** update validation to include eip1559 ([4775a84](https://github.com/BitGo/BitGoJS/commit/4775a84de1e4ba18dcbc7cd8cbfa0a40c4625e46))

# [1.1.0-rc.20](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.19...@bitgo/sdk-core@1.1.0-rc.20) (2022-06-30)

### Bug Fixes

- **account-lib:** fix ecdsa tests timeout issues ([12c86b2](https://github.com/BitGo/BitGoJS/commit/12c86b2dcbc24331ad47668829ec9f8eb131861f))
- **sdk-core:** fix sol send token sdk ([d5c697b](https://github.com/BitGo/BitGoJS/commit/d5c697b4f0b2e6a95eaf7a1f6e70db063f2877d2))

# [1.1.0-rc.19](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.18...@bitgo/sdk-core@1.1.0-rc.19) (2022-06-30)

### Bug Fixes

- **bitgo:** rounded value on spendable balance ([8ce7d01](https://github.com/BitGo/BitGoJS/commit/8ce7d019c3aed6827527a02c64226c4c27403f19))
- use correct address encoding when decoding polkadot txn ([99d4bdc](https://github.com/BitGo/BitGoJS/commit/99d4bdc237fcf126238455f7201ae51696e77566))

# [1.1.0-rc.18](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.16...@bitgo/sdk-core@1.1.0-rc.18) (2022-06-29)

### Features

- **account-lib:** add support for ecdsa sigining and verification tss ([8600501](https://github.com/BitGo/BitGoJS/commit/8600501320f09df21d63f9c01341844cb9a01fe1))

# [1.1.0-rc.17](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.16...@bitgo/sdk-core@1.1.0-rc.17) (2022-06-29)

### Features

- **account-lib:** add support for ecdsa sigining and verification tss ([8600501](https://github.com/BitGo/BitGoJS/commit/8600501320f09df21d63f9c01341844cb9a01fe1))

# [1.1.0-rc.16](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.15...@bitgo/sdk-core@1.1.0-rc.16) (2022-06-27)

### Reverts

- Revert "feat(bitgo): handle new response for consolidateAccount/build endpoin" ([ec5ab05](https://github.com/BitGo/BitGoJS/commit/ec5ab05e66ef238addf3e213fff63ae9263e1010))

# [1.1.0-rc.15](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.14...@bitgo/sdk-core@1.1.0-rc.15) (2022-06-23)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.14](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.13...@bitgo/sdk-core@1.1.0-rc.14) (2022-06-22)

### Bug Fixes

- **account-lib:** fix chaincode to use correct modulo ([33db7a3](https://github.com/BitGo/BitGoJS/commit/33db7a3446d3d4b2d9d21ee5d88d3d6ff19e4ed0))
- add dependency check to fix current and future dependency resolutions ([3074335](https://github.com/BitGo/BitGoJS/commit/30743356cff4ebb6d9e185f1a493b187614a1ea9))
- **sdk-core:** fix SOL Failed to create any transactions error BG-50572 ([01ddfd3](https://github.com/BitGo/BitGoJS/commit/01ddfd39e80188822a7fa72e5b70c9372d806b4c))

### Features

- add support for previewing tx requests ([a53149d](https://github.com/BitGo/BitGoJS/commit/a53149dd4081cb5547e2d0559e2f6c1913c54812))

# [1.1.0-rc.13](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.12...@bitgo/sdk-core@1.1.0-rc.13) (2022-06-21)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.12](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.11...@bitgo/sdk-core@1.1.0-rc.12) (2022-06-16)

### Features

- **sdk-core:** add staking SDK functionality ([20371c9](https://github.com/BitGo/BitGoJS/commit/20371c9e320c6a6f9c929dcdbd3cfa197b960ac9))

# [1.1.0-rc.11](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.10...@bitgo/sdk-core@1.1.0-rc.11) (2022-06-14)

### Features

- **sdk-coin-avaxp:** implemented builder for AddValidatorTx ([7cb8b2f](https://github.com/BitGo/BitGoJS/commit/7cb8b2fcaa31ff0dc165abcddd1f8383a7ecef5a))
- **sdk-core:** tss ecdsa key gen helper methods ([ef7e13e](https://github.com/BitGo/BitGoJS/commit/ef7e13e3bb948631f1d0faa7d2e34a4445197db2))
- tss - support user supplied entropy during signing ([29a0bea](https://github.com/BitGo/BitGoJS/commit/29a0bea4208f96c03c3aaac01069ca70c665b985))

# [1.1.0-rc.10](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.9...@bitgo/sdk-core@1.1.0-rc.10) (2022-06-14)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.9](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.8...@bitgo/sdk-core@1.1.0-rc.9) (2022-06-13)

### Bug Fixes

- fix tss wallet creation ([8508182](https://github.com/BitGo/BitGoJS/commit/8508182d8746ea7e9e731c9cbdbd622c5ee65f31))

# [1.1.0-rc.8](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.7...@bitgo/sdk-core@1.1.0-rc.8) (2022-06-10)

### Features

- **account-lib:** add support for chaincode for key derivation in ecdsa ([e8c9faf](https://github.com/BitGo/BitGoJS/commit/e8c9faf5cce270bf36d01a2012941004a06556b2))
- **account-lib:** add support for point multiplication in secp256k1 curve ([e8e00ab](https://github.com/BitGo/BitGoJS/commit/e8e00ab7ed935353ecaa88e865ba7f0348f40b69))
- **bitgo:** handle new response for consolidateAccount/build endpoin ([a333c5f](https://github.com/BitGo/BitGoJS/commit/a333c5f347aeab789414945aff5ed4281f3be296))
- move coinFactory from bitgo to sdk-core ([fb7e902](https://github.com/BitGo/BitGoJS/commit/fb7e902c150a25c40310dc040ca6a8833b097cef))
- support building transactions for tss custodial wallets ([12774ca](https://github.com/BitGo/BitGoJS/commit/12774cad3fe817f582be10228025aae2a5967cbc))

# [1.1.0-rc.7](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.6...@bitgo/sdk-core@1.1.0-rc.7) (2022-06-07)

### Bug Fixes

- **sdk-core:** add paillier bigint dep ([a8cd71e](https://github.com/BitGo/BitGoJS/commit/a8cd71ea6b7ee9db98b4b004fb1661995dd94916))

# [1.1.0-rc.6](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.5...@bitgo/sdk-core@1.1.0-rc.6) (2022-06-07)

### Features

- **account-lib:** add support for ecdsa keyshare generation tss ([c71bc34](https://github.com/BitGo/BitGoJS/commit/c71bc3437af7f5bdf0d1ef19d53b05a4a232ffe4))

# [1.1.0-rc.5](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.4...@bitgo/sdk-core@1.1.0-rc.5) (2022-06-02)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.4](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.3...@bitgo/sdk-core@1.1.0-rc.4) (2022-06-02)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.3](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.2...@bitgo/sdk-core@1.1.0-rc.3) (2022-06-01)

### Bug Fixes

- add missing examples and filters for list addresses api ([6a6ad90](https://github.com/BitGo/BitGoJS/commit/6a6ad90c670710cd169cc11aeb68f227bfd60a7c))

### Features

- **sdk-core:** Define new BitGoBase interface in sdk-core ([907bd9e](https://github.com/BitGo/BitGoJS/commit/907bd9e024f196bfb707f04065a47d74e0f7ce0d))

# [1.1.0-rc.2](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.1...@bitgo/sdk-core@1.1.0-rc.2) (2022-05-23)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.1](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.1.0-rc.0...@bitgo/sdk-core@1.1.0-rc.1) (2022-05-19)

**Note:** Version bump only for package @bitgo/sdk-core

# [1.1.0-rc.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.0.2-rc.0...@bitgo/sdk-core@1.1.0-rc.0) (2022-05-17)

### Features

- **sdk-core:** select hsmpub key based on node env ([2658b77](https://github.com/BitGo/BitGoJS/commit/2658b7711d3f4c458b69f4e9fb479482a29648c6))

## [1.0.2-rc.0](https://github.com/BitGo/BitGoJS/compare/@bitgo/sdk-core@1.0.1...@bitgo/sdk-core@1.0.2-rc.0) (2022-05-16)

**Note:** Version bump only for package @bitgo/sdk-core
