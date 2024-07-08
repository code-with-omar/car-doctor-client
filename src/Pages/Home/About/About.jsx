import { Button, Col, Container, Row } from 'react-bootstrap';
import './about.css'
import Person from './../../../assets/images/about_us/person.jpg'
import Parts from './../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <Container className='about-wrap'>
            <Row sm={1} md={2} className='about-contains'>
                <Col className='about-contains-left position-relative'>
                    <div className="person-image">
                        <img src={Person} alt="" />
                    </div>
                    <div className="parts-image position-absolute">
                        <img src={Parts} alt="" />
                    </div>
                </Col>
                <Col className='about-contains-right'>
                    <h3 className='fs-20 fw-700 font-orange mb-3'>About Us</h3>
                    <h2 className='fs-45 fw-700 font-dark-01 my-5'>We are qualified & of experience in this field</h2>
                    <p className='text-capitalize fs-16 fw-400 line-height-30 font-dark-03 mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className='text-capitalize fs-16 fw-400 line-height-30 font-dark-03 mb-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <Button className='about-btn'>Get More Info</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default About;