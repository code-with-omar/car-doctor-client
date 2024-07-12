
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./../../../assets/logo.svg"
import './header.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <Navbar bg="navbar-wrap fs-18 fw-600 text-center" expand="lg">
            <Container className="navbar-contains">
                <Navbar.Brand href="#home" className="navbar-band-img">
                    <img src={Logo} className="d-inline-block align-top " alt="Car Doctor logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className="mx-4 font-dark-02 fs-18 fw-600" to='/'>Home</Link>
                        <Link className="mx-4 font-dark-02 fs-18 fw-600" to='/addServices'>Add Services</Link>
                        <Link className="mx-4 font-dark-02 fs-18 fw-600" to='/signUp'>Sign up</Link>
                       
                        {
                            user?.email ? <Link className="mx-4 font-dark-02 fs-18 fw-600" onClick={handleLogOut}>LogOut</Link> : <Link className="mx-4 font-dark-02 fs-18 fw-600" to='/signIn'>Log In</Link>
                        }

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