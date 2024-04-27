import { ether } from 'ethers'

const Data = ({ maxSupply, totalSupply, cost, balance}) => {
    return(
        <div>
            <p><strong>Available To Mint: {maxSupply - totalSupply}</strong></p>
            <p><strong>Cost To Mint: {ethers.utils.formatUints(cost, 'ether')} ETH</strong></p>
            <p><strong>NFT's You Own: {balance}</strong></p>
        </div>
    )
}

export default Data;