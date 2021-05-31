import "dotenv/config";
import { ethers } from "hardhat";

const name = "";
const network = "";
const provider = new ethers.providers.JsonRpcProvider(
  `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`
);
const wallet = new ethers.Wallet(process.env.DEV_PRIVATE_KEY ?? "", provider);
const constructorParams: any[] = [];

async function deploy(): Promise<void> {
  const factory = await ethers.getContractFactory(name, wallet);
  const contract = await factory.deploy(...constructorParams);
  await contract.deployed();
  console.log("Contract deployed at:", contract.address);
}

deploy()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
