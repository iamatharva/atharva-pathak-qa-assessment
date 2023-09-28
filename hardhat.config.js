require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`], 
      ens: {
        registry: "",
      },
    },
  },
   solidity: {
    version: "0.8.6",
    settings: {
    },
  },
};
