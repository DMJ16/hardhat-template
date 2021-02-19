import { ethers } from "hardhat";
import { Signer, BigNumber, Contract, Wallet } from "ethers";
import { expect } from "chai";
// import {} from "../typechain";

describe("Example", () => {
  let signers: Signer[];
  let admin: Signer;
  let adminAddress: string;
  // let ContractFactory: Contract__factory;
  // let contract: Contract;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    admin = signers[0];
    adminAddress = await admin.getAddress();
    // ContractFactory = (await ethers.getContractFactory(
    //   "Contract",
    //   admin
    // )) as Contract__factory;
    // contract = await ContractFactory.deploy();
  });

  it("test1", async () => {});
});
