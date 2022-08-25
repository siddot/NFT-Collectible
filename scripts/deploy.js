// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const { buffer } = require('buffer')

async function main() {
  const GreetNFT = await ethers.getContractFactory("GreetNFT")
  const greet_nft = await GreetNFT.deploy("Greet", "GRT")

  await greet_nft.deployed()
  console.log(`Contract successfully deployed to ${greet_nft.address}`)

  const newItemId = await greet_nft.mint("https://gateway.pinata.cloud/ipfs/QmYgxggQ8B4s1tA9mUDkxMK5Zyn4VUvrKxm525LxyxhW4c")
  console.log(`NFT minted successfully :: ${newItemId}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
