import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "solidity-coverage";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-etherscan";
import { HardhatUserConfig } from "hardhat/config";
require("dotenv").config();

const URL = process.env.INFURA_URL ?? "";
const DEV_PRIVATE_KEY = process.env.DEV_PRIVATE_KEY ?? "";
const GAS_REPORTER_ENABLED = process.env.REPORT_GAS ? true : false;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY ?? "";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: URL,
        // blockNumber:
      },
    },
    ropsten: {
      url: URL,
      accounts: [DEV_PRIVATE_KEY],
    },
    rinkeby: {
      url: URL,
      accounts: [DEV_PRIVATE_KEY],
    },
    kovan: {
      url: URL,
      accounts: [DEV_PRIVATE_KEY],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  gasReporter: {
    currency: "USD",
    enabled: GAS_REPORTER_ENABLED,
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
