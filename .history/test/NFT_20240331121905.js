const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const ether = tokens

describe('NFT', () => {
  let nft, deployer, minter
  const name = 'Dapp Punks'
  const symbol = 'DP'
  const cost = ether(0.25)
  const maxSupply = 30
  const baseURI = 'ipfs://QmQ2jnDYecFhrf3asENjyjZRX1pZSsNWG3qHzmNDvXa9qg/'

  beforeEach(async () => {
  const allowMintingOn = ('1719626400').toString().slice(0,10) // slice to take off the miliseconds
    let accounts = await ethers.getSigners()
    deployer = accounts[0]
    minter = accounts[1]
  })

  describe('Deployment', () => {
    beforeEach(async () => {
      const NFT = await ethers.getContractFactory('NFT')
      nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)
    })
    it(`has correct name: "${name}"`, async () => {
      expect(await nft.name()).to.equal(name)
    })

    it(`has correct symbol: "${symbol}"`, async () => {
      expect(await nft.symbol()).to.equal(symbol)
    })
    it(`has correct cost: "${cost}"`, async () => {
      expect(await nft.cost()).to.equal(cost)
    })
    it(`has correct max supply: "${maxSupply}"`, async () => {
      expect(await nft.maxSupply()).to.equal(maxSupply)
    })
    it(`has correct minting time: "${allowMintingOn}"`, async () => {
      expect(await nft.allowMintingOn()).to.equal(allowMintingOn)
    })
    it(`has correct URI: "${baseURI}"`, async () => {
      expect(await nft.baseURI()).to.equal(baseURI)
    })
    it(`returns the owner`, async () => {
      expect(await nft.owner()).to.equal(deployer.address)
    })
  })

  describe('Minting', () => {
    let transaction, result
    describe('Success', () => {
      beforeEach(async () => {
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)
      })
      it('', async () => {
      })
    })
    describe('Failure', () => {
      it('', async () => {
      })
  })
  })

    describe('Failure', () => {
      
    })
  
    describe('Success', () => {
      beforeEach(async () => {

    })
  })
})
