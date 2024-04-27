import { ether } from 'ethers'

const Data = ({ maxSupply, totalSupply, cost, balanceOfAccount}) => {
    return(
        <div>
            <p><strong>Available To Mint: {maxSupply - totalSupply}</strong></p>
            <p><strong>Cost To Mint: {ethers.utils.formatUints(cost, 'ethers')} ETH</strong></p>
            <p><strong>NFT's You Own: {balanceOfAccount}</strong></p>
        </div>
    )
}

export default Data;