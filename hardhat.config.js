// hardhat.config.js

import "@nomicfoundation/hardhat-toolbox";

const networks = {
    // XRP EVM Devnet
    xrplEvmTestnet: {
      url: "https://rpc.testnet.xrplevm.org",
      chainId: 1449000,
      accounts: process.env.DEVNET_PRIVATE_KEY
    ? [process.env.DEVNET_PRIVATE_KEY]
    : [],
    },

    // Sepolia
    sepolia: {
      url: "https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}",
      accounts: process.env.DEVNET_PRIVATE_KEY
    ? [process.env.DEVNET_PRIVATE_KEY]
    : [],
    },

    // Hardhat
    hardhat: {
      chainId: 31337,
    },

    // Local
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      accounts: process.env.DEVNET_PRIVATE_KEY
    ? [process.env.DEVNET_PRIVATE_KEY]
    : [],
    },
  };

/** @type import("hardhat/config").HardhatUserConfig */
export const config = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },

  networks: networks,

  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
  },

};

export default config;
export { networks };