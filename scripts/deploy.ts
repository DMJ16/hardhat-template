import "dotenv/config";
import { ethers } from "hardhat";
import { Signer, Wallet, providers } from "ethers";

const name = "";
const constructorParams: any[] = [];
const provider = new providers.JsonRpcProvider(process.env.INFURA_URL);
const wallet = new Wallet(process.env.DEV_PRIVATE_KEY ?? "", provider);

async function deploy(
  name: string,
  _constructorParams: any[],
  signer: Signer
): Promise<void> {
  const constructorParams = _constructorParams ?? [];
  const factory = await ethers.getContractFactory(name, signer);
  const contract = await factory.deploy(...constructorParams);
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

deploy(name, constructorParams, wallet)
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
