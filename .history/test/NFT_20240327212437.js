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
  const cost = ether(0.25)

  beforeEach(async () => {
    const NFT = await ethers.getContractFactory('NFT')
    nft = await NFT.deploy(name, symbol, cost)
  })

  describe('Deployment', () => {
    it(`has correct name: "${name}"`, async () => {
      expect(await nft.name()).to.equal(name)
    })

    it(`has correct symbol: "${symbol}"`, async () => {
      expect(await nft.symbol()).to.equal(symbol)
    })
    it(`has correct cost: "${cost}"`, async () => {
      expect(await nft.cost()).to.equal(cost)
      console.log(ether)
    })
  })


    describe('Failure', () => {
      
    })

  })
    describe('Success', () => {
      beforeEach(async () => {

    })

})
