import { ethers } from 'ethers'

const Data = ({ maxSupply, totalSupply, cost, balance}) => {
    return(
        <div>
            <p><strong>Available to Mint: </strong>{maxSupply - totalSupply} Remaining</p>
            <p><strong>Cost to Mint: </strong> {} ETH</p>
            <p><strong>Available to Mint: {balance} </strong></p>
        </div>
    )
}

export default Data;    