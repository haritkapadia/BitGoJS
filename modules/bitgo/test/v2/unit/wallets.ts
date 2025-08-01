//
// Tests for Wallets
//
import * as assert from 'assert';
import * as nock from 'nock';
import * as sinon from 'sinon';
import * as should from 'should';
import * as _ from 'lodash';
import * as utxoLib from '@bitgo/utxo-lib';
import { TestBitGo } from '@bitgo/sdk-test';
import {
  common,
  TssUtils,
  Wallets,
  ECDSAUtils,
  KeychainsTriplet,
  GenerateWalletOptions,
  Wallet,
  isWalletWithKeychains,
  OptionalKeychainEncryptedKey,
  decryptKeychainPrivateKey,
  makeRandomKey,
  getSharedSecret,
  BulkWalletShareOptions,
  KeychainWithEncryptedPrv,
  WalletWithKeychains,
  multisigTypes,
  IncorrectPasswordError,
  NeedUserSignupError,
} from '@bitgo/sdk-core';
import { BitGo } from '../../../src';
import { afterEach } from 'mocha';
import { TssSettings } from '@bitgo/public-types';
import * as moduleBitgo from '@bitgo/sdk-core';

describe('V2 Wallets:', function () {
  const bitgo = TestBitGo.decorate(BitGo, { env: 'mock' });
  let wallets;
  let bgUrl;

  before(function () {
    nock('https://bitgo.fakeurl').persist().get('/api/v1/client/constants').reply(200, { ttl: 3600, constants: {} });

    bitgo.initializeTestVars();

    const basecoin = bitgo.coin('tbtc');
    wallets = basecoin.wallets();
    bgUrl = common.Environments[bitgo.getEnv()].uri;
  });

  after(function () {
    nock.cleanAll();
    nock.pendingMocks().length.should.equal(0);
  });

  describe('Add Wallet:', function () {
    it('throws on invalid arguments', async function () {
      // isCustodial flag is not a boolean
      await wallets
        .add({ label: 'label', enterprise: 'enterprise', keys: [], m: 2, n: 3, isCustodial: 1 })
        .should.be.rejectedWith('invalid argument for isCustodial - boolean expected');

      // type is not a string
      await wallets
        .add({ label: 'label', enterprise: 'enterprise', keys: [], m: 2, n: 3, type: 1 })
        .should.be.rejectedWith('Expecting parameter string: type but found number');

      // Address is an invalid address
      await wallets
        .add({ label: 'label', enterprise: 'enterprise', keys: [], m: 2, n: 3, address: '$' })
        .should.be.rejectedWith('invalid argument for address - valid address string expected');

      // gasPrice is a number
      await wallets
        .add({ label: 'label', enterprise: 'enterprise', keys: [], m: 2, n: 3, gasPrice: '17' })
        .should.be.rejectedWith('invalid argument for gasPrice - number expected');

      // walletVersion is a number
      await wallets
        .add({ label: 'label', enterprise: 'enterprise', keys: [], m: 2, n: 3, walletVersion: '1' })
        .should.be.rejectedWith('invalid argument for walletVersion - number expected');
    });

    it('creates a paired custodial wallet', async function () {
      nock(bgUrl)
        .post('/api/v2/tbtc/wallet/add', function (body) {
          body.isCustodial.should.be.true();
          body.should.have.property('keys');
          body.m.should.equal(2);
          body.n.should.equal(3);
          return true;
        })
        .reply(200, {});
      await wallets.add({ label: 'label', enterprise: 'enterprise', keys: [], m: 2, n: 3, isCustodial: true });
    });

    it('creates an eos wallet with custom address', async function () {
      const eosBitGo = TestBitGo.decorate(BitGo, { env: 'mock' });
      eosBitGo.initializeTestVars();
      const eosWallets = eosBitGo.coin('teos').wallets();
      const address = 'testeosaddre';
      nock(bgUrl)
        .post('/api/v2/teos/wallet/add', function (body) {
          body.should.have.property('keys');
          body.m.should.equal(2);
          body.n.should.equal(3);
          body.address.should.equal(address);
          return true;
        })
        .reply(200, {});
      await eosWallets.add({ label: 'label', enterprise: 'enterprise', keys: [], m: 2, n: 3, address } as any);
    });

    it('creates a single custodial wallet', async function () {
      nock(bgUrl)
        .post('/api/v2/tbtc/wallet/add', function (body) {
          body.type.should.equal('custodial');
          body.should.not.have.property('keys');
          body.should.not.have.property('m');
          body.should.not.have.property('n');
          return true;
        })
        .reply(200, {});
      await wallets.add({ label: 'label', enterprise: 'enterprise', type: 'custodial' });
    });

    it('creates a wallet with custom gasPrice', async function () {
      const ethBitGo = TestBitGo.decorate(BitGo, { env: 'mock' });
      ethBitGo.initializeTestVars();
      const ethWallets = ethBitGo.coin('teth').wallets();
      nock(bgUrl)
        .post('/api/v2/teth/wallet/add', function (body) {
          body.type.should.equal('custodial');
          body.gasPrice.should.equal(20000000000);
          body.should.not.have.property('keys');
          body.should.not.have.property('m');
          body.should.not.have.property('n');
          return true;
        })
        .reply(200, {});
      await ethWallets.add({
        label: 'label',
        enterprise: 'enterprise',
        type: 'custodial',
        gasPrice: 20000000000,
      } as any);
    });

    it('creates a new wallet with walletVersion', async function () {
      const ethBitGo = TestBitGo.decorate(BitGo, { env: 'mock' });
      ethBitGo.initializeTestVars();
      const ethWallets = ethBitGo.coin('teth').wallets();
      nock(bgUrl)
        .post('/api/v2/teth/wallet/add', function (body) {
          body.type.should.equal('custodial');
          body.walletVersion.should.equal(1);
          body.should.not.have.property('keys');
          body.should.not.have.property('m');
          body.should.not.have.property('n');
          return true;
        })
        .reply(200, {});
      await ethWallets.add({ label: 'label', enterprise: 'enterprise', type: 'custodial', walletVersion: 1 } as any);
    });

    it('creates a new hot wallet with userKey', async function () {
      nock(bgUrl)
        .post('/api/v2/tbtc/wallet/add', function (body) {
          body.type.should.equal('hot');
          body.should.have.property('keys');
          body.should.have.property('m');
          body.should.have.property('n');
          return true;
        })
        .reply(200, {});
      await wallets.add({
        label: 'label',
        enterprise: 'enterprise',
        type: 'hot',
        keys: [],
        m: 2,
        n: 3,
        userKey: 'test123',
      });
    });
  });

  describe('Generate wallet:', function () {
    const sandbox = sinon.createSandbox();
    it('should validate parameters', async function () {
      let params = {};
      await wallets.generateWallet(params).should.be.rejectedWith('Missing parameter: label');

      params = {
        label: 'abc',
        backupXpub: 'backup',
        backupXpubProvider: 'provider',
      };

      await wallets
        .generateWallet(params)
        .should.be.rejectedWith('Cannot provide more than one backupXpub or backupXpubProvider flag');

      params = {
        label: 'abc',
        passcodeEncryptionCode: 123,
      };
      await wallets.generateWallet(params).should.be.rejectedWith('passcodeEncryptionCode must be a string');

      params = {
        label: 'abc',
        enterprise: 1234,
      };
      await wallets.generateWallet(params).should.be.rejectedWith('invalid enterprise argument, expecting string');

      params = {
        label: 'abc',
        disableTransactionNotifications: 'string',
      };

      await wallets
        .generateWallet(params)
        .should.be.rejectedWith('invalid disableTransactionNotifications argument, expecting boolean');

      params = {
        label: 'abc',
        gasPrice: 'string',
      };

      await wallets
        .generateWallet(params)
        .should.be.rejectedWith('invalid gas price argument, expecting number or number as string');

      params = {
        label: 'abc',
        gasPrice: true,
      };

      await wallets
        .generateWallet(params)
        .should.be.rejectedWith('invalid gas price argument, expecting number or number as string');

      params = {
        label: 'abc',
        gasPrice: 123,
        eip1559: {
          maxFeePerGas: 1234,
          maxPriorityFeePerGas: 123,
        },
      };

      await wallets.generateWallet(params).should.be.rejectedWith('can not use both eip1559 and gasPrice values');

      params = {
        label: 'abc',
        eip1559: {
          maxFeePerGas: 'q1234',
          maxPriorityFeePerGas: '123',
        },
      };

      await wallets
        .generateWallet(params)
        .should.be.rejectedWith('invalid max fee argument, expecting number or number as string');

      params = {
        label: 'abc',
        eip1559: {
          maxFeePerGas: 1234,
          maxPriorityFeePerGas: '123a',
        },
      };

      await wallets
        .generateWallet(params)
        .should.be.rejectedWith('invalid priority fee argument, expecting number or number as string');

      params = {
        label: 'abc',
        disableKRSEmail: 'string',
      };

      await wallets
        .generateWallet(params)
        .should.be.rejectedWith('invalid disableKRSEmail argument, expecting boolean');

      params = {
        label: 'abc',
        krsSpecific: {
          malicious: {
            javascript: {
              code: 'bad.js',
            },
          },
        },
      };

      await wallets
        .generateWallet(params)
        .should.be.rejectedWith(
          'krsSpecific object contains illegal values. values must be strings, booleans, or numbers'
        );
    });

    it('should correctly disable krs emails when creating backup keychains', async function () {
      const params = {
        label: 'my_wallet',
        disableKRSEmail: true,
        backupXpubProvider: 'test',
        passphrase: 'test123',
        userKey: 'xpub123',
      };

      // bitgo key
      nock(bgUrl)
        .post('/api/v2/tbtc/key', _.matches({ source: 'bitgo' }))
        .reply(200);

      // user key
      nock(bgUrl)
        .post('/api/v2/tbtc/key', _.conforms({ pub: (p) => p.startsWith('xpub') }))
        .reply(200);

      // backup key
      nock(bgUrl)
        .post(
          '/api/v2/tbtc/key',
          _.matches({
            source: 'backup',
            provider: params.backupXpubProvider,
            disableKRSEmail: true,
          })
        )
        .reply(200);

      // wallet
      nock(bgUrl).post('/api/v2/tbtc/wallet/add').reply(200);

      await wallets.generateWallet(params);
    });

    it('should correctly pass through the krsSpecific param when creating backup keychains', async function () {
      const params = {
        label: 'my_wallet',
        backupXpubProvider: 'test',
        passphrase: 'test123',
        userKey: 'xpub123',
        krsSpecific: { coverage: 'insurance', expensive: true, howExpensive: 25 },
      };

      // bitgo key
      nock(bgUrl)
        .post('/api/v2/tbtc/key', _.matches({ source: 'bitgo' }))
        .reply(200);

      // user key
      nock(bgUrl)
        .post('/api/v2/tbtc/key', _.conforms({ pub: (p) => p.startsWith('xpub') }))
        .reply(200);

      // backup key
      nock(bgUrl)
        .post(
          '/api/v2/tbtc/key',
          _.matches({
            source: 'backup',
            provider: params.backupXpubProvider,
            krsSpecific: { coverage: 'insurance', expensive: true, howExpensive: 25 },
          })
        )
        .reply(200);

      // wallet
      nock(bgUrl).post('/api/v2/tbtc/wallet/add').reply(200);

      await wallets.generateWallet(params);
    });

    it('should send the cold derivation seed for a user key', async () => {
      const params = {
        label: 'my-cold-wallet',
        passphrase: 'test123',
        userKey:
          'xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8',
        coldDerivationSeed: '123',
      };

      // bitgo key
      const bitgoKeyNock = nock(bgUrl)
        .post('/api/v2/tbtc/key', _.matches({ source: 'bitgo' }))
        .reply(200);

      // user key
      const userKeyNock = nock(bgUrl)
        .post(
          '/api/v2/tbtc/key',
          _.matches({
            derivedFromParentWithSeed: params.coldDerivationSeed,
          })
        )
        .reply(200);

      // backup key
      const backupKeyNock = nock(bgUrl)
        .post('/api/v2/tbtc/key', _.matches({ source: 'backup' }))
        .reply(200);

      // wallet
      const walletNock = nock(bgUrl).post('/api/v2/tbtc/wallet/add').reply(200);

      await wallets.generateWallet(params);
      for (const scope of [bitgoKeyNock, userKeyNock, backupKeyNock, walletNock]) {
        scope.done();
      }
    });

    it('should generate custodial onchain wallet without passing m, n, keys, keySignatures', async () => {
      const params: GenerateWalletOptions = {
        label: 'test wallet',
        enterprise: 'myenterprise',
        type: 'custodial',
      };

      const walletNock = nock(bgUrl)
        .post('/api/v2/tbtc/wallet/add', function (body) {
          body.type.should.equal('custodial');
          should.not.exist(body.m);
          should.not.exist(body.n);
          should.not.exist(body.keys);
          should.not.exist(body.keySignatures);
          return true;
        })
        .reply(200, { id: '123', baseCoin: bitgo.coin('tbtc'), keys: ['123', '456', '789'] });

      nock(bgUrl).get('/api/v2/tbtc/key/123').reply(200, { pub: 'bitgoPub', id: '789' });
      nock(bgUrl).get('/api/v2/tbtc/key/456', _.matches({})).reply(200);
      nock(bgUrl).get('/api/v2/tbtc/key/789').reply(200, { pub: 'backupPub', id: '789' });

      const response = await wallets.generateWallet(params);

      walletNock.isDone().should.be.true();

      assert.ok(response.encryptedWalletPassphrase === undefined);
      assert.ok(response.wallet);
    });

    it('should generate hot onchain wallet', async () => {
      const params: GenerateWalletOptions = {
        label: 'test wallet',
        passphrase: 'multisig password',
        enterprise: 'enterprise',
        passcodeEncryptionCode: 'originalPasscodeEncryptionCode',
      };

      const walletNock = nock(bgUrl)
        .post('/api/v2/tbtc/wallet/add', function (body) {
          body.type.should.equal('hot');
          return true;
        })
        .reply(200);

      nock(bgUrl)
        .post('/api/v2/tbtc/key', _.matches({ source: 'bitgo' }))
        .reply(200, { pub: 'bitgoPub' });
      nock(bgUrl).post('/api/v2/tbtc/key', _.matches({})).reply(200);
      nock(bgUrl)
        .post('/api/v2/tbtc/key', _.matches({ source: 'backup' }))
        .reply(200, { pub: 'backupPub' });

      const response = await wallets.generateWallet(params);

      walletNock.isDone().should.be.true();

      assert.ok(response.encryptedWalletPassphrase);
      assert.ok(response.wallet);
      assert.equal(
        bitgo.decrypt({ input: response.encryptedWalletPassphrase, password: params.passcodeEncryptionCode }),
        params.passphrase
      );
    });

    it('should generate hot onchain wallet without passing multisig type', async () => {
      const params: GenerateWalletOptions = {
        label: 'test wallet',
        passphrase: 'multisig password',
        enterprise: 'enterprise',
        passcodeEncryptionCode: 'originalPasscodeEncryptionCode',
      };

      const walletNock = nock(bgUrl)
        .post('/api/v2/tbtc/wallet/add', function (body) {
          body.type.should.equal('hot');
          return true;
        })
        .reply(200);

      nock(bgUrl)
        .post('/api/v2/tbtc/key', _.matches({ source: 'bitgo' }))
        .reply(200, { pub: 'bitgoPub' });
      nock(bgUrl).post('/api/v2/tbtc/key', _.matches({})).reply(200);
      nock(bgUrl)
        .post('/api/v2/tbtc/key', _.matches({ source: 'backup' }))
        .reply(200, { pub: 'backupPub' });

      const generateWalletSpy = sandbox.spy(wallets, 'generateWallet');
      const response = await wallets.generateWallet(params);
      walletNock.isDone().should.be.true();
      sinon.assert.calledOnce(generateWalletSpy);
      assert.equal(generateWalletSpy.firstCall?.args[0]?.multisigType, multisigTypes.onchain);
      assert.ok(response.encryptedWalletPassphrase);
      assert.ok(response.wallet);
      assert.equal(
        bitgo.decrypt({ input: response.encryptedWalletPassphrase, password: params.passcodeEncryptionCode }),
        params.passphrase
      );
    });
  });

  describe('Generate TSS wallet:', function () {
    const tsol = bitgo.coin('tsol');
    const sandbox = sinon.createSandbox();

    beforeEach(function () {
      nock('https://bitgo.fakeurl')
        .get(`/api/v2/tss/settings`)
        .times(2)
        .reply(200, {
          coinSettings: {
            eth: {
              walletCreationSettings: {},
            },
            bsc: {
              walletCreationSettings: {},
            },
            polygon: {
              walletCreationSettings: {},
            },
          },
        });
    });

    afterEach(function () {
      nock.cleanAll();
      sandbox.verifyAndRestore();
    });

    it('should create a new TSS wallet', async function () {
      const stubbedKeychainsTriplet: KeychainsTriplet = {
        userKeychain: {
          id: '1',
          pub: 'userPub',
          type: 'independent',
          source: 'user',
        },
        backupKeychain: {
          id: '2',
          pub: 'userPub',
          type: 'independent',
          source: 'backup',
        },
        bitgoKeychain: {
          id: '3',
          pub: 'userPub',
          type: 'independent',
          source: 'bitgo',
        },
      };
      sandbox.stub(TssUtils.prototype, 'createKeychains').resolves(stubbedKeychainsTriplet);

      const walletNock = nock('https://bitgo.fakeurl').post('/api/v2/tsol/wallet/add').reply(200);

      const wallets = new Wallets(bitgo, tsol);

      const params = {
        label: 'tss wallet',
        passphrase: 'tss password',
        multisigType: 'tss' as any,
        enterprise: 'enterprise',
        passcodeEncryptionCode: 'originalPasscodeEncryptionCode',
      };

      const response = await wallets.generateWallet(params);

      walletNock.isDone().should.be.true();

      assert.ok(response.encryptedWalletPassphrase);
      assert.ok(response.wallet);
      assert.equal(
        bitgo.decrypt({ input: response.encryptedWalletPassphrase, password: params.passcodeEncryptionCode }),
        params.passphrase
      );
    });

    it('should create a new TSS wallet without passing multisig type', async function () {
      const stubbedKeychainsTriplet: KeychainsTriplet = {
        userKeychain: {
          id: '1',
          pub: 'userPub',
          type: 'independent',
          source: 'user',
        },
        backupKeychain: {
          id: '2',
          pub: 'userPub',
          type: 'independent',
          source: 'backup',
        },
        bitgoKeychain: {
          id: '3',
          pub: 'userPub',
          type: 'independent',
          source: 'bitgo',
        },
      };
      sandbox.stub(TssUtils.prototype, 'createKeychains').resolves(stubbedKeychainsTriplet);

      const walletNock = nock('https://bitgo.fakeurl')
        .post('/api/v2/tsol/wallet/add', function (body) {
          body.multisigType.should.equal(multisigTypes.tss);
          return true;
        })
        .reply(200);

      const wallets = new Wallets(bitgo, tsol);

      const params = {
        label: 'tss wallet',
        passphrase: 'tss password',
        enterprise: 'enterprise',
        passcodeEncryptionCode: 'originalPasscodeEncryptionCode',
      };

      const generateWalletSpy = sandbox.spy(wallets, 'generateWallet');
      const response = await wallets.generateWallet(params);
      walletNock.isDone().should.be.true();
      sinon.assert.calledOnce(generateWalletSpy);
      assert.equal(generateWalletSpy.firstCall?.args[0]?.multisigType, multisigTypes.tss);
      assert.ok(response.encryptedWalletPassphrase);
      assert.ok(response.wallet);
      assert.equal(
        bitgo.decrypt({ input: response.encryptedWalletPassphrase, password: params.passcodeEncryptionCode }),
        params.passphrase
      );
    });

    it('should create a new TSS wallet without providing passcodeEncryptionCode', async function () {
      const stubbedKeychainsTriplet: KeychainsTriplet = {
        userKeychain: {
          id: '1',
          pub: 'userPub',
          type: 'independent',
          source: 'user',
        },
        backupKeychain: {
          id: '2',
          pub: 'userPub',
          type: 'independent',
          source: 'backup',
        },
        bitgoKeychain: {
          id: '3',
          pub: 'userPub',
          type: 'independent',
          source: 'bitgo',
        },
      };
      sandbox.stub(TssUtils.prototype, 'createKeychains').resolves(stubbedKeychainsTriplet);

      const walletNock = nock('https://bitgo.fakeurl').post('/api/v2/tsol/wallet/add').reply(200);

      const wallets = new Wallets(bitgo, tsol);

      const response = await wallets.generateWallet({
        label: 'tss wallet',
        passphrase: 'tss password',
        multisigType: 'tss',
        enterprise: 'enterprise',
      });

      walletNock.isDone().should.be.true();

      assert.ok(response.wallet);
      assert.ok(response.encryptedWalletPassphrase === undefined);
    });

    it('should fail to create TSS wallet with invalid inputs', async function () {
      const tbtc = bitgo.coin('tbtc');
      const params = {
        label: 'my-cold-wallet',
        passphrase: 'test123',
        userKey:
          'xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8',
        coldDerivationSeed: '123',
      };
      const wallets = new Wallets(bitgo, tbtc);

      nock(bgUrl)
        .post('/api/v2/tbtc/key', _.matches({ source: 'bitgo' }))
        .reply(200);

      nock(bgUrl)
        .post('/api/v2/tbtc/key', _.matches({ derivedFromParentWithSeed: params.coldDerivationSeed }))
        .reply(200);
      nock(bgUrl)
        .post('/api/v2/tbtc/key', _.matches({ source: 'backup' }))
        .reply(200);

      nock(bgUrl).post('/api/v2/tbtc/wallet/add').reply(200);

      // create a non tss wallet for coin that doesn't support tss even though multisigType is set to tss
      await wallets.generateWallet({ ...params, multisigType: 'tss' });

      const tsolWallets = new Wallets(bitgo, tsol);

      await tsolWallets
        .generateWallet({
          label: 'tss cold wallet',
          passphrase: 'passphrase',
          userKey: 'user key',
          multisigType: 'tss',
        })
        .should.be.rejectedWith('enterprise is required for TSS wallet');

      await tsolWallets
        .generateWallet({
          label: 'tss cold wallet',
          userKey: 'user key',
          multisigType: 'tss',
          enterprise: 'enterpriseId',
        })
        .should.be.rejectedWith('cannot generate TSS keys without passphrase');
    });

    it('should create a new TSS custodial wallet', async function () {
      const keys = ['1', '2', '3'];

      const walletParams: GenerateWalletOptions = {
        label: 'tss wallet',
        multisigType: 'tss',
        enterprise: 'enterprise',
        type: 'custodial',
      };

      const walletNock = nock('https://bitgo.fakeurl')
        .post('/api/v2/tsol/wallet/add')
        .times(1)
        .reply(200, { ...walletParams, keys });

      const wallets = new Wallets(bitgo, tsol);

      const res = await wallets.generateWallet(walletParams);
      if (!isWalletWithKeychains(res)) {
        throw new Error('wallet missing required keychains');
      }
      res.wallet.label().should.equal(walletParams.label);
      should.equal(res.wallet.type(), walletParams.type);
      res.wallet.toJSON().enterprise.should.equal(walletParams.enterprise);
      res.wallet.multisigType().should.equal(walletParams.multisigType);
      res.userKeychain.id.should.equal(keys[0]);
      res.backupKeychain.id.should.equal(keys[1]);
      res.bitgoKeychain.id.should.equal(keys[2]);

      walletNock.isDone().should.be.true();
    });

    it('should create a new TSS SMC wallet', async function () {
      const commonKeychain = 'longstring';
      const seed = 'seed';
      const keys: KeychainsTriplet = {
        userKeychain: {
          id: '1',
          commonKeychain,
          type: 'tss',
          derivedFromParentWithSeed: seed,
          source: 'user',
        },
        backupKeychain: {
          id: '2',
          commonKeychain,
          type: 'tss',
          derivedFromParentWithSeed: seed,
          source: 'backup',
        },
        bitgoKeychain: {
          id: '3',
          commonKeychain,
          type: 'tss',
          source: 'bitgo',
        },
      };

      const bitgoKeyNock = nock('https://bitgo.fakeurl').get('/api/v2/tsol/key/3').reply(200, keys.bitgoKeychain);
      const userKeyExpectedBody = {
        source: 'user',
        keyType: 'tss',
        commonKeychain,
        derivedFromParentWithSeed: seed,
      };
      const userKeyNock = nock('https://bitgo.fakeurl')
        .post('/api/v2/tsol/key', userKeyExpectedBody)
        .reply(200, keys.userKeychain);
      const backupKeyExpectedBody = {
        source: 'backup',
        keyType: 'tss',
        commonKeychain,
        derivedFromParentWithSeed: seed,
      };
      const backupKeyNock = nock('https://bitgo.fakeurl')
        .post('/api/v2/tsol/key', backupKeyExpectedBody)
        .reply(200, keys.backupKeychain);

      const walletParams: GenerateWalletOptions = {
        label: 'tss wallet',
        multisigType: 'tss',
        enterprise: 'enterprise',
        type: 'cold',
        bitgoKeyId: keys.bitgoKeychain.id,
        commonKeychain,
        coldDerivationSeed: seed,
      };

      const walletNockExpected = {
        label: walletParams.label,
        m: 2,
        n: 3,
        keys: [keys.userKeychain.id, keys.backupKeychain.id, keys.bitgoKeychain.id],
        type: walletParams.type,
        multisigType: walletParams.multisigType,
        enterprise: walletParams.enterprise,
        walletVersion: undefined,
      };

      const walletNock = nock('https://bitgo.fakeurl')
        .post('/api/v2/tsol/wallet/add', walletNockExpected)
        .reply(200, { ...walletNockExpected, responseType: 'WalletWithKeychains' });

      const wallets = new Wallets(bitgo, tsol);

      const res = await wallets.generateWallet(walletParams);
      if (!isWalletWithKeychains(res)) {
        throw new Error('wallet missing required keychains');
      }
      res.responseType.should.equal('WalletWithKeychains');
      res.wallet.label().should.equal(walletParams.label);
      should.equal(res.wallet.type(), walletParams.type);
      res.wallet.toJSON().enterprise.should.equal(walletParams.enterprise);
      res.wallet.multisigType().should.equal(walletParams.multisigType);
      res.userKeychain.should.deepEqual(keys.userKeychain);
      res.backupKeychain.should.deepEqual(keys.backupKeychain);
      res.bitgoKeychain.should.deepEqual(keys.bitgoKeychain);

      bitgoKeyNock.isDone().should.be.true();
      userKeyNock.isDone().should.be.true();
      backupKeyNock.isDone().should.be.true();
      walletNock.isDone().should.be.true();
    });

    it('should throw an error for TSS SMC wallet if the bitgoKeyId is not a bitgo key ', async function () {
      const commonKeychain = 'longstring';
      const seed = 'seed';
      const keys: KeychainsTriplet = {
        userKeychain: {
          id: '1',
          commonKeychain,
          type: 'tss',
          derivedFromParentWithSeed: seed,
          source: 'user',
        },
        backupKeychain: {
          id: '2',
          commonKeychain,
          type: 'tss',
          derivedFromParentWithSeed: seed,
          source: 'backup',
        },
        bitgoKeychain: {
          id: '3',
          commonKeychain,
          type: 'tss',
          source: 'bitgo',
        },
      };

      const bitgoKeyNock = nock('https://bitgo.fakeurl').get('/api/v2/tsol/key/1').reply(200, keys.userKeychain);

      const walletParams: GenerateWalletOptions = {
        label: 'tss wallet',
        multisigType: 'tss',
        enterprise: 'enterprise',
        type: 'cold',
        bitgoKeyId: keys.userKeychain.id,
        commonKeychain,
        coldDerivationSeed: seed,
      };

      const wallets = new Wallets(bitgo, tsol);

      await wallets
        .generateWallet(walletParams)
        .should.be.rejectedWith('The provided bitgoKeyId is not a BitGo keychain');

      bitgoKeyNock.isDone().should.be.true();
    });
  });

  describe('Generate TSS MPCv2 wallet:', async function () {
    const sandbox = sinon.createSandbox();

    beforeEach(function () {
      const tssSettings: TssSettings = {
        coinSettings: {
          eth: {
            walletCreationSettings: {
              multiSigTypeVersion: 'MPCv2',
              coldMultiSigTypeVersion: 'MPCv2',
              custodialMultiSigTypeVersion: 'MPCv2',
            },
          },
          bsc: {
            walletCreationSettings: {
              multiSigTypeVersion: 'MPCv2',
              coldMultiSigTypeVersion: 'MPCv2',
              custodialMultiSigTypeVersion: 'MPCv2',
            },
          },
          polygon: {
            walletCreationSettings: {
              multiSigTypeVersion: 'MPCv2',
              coldMultiSigTypeVersion: 'MPCv2',
              custodialMultiSigTypeVersion: 'MPCv2',
            },
          },
          atom: {
            walletCreationSettings: {
              multiSigTypeVersion: 'MPCv2',
              coldMultiSigTypeVersion: 'MPCv2',
              custodialMultiSigTypeVersion: 'MPCv2',
            },
          },
          tia: {
            walletCreationSettings: {
              multiSigTypeVersion: 'MPCv2',
              coldMultiSigTypeVersion: 'MPCv2',
              custodialMultiSigTypeVersion: 'MPCv2',
            },
          },
          bera: {
            walletCreationSettings: {
              multiSigTypeVersion: 'MPCv2',
              coldMultiSigTypeVersion: 'MPCv2',
              custodialMultiSigTypeVersion: 'MPCv2',
            },
          },
          arbeth: {
            walletCreationSettings: {
              multiSigTypeVersion: 'MPCv2',
              coldMultiSigTypeVersion: 'MPCv2',
              custodialMultiSigTypeVersion: 'MPCv2',
            },
          },
          opeth: {
            walletCreationSettings: {
              multiSigTypeVersion: 'MPCv2',
              coldMultiSigTypeVersion: 'MPCv2',
              custodialMultiSigTypeVersion: 'MPCv2',
            },
          },
        },
      };
      nock('https://bitgo.fakeurl').get(`/api/v2/tss/settings`).times(2).reply(200, tssSettings);
    });

    afterEach(function () {
      nock.cleanAll();
      sandbox.verifyAndRestore();
    });

    ['hteth', 'tbsc', 'tpolygon', 'ttia', 'tatom', 'tbera', 'tarbeth', 'topeth'].forEach((coin) => {
      it(`should create a new ${coin} TSS MPCv2 hot wallet`, async function () {
        const testCoin = bitgo.coin(coin);
        const stubbedKeychainsTriplet: KeychainsTriplet = {
          userKeychain: {
            id: '1',
            commonKeychain: 'userPub',
            type: 'tss',
            source: 'user',
          },
          backupKeychain: {
            id: '2',
            commonKeychain: 'userPub',
            type: 'tss',
            source: 'backup',
          },
          bitgoKeychain: {
            id: '3',
            commonKeychain: 'userPub',
            type: 'tss',
            source: 'bitgo',
          },
        };
        const stubCreateKeychains = sandbox
          .stub(ECDSAUtils.EcdsaMPCv2Utils.prototype, 'createKeychains')
          .resolves(stubbedKeychainsTriplet);

        const walletNock = nock('https://bitgo.fakeurl').post(`/api/v2/${coin}/wallet/add`).reply(200);

        const wallets = new Wallets(bitgo, testCoin);

        const params = {
          label: 'tss wallet',
          passphrase: 'tss password',
          multisigType: 'tss' as const,
          enterprise: 'enterprise',
          passcodeEncryptionCode: 'originalPasscodeEncryptionCode',
          walletVersion: 3,
        };

        const response = await wallets.generateWallet(params);

        walletNock.isDone().should.be.true();
        stubCreateKeychains.calledOnce.should.be.true();

        assert.ok(response.encryptedWalletPassphrase);
        assert.ok(response.wallet);
        assert.equal(
          bitgo.decrypt({ input: response.encryptedWalletPassphrase, password: params.passcodeEncryptionCode }),
          params.passphrase
        );
      });

      it(`should create a new ${coin} TSS MPCv2 hot wallet without passing multisig type`, async function () {
        const testCoin = bitgo.coin(coin);
        const stubbedKeychainsTriplet: KeychainsTriplet = {
          userKeychain: {
            id: '1',
            commonKeychain: 'userPub',
            type: 'tss',
            source: 'user',
          },
          backupKeychain: {
            id: '2',
            commonKeychain: 'userPub',
            type: 'tss',
            source: 'backup',
          },
          bitgoKeychain: {
            id: '3',
            commonKeychain: 'userPub',
            type: 'tss',
            source: 'bitgo',
          },
        };
        const stubCreateKeychains = sandbox
          .stub(ECDSAUtils.EcdsaMPCv2Utils.prototype, 'createKeychains')
          .resolves(stubbedKeychainsTriplet);

        const walletNock = nock('https://bitgo.fakeurl')
          .post(`/api/v2/${coin}/wallet/add`, function (body) {
            body.multisigType.should.equal(multisigTypes.tss);
            return true;
          })
          .reply(200);

        const wallets = new Wallets(bitgo, testCoin);

        const params = {
          label: 'tss wallet',
          passphrase: 'tss password',
          enterprise: 'enterprise',
          passcodeEncryptionCode: 'originalPasscodeEncryptionCode',
          walletVersion: 3,
        };

        const response = await wallets.generateWallet(params);

        walletNock.isDone().should.be.true();
        stubCreateKeychains.calledOnce.should.be.true();

        assert.ok(response.encryptedWalletPassphrase);
        assert.ok(response.wallet);
        assert.equal(
          bitgo.decrypt({ input: response.encryptedWalletPassphrase, password: params.passcodeEncryptionCode }),
          params.passphrase
        );
      });

      it(`should create a new ${coin} TSS MPCv2 cold wallet`, async function () {
        const testCoin = bitgo.coin(coin);
        const bitgoKeyId = 'key123';
        const commonKeychain = '0xabc';

        const bitgoKeyNock = nock('https://bitgo.fakeurl')
          .get(`/api/v2/${coin}/key/${bitgoKeyId}`)
          .times(1)
          .reply(200, {
            id: 'key123',
            pub: 'bitgoPub',
            type: 'tss',
            source: 'bitgo',
            commonKeychain,
          });

        const userKeyNock = nock('https://bitgo.fakeurl')
          .post(`/api/v2/${coin}/key`, {
            source: 'user',
            keyType: 'tss',
            commonKeychain,
            derivedFromParentWithSeed: '37',
            isMPCv2: true,
          })
          .times(1)
          .reply(200, {
            id: 'userKey123',
            pub: 'userPub',
            type: 'tss',
            source: 'user',
          });

        const backupKeyNock = nock('https://bitgo.fakeurl')
          .post(`/api/v2/${coin}/key`, {
            source: 'backup',
            keyType: 'tss',
            commonKeychain,
            derivedFromParentWithSeed: '37',
            isMPCv2: true,
          })
          .times(1)
          .reply(200, {
            id: 'backupKey123',
            pub: 'backupPub',
            type: 'tss',
            source: 'backup',
          });

        const walletNock = nock('https://bitgo.fakeurl')
          .post(`/api/v2/${coin}/wallet/add`, {
            label: 'tss wallet',
            m: 2,
            n: 3,
            keys: ['userKey123', 'backupKey123', 'key123'],
            type: 'cold',
            multisigType: 'tss',
            enterprise: 'enterprise',
            walletVersion: 5,
          })
          .reply(200);

        const wallets = new Wallets(bitgo, testCoin);

        const params: GenerateWalletOptions = {
          label: 'tss wallet',
          multisigType: 'tss' as const,
          enterprise: 'enterprise',
          passcodeEncryptionCode: 'originalPasscodeEncryptionCode',
          walletVersion: 5,
          type: 'cold',
          bitgoKeyId: 'key123',
          commonKeychain: '0xabc',
          coldDerivationSeed: '37',
        };

        const response = (await wallets.generateWallet(params)) as WalletWithKeychains;

        bitgoKeyNock.isDone().should.be.true();
        userKeyNock.isDone().should.be.true();
        backupKeyNock.isDone().should.be.true();
        walletNock.isDone().should.be.true();

        should.exist(response.wallet);
        should.exist(response.userKeychain);
        should.exist(response.backupKeychain);
        should.exist(response.bitgoKeychain);
        response.responseType.should.equal('WalletWithKeychains');
        response.userKeychain.id.should.equal('userKey123');
        response.backupKeychain.id.should.equal('backupKey123');
        response.bitgoKeychain.id.should.equal('key123');
      });

      it(`should create a new ${coin} TSS MPCv2 custody wallet`, async function () {
        const testCoin = bitgo.coin(coin);
        const keys = ['userKey', 'backupKey', 'bitgoKey'];

        const params: GenerateWalletOptions = {
          label: 'tss wallet',
          passphrase: 'tss password',
          multisigType: 'tss' as const,
          enterprise: 'enterprise',
          passcodeEncryptionCode: 'originalPasscodeEncryptionCode',
          walletVersion: 5,
          type: 'custodial',
        };

        const walletNock = nock('https://bitgo.fakeurl')
          .post(`/api/v2/${coin}/wallet/add`)
          .times(1)
          .reply(200, { ...params, keys });

        const wallets = new Wallets(bitgo, testCoin);

        const response = (await wallets.generateWallet(params)) as WalletWithKeychains;

        walletNock.isDone().should.be.true();
        should.exist(response.wallet);
        should.exist(response.userKeychain);
        should.exist(response.backupKeychain);
        should.exist(response.bitgoKeychain);
        response.responseType.should.equal('WalletWithKeychains');
        response.userKeychain.id.should.equal(keys[0]);
        response.backupKeychain.id.should.equal(keys[1]);
        response.bitgoKeychain.id.should.equal(keys[2]);
      });
    });

    it(`should create a new hteth TSS MPCv2 wallet with walletVersion 6`, async function () {
      const testCoin = bitgo.coin('hteth');
      const stubbedKeychainsTriplet: KeychainsTriplet = {
        userKeychain: {
          id: '1',
          commonKeychain: 'userPub',
          type: 'tss',
          source: 'user',
        },
        backupKeychain: {
          id: '2',
          commonKeychain: 'userPub',
          type: 'tss',
          source: 'backup',
        },
        bitgoKeychain: {
          id: '3',
          commonKeychain: 'userPub',
          type: 'tss',
          source: 'bitgo',
        },
      };
      const stubCreateKeychains = sandbox
        .stub(ECDSAUtils.EcdsaMPCv2Utils.prototype, 'createKeychains')
        .resolves(stubbedKeychainsTriplet);

      const walletNock = nock('https://bitgo.fakeurl')
        .post(`/api/v2/hteth/wallet/add`, (body) => {
          body.walletVersion.should.equal(6);
          return true;
        })
        .reply(200);

      const wallets = new Wallets(bitgo, testCoin);

      const params = {
        label: 'tss wallet',
        passphrase: 'tss password',
        multisigType: 'tss' as const,
        enterprise: 'enterprise',
        passcodeEncryptionCode: 'originalPasscodeEncryptionCode',
        walletVersion: 6,
      };

      const response = await wallets.generateWallet(params);

      walletNock.isDone().should.be.true();
      stubCreateKeychains.calledOnce.should.be.true();

      assert.ok(response.encryptedWalletPassphrase);
      assert.ok(response.wallet);
      assert.equal(
        bitgo.decrypt({ input: response.encryptedWalletPassphrase, password: params.passcodeEncryptionCode }),
        params.passphrase
      );
    });

    it(`should create a new MPCv2 wallet with version 5 if walletVersion passed is not 5 or 6`, async function () {
      const testCoin = bitgo.coin('hteth');
      const stubbedKeychainsTriplet: KeychainsTriplet = {
        userKeychain: {
          id: '1',
          commonKeychain: 'userPub',
          type: 'tss',
          source: 'user',
        },
        backupKeychain: {
          id: '2',
          commonKeychain: 'userPub',
          type: 'tss',
          source: 'backup',
        },
        bitgoKeychain: {
          id: '3',
          commonKeychain: 'userPub',
          type: 'tss',
          source: 'bitgo',
        },
      };
      const stubCreateKeychains = sandbox
        .stub(ECDSAUtils.EcdsaMPCv2Utils.prototype, 'createKeychains')
        .resolves(stubbedKeychainsTriplet);

      const walletNock = nock('https://bitgo.fakeurl')
        .post(`/api/v2/hteth/wallet/add`, (body) => {
          body.walletVersion.should.equal(5);
          return true;
        })
        .reply(200);

      const wallets = new Wallets(bitgo, testCoin);

      const params = {
        label: 'tss wallet',
        passphrase: 'tss password',
        multisigType: 'tss' as const,
        enterprise: 'enterprise',
        passcodeEncryptionCode: 'originalPasscodeEncryptionCode',
        walletVersion: 3,
      };

      const response = await wallets.generateWallet(params);

      walletNock.isDone().should.be.true();
      stubCreateKeychains.calledOnce.should.be.true();

      assert.ok(response.encryptedWalletPassphrase);
      assert.ok(response.wallet);
      assert.equal(
        bitgo.decrypt({ input: response.encryptedWalletPassphrase, password: params.passcodeEncryptionCode }),
        params.passphrase
      );
    });
  });

  describe('Sharing', () => {
    describe('Wallet share where keychainOverrideRequired is set true', () => {
      const sandbox = sinon.createSandbox();

      afterEach(function () {
        sandbox.verifyAndRestore();
      });

      it('when password not provived we should receive validation error', async function () {
        const shareId = 'test_case_1';

        const walletShareNock = nock(bgUrl)
          .get(`/api/v2/tbtc/walletshare/${shareId}`)
          .reply(200, {
            keychainOverrideRequired: true,
            permissions: ['admin', 'spend', 'view'],
          });

        // Validate accept share case
        await wallets
          .acceptShare({ walletShareId: shareId })
          .should.be.rejectedWith('userPassword param must be provided to decrypt shared key');
        walletShareNock.done();
      });

      it('when we accept share and failed to make changes, reshare should not be called', async function () {
        const shareId = 'test_case_2';
        const keychainId = 'test_case_2';
        const userPassword = 'test_case_2';
        // create a user key
        const keyChainNock = nock(bgUrl)
          .post('/api/v2/tbtc/key', _.conforms({ pub: (p) => p.startsWith('xpub') }))
          .reply(200, (uri, requestBody) => {
            return { id: keychainId, encryptedPrv: requestBody['encryptedPrv'], pub: requestBody['pub'] };
          });

        const walletShareInfoNock = nock(bgUrl)
          .get(`/api/v2/tbtc/walletshare/${shareId}`)
          .reply(200, {
            keychainOverrideRequired: true,
            permissions: ['admin', 'spend', 'view'],
          });

        const acceptShareNock = nock(bgUrl)
          .post(`/api/v2/tbtc/walletshare/${shareId}`, (body: any) => {
            if (body.walletShareId !== shareId || body.state !== 'accepted' || body.keyId !== keychainId) {
              return false;
            }
            return true;
          })
          .reply(200, { changed: false });

        // Stub wallet share wallet method
        const walletShareStub = sandbox.stub(Wallet.prototype, 'shareWallet').onCall(0).resolves('success');

        const res = await wallets.acceptShare({ walletShareId: shareId, userPassword });
        should.equal(res.changed, false);
        keyChainNock.done();
        walletShareInfoNock.done();
        acceptShareNock.done();
        should.equal(walletShareStub.called, false);
      });

      it('when we accept share but state is not valid, reshare should not be called', async function () {
        const shareId = 'test_case_3';
        const keychainId = 'test_case_3';
        const userPassword = 'test_case_3';

        // create a user key
        const keyChainNock = nock(bgUrl)
          .post('/api/v2/tbtc/key', _.conforms({ pub: (p) => p.startsWith('xpub') }))
          .reply(200, (uri, requestBody) => {
            return { id: keychainId, encryptedPrv: requestBody['encryptedPrv'], pub: requestBody['pub'] };
          });

        const walletShareInfoNock = nock(bgUrl)
          .get(`/api/v2/tbtc/walletshare/${shareId}`)
          .reply(200, {
            keychainOverrideRequired: true,
            permissions: ['admin', 'spend', 'view'],
          });

        const acceptShareNock = nock(bgUrl)
          .post(`/api/v2/tbtc/walletshare/${shareId}`, (body: any) => {
            if (body.walletShareId !== shareId || body.state !== 'accepted' || body.keyId !== keychainId) {
              return false;
            }
            return true;
          })
          .reply(200, { changed: true, state: 'not_accepted' });

        // Stub wallet share wallet method
        const walletShareStub = sandbox.stub(Wallet.prototype, 'shareWallet').onCall(0).resolves('success');

        const res = await wallets.acceptShare({ walletShareId: shareId, userPassword });
        should.equal(res.changed, true);
        should.equal(res.state, 'not_accepted');
        keyChainNock.done();
        walletShareInfoNock.done();
        acceptShareNock.done();
        should.equal(walletShareStub.called, false);
      });

      it('when we get a correct resposne from accept share method, but failed to reshare wallet with spenders', async function () {
        const shareId = 'test_case_6';
        const keychainId = 'test_case_6';
        const spenderUserOne = {
          payload: {
            permissions: ['spend', 'view'],
            user: 'test_case_6',
          },
          email: { email: 'test_case_6' },
          id: 'test_case_6',
          coin: 'ofc',
        };
        const spenderUserTwo = {
          payload: {
            permissions: ['spend', 'view'],
            user: 'test_case_9',
          },
          email: { email: 'test_case_9' },
          id: 'test_case_9',
          coin: 'ofc',
        };
        const adminUser = {
          payload: {
            permissions: ['admin', 'spend', 'view'],
            user: 'test_case_7',
          },
          email: { email: 'test_case_7' },
          id: 'test_case_7',
          coin: 'ofc',
        };
        const viewerUser = {
          payload: {
            permissions: ['view'],
            user: 'test_case_8',
          },
          email: { email: 'test_case_8' },
          id: 'test_case_8',
          coin: 'ofc',
        };
        const userPassword = 'test_case_6';
        const walletId = 'test_case_6';
        const enterpriseId = 'test_case_6';

        const walletShareNock = nock(bgUrl)
          .get(`/api/v2/tbtc/walletshare/${shareId}`)
          .reply(200, {
            keychainOverrideRequired: true,
            permissions: ['admin', 'spend', 'view'],
            wallet: walletId,
          });

        // create a user key
        const keyChainCreateNock = nock(bgUrl)
          .post('/api/v2/tbtc/key', _.conforms({ pub: (p) => p.startsWith('xpub') }))
          .reply(200, (uri, requestBody) => {
            return { id: keychainId, encryptedPrv: requestBody['encryptedPrv'], pub: requestBody['pub'] };
          });

        const acceptShareNock = nock(bgUrl)
          .post(`/api/v2/tbtc/walletshare/${shareId}`, (body: any) => {
            if (body.walletShareId !== shareId || body.state !== 'accepted' || body.keyId !== keychainId) {
              return false;
            }
            return true;
          })
          .reply(200, { changed: true, state: 'accepted' });

        const walletInfoNock = nock(bgUrl)
          .get(`/api/v2/tbtc/wallet/${walletId}`)
          .reply(200, {
            users: [spenderUserOne.payload, spenderUserTwo.payload, adminUser.payload, viewerUser.payload],
            enterprise: enterpriseId,
            coin: spenderUserOne.coin,
            id: walletId,
            keys: [{}],
          });

        const enterpriseUserNock = nock(bgUrl)
          .get(`/api/v1/enterprise/${enterpriseId}/user`)
          .reply(200, {
            adminUsers: [
              { id: spenderUserOne.id, email: spenderUserOne.email },
              { id: spenderUserTwo.id, email: spenderUserTwo.email },
              { id: adminUser.id, email: adminUser.email },
              { id: viewerUser.id, email: viewerUser.email },
            ],
            nonAdminUsers: [],
          });

        const walletShareStub = sandbox
          .stub(Wallet.prototype, 'shareWallet')
          .returns(new Promise((_resolve, reject) => reject(new Error('Failed to reshare wallet'))));

        const shareParamsOne = {
          walletId: walletId,
          user: spenderUserOne.id,
          permissions: spenderUserOne.payload.permissions.join(','),
          walletPassphrase: userPassword,
          email: spenderUserOne.email.email,
          reshare: true,
          skipKeychain: false,
        };

        const shareParamsTwo = {
          walletId: walletId,
          user: spenderUserTwo.id,
          permissions: spenderUserTwo.payload.permissions.join(','),
          walletPassphrase: userPassword,
          email: spenderUserTwo.email.email,
          reshare: true,
          skipKeychain: false,
        };

        const res = await wallets.acceptShare({ walletShareId: shareId, userPassword });
        should.equal(res.changed, true);
        should.equal(res.state, 'accepted');
        keyChainCreateNock.done();
        walletShareNock.done();
        walletInfoNock.done();
        acceptShareNock.done();
        enterpriseUserNock.done();
        should.equal(walletShareStub.calledOnce, true);
        should.equal(walletShareStub.calledWith(shareParamsOne), true);
        should.equal(walletShareStub.calledWith(shareParamsTwo), false);
      });

      it('when we get a correct resposne from accept share method and reshare wallet with spenders', async function () {
        const shareId = 'test_case_6';
        const keychainId = 'test_case_6';
        const spenderUserOne = {
          payload: {
            permissions: ['spend', 'view'],
            user: 'test_case_6',
          },
          email: { email: 'test_case_6' },
          id: 'test_case_6',
          coin: 'ofc',
        };
        const spenderUserTwo = {
          payload: {
            permissions: ['spend', 'view'],
            user: 'test_case_9',
          },
          email: { email: 'test_case_9' },
          id: 'test_case_9',
          coin: 'ofc',
        };
        const adminUser = {
          payload: {
            permissions: ['admin', 'spend', 'view'],
            user: 'test_case_7',
          },
          email: { email: 'test_case_7' },
          id: 'test_case_7',
          coin: 'ofc',
        };
        const viewerUser = {
          payload: {
            permissions: ['view'],
            user: 'test_case_8',
          },
          email: { email: 'test_case_8' },
          id: 'test_case_8',
          coin: 'ofc',
        };
        const userPassword = 'test_case_6';
        const walletId = 'test_case_6';
        const enterpriseId = 'test_case_6';

        const walletShareNock = nock(bgUrl)
          .get(`/api/v2/tbtc/walletshare/${shareId}`)
          .reply(200, {
            keychainOverrideRequired: true,
            permissions: ['admin', 'spend', 'view'],
            wallet: walletId,
          });

        // create a user key
        const keyChainCreateNock = nock(bgUrl)
          .post('/api/v2/tbtc/key', _.conforms({ pub: (p) => p.startsWith('xpub') }))
          .reply(200, (uri, requestBody) => {
            return { id: keychainId, encryptedPrv: requestBody['encryptedPrv'], pub: requestBody['pub'] };
          });

        const acceptShareNock = nock(bgUrl)
          .post(`/api/v2/tbtc/walletshare/${shareId}`, (body: any) => {
            if (body.walletShareId !== shareId || body.state !== 'accepted' || body.keyId !== keychainId) {
              return false;
            }
            return true;
          })
          .reply(200, { changed: true, state: 'accepted' });

        const walletInfoNock = nock(bgUrl)
          .get(`/api/v2/tbtc/wallet/${walletId}`)
          .reply(200, {
            users: [spenderUserOne.payload, spenderUserTwo.payload, adminUser.payload, viewerUser.payload],
            enterprise: enterpriseId,
            coin: spenderUserOne.coin,
            id: walletId,
            keys: [{}],
          });

        const enterpriseUserNock = nock(bgUrl)
          .get(`/api/v1/enterprise/${enterpriseId}/user`)
          .reply(200, {
            adminUsers: [
              { id: spenderUserOne.id, email: spenderUserOne.email },
              { id: spenderUserTwo.id, email: spenderUserTwo.email },
              { id: adminUser.id, email: adminUser.email },
              { id: viewerUser.id, email: viewerUser.email },
            ],
            nonAdminUsers: [],
          });

        const walletShareStub = sandbox
          .stub(Wallet.prototype, 'shareWallet')
          .returns(new Promise((resolve, _reject) => resolve('success')));

        const shareParamsOne = {
          walletId: walletId,
          user: spenderUserOne.id,
          permissions: spenderUserOne.payload.permissions.join(','),
          walletPassphrase: userPassword,
          email: spenderUserOne.email.email,
          reshare: true,
          skipKeychain: false,
        };

        const shareParamsTwo = {
          walletId: walletId,
          user: spenderUserTwo.id,
          permissions: spenderUserTwo.payload.permissions.join(','),
          walletPassphrase: userPassword,
          email: spenderUserTwo.email.email,
          reshare: true,
          skipKeychain: false,
        };

        const res = await wallets.acceptShare({ walletShareId: shareId, userPassword });
        should.equal(res.changed, true);
        should.equal(res.state, 'accepted');
        keyChainCreateNock.done();
        walletShareNock.done();
        walletInfoNock.done();
        acceptShareNock.done();
        enterpriseUserNock.done();
        should.equal(walletShareStub.calledTwice, true);
        should.equal(walletShareStub.calledWith(shareParamsOne), true);
        should.equal(walletShareStub.calledWith(shareParamsTwo), true);
      });
    });

    it('should share a wallet to viewer', async function () {
      const shareId = '12311';

      nock(bgUrl).get(`/api/v2/tbtc/walletshare/${shareId}`).reply(200, {});
      const acceptShareNock = nock(bgUrl)
        .post(`/api/v2/tbtc/walletshare/${shareId}`, { walletShareId: shareId, state: 'accepted' })
        .reply(200, {});

      await wallets.acceptShare({ walletShareId: shareId });
      acceptShareNock.done();
    });

    describe('bulkAcceptShare', function () {
      afterEach(function () {
        nock.cleanAll();
        nock.pendingMocks().length.should.equal(0);
        sinon.restore();
      });

      it('should throw validation error for userPassword empty string', async () => {
        await wallets
          .bulkAcceptShare({ walletShareIds: [], userLoginPassword: '' })
          .should.rejectedWith('Please provide a valid user login password');
      });

      it('should throw validation error for sending walletPassphrase empty string', async () => {
        await wallets
          .bulkAcceptShare({ walletShareIds: [], userLoginPassword: 'password', newWalletPassphrase: 123 })
          .should.rejectedWith('Please provide a valid wallet passphrase');
      });

      it('should throw assertion error for empty walletShareIds', async () => {
        await wallets
          .bulkAcceptShare({ walletShareIds: [], userLoginPassword: 'dummy@123' })
          .should.rejectedWith('Please provide at least one wallet share to accept');
      });

      it('should throw error for no valid wallet shares', async () => {
        sinon.stub(Wallets.prototype, 'listSharesV2').resolves({
          incoming: [
            {
              id: '66a229dbdccdcfb95b44fc2745a60bd4',
              coin: 'tsol',
              walletLabel: 'testing',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'dummyWalletId',
              permissions: ['spend'],
              state: 'active',
            },
          ],
          outgoing: [],
        });
        await wallets
          .bulkAcceptShare({
            walletShareIds: ['66a229dbdccdcfb95b44fc2745a60bd1'],
            userLoginPassword: 'dummy@123',
          })
          .should.rejectedWith('No valid wallet shares found to accept');
      });

      it('should throw error for no valid walletShares with keychain', async () => {
        sinon.stub(Wallets.prototype, 'listSharesV2').resolves({
          incoming: [
            {
              id: '66a229dbdccdcfb95b44fc2745a60bd4',
              coin: 'tsol',
              walletLabel: 'testing',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'dummyWalletId',
              permissions: ['spend'],
              state: 'active',
            },
          ],
          outgoing: [],
        });

        await wallets
          .bulkAcceptShare({
            walletShareIds: ['66a229dbdccdcfb95b44fc2745a60bd4'],
            userLoginPassword: 'dummy@123',
          })
          .should.rejectedWith('No valid wallet shares found to accept');
      });

      it('should throw error for ecdh keychain undefined', async () => {
        sinon.stub(Wallets.prototype, 'listSharesV2').resolves({
          incoming: [
            {
              id: '66a229dbdccdcfb95b44fc2745a60bd4',
              coin: 'tsol',
              walletLabel: 'testing',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'dummyWalletId',
              permissions: ['spend'],
              state: 'active',
              keychain: {
                pub: 'pub',
                toPubKey: 'toPubKey',
                fromPubKey: 'fromPubKey',
                encryptedPrv: 'encryptedPrv',
                path: 'path',
              },
            },
          ],
          outgoing: [],
        });
        sinon.stub(bitgo, 'getECDHKeychain').resolves({
          prv: 'private key',
        });

        await wallets
          .bulkAcceptShare({
            walletShareIds: ['66a229dbdccdcfb95b44fc2745a60bd4'],
            userLoginPassword: 'dummy@123',
          })
          .should.rejectedWith('encryptedXprv was not found on sharing keychain');
      });

      it('should successfully accept share', async () => {
        const fromUserPrv = Math.random();
        const walletPassphrase = 'bitgo1234';
        const keychainTest: OptionalKeychainEncryptedKey = {
          encryptedPrv: bitgo.encrypt({ input: fromUserPrv.toString(), password: walletPassphrase }),
        };
        const userPrv = decryptKeychainPrivateKey(bitgo, keychainTest, walletPassphrase);
        if (!userPrv) {
          throw new Error('Unable to decrypt user keychain');
        }

        const toKeychain = utxoLib.bip32.fromSeed(Buffer.from('deadbeef02deadbeef02deadbeef02deadbeef02', 'hex'));
        const path = 'm/999999/1/1';
        const pubkey = toKeychain.derivePath(path).publicKey.toString('hex');

        const eckey = makeRandomKey();
        const secret = getSharedSecret(eckey, Buffer.from(pubkey, 'hex')).toString('hex');
        const newEncryptedPrv = bitgo.encrypt({ password: secret, input: userPrv });
        nock(bgUrl)
          .get('/api/v2/walletshares')
          .reply(200, {
            incoming: [
              {
                id: '66a229dbdccdcfb95b44fc2745a60bd4',
                isUMSInitiated: true,
                keychain: {
                  path: path,
                  fromPubKey: eckey.publicKey.toString('hex'),
                  encryptedPrv: newEncryptedPrv,
                  toPubKey: pubkey,
                  pub: pubkey,
                },
              },
            ],
          });
        nock(bgUrl)
          .put('/api/v2/walletshares/accept')
          .reply(200, {
            acceptedWalletShares: [
              {
                walletShareId: '66a229dbdccdcfb95b44fc2745a60bd4',
              },
            ],
          });

        const myEcdhKeychain = await bitgo.keychains().create();
        sinon.stub(bitgo, 'getECDHKeychain').resolves({
          encryptedXprv: bitgo.encrypt({ input: myEcdhKeychain.xprv, password: walletPassphrase }),
        });

        const prvKey = bitgo.decrypt({
          password: walletPassphrase,
          input: bitgo.encrypt({ input: myEcdhKeychain.xprv, password: walletPassphrase }),
        });
        sinon.stub(bitgo, 'decrypt').returns(prvKey);
        sinon.stub(moduleBitgo, 'getSharedSecret').resolves('fakeSharedSecret');

        const share = await wallets.bulkAcceptShare({
          walletShareIds: ['66a229dbdccdcfb95b44fc2745a60bd4'],
          userLoginPassword: walletPassphrase,
        });
        assert.deepEqual(share, {
          acceptedWalletShares: [
            {
              walletShareId: '66a229dbdccdcfb95b44fc2745a60bd4',
            },
          ],
        });
      });
    });

    describe('bulkUpdateWalletShare', function () {
      afterEach(function () {
        nock.cleanAll();
        nock.pendingMocks().length.should.equal(0);
        sinon.restore();
      });

      it('should throw validation error for missing shares parameter', async () => {
        await wallets.bulkUpdateWalletShare({}).should.be.rejectedWith('Missing parameter: shares');
      });

      it('should throw validation error for non-array shares parameter', async () => {
        await wallets
          .bulkUpdateWalletShare({ shares: 'not-an-array' })
          .should.be.rejectedWith('Expecting parameter array: shares but found string');
      });

      it('should throw validation error for missing walletShareId in share', async () => {
        await wallets
          .bulkUpdateWalletShare({ shares: [{ status: 'accept' }] })
          .should.be.rejectedWith('Missing walletShareId in share');
      });

      it('should throw validation error for missing status in share', async () => {
        await wallets
          .bulkUpdateWalletShare({ shares: [{ walletShareId: '123' }] })
          .should.be.rejectedWith('Missing status in share');
      });

      it('should throw validation error for invalid status in share', async () => {
        await wallets
          .bulkUpdateWalletShare({ shares: [{ walletShareId: '123', status: 'invalid' }] })
          .should.be.rejectedWith('Invalid status in share: invalid. Must be either "accept" or "reject"');
      });

      it('should throw validation error for non-string walletShareId', async () => {
        await wallets
          .bulkUpdateWalletShare({ shares: [{ walletShareId: 123, status: 'accept' }] })
          .should.be.rejectedWith('Expecting walletShareId to be a string but found number');
      });

      it('should throw validation error for non-string userLoginPassword', async () => {
        await wallets
          .bulkUpdateWalletShare({ shares: [{ walletShareId: '123', status: 'accept' }], userLoginPassword: 123 })
          .should.be.rejectedWith('Expecting parameter string: userLoginPassword but found number');
      });

      it('should throw validation error for non-string newWalletPassphrase', async () => {
        await wallets
          .bulkUpdateWalletShare({
            shares: [{ walletShareId: '123', status: 'accept' }],
            userLoginPassword: 'password',
            newWalletPassphrase: 123,
          })
          .should.be.rejectedWith('Expecting parameter string: newWalletPassphrase but found number');
      });

      it('should throw assertion error for empty shares array', async () => {
        await wallets.bulkUpdateWalletShare({ shares: [] }).should.be.rejectedWith('no shares are passed');
      });

      it('should throw error for no valid wallet shares', async () => {
        sinon.stub(Wallets.prototype, 'listSharesV2').resolves({
          incoming: [
            {
              id: '66a229dbdccdcfb95b44fc2745a60bd4',
              coin: 'tsol',
              walletLabel: 'testing',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'dummyWalletId',
              permissions: ['spend'],
              state: 'active',
            },
          ],
          outgoing: [],
        });
        await wallets
          .bulkUpdateWalletShare({
            shares: [{ walletShareId: '66a229dbdccdcfb95b44fc2745a60bd1', status: 'accept' }],
            userLoginPassword: 'dummy@123',
          })
          .should.be.rejectedWith('invalid wallet share provided: 66a229dbdccdcfb95b44fc2745a60bd1');
      });

      it('should throw error for ecdh keychain undefined when accepting share requiring decryption', async () => {
        sinon.stub(Wallets.prototype, 'listSharesV2').resolves({
          incoming: [
            {
              id: '66a229dbdccdcfb95b44fc2745a60bd4',
              coin: 'tsol',
              walletLabel: 'testing',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'dummyWalletId',
              permissions: ['spend'],
              state: 'active',
              keychain: {
                pub: 'pub',
                toPubKey: 'toPubKey',
                fromPubKey: 'fromPubKey',
                encryptedPrv: 'encryptedPrv',
                path: 'path',
              },
            },
          ],
          outgoing: [],
        });
        sinon.stub(bitgo, 'getECDHKeychain').resolves({
          prv: 'private key',
        });

        await wallets
          .bulkUpdateWalletShare({
            shares: [{ walletShareId: '66a229dbdccdcfb95b44fc2745a60bd4', status: 'accept' }],
            userLoginPassword: 'dummy@123',
          })
          .should.be.rejectedWith('encryptedXprv was not found on sharing keychain');
      });

      it('should successfully update shares with both accept and reject statuses', async () => {
        const walletPassphrase = 'bitgo1234';

        // Mock listSharesV2 to return two shares
        sinon.stub(Wallets.prototype, 'listSharesV2').resolves({
          incoming: [
            {
              id: 'share1',
              coin: 'tsol',
              walletLabel: 'testing',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'wallet1',
              permissions: ['spend'],
              state: 'active',
            },
            {
              id: 'share2',
              coin: 'tsol',
              walletLabel: 'testing2',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'wallet2',
              permissions: ['spend'],
              state: 'active',
            },
          ],
          outgoing: [],
        });

        // Mock bulkUpdateWalletShareRequest
        const bulkUpdateStub = sinon.stub(Wallets.prototype, 'bulkUpdateWalletShareRequest').resolves({
          acceptedWalletShares: ['share1'],
          rejectedWalletShares: ['share2'],
          walletShareUpdateErrors: [],
        });

        const result = await wallets.bulkUpdateWalletShare({
          shares: [
            { walletShareId: 'share1', status: 'accept' },
            { walletShareId: 'share2', status: 'reject' },
          ],
          userLoginPassword: walletPassphrase,
        });

        // Verify the result
        assert.deepEqual(result, {
          acceptedWalletShares: ['share1'],
          rejectedWalletShares: ['share2'],
          walletShareUpdateErrors: [],
        });

        // Verify bulkUpdateWalletShareRequest was called with correct parameters
        bulkUpdateStub.calledOnce.should.be.true();
        const updateParams = bulkUpdateStub.firstCall.args[0];
        updateParams.should.have.lengthOf(2);

        // Second param should be for share2 with reject status
        updateParams.should.containDeep([
          {
            walletShareId: 'share2',
            status: 'reject',
          },
        ]);
      });

      it('should handle special override cases and reshare with spenders', async () => {
        const walletPassphrase = 'bitgo1234';

        // Mock listSharesV2 to return a share with keychainOverrideRequired
        sinon.stub(Wallets.prototype, 'listSharesV2').resolves({
          incoming: [
            {
              id: 'share1',
              coin: 'tsol',
              walletLabel: 'testing',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'wallet1',
              permissions: ['admin', 'spend'],
              state: 'active',
              keychainOverrideRequired: true,
            },
          ],
          outgoing: [],
        });

        // Setup for the baseCoin.keychains().createUserKeychain
        const userKeychain = {
          id: 'key1',
          pub: 'pubKey',
          encryptedPrv: 'encryptedPrivateKey',
        };
        sinon.stub(wallets.baseCoin.keychains(), 'createUserKeychain').resolves(userKeychain);

        // Mock decrypt and signMessage
        sinon.stub(bitgo, 'decrypt').returns('decryptedPrivateKey');
        sinon.stub(wallets.baseCoin, 'signMessage').resolves(Buffer.from('signature'));

        // Mock getECDHKeychain
        sinon.stub(bitgo, 'getECDHKeychain').resolves({
          encryptedXprv: 'encryptedXprv',
        });

        // Mock bulkUpdateWalletShareRequest
        const bulkUpdateStub = sinon.stub(Wallets.prototype, 'bulkUpdateWalletShareRequest').resolves({
          acceptedWalletShares: ['share1'],
          rejectedWalletShares: [],
          walletShareUpdateErrors: [],
        });

        // Mock reshareWalletWithSpenders
        const reshareStub = sinon.stub(Wallets.prototype, 'reshareWalletWithSpenders').resolves();

        const result = await wallets.bulkUpdateWalletShare({
          shares: [{ walletShareId: 'share1', status: 'accept' }],
          userLoginPassword: walletPassphrase,
        });

        // Verify the result
        assert.deepEqual(result, {
          acceptedWalletShares: ['share1'],
          rejectedWalletShares: [],
          walletShareUpdateErrors: [],
        });

        // Verify bulkUpdateWalletShareRequest was called
        bulkUpdateStub.calledOnce.should.be.true();

        // Verify reshareWalletWithSpenders was called with correct parameters
        reshareStub.calledOnce.should.be.true();
        reshareStub.firstCall.args[0].should.equal('wallet1');
        reshareStub.firstCall.args[1].should.equal(walletPassphrase);
      });

      it('should handle shares with no keychain to decrypt', async () => {
        const walletPassphrase = 'bitgo1234';

        // Mock listSharesV2 to return a share with no keychain
        sinon.stub(Wallets.prototype, 'listSharesV2').resolves({
          incoming: [
            {
              id: 'share1',
              coin: 'tsol',
              walletLabel: 'testing',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'wallet1',
              permissions: ['view'],
              state: 'active',
            },
          ],
          outgoing: [],
        });

        // Mock bulkUpdateWalletShareRequest
        const bulkUpdateStub = sinon.stub(Wallets.prototype, 'bulkUpdateWalletShareRequest').resolves({
          acceptedWalletShares: ['share1'],
          rejectedWalletShares: [],
          walletShareUpdateErrors: [],
        });

        const result = await wallets.bulkUpdateWalletShare({
          shares: [{ walletShareId: 'share1', status: 'accept' }],
          userLoginPassword: walletPassphrase,
        });

        // Verify the result
        assert.deepEqual(result, {
          acceptedWalletShares: ['share1'],
          rejectedWalletShares: [],
          walletShareUpdateErrors: [],
        });

        // Verify bulkUpdateWalletShareRequest was called with correct parameters
        bulkUpdateStub.calledOnce.should.be.true();
        const updateParams = bulkUpdateStub.firstCall.args[0];
        updateParams.should.have.lengthOf(1);

        // Param should be for share1 with accept status and no additional fields
        updateParams.should.containDeep([
          {
            walletShareId: 'share1',
            status: 'accept',
          },
        ]);
      });

      it('should handle shares with keychain requiring decryption', async () => {
        const walletPassphrase = 'bitgo1234';
        const path = 'm/999999/1/1';

        // Create test keychains
        const fromKeychain = utxoLib.bip32.fromSeed(Buffer.from('deadbeef01deadbeef01deadbeef01deadbeef01', 'hex'));
        const toKeychain = utxoLib.bip32.fromSeed(Buffer.from('deadbeef02deadbeef02deadbeef02deadbeef02', 'hex'));

        const fromPubKey = fromKeychain.publicKey.toString('hex');
        const toPubKey = toKeychain.derivePath(path).publicKey.toString('hex');

        // Create encrypted private key
        const originalPrivKey = 'originalPrivateKey';
        const sharedSecret = getSharedSecret(fromKeychain, Buffer.from(toPubKey, 'hex')).toString('hex');

        const encryptedPrv = bitgo.encrypt({
          password: sharedSecret,
          input: originalPrivKey,
        });

        // Mock listSharesV2 to return a share with keychain
        sinon.stub(Wallets.prototype, 'listSharesV2').resolves({
          incoming: [
            {
              id: 'share1',
              coin: 'tsol',
              walletLabel: 'testing',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'wallet1',
              permissions: ['spend'],
              state: 'active',
              keychain: {
                pub: toPubKey,
                toPubKey: toPubKey,
                fromPubKey: fromPubKey,
                encryptedPrv: encryptedPrv,
                path: path,
              },
            },
          ],
          outgoing: [],
        });

        // Mock getECDHKeychain
        const myEcdhKeychain = await bitgo.keychains().create();
        sinon.stub(bitgo, 'getECDHKeychain').resolves({
          encryptedXprv: bitgo.encrypt({ input: myEcdhKeychain.xprv, password: walletPassphrase }),
        });

        // Setup decrypt and encrypt stubs
        const decryptStub = sinon.stub(bitgo, 'decrypt');
        decryptStub.onFirstCall().returns(myEcdhKeychain.xprv); // For sharing keychain
        decryptStub.onSecondCall().returns(originalPrivKey); // For wallet keychain

        const encryptStub = sinon.stub(bitgo, 'encrypt').returns('newEncryptedPrv');

        // Mock getSharedSecret
        sinon.stub(moduleBitgo, 'getSharedSecret').returns(Buffer.from(sharedSecret));

        // Mock bulkUpdateWalletShareRequest
        const bulkUpdateStub = sinon.stub(Wallets.prototype, 'bulkUpdateWalletShareRequest').resolves({
          acceptedWalletShares: ['share1'],
          rejectedWalletShares: [],
          walletShareUpdateErrors: [],
        });

        const result = await wallets.bulkUpdateWalletShare({
          shares: [{ walletShareId: 'share1', status: 'accept' }],
          userLoginPassword: walletPassphrase,
          newWalletPassphrase: 'newPassphrase',
        });

        // Verify the result
        assert.deepEqual(result, {
          acceptedWalletShares: ['share1'],
          rejectedWalletShares: [],
          walletShareUpdateErrors: [],
        });

        // Verify bulkUpdateWalletShareRequest was called with correct parameters
        bulkUpdateStub.calledOnce.should.be.true();
        const updateParams = bulkUpdateStub.firstCall.args[0];
        updateParams.should.have.lengthOf(1);

        // Param should be for share1 with accept status and encryptedPrv
        updateParams.should.containDeep([
          {
            walletShareId: 'share1',
            status: 'accept',
            encryptedPrv: 'newEncryptedPrv',
          },
        ]);

        // Verify encrypt was called with correct parameters
        encryptStub.calledOnce.should.be.true();
        encryptStub.firstCall.args[0].should.have.property('password', 'newPassphrase');
        encryptStub.firstCall.args[0].should.have.property('input', originalPrivKey);
      });

      it('should handle rejected promises and add them to walletShareUpdateErrors', async () => {
        const walletPassphrase = 'bitgo1234';

        // Mock listSharesV2 to return two shares
        sinon.stub(Wallets.prototype, 'listSharesV2').resolves({
          incoming: [
            {
              id: 'share1',
              coin: 'tsol',
              walletLabel: 'testing',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'wallet1',
              permissions: ['spend'],
              state: 'active',
            },
            {
              id: 'share2',
              coin: 'tsol',
              walletLabel: 'testing2',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'wallet2',
              permissions: ['spend'],
              state: 'active',
            },
            {
              id: 'share3',
              coin: 'tsol',
              walletLabel: 'testing3',
              fromUser: 'dummyFromUser',
              toUser: 'dummyToUser',
              wallet: 'wallet3',
              permissions: ['spend'],
              state: 'active',
            },
          ],
          outgoing: [],
        });

        // Stub processAcceptShare to throw an error for share2
        // Using 'as any' to bypass TypeScript's private method restriction
        const processAcceptShareStub = sinon.stub(Wallets.prototype as any, 'processAcceptShare');
        processAcceptShareStub
          .withArgs('share1', sinon.match.any, sinon.match.any, sinon.match.any, sinon.match.any)
          .resolves([{ walletShareId: 'share1', status: 'accept' }]);
        processAcceptShareStub
          .withArgs('share2', sinon.match.any, sinon.match.any, sinon.match.any, sinon.match.any)
          .rejects(new Error('Failed to process share2'));
        processAcceptShareStub
          .withArgs('share3', sinon.match.any, sinon.match.any, sinon.match.any, sinon.match.any)
          .resolves([{ walletShareId: 'share3', status: 'accept' }]);

        // Mock bulkUpdateWalletShareRequest to return a response
        const bulkUpdateStub = sinon.stub(Wallets.prototype, 'bulkUpdateWalletShareRequest').resolves({
          acceptedWalletShares: ['share1', 'share3'],
          rejectedWalletShares: [],
          walletShareUpdateErrors: [], // Empty array that should be populated
        });

        const result = await wallets.bulkUpdateWalletShare({
          shares: [
            { walletShareId: 'share1', status: 'accept' },
            { walletShareId: 'share2', status: 'accept' },
            { walletShareId: 'share3', status: 'accept' },
          ],
          userLoginPassword: walletPassphrase,
        });

        // Verify bulkUpdateWalletShareRequest was called with only the successful share
        bulkUpdateStub.calledOnce.should.be.true();
        const updateParams = bulkUpdateStub.firstCall.args[0];
        updateParams.should.have.lengthOf(2);
        updateParams[0].walletShareId.should.equal('share1');
        updateParams[0].status.should.equal('accept');
        updateParams[1].walletShareId.should.equal('share3');
        updateParams[1].status.should.equal('accept');

        // Verify the result contains the error information
        result.should.have.property('walletShareUpdateErrors');
        result.walletShareUpdateErrors.should.be.an.Array();
        result.walletShareUpdateErrors.should.have.lengthOf(1);
        result.walletShareUpdateErrors[0].should.have.property('walletShareId', 'share2');
        result.walletShareUpdateErrors[0].should.have.property('reason', 'Failed to process share2');
      });
    });
  });

  describe('createBulkKeyShares tests', () => {
    const walletData = {
      id: '5b34252f1bf349930e34020a00000000',
      coin: 'tbtc',
      keys: [
        '5b3424f91bf349930e34017500000000',
        '5b3424f91bf349930e34017600000000',
        '5b3424f91bf349930e34017700000000',
      ],
      coinSpecific: {},
      multisigType: 'onchain',
      type: 'hot',
    };
    const tsol = bitgo.coin('tsol');
    const wallet = new Wallet(bitgo, tsol, walletData);
    before(function () {
      nock('https://bitgo.fakeurl').persist().get('/api/v1/client/constants').reply(200, { ttl: 3600, constants: {} });
      bitgo.initializeTestVars();
    });
    beforeEach(() => {
      sinon.createSandbox();
    });
    after(function () {
      nock.cleanAll();
      nock.pendingMocks().length.should.equal(0);
    });
    afterEach(function () {
      sinon.restore();
    });

    it('should throw an error if shareOptions is empty', async () => {
      try {
        await wallet.createBulkKeyShares([]);
        assert.fail('Expected error not thrown');
      } catch (error) {
        assert.strictEqual(error.message, 'shareOptions cannot be empty');
      }
    });

    it('should skip shareoption if keychain parameters are missing', async () => {
      const params = [
        {
          user: 'testuser@example.com',
          permissions: ['spend'],
          keychain: { pub: 'pubkey', encryptedPrv: '', fromPubKey: '', toPubKey: '', path: '' },
        },
      ];

      try {
        await wallet.createBulkKeyShares(params);
        assert.fail('Expected error not thrown');
      } catch (error) {
        // Shareoptions with invalid keychains are skipped
        assert.strictEqual(error.message, 'shareOptions cannot be empty');
      }
    });

    it('should send the correct data to BitGo API if shareOptions are valid', async () => {
      const params = {
        shareOptions: [
          {
            user: 'testuser@example.com',
            permissions: ['spend'],
            keychain: {
              pub: 'pubkey',
              encryptedPrv: 'encryptedPrv',
              fromPubKey: 'fromPubKey',
              toPubKey: 'toPubKey',
              path: 'm/0/0',
            },
          },
        ],
      };
      const paramsToSend = [
        {
          user: 'testuser@example.com',
          permissions: ['spend'],
          keychain: {
            pub: 'pubkey',
            encryptedPrv: 'encryptedPrv',
            fromPubKey: 'fromPubKey',
            toPubKey: 'toPubKey',
            path: 'm/0/0',
          },
        },
      ];
      nock(bgUrl)
        .post(`/api/v2/wallet/${walletData.id}/walletshares`, params)
        .reply(200, {
          shares: [
            {
              id: 'userId',
              coin: walletData.coin,
              wallet: walletData.id,
              fromUser: 'fromUserId',
              toUser: 'toUserId',
              permissions: ['view', 'spend'],
              keychain: {
                pub: 'dummyPub',
                encryptedPrv: 'dummyEncryptedPrv',
                fromPubKey: 'dummyFromPubKey',
                toPubKey: 'dummyToPubKey',
                path: 'dummyPath',
              },
            },
          ],
        });
      const result = await wallet.createBulkKeyShares(paramsToSend);
      assert.strictEqual(result.shares[0].id, 'userId', 'The share ID should match');
      assert.strictEqual(result.shares[0].coin, walletData.coin, 'The coin should match');
      assert.strictEqual(result.shares[0].wallet, walletData.id, 'The wallet ID should match');
      assert(result.shares[0].keychain);
      assert.strictEqual(result.shares[0].keychain.pub, 'dummyPub', 'The keychain pub should match');
      assert.strictEqual(result.shares[0].permissions.includes('view'), true, 'The permissions should include "view"');
      assert.strictEqual(
        result.shares[0].permissions.includes('spend'),
        true,
        'The permissions should include "spend"'
      );
    });
  });

  describe('createBulkWalletShare tests', () => {
    const bitgo = TestBitGo.decorate(BitGo, { env: 'mock' });

    const walletData = {
      id: '5b34252f1bf349930e34020a00000000',
      coin: 'tbtc',
      keys: [
        '5b3424f91bf349930e34017500000000',
        '5b3424f91bf349930e34017600000000',
        '5b3424f91bf349930e34017700000000',
      ],
      coinSpecific: {},
      multisigType: 'onchain',
      type: 'hot',
    };
    const tsol = bitgo.coin('tsol');
    const wallet = new Wallet(bitgo, tsol, walletData);
    before(function () {
      nock('https://bitgo.fakeurl').persist().get('/api/v1/client/constants').reply(200, { ttl: 3600, constants: {} });
      bitgo.initializeTestVars();
    });

    after(function () {
      nock.cleanAll();
      nock.pendingMocks().length.should.equal(0);
    });

    afterEach(function () {
      sinon.restore();
    });

    it('should throw an error if no share options are provided', async () => {
      try {
        await wallet.createBulkWalletShare({ walletPassphrase: 'Test', keyShareOptions: [] });
        assert.fail('Expected error not thrown');
      } catch (error) {
        assert.strictEqual(error.message, 'No share options provided');
      }
    });

    it('should throw NeedsUserSignup error if pubkey is missing', async () => {
      const userId = 'user@example.com';
      const permissions = ['view', 'spend'];
      try {
        await wallet.createBulkWalletShare({
          walletPassphrase: 'Test',
          keyShareOptions: [
            {
              userId: userId,
              permissions: permissions,
              path: 'm/999999/1/1',
            },
          ],
        } as BulkWalletShareOptions);
        assert.fail('Expected error not thrown');
      } catch (error) {
        assert(error instanceof NeedUserSignupError);
        assert.strictEqual(error.name, 'NeedUserSignupError');
        assert.strictEqual(error.message, userId);
      }
    });

    it('should throw error if path is missing', async () => {
      const userId = 'user@example.com';
      const permissions = ['view', 'spend'];
      try {
        await wallet.createBulkWalletShare({
          walletPassphrase: 'Test',
          keyShareOptions: [
            {
              userId: userId,
              permissions: permissions,
              pubKey: 'm/999999/1/1',
            },
          ],
        } as BulkWalletShareOptions);
        assert.fail('Expected error not thrown');
      } catch (error) {
        assert.strictEqual(error.name, 'Error');
        assert.strictEqual(error.message, 'Missing parameter: path');
      }
    });

    it('should throw NeedsUserSignup error if pubkey is empty string', async () => {
      const userId = 'user@example.com';
      const permissions = ['view', 'spend'];
      try {
        await wallet.createBulkWalletShare({
          walletPassphrase: 'Test',
          keyShareOptions: [
            {
              userId: userId,
              pubKey: '',
              permissions: permissions,
              path: 'm/999999/1/1',
            },
          ],
        });
        assert.fail('Expected error not thrown');
      } catch (error) {
        assert(error instanceof NeedUserSignupError);
        assert.strictEqual(error.name, 'NeedUserSignupError');
        assert.strictEqual(error.message, userId);
      }
    });

    it('should correctly process share options and call createBulkKeyShares', async () => {
      const userId = 'user@example.com';
      const permissions = ['view', 'spend'];
      const path = 'm/999999/1/1';
      const walletPassphrase = 'bitgo1234';
      const pub = 'Zo1ggzTUKMY5bYnDvT5mtVeZxzf2FaLTbKkmvGUhUQk';
      nock(bgUrl)
        .get(`/api/v2/tbtc/key/${wallet.keyIds()[0]}`)
        .reply(200, {
          id: wallet.keyIds()[0],
          pub,
          source: 'user',
          encryptedPrv: bitgo.encrypt({ input: 'xprv1', password: walletPassphrase }),
          coinSpecific: {},
        });
      const params: BulkWalletShareOptions = {
        walletPassphrase,
        keyShareOptions: [
          {
            userId: userId,
            permissions: permissions,
            pubKey: '02705a6d33a2459feb537e7abe36aaad8c11532cdbffa3a2e4e58868467d51f532',
            path: path,
          },
        ],
      };

      const prv1 = Math.random().toString();
      const keychainTest: OptionalKeychainEncryptedKey = {
        encryptedPrv: bitgo.encrypt({ input: prv1, password: walletPassphrase }),
      };

      sinon.stub(wallet, 'getEncryptedUserKeychain').resolves({
        encryptedPrv: keychainTest.encryptedPrv,
        pub,
      } as KeychainWithEncryptedPrv);

      sinon.stub(moduleBitgo, 'getSharedSecret').resolves('fakeSharedSecret');

      sinon.stub(wallet, 'createBulkKeyShares').resolves({
        shares: [
          {
            id: userId,
            coin: walletData.coin,
            wallet: walletData.id,
            fromUser: userId,
            toUser: userId,
            permissions: ['view', 'spend'],
            keychain: {
              pub: 'dummyPub',
              encryptedPrv: 'dummyEncryptedPrv',
              fromPubKey: 'dummyFromPubKey',
              toPubKey: 'dummyToPubKey',
              path: 'dummyPath',
            },
          },
        ],
      });

      const result = await wallet.createBulkWalletShare(params);

      assert.deepStrictEqual(result, {
        shares: [
          {
            id: userId,
            coin: walletData.coin,
            wallet: walletData.id,
            fromUser: userId,
            toUser: userId,
            permissions: ['view', 'spend'],
            keychain: {
              pub: 'dummyPub',
              encryptedPrv: 'dummyEncryptedPrv',
              fromPubKey: 'dummyFromPubKey',
              toPubKey: 'dummyToPubKey',
              path: 'dummyPath',
            },
          },
        ],
      });
    });

    it('should throw error in processing share options when wallet password is incorrect', async () => {
      const userId = 'user@example.com';
      const permissions = ['view', 'spend'];
      const path = 'm/999999/1/1';
      const walletPassphrase = 'bitgo1234';
      const pub = 'Zo1ggzTUKMY5bYnDvT5mtVeZxzf2FaLTbKkmvGUhUQk';
      nock(bgUrl)
        .get(`/api/v2/tbtc/key/${wallet.keyIds()[0]}`)
        .reply(200, {
          id: wallet.keyIds()[0],
          pub,
          source: 'user',
          encryptedPrv: bitgo.encrypt({ input: 'xprv1', password: walletPassphrase }),
          coinSpecific: {},
        });
      const params: BulkWalletShareOptions = {
        walletPassphrase: 'wrong password',
        keyShareOptions: [
          {
            userId: userId,
            permissions: permissions,
            pubKey: '02705a6d33a2459feb537e7abe36aaad8c11532cdbffa3a2e4e58868467d51f532',
            path: path,
          },
        ],
      };

      const prv1 = Math.random().toString();
      const keychainTest: OptionalKeychainEncryptedKey = {
        encryptedPrv: bitgo.encrypt({ input: prv1, password: walletPassphrase }),
      };

      sinon.stub(wallet, 'getEncryptedUserKeychain').resolves({
        encryptedPrv: keychainTest.encryptedPrv,
        pub,
      } as KeychainWithEncryptedPrv);

      try {
        await wallet.createBulkWalletShare(params);
        assert.fail('Expected error not thrown');
      } catch (error) {
        assert(error instanceof IncorrectPasswordError);
        assert.equal(error.message, 'Password shared is incorrect for this wallet');
      }
    });
  });

  describe('List Wallets:', function () {
    it('should list wallets with skipReceiveAddress = true', async function () {
      const bitgo = TestBitGo.decorate(BitGo, { env: 'mock' });
      const basecoin = bitgo.coin('tbtc');
      const wallets = basecoin.wallets();
      const bgUrl = common.Environments[bitgo.getEnv()].uri;

      nock(bgUrl)
        .get('/api/v2/tbtc/wallet')
        .query({ skipReceiveAddress: true })
        .reply(200, {
          wallets: [
            { id: 'wallet1', label: 'Test Wallet 1' },
            { id: 'wallet2', label: 'Test Wallet 2' },
          ],
        });

      const result = await wallets.list({ skipReceiveAddress: true });
      result.wallets.should.have.length(2);
      should.not.exist(result.wallets[0].receiveAddress());
      should.not.exist(result.wallets[1].receiveAddress());
    });

    it('should list wallets without skipReceiveAddress', async function () {
      const bitgo = TestBitGo.decorate(BitGo, { env: 'mock' });
      const basecoin = bitgo.coin('tbtc');
      const wallets = basecoin.wallets();
      const bgUrl = common.Environments[bitgo.getEnv()].uri;

      nock(bgUrl)
        .get('/api/v2/tbtc/wallet')
        .query({})
        .reply(200, {
          wallets: [
            { id: 'wallet1', label: 'Test Wallet 1', receiveAddress: { address: 'address1' } },
            { id: 'wallet2', label: 'Test Wallet 2', receiveAddress: { address: 'address2' } },
          ],
        });

      const result = await wallets.list();
      result.wallets.should.have.length(2);
      should.exist(result.wallets[0].receiveAddress());
      should.exist(result.wallets[1].receiveAddress());
    });
  });
});
