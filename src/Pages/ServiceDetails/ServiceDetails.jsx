import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import ServiceDetailsCard from "./SeviceDetailsCard/ServiceDetailsCard";
import logo from "./../../assets/logo.svg"
import './serviceDetails.css'
const ServiceDetails = () => {
    const serviceData = useLoaderData()
    const { title, img, description, facility,price,_id } = serviceData;
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, []);
    console.log(facility)
    return (
        <Container className="service-details-wrap">
            <div className='checkout-banner-wrap'>
                <div className='checkout-banner'>
                    <h2 className='checkout-header fs-45 fw-500 font-white'>Service Details Out</h2>
                </div>
            </div>
            <Row>
                <Col lg={9}>
                    <img src={img} alt="" />
                    <div className="service-details-contain">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <Row lg={2} className="service-details-card">
                            {
                                facility.map((facilityService, index) => <ServiceDetailsCard key={index} facilityService={facilityService}></ServiceDetailsCard>)
                            }
                        </Row>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text</p>
                        <Row>
                            <Col>
                                <h4>Step One</h4>
                                <p>It uses a dictionary of over 200 .</p>
                            </Col>
                            <Col>
                                <h4>Step One</h4>
                                <p>It uses a dictionary of over 200 .</p>
                            </Col>
                            <Col>
                                <h4>Step One</h4>
                                <p>It uses a dictionary of over 200 .</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={3}>
                    {
                        services.map(service => <h2 key={service._id}>{service.title}</h2>)
                    }
                    <div>
                        <h3>Download</h3>
                        <div>
                            <p>Our Brochure</p>
                            <small>Download</small>
                            <FaArrowRight></FaArrowRight>
                        </div>
                        <div>
                            <p>Company Details</p>
                            <small>Download</small>
                            <FaArrowRight></FaArrowRight>
                        </div>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                        <p>Need Help? We Are Here To Help You</p>
                        <div>
                            <h2>Car Doctor <span>Special</span></h2>
                            <p>Save up to <span>60% off</span></p>
                        </div>
                    </div>
                    <div>
                        <h2>Price ${price}</h2>
                        <Link to={`/order/${_id}`}>
                            <Button> Proceed Checkout</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetails;