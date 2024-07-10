import { Col, Container, Row } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";
import { MdWifiCalling2 } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import './contact.css'
const Contact = () => {

    return (
        <Container className="contact-wrap bg-dark-01 font-white">
            <Row sm={1} md={3} className="contact-contains">
                <Col className="contact-contain">
                    <Row>
                        <Col sm={3}>
                            <FaCalendar className="contact-contain-icon"></FaCalendar>
                        </Col>
                        <Col sm={9}>
                            <h4 className="fs-16 fw-500">We are open monday-friday</h4>
                            <h2 className="fs-25 fw-700 font-orange">7:00 am - 9:00 pm</h2>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col sm={3}>
                            <MdWifiCalling2 className="contact-contain-icon"></MdWifiCalling2>
                        </Col>
                        <Col sm={9}>
                            <h4 className="fs-16 fw-500">Have a question?</h4>
                            <h2 className="fs-25 fw-700 font-orange">+2546 251 2658</h2>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col sm={3}>
                            <FaMapLocationDot className="contact-contain-icon"></FaMapLocationDot>
                        </Col>
                        <Col sm={9}>
                            <h4 className="fs-16 fw-500">Need a repair? our address</h4>
                            <h2 className="fs-25 fw-700 font-orange">Liza Street, New York</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    );
};

export default Contact;