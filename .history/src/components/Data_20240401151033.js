import { ethers } from 'ethers'

const Data = ({ maxSupply, totalSupply, cost, balance}) => {
    return(
        <div>
            <p><strong>Available To Mint: {maxSupply - totalSupply}</strong></p>
            <p><strong>Cost To Mint: {cost}</strong></p>
            <p><strong>NFT's You Own: {balance}</strong></p>
        </div>
    )
}

export default Data;