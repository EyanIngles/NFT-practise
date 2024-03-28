const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const ether = tokens

describe('NFT', () => {
  let nft, accounts, deployer, receiver, exchange

  beforeEach(async () => {
    const NFT = await ethers.getContractFactory('NFT')
    nft = await NFT.deploy('Dapp University', 'DAPP')

    accounts = await ethers.getSigners()
    deployer = accounts[0]
    receiver = accounts[1]
    exchange = accounts[2]
  })

  describe('Deployment', () => {
    const name = 'Dapp University'
    const symbol = 'DAPP'

    it('has correct name', async () => {
      expect(await nft.name()).to.equal(name)
    })

    it('has correct symbol', async () => {
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
