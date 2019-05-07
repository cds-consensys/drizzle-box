const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider")
const mnemonic = process.env['ROPSTEN_MNEMONIC']
console.log(mnemonic)

      // gasLimit: 7000000
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },

    ropsten: {
      provider: function () {  return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/bd70e813e72c474ea613e644c0dacafb") },
      network_id: 3
    }
  }
};
