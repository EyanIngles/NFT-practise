

const Data = ({ maxSupply, totalSupply, cost, balance}) => {
    return(
        <div>
            <p><strong>Available To Mint: {maxSupply}</strong></p>
            <p><strong>Cost To Mint: {totalSupply}</strong></p>
            <p><strong>NFT's You Own: {cost}</strong></p>
        </div>
    )
}

export default Data;