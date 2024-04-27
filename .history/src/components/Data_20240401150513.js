

const Data = ({ maxSupply, totalSupply, balanceOfAccount}) => {
    return(
        <div>
            <p><strong>Available To Mint: {maxSupply}</strong></p>
            <p><strong>Cost To Mint: {totalSupply}</strong></p>
            <p><strong>NFT's You Own: {balanceOfAccount}</strong></p>
        </div>
    )
}

export default Data;