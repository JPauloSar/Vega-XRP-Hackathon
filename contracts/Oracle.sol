// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Oracle is Ownable {
    struct PriceData {
        uint256 price;       // scaled to 1e8 or 1e18
        uint256 lastUpdated;
    }

    mapping(bytes32 => PriceData) public prices; // e.g. keccak256("XRP/USD")

    event PriceUpdated(bytes32 indexed pairId, uint256 price, uint256 timestamp);

    constructor() Ownable(msg.sender) {}

    function setPrice(bytes32 pairId, uint256 price) external onlyOwner {
        prices[pairId] = PriceData(price, block.timestamp);
        emit PriceUpdated(pairId, price, block.timestamp);
    }

    function getPrice(bytes32 pairId) external view returns (uint256 price, uint256 timestamp) {
        PriceData memory p = prices[pairId];
        return (p.price, p.lastUpdated);
    }
}