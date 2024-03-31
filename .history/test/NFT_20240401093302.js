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
  const cost = ether(1)
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
    it(`owner updates the price of the NFTs`, async () => {
      transaction = await nft.connect(deployer).setCost(ether(10))
      result = await transaction.wait()
      expect( await nft.cost()).to.equal(ether(10))
      console.log(cost.toString())

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
      it('returns the address of the minter', async () => {
        expect(await nft.ownerOf(1)).to.equal(minter.address)
      })
      it('returns total number of tokens minter owns', async () => {
        expect(await nft.balanceOf(minter.address)).to.equal(1)
      })
      it('returns IPFS URI', async () => {
        //console.log(await nft.tokenURI(1))
        expect(await nft.tokenURI(1)).to.equal(`${baseURI}1.json`)
      })
      it('updates total supply', async () => {
        expect(await nft.totalSupply()).to.equal(1)
      })
      it(`updates the ether balance `, async () => {
        expect(await ethers.provider.getBalance(nft.address)).to.equal(cost)
      })
      it(`Emits an event `, async () => {
        await expect(transaction).to.emit(nft, "Mint").withArgs(1, minter.address)
      })
    })
    describe('Failure', () => {
      it('rejects insufficent funds in account', async () => {
        const allowMintingOn = Date.now().toString().slice(0,10) // now timing
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)

        await expect(nft.connect(minter).mint(1, { value: ether(0.2) })).to.be.reverted
      })
      it('rejects minting before allowed time', async () => {
        const allowMintingOn = new Date('May 26, 2030 18:00:00').getTime().toString().slice(0,10) // now timing
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)

        await expect(nft.connect(minter).mint(1, { value: cost })).to.be.reverted
      })
      it('requires at least one NFT to be minted', async () => {
        const allowMintingOn = Date.now().toString().slice(0,10) // now timing
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)

        await expect(nft.connect(minter).mint(0, { value: cost })).to.be.reverted
      })
      it('will not allow more mints than max supply', async () => {
        const allowMintingOn = Date.now().toString().slice(0,10) // now timing
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)

        await expect(nft.connect(minter).mint(100, { value: cost })).to.be.reverted
      })
      it('does not return URIs for invalid tokens', async () => {
        const allowMintingOn = Date.now().toString().slice(0,10) // now timing
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)
        nft.connect(minter).mint(1, { value : cost })

        await expect(nft.tokenURI('99')).to.be.reverted
      })
      it('rejects minting more than 5 NFTs at once', async () => {
     //   const allowMintingOn = Math.floor(Date.now() / 1000); // current timestamp in seconds
     //   const NFT = await ethers.getContractFactory('NFT');
     //   nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI);
    //
     //   // Calculate the total cost for minting 6 NFTs
     //   const totalCost = cost.mul(6);
    //
     //   // Attempt to mint more than 5 NFTs
     //   await expect(nft.connect(minter).mint(6, { value: totalCost })).to.be.reverted;
    })
    

  })
  })
  describe('Displaying NFTs', () => {
      beforeEach(async () => {
        let transaction, result
        const allowMintingOn = Date.now().toString().slice(0,10) // now timing
        const NFT = await ethers.getContractFactory('NFT')
        nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)
        transaction = await nft.connect(minter).mint(2, { value : ether(3) })
        result = await transaction.wait()

      })
      it(`returns all the NFTs for a given owner`, async () => {
        let tokenIds = await nft.walletOfOwner(minter.address)
        //console.log("OWNERS WALLET", tokenIds)
        expect(tokenIds.length).to.equal(2)
        expect(tokenIds[0].toString()).to.equal('1')
        expect(tokenIds[1].toString()).to.equal('2')
      })
    })
    describe('Withdrawing funds', () => {
      let transaction, result, balanceBefore
      describe('Success', () => {
    const allowMintingOn = Date.now().toString().slice(0,10) // now timing
  
        beforeEach(async () => {
          const NFT = await ethers.getContractFactory('NFT')
          nft = await NFT.deploy(name, symbol, cost, maxSupply, allowMintingOn, baseURI)
  
          transaction = await nft.connect(minter).mint(1, { value: cost })
          result = await transaction.wait()

          balanceBefore = await ethers.provider.getBalance(deployer.address)

          transaction = await nft.connect(deployer).withDraw()
          result = await transaction.wait()
          
        })
        it('deducts contract balance', async () => {
          expect( await ethers.provider.getBalance(nft.address)).to.equal(0)
        })
        it('sends funds to the owner', async () => {
          expect(await ethers.provider.getBalance(deployer.address)).to.be.greaterThan(balanceBefore)
        })
        it('emits a withdraw event', async () => {
          await expect(transaction).to.emit(nft, "WithDraw").withArgs(cost, deployer.address)
        })
        it('prevents non-owner from withdrawing', async () => {
          await expect(nft.connect(minter).withDraw()).to.be.reverted
        })
    })
  })
})
