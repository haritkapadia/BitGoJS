
# An elaborated scheme to build all the dependencies of all packages first in a cached layer
# https://stackoverflow.com/a/63142468/134409
# https://medium.com/@emilefugulin/building-a-sane-docker-image-for-typescript-lerna-and-prisma-2-76d8ff9926e4
FROM node:22.16.0-bookworm-slim@sha256:2f3571619daafc6b53232ebf2fcc0817c1e64795e92de317c1684a915d13f1a5 AS filter-packages-json
LABEL maintainer="Developer Relations <developer-relations-team@bitgo.com>"

COPY package.json yarn.lock lerna.json ./
WORKDIR /tmp/bitgo
COPY package.json yarn.lock lerna.json ./
COPY modules ./modules
# delete all the non package.json files under `./modules/`
RUN find modules \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf

FROM node:22.16.0-bookworm-slim@sha256:2f3571619daafc6b53232ebf2fcc0817c1e64795e92de317c1684a915d13f1a5 AS builder
RUN apt-get update && apt-get install -y git python3 make g++ libtool autoconf automake
WORKDIR /tmp/bitgo
COPY --from=filter-packages-json /tmp/bitgo .
# (skip postinstall) https://github.com/yarnpkg/yarn/issues/4100#issuecomment-388944260
RUN NOYARNPOSTINSTALL=1 yarn install --pure-lockfile --network-timeout 120000

