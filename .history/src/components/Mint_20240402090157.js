import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';

const Mint = ({provider, nft, cost, setIsLoading}) => {
    const [isWaiting, setIsWaiting] = useState(false)

    const mintAmount = () => {
        <Button variant='primary' type='submit' style={{ width: '100%'}}>MINT</Button>
    }
    const mintHandler =  async(e) => {
        e.preventDefault()
        setIsWaiting(true)

        try {
            const signer = await provider.getSigner()
            const transaction = await nft.connect(signer).mint(1, { value: cost })
            await transaction.wait()
        } catch {
            window.alert('User rejected or transaction reverted')
        }
        setIsLoading(true)

    }
    return(
        <Form onSubmit={mintHandler} style={{madWidth: '450px', margin: '50px auto'}}>
            {isWaiting? (
                <Spinner animation="border" style={{ display: 'block' , margin: '0 auto'}}></Spinner>

            ) : (
                {mintAmount}
            )}
            <Form.Group>

            </Form.Group>
        </Form>
    )
}
export default Mint;
