import { HardhatUserConfig } from "hardhat/config";
require( "@nomicfoundation/hardhat-toolbox");

require("dotenv").config({ path: ".env" });

const config: HardhatUserConfig = {
  networks: {
    avalanche: {
      url: process.env.AVALANCHE_QUICKNODE_MAINNET_URL,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 43114,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 43113,
    },
  },
  // etherscan: {
  //   apiKey:  process.env.VERIFY_API_KEY as string
  // },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    artifacts: '../src/artifacts'
  },
};

export default config;
