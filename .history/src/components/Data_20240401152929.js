import { ethers } from 'ethers'

const Data = ({ maxSupply, totalSupply, cost, balanceOfAccount}) => {
    return(
        <div>
            <p><strong>Available to Mint: {maxSupply - totalSupply} Remaining</strong></p>
            <p><strong>Cost to Mint: {(cost, 'ether')} </strong></p>
            <p><strong>Available to Mint: {} </strong></p>
        </div>
    )
}

export default Data;    