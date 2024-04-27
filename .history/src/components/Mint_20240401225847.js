import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Mint = ({provider, nft, cost, setIsLoading}) => {

    function mintHandler = async() => {
        e.preventDefault()
        console.log('minting...')
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
