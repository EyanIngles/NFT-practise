

const Data = ({ maxSupply, totalSupply, cost, balanceOfAccount}) => {
    return(
        <div>
            <p><strong>Available To Mint: {maxSupply - totalSupply}</strong></p>
            <p><strong>Cost To Mint: {ether.utils.formatUints(cost, 'ether')} ETH</strong></p>
            <p><strong>NFT's You Own: {balanceOfAccount}</strong></p>
        </div>
    )
}

export default Data;