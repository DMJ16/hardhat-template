import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-typechain";
import { HardhatUserConfig } from "hardhat/config";
require("dotenv").config();

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${process.env.INFURA as string}`,
      },
    },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${process.env.INFURA as string}`,
    //   accounts: [process.env.PRIVATE_KEY as string],
    // },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${process.env.INFURA as string}`,
    //   accounts: [process.env.PRIVATE_KEY as string],
    // },
    // kovan: {
    //   url: `https://kovan.infura.io/v3/${process.env.INFURA as string}`,
    //   accounts: [process.env.PRIVATE_KEY as string],
    // },
  },
  solidity: "0.7.5",
};

export default config;
