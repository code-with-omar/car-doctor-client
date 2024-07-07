import { Col, Container, Row } from "react-bootstrap";
import Logo from './../../../assets/logo.svg'
import './footer.css'
const Footer = () => {
    return (
        <footer>
            <Container fluid className="footer-wrap bg-dark-01 pt-5 pb-5 fw-400">
                <Container className="footer-contains">
                    <Row lg={4} sm={2} xs={1}>
                        <Col className=" fs-16 font-dark-06 pt-5 ">
                            <img src={Logo} alt="Car Doctor" className="img-fluid mb-2 " />
                            <p className="mt-3">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                        </Col>
                        <Col className="fs-16 line-height-40 font-dark-07 pt-5">
                            <h5 className="fw-600 font-white fs-20 mb-5">About</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="font-dark-06">Home</a></li>
                                <li><a href="#" className="font-dark-06">Service</a></li>
                                <li><a href="#" className="font-dark-06">Contact</a></li>
                            </ul>
                        </Col>
                        <Col className="fs-16 line-height-40 font-dark-07 pt-5">
                            <h5 className="fw-600 font-white fs-20 mb-5">Company</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="font-dark-06">Why Car Doctor</a></li>
                                <li><a href="#" className="font-dark-06">About</a></li>
                            </ul>
                        </Col>
                        <Col className="fs-16 line-height-40 font-dark-07 pt-5">
                            <h5 className="fw-600 font-white fs-20 mb-5">Support</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="font-dark-06">Support Center</a></li>
                                <li><a href="#" className="font-dark-06">Feedback</a></li>
                                <li><a href="#" className="font-dark-06">Accessibility</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </footer>
    );
};

export default Footer;