import { ethers } from "hardhat";
import { Signer, BigNumber, Contract, Wallet } from "ethers";
import { expect } from "chai";
// import { deployContract } from "ethereum-waffle";
// import Artifact from ""
// import {  } from "../typechain";

describe("Example", () => {
  let signers: Signer[];
  let addressArr: string[];
  let admin: Signer;
  let adminAddress: string;
  // let ContractFactory: Contract__factory;
  // let contract: Contract;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    addressArr = signers.map((wallet) => (<Wallet>wallet).address);
    admin = signers[0];
    // ContractFactory = (await ethers.getContractFactory(
    //   "Contract",
    //   admin
    // )) as Contract__factory;
    // contract = await ContractFactory.deploy();
  });

  it("test 1", async () => {});
});
