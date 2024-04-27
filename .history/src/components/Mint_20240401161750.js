import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Mint = ({provider, nft, cost, setIsLoading}) => {
    return(
        <Form style={{madWidth: '450px', margin: '50px auto'}}>
            <Form.Group>
                <Button >MINT</Button>
            </Form.Group>
        </Form>
    )
}
export default Mint;
