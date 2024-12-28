require("@nomicfoundation/hardhat-toolbox");
require("@chainlink/env-enc").config()
require("./tasks")

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
console.log(process.env.ALCHEMY_API_KEY)
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/" + process.env.ALCHEMY_API_KEY, accounts: [process.env.PRIVATE_KEY,process.env.PRIVATE_KEY1], 
      chainId: 11155111//在chainlist.org查询
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY
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
};
