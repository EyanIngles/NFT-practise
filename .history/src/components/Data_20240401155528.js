import { ethers } from 'ethers'

const Data = async({ maxSupply, totalSupply, cost, balance}) => {
    return(
        <div>
            <p><strong>Available to Mint: </strong>{maxSupply - totalSupply} Remaining</p>
            <p><strong>Cost to Mint: </strong> {cost.toString() - (**18)} ETH</p>
            <p><strong>Available to Mint:  </strong>{balance.toString()}</p>
        </div>
    )
}

export default Data;    