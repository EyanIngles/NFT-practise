import { ethers } from 'ethers'

const Data = ({ maxSupply, totalSupply, cost, balance}) => {
    return(
        <div>
            <p><strong>Available to Mint: </strong>{maxSupply - totalSupply} Remaining</p>
            <p><strong>Cost to Mint: </strong> {cost.toString()-1000000000000000000000} ETH</p>
            <p><strong>Available to Mint:  </strong>{balance.toString()}</p>
        </div>
    )
}

export default Data;    