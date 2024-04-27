import { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { ethers } from 'ethers'
import Countdown from 'react-countdown'

// Components
import Navigation from './Navigation';
import Loading from './Loading';
import Preview from '../preview.png'

// ABIs: Import your contract ABIs here
// import TOKEN_ABI from '../abis/Token.json'
import NFT_ABI from '../abis/NFT.json';

// Config: Import your network config here
import config from '../config.json';

function App() {
  const [provider, setProvider] = useState(null)
  const [nft, setNFT] = useState(null)
  const [revealTime, setRevealTime] = useState(0)

  const [account, setAccount] = useState(null)

  const [maxSupply, setMaxSupply] = useState(0)
  const [totalSupply, setTotalSupply] = useState(0)
  const [cost, setCost] = useState(0)
  const [balanceOfAccount, setBalanceOfAccount] = useState(0)


  const [isLoading, setIsLoading] = useState(true)

  const loadBlockchainData = async () => {
    // Initiate provider
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
    // Initiate cotract
    const nft = new ethers.Contract(config['31337'].nft.address, NFT_ABI, provider)
    setNFT(nft)

    // Fetch accounts
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
    

    // fetch countdown
    const revealTime = await nft.allowMintingOn()
    setRevealTime(revealTime.toString() + '000')

    // fetch max supply
    const maxSupply = await nft.maxSupply()
    setMaxSupply(maxSupply)
    // fetch total supply
    const totalSupply = await nft.totalSupply()
    setTotalSupply(totalSupply)
    // fetch the cost
    const cost = await nft.cost()
    setCost(cost)
    // fetch the balance of the current account
    const balanceOfAccount = await nft.balanceOf(account)
    setBalanceOfAccount(balanceOfAccount)


    setIsLoading(false)
  }

  useEffect(() => {
    if (isLoading) {
      loadBlockchainData()
    }
  }, [isLoading]);

  return(
    <Container>
      <Navigation account={account} />

      <h1 className='my-4 text-center'>NFT Minting Site!</h1>

      {isLoading ? (
        <Loading />
      ) : (
        <><Row>
          <Col>
            <img src={Preview} alt="Preview NFT's"/>
          </Col>
          <Col>
          <div className="my-4 text-center">
            <p>hi</p><Countdown date={parseInt(revealTime)} className="h1"></Countdown>
          </div>
          </Col>
        </Row>
        
          <p>allow minting on:</p>
        </>
      )}
    </Container>
  )
}

export default App;
