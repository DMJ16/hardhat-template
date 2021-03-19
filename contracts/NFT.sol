// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
  using Counters for Counters.Counter;

  event NewMint(uint256);

  Counters.Counter private _tokenIds;

  constructor(
    string memory _name,
    string memory _symbol,
    string memory _baseUri
  ) ERC721(_name, _symbol) {
    _setBaseURI(_baseUri);
  }

  function mint(string memory ipfsHash) public returns (uint256 tokenId) {
    _tokenIds.increment();
    tokenId = _tokenIds.current();
    _safeMint(msg.sender, tokenId, "");
    assert(ownerOf(tokenId) == msg.sender);
    _setTokenURI(tokenId, ipfsHash);
    emit NewMint(tokenId);
    return tokenId;
  }
}
