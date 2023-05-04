require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.19',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/0NT7Lf1OfdEGQWQGVP4Jlb8cSFw0c-Uf',
      accounts: [ '78415b9d2ab2dd1531b51fc937d287a6a2c44b9cf7567716e1e4ad97d7eba965' ],
    },
  },
};