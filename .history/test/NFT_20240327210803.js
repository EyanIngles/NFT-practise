const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const ether = tokens

describe('NFT', () => {
  let nft
  const name = 'Dapp Punks'
  const symbol = 'DP'

  beforeEach(async () => {
    const NFT = await ethers.getContractFactory('NFT')
    nft = await NFT.deploy('Dapp Punks', 'DP')
  })

  describe('Deployment', () => {
    it(`has correct name: ${name}`, async () => {
      expect(await nft.name()).to.equal(name)
    })

    it(`has correct symbol: ${symbol}`, async () => {
      expect(await nft.symbol()).to.equal(symbol)
    })
  })


    describe('Failure', () => {
      
    })

  })
    describe('Success', () => {
      beforeEach(async () => {

    })

})
