// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./ERC721Enumerable.sol";
import "./Ownable.sol";

contract NFT is ERC721Enumerable, Ownable {
    uint256 public cost;
    uint256 public maxSupply;
    uint256 public allowMintingOn;
    string public baseURI;

    constructor(
        string memory _name, 
        string memory _symbol, 
        uint256 _cost,
        uint256 _maxSupply,
        uint256 _allowMintingOn,
        string memory _baseURI

        ) ERC721(_name, _symbol){
        cost = _cost;
        maxSupply = _maxSupply;
        allowMintingOn = _allowMintingOn;
        baseURI = _baseURI;
    }

    function mint(uint256 _mintAmount) public payable { 
        require(msg.value >= cost * _mintAmount);
        require(block.timestamp >= allowMintingOn);
        require(_mintAmount > 0 || _mintAmount <= 5);

        uint256 supply = totalSupply();
        require(supply + _mintAmount <= maxSupply);

        for(uint256 i = 1; i <= _mintAmount; i++) {
            _safeMint(msg.sender, supply + i);
        }
    
    }



}

