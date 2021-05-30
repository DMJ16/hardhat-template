import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";
// import {} from "../typechain";

describe("Example", () => {
  let signers: Signer[], accounts: string[];

  beforeEach(async () => {
    signers = await ethers.getSigners();
    accounts = await Promise.all(signers.map((signer) => signer.getAddress()));
  });
});
