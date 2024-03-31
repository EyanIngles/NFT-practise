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
    
    let accounts = await ethers.getSigners()
    deployer = accounts[0]
    minter = accounts[1]
  })

  describe('Deployment', () => {
    const allowMintingOn = ('1719626400').toString().slice(0,10) // slice to take off the miliseconds

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
  const allowMintingOn = Date.now().toString().slice(0,10) // now timing

      beforeEach(async () => {
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)

        transaction = await nft.connect(minter).mint(1, { value: cost })
        result = await transaction.wait()
        
      })
      it('updates total supply', async () => {
        expect(await nft.totalSupply()).to.equal(1)
      })
      it(`updates the ether balance `, async () => {
        expect(await ethers.provider.getBalance(nft.address)).to.equal(cost)
      })
    })
    describe('Failure', () => {
      it('rejects insufficent funds in account', async () => {
        const allowMintingOn = Date.now().toString().slice(0,10) // now timing
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)

        await expect( nft.connect(minter).mint(1, { value: ether(0.2) })).to.be.reverted
      })
      it('rejects minting before allowed time', async () => {
        const allowMintingOn = new Date('May 26, 2030 18:00:00').getTime().toString().slice(0,10) // now timing
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)

        await expect( nft.connect(minter).mint(1, { value: cost })).to.be.reverted
      })
      it('requires at least one NFT to be minted', async () => {
        const allowMintingOn = Date.now().toString().slice(0,10) // now timing
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)

        await expect( nft.connect(minter).mint(0, { value: cost })).to.be.reverted
      })
      it('rejects due trying to mint more than 5 at once', async () => {
        const allowMintingOn = Date.now().toString().slice(0,10) // now timing
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)

        await expect( nft.connect(minter).mint(6, { value: cost })).to.be.reverted
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

