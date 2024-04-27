import { ethers } from 'ethers'


const Data = ({ maxSupply, totalSupply, cost, balance}) => {
    const costInEth = ethers.utils.formatEther(cost);
    return(
        <div>
            <p><strong>Available to Mint: </strong>{maxSupply - totalSupply} Remaining</p>
            <p><strong>Cost to Mint: </strong> {costInEth.toString()} ETH</p>
            <p><strong>Available to Mint:  </strong>{balance.toString()}</p>
        </div>
    )
}

export default Data;    