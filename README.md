<p align="center">
  <img src="https://github.com/coinsplan/resources/blob/main/logos/icon-full.png?raw=true" width="400px"/>
</p>
<p align="center">Cryptocurrency scheduler for EVM base blockchain.</p>
<p align="center"><b>In development process.</b></p>

<br />
<br />

# CoinsPlan Interface
An open source interface for CoinsPlan, Cryptocurrency Scheduler.
- Demo at [coinsplan](https://coinsplan.web.app/)

## Accessing to CoinsPlan's Scheduler Contract interfaces
- Please visit [coinsplan-contracts](https://github.com/coinsplan/contracts)

## Getting Started

#### Clonning project
```shell
git clone https://github.com/coinsplan/frontend-app
```

then

```shell
cd frontend-app
```

#### Installing dependencies
```shell
yarn
```

#### Running project
```shell
yarn start
```

#### Format code
```shell
yarn format
```

#### Building static files
```shell
yarn build
```
## Configurations
- `.env.development.local` and `.env.production.local` are used for RPC config.

**Example**
```
REACT_APP_ETH_RPC=https://mainnet.infura.io/...
REACT_APP_BSC_RPC=https://bsc-dataseed.binance.org/
```

- Application Configurations in `src/configurations/application.ts` is use for application specific config

**Examples and Default values**
```ts
export const defaultChain = 1 // Set dafault chainId for connectors while connecting to wallet web3 provider.
```
