import { ethers } from "hardhat";
import { Signer, BigNumber } from "ethers";
import { expect } from "chai";
import { getTxEventData } from "../utils";
import { NFT, NFT__factory } from "../typechain";

describe("NFT", () => {
  let signers: Signer[];
  let admin: Signer;
  let adminAddress: string;
  let nftFactory: NFT__factory;
  let nft: NFT;
  const BASE_URI = "https://ipfs.io/ipfs/";
  const MOCK_IPFS_HASH = "QmbBhoUUBN7SmdQpNcFcpNtEaNYEyjufo2xSqZLJw2cZWa";

  beforeEach(async () => {
    signers = await ethers.getSigners();
    admin = signers[0];
    adminAddress = await admin.getAddress();
    nftFactory = (await ethers.getContractFactory(
      "NFT",
      admin
    )) as NFT__factory;
    nft = await nftFactory.deploy("test", "TEST", BASE_URI);
  });

  it("successfully mints nft", async () => {
    const tx = nft.mint(MOCK_IPFS_HASH);
    const data = await getTxEventData(tx);
    const tokenId = parseInt(data);
    expect(await nft.ownerOf(tokenId)).to.eq(adminAddress);
    expect(await nft.tokenURI(tokenId)).to.eq(BASE_URI + MOCK_IPFS_HASH);
    expect(await nft.balanceOf(adminAddress)).to.eq(BigNumber.from(1));
  });
});
