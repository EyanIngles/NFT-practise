import { ethers } from 'ethers'

const formattedCost = ethers.utils.parseInt(cost)
const Data = ({ maxSupply, totalSupply, cost, balance}) => {
    return(
        <div>
            <p><strong>Available to Mint: </strong>{maxSupply - totalSupply} Remaining</p>
            <p><strong>Cost to Mint: </strong> {formattedCost} ETH</p>
            <p><strong>Available to Mint:  </strong>{balance.toString()}</p>
        </div>
    )
}

export default Data;    