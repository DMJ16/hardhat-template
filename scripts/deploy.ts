import "dotenv/config";
import { ethers } from "hardhat";

const name = "";
const constructorParams: any[] = [];

async function deploy(): Promise<void> {
  const factory = await ethers.getContractFactory(name);
  const contract = await factory.deploy(...constructorParams);
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

deploy()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
