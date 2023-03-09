const { ethers } = require("hardhat");

async function main() {

    const whitelistContract = await ethers.getContractFactory("Whitelist");

    const deployedWhitelstContract = await whitelistContract.deploy(10);

    await deployedWhitelstContract.deployed();

    console.log("Whitelist Contract Address:", deployedWhitelstContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });