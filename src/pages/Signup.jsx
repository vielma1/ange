import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import { FormControl, FormLabel } from "react-bootstrap"
import Button from "react-bootstrap/Button"
export function Signup( props ) {
    document.title = "Sign up for acount"
    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset:4 }}>
                <Form>
                    <h2>Sign up</h2>
                    <Form.Group>
                        <FormLabel>Email address</FormLabel>
                        <FormControl
                            name="email"
                            type="email"
                            placeholder="user@domain.com"
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <FormLabel>Email address</FormLabel>
                        <FormControl
                            name="password"
                            type="password"
                            placeholder="minimum 8 characters"
                            required
                        />
                    </Form.Group>
                
                    <Button variant="secondary" type="submit">
                        Sign up
                    </Button>
    
                    
                </Form>   
                </Col>
            </Row>
        </Container>
    )
}
