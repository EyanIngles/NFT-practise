import { ethers } from 'ethers'

const Data = ({ maxSupply, totalSupply, cost, balanceOfAccount}) => {
    return(
        <div>
            <p><strong>Available to Mint: </strong>{maxSupply - totalSupply} Remaining</p>
            <p><strong>Cost to Mint: </strong> {ethers.utils.parseUnits(cost)} ETH</p>
            <p><strong>Available to Mint: {} </strong></p>
        </div>
    )
}

export default Data;    