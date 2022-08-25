require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.15",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/5edc27d46d1a487ebf67d3af08574012",
      accounts: ["1399f2c05fbac20e28a7cc5702f60facc22c4d09372a73a921987a824479c3f0"]
    }
  }

};