COPY . .
RUN \
    # clean up unnecessary local node_modules and dist
    rm -rf modules/**/node_modules modules/**/dist && \
    # install with dev deps so we can run the prepare script
    yarn install --frozen-lockfile && \
    # install again to prune dev deps
    yarn install --production --frozen-lockfile --non-interactive --ignore-scripts && \
    # remove any src code leftover (we only want dist)
    rm -r modules/*/src


FROM node:22.16.0-bookworm-slim@sha256:2f3571619daafc6b53232ebf2fcc0817c1e64795e92de317c1684a915d13f1a5
RUN apt-get update && apt-get install -y tini
# copy the root node_modules to the bitgo-express parent node_modules
COPY --from=builder /tmp/bitgo/node_modules  /var/node_modules/
COPY --from=builder /tmp/bitgo/modules/express /var/bitgo-express/

#COPY_START
COPY --from=builder /tmp/bitgo/modules/abstract-lightning /var/modules/abstract-lightning/
COPY --from=builder /tmp/bitgo/modules/sdk-core /var/modules/sdk-core/
COPY --from=builder /tmp/bitgo/modules/sdk-lib-mpc /var/modules/sdk-lib-mpc/
COPY --from=builder /tmp/bitgo/modules/sdk-opensslbytes /var/modules/sdk-opensslbytes/
COPY --from=builder /tmp/bitgo/modules/secp256k1 /var/modules/secp256k1/
COPY --from=builder /tmp/bitgo/modules/sjcl /var/modules/sjcl/
COPY --from=builder /tmp/bitgo/modules/statics /var/modules/statics/
COPY --from=builder /tmp/bitgo/modules/utxo-core /var/modules/utxo-core/
COPY --from=builder /tmp/bitgo/modules/unspents /var/modules/unspents/
COPY --from=builder /tmp/bitgo/modules/utxo-lib /var/modules/utxo-lib/
COPY --from=builder /tmp/bitgo/modules/blake2b /var/modules/blake2b/
COPY --from=builder /tmp/bitgo/modules/blake2b-wasm /var/modules/blake2b-wasm/
COPY --from=builder /tmp/bitgo/modules/bitgo /var/modules/bitgo/
COPY --from=builder /tmp/bitgo/modules/abstract-cosmos /var/modules/abstract-cosmos/
COPY --from=builder /tmp/bitgo/modules/sdk-api /var/modules/sdk-api/
COPY --from=builder /tmp/bitgo/modules/sdk-hmac /var/modules/sdk-hmac/
COPY --from=builder /tmp/bitgo/modules/abstract-utxo /var/modules/abstract-utxo/
COPY --from=builder /tmp/bitgo/modules/blockapis /var/modules/blockapis/
COPY --from=builder /tmp/bitgo/modules/account-lib /var/modules/account-lib/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-ada /var/modules/sdk-coin-ada/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-algo /var/modules/sdk-coin-algo/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-apechain /var/modules/sdk-coin-apechain/
COPY --from=builder /tmp/bitgo/modules/abstract-eth /var/modules/abstract-eth/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-apt /var/modules/sdk-coin-apt/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-arbeth /var/modules/sdk-coin-arbeth/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-asi /var/modules/sdk-coin-asi/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-atom /var/modules/sdk-coin-atom/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-avaxc /var/modules/sdk-coin-avaxc/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-avaxp /var/modules/sdk-coin-avaxp/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-eth /var/modules/sdk-coin-eth/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-baby /var/modules/sdk-coin-baby/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-bera /var/modules/sdk-coin-bera/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-bld /var/modules/sdk-coin-bld/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-bsc /var/modules/sdk-coin-bsc/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-celo /var/modules/sdk-coin-celo/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-coredao /var/modules/sdk-coin-coredao/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-coreum /var/modules/sdk-coin-coreum/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-cosmos /var/modules/sdk-coin-cosmos/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-cronos /var/modules/sdk-coin-cronos/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-cspr /var/modules/sdk-coin-cspr/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-dot /var/modules/sdk-coin-dot/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-etc /var/modules/sdk-coin-etc/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-evm /var/modules/sdk-coin-evm/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-flr /var/modules/sdk-coin-flr/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-hash /var/modules/sdk-coin-hash/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-hbar /var/modules/sdk-coin-hbar/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-icp /var/modules/sdk-coin-icp/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-initia /var/modules/sdk-coin-initia/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-injective /var/modules/sdk-coin-injective/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-islm /var/modules/sdk-coin-islm/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-mantra /var/modules/sdk-coin-mantra/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-mon /var/modules/sdk-coin-mon/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-near /var/modules/sdk-coin-near/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-oas /var/modules/sdk-coin-oas/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-opeth /var/modules/sdk-coin-opeth/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-osmo /var/modules/sdk-coin-osmo/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-polygon /var/modules/sdk-coin-polygon/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-polyx /var/modules/sdk-coin-polyx/
COPY --from=builder /tmp/bitgo/modules/abstract-substrate /var/modules/abstract-substrate/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-rbtc /var/modules/sdk-coin-rbtc/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-rune /var/modules/sdk-coin-rune/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-sei /var/modules/sdk-coin-sei/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-sgb /var/modules/sdk-coin-sgb/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-sol /var/modules/sdk-coin-sol/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-soneium /var/modules/sdk-coin-soneium/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-stt /var/modules/sdk-coin-stt/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-stx /var/modules/sdk-coin-stx/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-sui /var/modules/sdk-coin-sui/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-tao /var/modules/sdk-coin-tao/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-tia /var/modules/sdk-coin-tia/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-ton /var/modules/sdk-coin-ton/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-trx /var/modules/sdk-coin-trx/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-vet /var/modules/sdk-coin-vet/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-wemix /var/modules/sdk-coin-wemix/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-world /var/modules/sdk-coin-world/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-xdc /var/modules/sdk-coin-xdc/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-xrp /var/modules/sdk-coin-xrp/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-xtz /var/modules/sdk-coin-xtz/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-zeta /var/modules/sdk-coin-zeta/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-zketh /var/modules/sdk-coin-zketh/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-bch /var/modules/sdk-coin-bch/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-bcha /var/modules/sdk-coin-bcha/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-bsv /var/modules/sdk-coin-bsv/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-btc /var/modules/sdk-coin-btc/
COPY --from=builder /tmp/bitgo/modules/utxo-ord /var/modules/utxo-ord/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-btg /var/modules/sdk-coin-btg/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-dash /var/modules/sdk-coin-dash/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-doge /var/modules/sdk-coin-doge/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-eos /var/modules/sdk-coin-eos/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-ethlike /var/modules/sdk-coin-ethlike/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-ethw /var/modules/sdk-coin-ethw/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-lnbtc /var/modules/sdk-coin-lnbtc/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-ltc /var/modules/sdk-coin-ltc/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-xlm /var/modules/sdk-coin-xlm/
COPY --from=builder /tmp/bitgo/modules/sdk-coin-zec /var/modules/sdk-coin-zec/

RUN cd /var/modules/abstract-lightning && yarn link && \
cd /var/modules/sdk-core && yarn link && \
cd /var/modules/sdk-lib-mpc && yarn link && \
cd /var/modules/sdk-opensslbytes && yarn link && \
cd /var/modules/secp256k1 && yarn link && \
cd /var/modules/sjcl && yarn link && \
cd /var/modules/statics && yarn link && \
cd /var/modules/utxo-core && yarn link && \
cd /var/modules/unspents && yarn link && \
cd /var/modules/utxo-lib && yarn link && \
cd /var/modules/blake2b && yarn link && \
cd /var/modules/blake2b-wasm && yarn link && \
cd /var/modules/bitgo && yarn link && \
cd /var/modules/abstract-cosmos && yarn link && \
cd /var/modules/sdk-api && yarn link && \
cd /var/modules/sdk-hmac && yarn link && \
cd /var/modules/abstract-utxo && yarn link && \
cd /var/modules/blockapis && yarn link && \
cd /var/modules/account-lib && yarn link && \
cd /var/modules/sdk-coin-ada && yarn link && \
cd /var/modules/sdk-coin-algo && yarn link && \
cd /var/modules/sdk-coin-apechain && yarn link && \
cd /var/modules/abstract-eth && yarn link && \
cd /var/modules/sdk-coin-apt && yarn link && \
cd /var/modules/sdk-coin-arbeth && yarn link && \
cd /var/modules/sdk-coin-asi && yarn link && \
cd /var/modules/sdk-coin-atom && yarn link && \
cd /var/modules/sdk-coin-avaxc && yarn link && \
cd /var/modules/sdk-coin-avaxp && yarn link && \
cd /var/modules/sdk-coin-eth && yarn link && \
cd /var/modules/sdk-coin-baby && yarn link && \
cd /var/modules/sdk-coin-bera && yarn link && \
cd /var/modules/sdk-coin-bld && yarn link && \
cd /var/modules/sdk-coin-bsc && yarn link && \
cd /var/modules/sdk-coin-celo && yarn link && \
cd /var/modules/sdk-coin-coredao && yarn link && \
cd /var/modules/sdk-coin-coreum && yarn link && \
cd /var/modules/sdk-coin-cosmos && yarn link && \
cd /var/modules/sdk-coin-cronos && yarn link && \
cd /var/modules/sdk-coin-cspr && yarn link && \
cd /var/modules/sdk-coin-dot && yarn link && \
cd /var/modules/sdk-coin-etc && yarn link && \
cd /var/modules/sdk-coin-evm && yarn link && \
cd /var/modules/sdk-coin-flr && yarn link && \
cd /var/modules/sdk-coin-hash && yarn link && \
cd /var/modules/sdk-coin-hbar && yarn link && \
cd /var/modules/sdk-coin-icp && yarn link && \
cd /var/modules/sdk-coin-initia && yarn link && \
cd /var/modules/sdk-coin-injective && yarn link && \
cd /var/modules/sdk-coin-islm && yarn link && \
cd /var/modules/sdk-coin-mantra && yarn link && \
cd /var/modules/sdk-coin-mon && yarn link && \
cd /var/modules/sdk-coin-near && yarn link && \
cd /var/modules/sdk-coin-oas && yarn link && \
cd /var/modules/sdk-coin-opeth && yarn link && \
cd /var/modules/sdk-coin-osmo && yarn link && \
cd /var/modules/sdk-coin-polygon && yarn link && \
cd /var/modules/sdk-coin-polyx && yarn link && \
cd /var/modules/abstract-substrate && yarn link && \
cd /var/modules/sdk-coin-rbtc && yarn link && \
cd /var/modules/sdk-coin-rune && yarn link && \
cd /var/modules/sdk-coin-sei && yarn link && \
cd /var/modules/sdk-coin-sgb && yarn link && \
cd /var/modules/sdk-coin-sol && yarn link && \
cd /var/modules/sdk-coin-soneium && yarn link && \
cd /var/modules/sdk-coin-stt && yarn link && \
cd /var/modules/sdk-coin-stx && yarn link && \
cd /var/modules/sdk-coin-sui && yarn link && \
cd /var/modules/sdk-coin-tao && yarn link && \
cd /var/modules/sdk-coin-tia && yarn link && \
cd /var/modules/sdk-coin-ton && yarn link && \
cd /var/modules/sdk-coin-trx && yarn link && \
cd /var/modules/sdk-coin-vet && yarn link && \
cd /var/modules/sdk-coin-wemix && yarn link && \
cd /var/modules/sdk-coin-world && yarn link && \
cd /var/modules/sdk-coin-xdc && yarn link && \
cd /var/modules/sdk-coin-xrp && yarn link && \
cd /var/modules/sdk-coin-xtz && yarn link && \
cd /var/modules/sdk-coin-zeta && yarn link && \
cd /var/modules/sdk-coin-zketh && yarn link && \
cd /var/modules/sdk-coin-bch && yarn link && \
cd /var/modules/sdk-coin-bcha && yarn link && \
cd /var/modules/sdk-coin-bsv && yarn link && \
cd /var/modules/sdk-coin-btc && yarn link && \
cd /var/modules/utxo-ord && yarn link && \
cd /var/modules/sdk-coin-btg && yarn link && \
cd /var/modules/sdk-coin-dash && yarn link && \
cd /var/modules/sdk-coin-doge && yarn link && \
cd /var/modules/sdk-coin-eos && yarn link && \
cd /var/modules/sdk-coin-ethlike && yarn link && \
cd /var/modules/sdk-coin-ethw && yarn link && \
cd /var/modules/sdk-coin-lnbtc && yarn link && \
cd /var/modules/sdk-coin-ltc && yarn link && \
cd /var/modules/sdk-coin-xlm && yarn link && \
cd /var/modules/sdk-coin-zec && yarn link
#COPY_END

#LINK_START
RUN cd /var/bitgo-express && \
    yarn link @bitgo/abstract-lightning && \
    yarn link @bitgo/sdk-core && \
    yarn link @bitgo/sdk-lib-mpc && \
    yarn link @bitgo/sdk-opensslbytes && \
    yarn link @bitgo/secp256k1 && \
    yarn link @bitgo/sjcl && \
    yarn link @bitgo/statics && \
    yarn link @bitgo/utxo-core && \
    yarn link @bitgo/unspents && \
    yarn link @bitgo/utxo-lib && \
    yarn link @bitgo/blake2b && \
    yarn link @bitgo/blake2b-wasm && \
    yarn link bitgo && \
    yarn link @bitgo/abstract-cosmos && \
    yarn link @bitgo/sdk-api && \
    yarn link @bitgo/sdk-hmac && \
    yarn link @bitgo/abstract-utxo && \
    yarn link @bitgo/blockapis && \
    yarn link @bitgo/account-lib && \
    yarn link @bitgo/sdk-coin-ada && \
    yarn link @bitgo/sdk-coin-algo && \
    yarn link @bitgo/sdk-coin-apechain && \
    yarn link @bitgo/abstract-eth && \
    yarn link @bitgo/sdk-coin-apt && \
    yarn link @bitgo/sdk-coin-arbeth && \
    yarn link @bitgo/sdk-coin-asi && \
    yarn link @bitgo/sdk-coin-atom && \
    yarn link @bitgo/sdk-coin-avaxc && \
    yarn link @bitgo/sdk-coin-avaxp && \
    yarn link @bitgo/sdk-coin-eth && \
    yarn link @bitgo/sdk-coin-baby && \
    yarn link @bitgo/sdk-coin-bera && \
    yarn link @bitgo/sdk-coin-bld && \
    yarn link @bitgo/sdk-coin-bsc && \
    yarn link @bitgo/sdk-coin-celo && \
    yarn link @bitgo/sdk-coin-coredao && \
    yarn link @bitgo/sdk-coin-coreum && \
    yarn link @bitgo/sdk-coin-cosmos && \
    yarn link @bitgo/sdk-coin-cronos && \
    yarn link @bitgo/sdk-coin-cspr && \
    yarn link @bitgo/sdk-coin-dot && \
    yarn link @bitgo/sdk-coin-etc && \
    yarn link @bitgo/sdk-coin-evm && \
    yarn link @bitgo/sdk-coin-flr && \
    yarn link @bitgo/sdk-coin-hash && \
    yarn link @bitgo/sdk-coin-hbar && \
    yarn link @bitgo/sdk-coin-icp && \
    yarn link @bitgo/sdk-coin-initia && \
    yarn link @bitgo/sdk-coin-injective && \
    yarn link @bitgo/sdk-coin-islm && \
    yarn link @bitgo/sdk-coin-mantra && \
    yarn link @bitgo/sdk-coin-mon && \
    yarn link @bitgo/sdk-coin-near && \
    yarn link @bitgo/sdk-coin-oas && \
    yarn link @bitgo/sdk-coin-opeth && \
    yarn link @bitgo/sdk-coin-osmo && \
    yarn link @bitgo/sdk-coin-polygon && \
    yarn link @bitgo/sdk-coin-polyx && \
    yarn link @bitgo/abstract-substrate && \
    yarn link @bitgo/sdk-coin-rbtc && \
    yarn link @bitgo/sdk-coin-rune && \
    yarn link @bitgo/sdk-coin-sei && \
    yarn link @bitgo/sdk-coin-sgb && \
    yarn link @bitgo/sdk-coin-sol && \
    yarn link @bitgo/sdk-coin-soneium && \
    yarn link @bitgo/sdk-coin-stt && \
    yarn link @bitgo/sdk-coin-stx && \
    yarn link @bitgo/sdk-coin-sui && \
    yarn link @bitgo/sdk-coin-tao && \
    yarn link @bitgo/sdk-coin-tia && \
    yarn link @bitgo/sdk-coin-ton && \
    yarn link @bitgo/sdk-coin-trx && \
    yarn link @bitgo/sdk-coin-vet && \
    yarn link @bitgo/sdk-coin-wemix && \
    yarn link @bitgo/sdk-coin-world && \
    yarn link @bitgo/sdk-coin-xdc && \
    yarn link @bitgo/sdk-coin-xrp && \
    yarn link @bitgo/sdk-coin-xtz && \
    yarn link @bitgo/sdk-coin-zeta && \
    yarn link @bitgo/sdk-coin-zketh && \
    yarn link @bitgo/sdk-coin-bch && \
    yarn link @bitgo/sdk-coin-bcha && \
    yarn link @bitgo/sdk-coin-bsv && \
    yarn link @bitgo/sdk-coin-btc && \
    yarn link @bitgo/utxo-ord && \
    yarn link @bitgo/sdk-coin-btg && \
    yarn link @bitgo/sdk-coin-dash && \
    yarn link @bitgo/sdk-coin-doge && \
    yarn link @bitgo/sdk-coin-eos && \
    yarn link @bitgo/sdk-coin-ethlike && \
    yarn link @bitgo/sdk-coin-ethw && \
    yarn link @bitgo/sdk-coin-lnbtc && \
    yarn link @bitgo/sdk-coin-ltc && \
    yarn link @bitgo/sdk-coin-xlm && \
    yarn link @bitgo/sdk-coin-zec
#LINK_END

#LABEL_START
LABEL created="Thu, 31 Jul 2025 00:41:32 GMT"
LABEL version=14.1.6
LABEL git_hash=c0b429b275907610130a63dd0783406b382e61e1
#LABEL_END

USER node
ENV NODE_ENV production
ENV BITGO_BIND 0.0.0.0
EXPOSE 3080
ENTRYPOINT ["/usr/bin/tini", "--", "/usr/local/bin/node", "/var/bitgo-express/bin/bitgo-express"]
