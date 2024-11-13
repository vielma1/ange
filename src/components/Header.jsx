import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

export function Header( props ) {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand> { props.text }</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav" >
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Wines</Nav.Link>
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/">Sign in</Nav.Link>
                        <Nav.Link href="/">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}