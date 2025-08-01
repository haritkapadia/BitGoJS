import 'should';

import { TestBitGo, TestBitGoAPI } from '@bitgo/sdk-test';
import { BitGoAPI } from '@bitgo/sdk-api';
import { Txrp } from '../../src/txrp';
import ripple from '../../src/ripple';

import * as nock from 'nock';
import assert from 'assert';
import * as rippleBinaryCodec from 'ripple-binary-codec';
import sinon from 'sinon';
import * as testData from '../resources/xrp';
import { SIGNER_USER, SIGNER_BACKUP, SIGNER_BITGO } from '../resources/xrp';
import * as _ from 'lodash';
import { XrpToken } from '../../src';
import * as xrpl from 'xrpl';

nock.disableNetConnect();

const bitgo: TestBitGoAPI = TestBitGo.decorate(BitGoAPI, { env: 'test' });
bitgo.safeRegister('txrp', Txrp.createInstance);

describe('XRP:', function () {
  let basecoin;
  let token;

  afterEach(function () {
    sinon.restore();
  });

  before(function () {
    XrpToken.createTokenConstructors().forEach(({ name, coinConstructor }) => {
      bitgo.safeRegister(name, coinConstructor);
    });
    bitgo.initializeTestVars();
    basecoin = bitgo.coin('txrp');
    token = bitgo.coin('txrp:rlusd');
  });

  after(function () {
    nock.pendingMocks().should.be.empty();
  });

  it('isValidAddress should be correct', function () {
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=1893500718').should.be.True();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8').should.be.True();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?r=a').should.be.False();
    basecoin.isValidAddress('xrp://r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8').should.be.False();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=4294967296').should.be.False();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=4294967295').should.be.True();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=0x123').should.be.False();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=0x0').should.be.False();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=0').should.be.True();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=-1').should.be.False();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=1.5').should.be.False();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=a').should.be.False();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=b').should.be.False();
    basecoin.isValidAddress('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=a54b').should.be.False();
    basecoin.isValidAddress('xrp://r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=4294967295').should.be.False();
    basecoin.isValidAddress('http://r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=4294967295').should.be.False();
    basecoin.isValidAddress('http://r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?a=b&dt=4294967295').should.be.False();
  });

  it('verifyAddress should work', async function () {
    const makeArgs = (address, rootAddress) => ({ address, rootAddress });

    const nonThrowingArgs = [
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=1893500718', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=4294967295', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=0', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
    ];

    const throwingArgs = [
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8r=a', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('xrp://r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=4294967296', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=0x123', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=0x0', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=-1', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=1.5', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=a', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=b', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=a54b', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('xrp://r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=4294967295', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('http://r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=4294967295', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('http://r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?a=b&dt=4294967295', 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8'),
      makeArgs('r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=4294967295', 'rDgocL7QpZh8ZhrPsax4zVqbGGxeAsiBoh'),
    ];

    sinon.stub(basecoin.bitgo, 'post').returns({
      send: sinon.stub().resolves({
        body: {
          result: {
            account_data: {
              Flags: 0, // Mock Flags value
            },
          },
        },
      }),
    });

    for (const nonThrowingArg of nonThrowingArgs) {
      await basecoin.verifyAddress(nonThrowingArg);
    }

    for (const throwingArg of throwingArgs) {
      assert.rejects(async () => basecoin.verifyAddress(throwingArg));
    }
  });

  it('Should be able to explain an XRP transaction', async function () {
    const signedExplanation = await basecoin.explainTransaction({
      txHex:
        '120000228000000024000000072E00000000201B0018D07161400000000003DE2968400000000000002D73008114726D0D8A26568D5D9680AC80577C912236717191831449EE221CCACC4DD2BF8862B22B0960A84FC771D9F3E010732103AFBB6845826367D738B0D42EA0756C94547E70B064E8FE1260CF21354C898B0B74473045022100CA3A98AA6FC8CCA251C3A2754992E474EA469884EB8D489D2B180EB644AC7695022037EB886DCF57928E5844DB73C2E86DE553FB59DCFC9408F3FD5D802ADB69DFCC8114F0DBA9D34C77B6769F6142AB7C9D0AF67D113EBCE1F1',
    });
    const unsignedExplanation = await basecoin.explainTransaction({
      txHex:
        '{"TransactionType":"Payment","Account":"rBSpCz8PafXTJHppDcNnex7dYnbe3tSuFG","Destination":"rfjub8A4dpSD5nnszUFTsLprxu1W398jwc","DestinationTag":0,"Amount":"253481","Flags":2147483648,"LastLedgerSequence":1626225,"Fee":"45","Sequence":7}',
    });
    unsignedExplanation.id.should.equal('37486621138DFB0C55FEF45FD275B565254464651A04CB02EE371F8C4A84D8CA');
    signedExplanation.id.should.equal('D52681436CC5B94E9D00BC8172047B1A6F3C028D2D0A5CDFB81680039C48ADFD');
    unsignedExplanation.outputAmount.should.equal('253481');
    signedExplanation.outputAmount.should.equal('253481');
  });

  it('Should be able to explain a half signed XRP transaction', async function () {
    const halfSigned = await basecoin.explainTransaction({
      txHex:
        '12000022800000002402364C9A2E00000000201B0251041E614000000000E4E1A268400000000000001E730081146ED6833681CD87DBC055D8DC5A92BC9E3CD287848314CF522A61021FA485553A6CE48E226D973258B9BBF3E01073210335479B7F82FC3280B72ED8659BC621A3284544DA9704B518EBC9275F669429CF7447304502210098AF70338FF43B9BEC9916BB8762E54C95CA85DBCE418F30A9640BF804DCB2DA02204221C2480BE44D9F6ED7331FD5FE580E42177873BA796B00255A6F55672BE26081149460A1C4C25209500B55D09F8CD13BD330968521E1F1',
    });

    halfSigned.id.should.equal('22254B2799C961E9D919A4B5FB9B24722163EBD11671C17F215BEAFC750D6D89');
    halfSigned.outputAmount.should.equal('14999970');
  });

  it('Should be able to explain an XRP AccountSet transaction', async function () {
    const signedExplanation = await basecoin.explainTransaction({
      txHex:
        '1200032400E5F4AA201B00E9C54768400000000000002D722102000000000000000000000000415F8315C9948AD91E2CCE5B8583A36DA431FB61730081145FB0771C7BCA6BBB7B2DAF362B7FEFC35AC5DF00F3E01073210228085BA918B150F05B34CE4613AC4A031A816866E143AA7470FB2044D79EAA1474473045022100A8D2B720EFA46A88B4267EB3EFBBA0A6F9432884BC7F8DBF0E962B76E95DE0DE022004430D10DC7B4D1B2D0555EA22FF73FEA2E91636B5715F8909A6D9BC7689A4AC8114E9B5B8F9EC3ACFFB31958A3C1CFBB3CE41CB0725E1F1',
    });
    signedExplanation.id.should.equal('27D273F44EFDBA63D2473C8C5166C2B912F26B88BF21D147008D8E5E37CCBD21');
    signedExplanation.accountSet.messageKey.should.equal(
      '02000000000000000000000000415F8315C9948AD91E2CCE5B8583A36DA431FB61'
    );
    signedExplanation.fee.fee.should.equal('45');

    const unsignedExplanation = await basecoin.explainTransaction({
      txHex:
        '{"TransactionType":"AccountSet","Account":"r95xbEHFzDfc9XfmXHaDnj6dHNntT9RNcy","Fee":"45","Sequence":15070378,"LastLedgerSequence":15320391,"MessageKey":"02000000000000000000000000415F8315C9948AD91E2CCE5B8583A36DA431FB61"}',
    });
    unsignedExplanation.id.should.equal('A0F2AF7A3E0936BCFEE0D047789502D01518D9A4F1287D50568D66474475B3E7');
    unsignedExplanation.accountSet.messageKey.should.equal(
      '02000000000000000000000000415F8315C9948AD91E2CCE5B8583A36DA431FB61'
    );
    unsignedExplanation.fee.fee.should.equal('45');
  });

  it('should be able to sign an XRP transaction', async function () {
    const txPrebuild = {
      txHex:
        '{"TransactionType":"Payment","Account":"rar86Kj9diPKaXWJM3kMaoRZw2r15opm5u","Fee":"45","Sequence":464628,"Destination":"rPWH6reJ8N1DcCkda8owpzWtJXgUNw2d3q","Amount":"10000","Flags":2147483648,"DestinationTag":0}',
    };
    const prv =
      'xprv9s21ZrQH143K4AEvLzUYqTg3whAkhHAfkPDcrCMYGBPPeFi4qBSgfPD57yTxbBogR7YwFZRjpRZpT5rWY9iA7LtHp1SG37LecCz1CfpkxVS';

    const halfSigned = {
      halfSigned: {
        txHex:
          '120000228000000024000716F42E0000000061400000000000271068400000000000002D7300811436FEC5FB86E7E8348286D30FCD3BEAE9840B67178314F6DCC31A1BEE1F554C6CAB6E78D89D094D7C5126F3E01073210221C49E7F3F1B981396E577223B9EA14D85097B2A40C16A057C573EAAF4E9CD9374463044022072FF9C168A8B680F0C27D266B36E592E40116551F0A82C3A7EBF73447980D0B60220061CB55027C66DDC26638D3B45A91A199A7EFFCD494CDE958F86751946A4F5DB81146A38C6C4B589D0915A2325F7EA01994BF30C03C9E1F1',
      },
    };
    const res = await basecoin.signTransaction({ txPrebuild, prv });
    res.should.deepEqual(halfSigned);
  });

  it('should be able to add second signature to half signed XRP transaction', function () {
    const halfSignedTxHex =
      '12000022800000002402364C9A2E00000000201B0251041E614000000000E4E1A268400000000000001E730081146ED6833681CD87DBC055D8DC5A92BC9E3CD287848314CF522A61021FA485553A6CE48E226D973258B9BBF3E01073210335479B7F82FC3280B72ED8659BC621A3284544DA9704B518EBC9275F669429CF7447304502210098AF70338FF43B9BEC9916BB8762E54C95CA85DBCE418F30A9640BF804DCB2DA02204221C2480BE44D9F6ED7331FD5FE580E42177873BA796B00255A6F55672BE26081149460A1C4C25209500B55D09F8CD13BD330968521E1F1';

    const signer = {
      prv: 'xprv9s21ZrQH143K36cPP1rLoWsp9JQp9JEJGo2LFdfaufqcYSp5qJk5S5zN94SnXLiBEnU4dH8RDWfsSSLzdKwdEdqBZrRvZ3LqX1VXYWXFcpD',
      pub: 'xpub661MyMwAqRbcFagrV3PMAepYhLFJYkx9e1ww425CU1NbRF9ENr4KytJqzLWZwWQ7b1CWLDhV3kthPRAyT33CApQ9QWZDvSq4bFHp2yL8Eob',
      rawPub: '02d15efd7200d9da40e10d3f5a3149ed006c6db8f3b2d22912597f0b6b74785490',
      rawPrv: '49187695ec4da97486feb904f532769c8792555e989a050f486a6d3172a137e7',
      xrpAddress: 'rJBWFy35Ya3qDZD89DuWBwm8oBbYmqb3H9',
    };

    const fullySigned = ripple.signWithPrivateKey(halfSignedTxHex, signer.rawPrv, {
      signAs: signer.xrpAddress,
    });

    const signedTransaction = rippleBinaryCodec.decode(fullySigned.signedTransaction);
    signedTransaction.should.containDeep({
      TransactionType: 'Payment',
      Amount: '14999970',
      Account: 'rBfhJ6HopLW69xK83nyShdNxC3uggjs46K',
      Destination: 'rKuDJCu188nbLDs2zfaT2RNScS6aa63PLC',
    });
    assert(Array.isArray(signedTransaction.Signers));
    (signedTransaction.Signers as Array<string>).length.should.equal(2);
  });

  it('should be able to cosign XRP transaction in any form', function () {
    const unsignedTxHex =
      '120000228000000024000000072E00000000201B0018D07161400000000003DE2968400000000000002D8114726D0D8A26568D5D9680AC80577C912236717191831449EE221CCACC4DD2BF8862B22B0960A84FC771D9';
    const unsignedTxJson =
      '{"TransactionType":"Payment","Account":"rBSpCz8PafXTJHppDcNnex7dYnbe3tSuFG","Destination":"rfjub8A4dpSD5nnszUFTsLprxu1W398jwc","DestinationTag":0,"Amount":"253481","Flags":2147483648,"LastLedgerSequence":1626225,"Fee":"45","Sequence":7}';

    const signer = {
      prv: 'xprv9s21ZrQH143K36cPP1rLoWsp9JQp9JEJGo2LFdfaufqcYSp5qJk5S5zN94SnXLiBEnU4dH8RDWfsSSLzdKwdEdqBZrRvZ3LqX1VXYWXFcpD',
      pub: 'xpub661MyMwAqRbcFagrV3PMAepYhLFJYkx9e1ww425CU1NbRF9ENr4KytJqzLWZwWQ7b1CWLDhV3kthPRAyT33CApQ9QWZDvSq4bFHp2yL8Eob',
      rawPub: '02d15efd7200d9da40e10d3f5a3149ed006c6db8f3b2d22912597f0b6b74785490',
      rawPrv: '49187695ec4da97486feb904f532769c8792555e989a050f486a6d3172a137e7',
      xrpAddress: 'rJBWFy35Ya3qDZD89DuWBwm8oBbYmqb3H9',
    };

    const coSignedHexTransaction = ripple.signWithPrivateKey(unsignedTxHex, signer.rawPrv, {
      signAs: signer.xrpAddress,
    });
    const coSignedJsonTransaction = ripple.signWithPrivateKey(unsignedTxJson, signer.rawPrv, {
      signAs: signer.xrpAddress,
    });
    coSignedHexTransaction.signedTransaction.should.equal(coSignedJsonTransaction.signedTransaction);
    coSignedHexTransaction.id.should.equal(coSignedJsonTransaction.id);
  });

  it('should correctly sort signers by numeric value of addresses', function () {
    // Use the test signers from the test resources
    // These are known valid key pairs where the private key corresponds to the address
    const signers = [SIGNER_USER, SIGNER_BACKUP, SIGNER_BITGO];

    // Unsigned transaction
    const unsignedTxHex =
      '120000228000000024000000072E00000000201B0018D07161400000000003DE2968400000000000002D8114726D0D8A26568D5D9680AC80577C912236717191831449EE221CCACC4DD2BF8862B22B0960A84FC771D9';

    // Sign with first signer
    let signedTx = ripple.signWithPrivateKey(unsignedTxHex, signers[0].prv, {
      signAs: signers[0].address,
    });

    // Sign with second signer
    signedTx = ripple.signWithPrivateKey(signedTx.signedTransaction, signers[1].prv, {
      signAs: signers[1].address,
    });

    // Sign with third signer
    signedTx = ripple.signWithPrivateKey(signedTx.signedTransaction, signers[2].prv, {
      signAs: signers[2].address,
    });

    // Decode the signed transaction
    const decodedTx = rippleBinaryCodec.decode(signedTx.signedTransaction);

    // Verify that the Signers array exists and has the correct length
    assert(Array.isArray(decodedTx.Signers));
    (decodedTx.Signers as Array<any>).length.should.equal(3);

    // Extract the addresses from the Signers array
    const signerAddresses = (decodedTx.Signers as Array<any>).map((signer) => signer.Signer.Account);

    // Convert addresses to BigNumber for numeric comparison
    const addressToBigNumber = (address) => {
      const hex = Buffer.from(xrpl.decodeAccountID(address)).toString('hex');
      return BigInt('0x' + hex);
    };

    // Convert the addresses to BigNumber values
    const signerValues = signerAddresses.map(addressToBigNumber);

    // Verify that the Signers array is sorted in ascending order by numeric value
    for (let i = 0; i < signerValues.length - 1; i++) {
      assert(
        signerValues[i] < signerValues[i + 1],
        `Signers not properly sorted: ${signerValues[i]} should be less than ${signerValues[i + 1]}`
      );
    }
  });

  it('Should be unable to explain bogus XRP transaction', async function () {
    await basecoin
      .explainTransaction({ txHex: 'abcdefgH' })
      .should.be.rejectedWith('txHex needs to be either hex or JSON string for XRP');
  });

  describe('Fee Management', () => {
    const nockBasecoin: any = bitgo.coin('txrp');

    it('Should supplement wallet generation', async function () {
      const details = await nockBasecoin.supplementGenerateWallet({});
      details.should.have.property('rootPrivateKey');
    });

    it('should validate pub key', () => {
      const { pub } = basecoin.keychains().create();
      basecoin.isValidPub(pub).should.equal(true);
    });
  });

  describe('Recover Token Transactions', () => {
    const sandBox = sinon.createSandbox();
    const destination = 'raBSn6ipeWXYe7rNbNafZSx9dV2fU3zRyP?dt=12345';
    const passPhrase = '#Bondiola1234';
    let xrplStub;

    afterEach(() => {
      sandBox.restore();
    });

    it('should recover a token txn for non-bitgo recovery', async function () {
      xrplStub = sandBox.stub(basecoin.bitgo, 'post');
      const accountInfoParams = {
        method: 'account_info',
        params: [
          {
            account: testData.keys.rootAddress,
            strict: true,
            ledger_index: 'current',
            queue: true,
            signer_lists: true,
          },
        ],
      };

      const accountLinesParams = {
        method: 'account_lines',
        params: [
          {
            account: testData.keys.rootAddress,
            ledger_index: 'validated',
          },
        ],
      };

      const accountInfoResponse = testData.accountInfoResponse;
      const feeResponse = testData.feeResponse;
      const accountLinesResponse = testData.accountlinesResponse;
      const serverInfoResponse = testData.serverInfoResponse;

      const sendStub = sinon.stub();
      sendStub.withArgs(accountInfoParams).resolves(accountInfoResponse);
      sendStub.withArgs({ method: 'fee' }).resolves(feeResponse);
      sendStub.withArgs({ method: 'server_info' }).resolves(serverInfoResponse);
      sendStub.withArgs(accountLinesParams).resolves(accountLinesResponse);

      // Apply the stub to the `xrplStub`
      xrplStub.withArgs(basecoin.getRippledUrl()).returns({
        send: sendStub,
      });

      const res = await basecoin.recover({
        userKey: testData.keys.userKey,
        backupKey: testData.keys.backupKey,
        rootAddress: testData.keys.rootAddress,
        recoveryDestination: destination,
        walletPassphrase: passPhrase,
        issuerAddress: 'rQhWct2fv4Vc4KRjRgMrxa8xPN9Zx9iLKV',
        currencyCode: '524C555344000000000000000000000000000000',
      });

      res.should.not.be.empty();
      res.should.hasOwnProperty('txHex');
      res.should.hasOwnProperty('fee');
      res.should.hasOwnProperty('outputAmount');
      res.id.should.equal('09F430C97394F0E6A1690A5DB0FD16E47D210815A9C8257DFBDAEE225D7402AA');
      res.outputAmount.value.should.equal('4');
      res.outputAmount.currency.should.equal('524C555344000000000000000000000000000000');
      res.outputAmount.issuer.should.equal('rQhWct2fv4Vc4KRjRgMrxa8xPN9Zx9iLKV');
      res.txHex.should.equal(
        '120000228000000024000C50B82E00003039201B002B750061D48E35FA931A0000524C555344000000000000000000000000000000FCF4DD8C64636BC503F4A58DC6C684D2C7C3C24F68400000000000001E730081149389EC07DF6E6567D658BACC54606EBB33DC13E6831438D1B9A61C0FFA1A82FCF8A40AF709A9C8CF1890F3E0107321035F72A84A6BCD8ED2D26EAD2C5F864C55C26364EAF20257EFF7241F0F8D987BDA74473045022100A954411577684F5844C79F7B49FBE2D71E6E8AEC6A6BF4C04C3E3A208F5DA3F702206C114D4E2B7EA16CAF1DFAE2CE9D5C878818F879B8C921E5CF389F5AB87FE59381146BBA54CE60D9F3C926711A2C60D1CC712F21993CE1E01073210261E923400BDF6024D1D05574A7303C3D6878C7678F31254BD769DD4037495D9974473045022100F0FCF1044224A1DCB6ACE8AB057FD2344B39ED5C09B436A2B94EB1EF1A7ED99802206EFB9321E6344C94591B9D1F921045DDBAE3EC78808CB30D6C9CA18F02A11E7B8114EE3FBE636ADCBDD05B53493501DA6FBBC9287562E1F1'
      );
    });

    it('should generate an unsigned sweep for token', async function () {
      xrplStub = sandBox.stub(basecoin.bitgo, 'post');
      const accountInfoParams = {
        method: 'account_info',
        params: [
          {
            account: 'raGZWRkRBUWdQJsKYEzwXJNbCZMTqX56aA',
            strict: true,
            ledger_index: 'current',
            queue: true,
            signer_lists: true,
          },
        ],
      };

      const accountLinesParams = {
        method: 'account_lines',
        params: [
          {
            account: 'raGZWRkRBUWdQJsKYEzwXJNbCZMTqX56aA',
            ledger_index: 'validated',
          },
        ],
      };

      const accountInfoResponse = testData.accountInfoResponseUnsigned;
      const feeResponse = testData.feeResponse;
      const accountLinesResponse = testData.accountlinesResponseUnsigned;
      const serverInfoResponse = testData.serverInfoResponse;

      const sendStub = sinon.stub();
      sendStub.withArgs(accountInfoParams).resolves(accountInfoResponse);
      sendStub.withArgs({ method: 'fee' }).resolves(feeResponse);
      sendStub.withArgs({ method: 'server_info' }).resolves(serverInfoResponse);
      sendStub.withArgs(accountLinesParams).resolves(accountLinesResponse);

      // Apply the stub to the `xrplStub`
      xrplStub.withArgs(basecoin.getRippledUrl()).returns({
        send: sendStub,
      });

      const res = await basecoin.recover({
        userKey:
          'xpub661MyMwAqRbcF9Ya4zDHGzDtJz3NaaeEGbQ6rnqnNxL9RXDJNHcfzAyPUBXuKXjytvJNzQxqbjBwmPveiYX323Zp8Zx2RYQN9gGM7ntiXxr',
        backupKey:
          'xpub661MyMwAqRbcFtWdmWHKZEh9pYiJrAGTu1NNSwxY2S63tU9nGcfCAbNUKQuFqXRTRk8KkuBabxo6YjeBri8Q7dkMsmths6MVxSd6MTaeCmd',
        rootAddress: 'raGZWRkRBUWdQJsKYEzwXJNbCZMTqX56aA',
        recoveryDestination: destination,
        walletPassphrase: TestBitGo.V2.TEST_WALLET1_PASSCODE,
        issuerAddress: 'rQhWct2fv4Vc4KRjRgMrxa8xPN9Zx9iLKV',
        currencyCode: '524C555344000000000000000000000000000000',
      });

      res.should.not.be.empty();
      res.should.hasOwnProperty('txHex');
      res.txHex.should.equal(
        '120000228000000024000C50B82E00003039201B002B750061D48E35FA931A0000524C555344000000000000000000000000000000FCF4DD8C64636BC503F4A58DC6C684D2C7C3C24F68400000000000001E811439CA010E0E0198150F8DDD5768CCD2B095701D8C831438D1B9A61C0FFA1A82FCF8A40AF709A9C8CF1890'
      );
      const tx: any = xrpl.decode(res.txHex);
      tx.TransactionType.should.equal('Payment');
      tx.Amount.value.should.equal('4');
      tx.Amount.currency.should.equal('524C555344000000000000000000000000000000');
      tx.Amount.issuer.should.equal('rQhWct2fv4Vc4KRjRgMrxa8xPN9Zx9iLKV');
      tx.Fee.should.equal('30');
      tx.Account.should.equal('raGZWRkRBUWdQJsKYEzwXJNbCZMTqX56aA');
      tx.Destination.should.equal('raBSn6ipeWXYe7rNbNafZSx9dV2fU3zRyP');
      tx.DestinationTag.should.equal(12345);
    });
  });

  describe('Verify Transaction', () => {
    let newTxPrebuild;

    const txPrebuild = {
      txHex: `{"TransactionType":"TrustSet","Account":"rBSpCz8PafXTJHppDcNnex7dYnbe3tSuFG","LimitAmount":{"currency":"524C555344000000000000000000000000000000","issuer":"rnox8i6h9GoAbuwr73JtaDxXoncLLUCpXH","value":"1000000000"},"Flags":2147483648,"Fee":"45","Sequence":7}`,
    };

    before(function () {
      newTxPrebuild = () => {
        return _.cloneDeep(txPrebuild);
      };
    });

    it('should verify token trustline transactions', async function () {
      const txPrebuild = newTxPrebuild();

      const txParams = {
        recipients: [
          {
            address: 'rBSpCz8PafXTJHppDcNnex7dYnbe3tSuFG',
            amount: '0',
            tokenName: 'txrp:rlusd',
          },
        ],
        type: 'enabletoken',
      };

      const validTransaction = await token.verifyTransaction({
        txParams,
        txPrebuild,
      });
      validTransaction.should.equal(true);
    });

    it('should verify token transfers', async function () {
      const txPrebuild = {
        txHex:
          '{"Account":"rsgg4mwHTGPRP7A4eGUmrpTxTeDZHQrHkQ","Fee":"45","Sequence":1760661,"Flags":2147483648,"TransactionType":"Payment","Destination":"raJ4NmhHr2j2SGkmVFeMqKR5MUSWXjNF9a","Amount":{"value":"0.01","currency":"524C555344000000000000000000000000000000","issuer":"rQhWct2fv4Vc4KRjRgMrxa8xPN9Zx9iLKV"},"DestinationTag":1}',
        txInfo: {
          Account: 'rsgg4mwHTGPRP7A4eGUmrpTxTeDZHQrHkQ',
          TransactionType: 'Payment',
          Destination: 'raJ4NmhHr2j2SGkmVFeMqKR5MUSWXjNF9a',
          Amount: {
            value: '0.01',
            currency: '524C555344000000000000000000000000000000',
            issuer: 'rQhWct2fv4Vc4KRjRgMrxa8xPN9Zx9iLKV',
          },
          DestinationTag: 1,
        },
        coin: 'txrp',
        token: 'txrp:rlusd',
      };

      const txParams = {
        coin: 'txrp:rlusd',
        recipients: [
          {
            address: 'raJ4NmhHr2j2SGkmVFeMqKR5MUSWXjNF9a?dt=1',
            amount: '10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
          },
        ],
      };

      const validTransaction = await token.verifyTransaction({
        txParams,
        txPrebuild,
      });
      validTransaction.should.equal(true);
    });

    it('should fail verify trustline transaction with mismatch recipients', async function () {
      const txPrebuild = newTxPrebuild();
      const txParams = {
        recipients: [
          {
            address: 'rBSpCz8PafXTJHppDadfaex7dYnbe3tSuFG',
            amount: '0',
            tokenName: 'txrp:rlusd',
          },
        ],
        type: 'enabletoken',
      };
      await token
        .verifyTransaction({ txParams, txPrebuild })
        .should.be.rejectedWith('Tx outputs does not match with expected txParams recipients');
    });

    it('should fail to verify trustline transaction with incorrect token name', async function () {
      const txPrebuild = newTxPrebuild();
      const txParams = {
        recipients: [
          {
            address: 'rBSpCz8PafXTJHppDcNnex7dYnbe3tSuFG',
            amount: '0',
            tokenName: 'txrp:usd',
          },
        ],
        type: 'enabletoken',
      };
      await token.verifyTransaction({ txParams, txPrebuild }).should.be.rejectedWith('txrp:usd is not supported');
    });

    it('should verify token transfers with recipoent has dt', async function () {
      const txPrebuild = {
        txHex:
          '{"Account":"rsgg4mwHTGPRP7A4eGUmrpTxTeDZHQrHkQ","Fee":"45","Sequence":1760661,"Flags":2147483648,"TransactionType":"Payment","Destination":"raJ4NmhHr2j2SGkmVFeMqKR5MUSWXjNF9a","Amount":{"value":"0.01","currency":"524C555344000000000000000000000000000000","issuer":"rQhWct2fv4Vc4KRjRgMrxa8xPN9Zx9iLKV"},"DestinationTag":1}',
        txInfo: {
          Account: 'rsgg4mwHTGPRP7A4eGUmrpTxTeDZHQrHkQ',
          TransactionType: 'Payment',
          Destination: 'raJ4NmhHr2j2SGkmVFeMqKR5MUSWXjNF9a',
          Amount: {
            value: '0.01',
            currency: '524C555344000000000000000000000000000000',
            issuer: 'rQhWct2fv4Vc4KRjRgMrxa8xPN9Zx9iLKV',
          },
          DestinationTag: 1,
        },
        coin: 'txrp',
        token: 'txrp:rlusd',
      };
      const txParams = {
        coin: 'txrp:rlusd',
        recipients: [
          {
            address: 'raJ4NmhHr2j2SGkmVFeMqKR5MUSWXjNF9a?dt=1',
            amount: '10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
          },
        ],
      };

      const validTransaction = await token.verifyTransaction({
        txParams,
        txPrebuild,
      });
      validTransaction.should.equal(true);
    });
  });

  describe('Unit Tests for isWalletAddress function', function () {
    it('should return true for valid wallet address with matching root address', async function () {
      sinon.stub(basecoin.bitgo, 'post').returns({
        send: sinon.stub().resolves({
          body: {
            result: {
              account_data: {
                Flags: 0, // Include the Flags field
              },
            },
          },
        }),
      });

      const validAddress = 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=1893500718';
      const rootAddress = 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8';

      const result = await basecoin.isWalletAddress({ address: validAddress, rootAddress });
      result.should.be.true();
    });

    it('should throw InvalidAddressError if the address is invalid', async function () {
      const invalidAddress = 'invalidAddress';
      const rootAddress = 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8';

      sinon.stub(basecoin, 'isValidAddress').returns(false);

      await assert.rejects(async () => basecoin.isWalletAddress({ address: invalidAddress, rootAddress }), {
        name: 'InvalidAddressError',
        message: `address verification failure: address "${invalidAddress}" is not valid`,
      });
    });

    it('should throw InvalidAddressError if destinationTag is required but not provided', async function () {
      const addressWithoutTag = 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8';
      const rootAddress = 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8';

      sinon.stub(basecoin, 'isValidAddress').returns(true);
      sinon.stub(basecoin.bitgo, 'post').returns({
        send: sinon.stub().resolves({
          body: {
            result: {
              account_data: {
                Flags: 0x00020000, // lsfRequireDestTag
              },
            },
          },
        }),
      });

      await assert.rejects(async () => basecoin.isWalletAddress({ address: addressWithoutTag, rootAddress }), {
        name: 'InvalidAddressError',
        message: 'Invalid Address: Destination Tag is required for address "r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8".',
      });
    });

    it('should throw UnexpectedAddressError if the root address does not match', async function () {
      sinon.stub(basecoin.bitgo, 'post').returns({
        send: sinon.stub().resolves({
          body: {
            result: {
              account_data: {
                Flags: 0, // Include the Flags field
              },
            },
          },
        }),
      });

      const validAddress = 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=1893500718';
      const mismatchedRootAddress = 'rBfhJ6HopLW69xK83nyShdNxC3uggjs46K';

      await assert.rejects(
        async () => basecoin.isWalletAddress({ address: validAddress, rootAddress: mismatchedRootAddress }),
        {
          name: 'UnexpectedAddressError',
          message: `address validation failure: ${validAddress.split('?')[0]} vs. ${mismatchedRootAddress}`,
        }
      );
    });

    it('should handle missing Flags field gracefully', async function () {
      const validAddress = 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8?dt=1893500718';
      const rootAddress = 'r2udSsspYjWSoUZxzxLzV6RxGcbygngJ8';

      sinon.stub(basecoin, 'isValidAddress').returns(true);
      sinon.stub(basecoin.bitgo, 'post').returns({
        send: sinon.stub().resolves({
          body: {
            result: {
              account_data: {}, // Flags field is missing
            },
          },
        }),
      });

      await assert.rejects(async () => basecoin.isWalletAddress({ address: validAddress, rootAddress }), {
        name: 'Error',
        message: 'Invalid account information: Flags field is missing.',
      });
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});
