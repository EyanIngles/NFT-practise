import { ethers } from 'ethers'

const Data = ({ maxSupply, totalSupply, cost, balanceOfAccount}) => {
    return(
        <div>
            <p><strong>Available to Mint: {maxSupply - totalSupply} Remaining</strong></p>
            {debugger}
            <p><strong>Available to Mint: {await ethers.utils.formatUnits(cost, 'ether')} </strong></p>
            <p><strong>Available to Mint: {} </strong></p>
        </div>
    )
}

export default Data;    