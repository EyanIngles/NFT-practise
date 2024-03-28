// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./ERC721Enumerable.sol";

contract NFT is ERC721Enumerable {

    constructor(string memory name_, string memory symbol_){
        _name = name_;
        _symbol = symbol_;
    }

}
