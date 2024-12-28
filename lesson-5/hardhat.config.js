require("@nomicfoundation/hardhat-toolbox");
// require("@chainlink/env-enc").config()
require("dotenv").config();
require("./tasks")
require("hardhat-deploy")
require("@nomicfoundation/hardhat-ethers");
require("hardhat-deploy");
require("hardhat-deploy-ethers");

const SEPOLIA_URL = process.env.SEPOLIA_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PRIVATE_KEY_1 = process.env.PRIVATE_KEY1
const EHTERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
console.log(process.env.ALCHEMY_API_KEY,PRIVATE_KEY,PRIVATE_KEY_1)
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  mocha: {
    timeout: 300000
  },
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/" + process.env.ALCHEMY_API_KEY,
      accounts: [PRIVATE_KEY, PRIVATE_KEY_1],
      chainId: 11155111
    }
  },
  etherscan: {
    apiKey: {
      sepolia: EHTERSCAN_API_KEY
    }
  },
  namedAccounts: {
    firstAccount: {
      default: 0
    },
    secondAccount: {
      default: 1
    },
  },
  gasReporter: {
    enabled: true //是否打印gas花费报告
  }
};
