
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./../../../assets/logo.svg"
import './header.css'
const Header = () => {
    return (
        <Navbar bg="navbar-wrap fs-18 fw-600 text-center" expand="lg">
            <Container className="navbar-contains">
                <Navbar.Brand href="#home" className="navbar-band-img">
                    <img src={Logo} className="d-inline-block align-top " alt="Car Doctor logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
                        <Nav.Link href="#about" className="mx-3">About</Nav.Link>
                        <Nav.Link href="#services" className="mx-3">Services</Nav.Link>
                        <Nav.Link href="#blog" className="mx-3">Blog</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#search">
                            <i className="fas fa-search"></i>
                        </Nav.Link>
                        <Nav.Link href="#cart">
                            <i className="fas fa-shopping-cart"></i>
                        </Nav.Link>
                        <Button variant="outline-danger" href="#appointment">Appointment</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;