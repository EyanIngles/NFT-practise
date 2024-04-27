import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Mint = ({provider, nft, cost, setIsLoading}) => {
    return(
        <Form>
            <Form.Group>
                <Button style={{margin:100%}}>MINT</Button>
            </Form.Group>
        </Form>
    )
}
export default Mint;
