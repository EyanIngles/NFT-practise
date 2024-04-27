import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ethers } from 'ethers';

const Mint = ({provider, nft, cost, setIsLoading}) => {
    const mintHandler =  async(e) => {
        e.preventDefault()
        const signer = await provider.getSigner()
        const transaction = await nft.connect(signer).mint(1, { value: cost })
        await transaction.wait()
        
    }
    return(
        <Form onSubmit={mintHandler} style={{madWidth: '450px', margin: '50px auto'}}>
            <Form.Group>
                <Button variant='primary' type='submit' style={{ width: '100%'}}>MINT</Button>
            </Form.Group>
        </Form>
    )
}
export default Mint;
