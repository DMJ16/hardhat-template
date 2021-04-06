# hardhat-template

Acknowledgements: [@PaulRBerg's](https://twitter.com/PaulRBerg) incredible [solidity-template](https://github.com/paulrberg/solidity-template).

## Usage

On Github, click the green "Use this template" button.

### Install Dependencies

```sh
yarn install
```

### Compile

1. Deletes hardhat cache and contract artifacts
2. Compiles contracts

```sh
yarn compile
```

### Coverage

1. Generates the code coverage report

```sh
yarn coverage
```

### Deploy

1. Configure deploy.ts script
2. Run below command to deploy contract to Ethereum mainnet

```sh
yarn deploy
```

**Notice: write your own testnet deployment script + command as needed**

### Prettier

1. Automatically formats Solidity code

```sh
yarn prettier
```

### Test

1. Runs mocha unit tests

```sh
yarn test
```

### TypeChain

1. Generates Smart Contract TypeScript bindings

```sh
yarn typechain
```
