import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import ServiceDetailsCard from "./SeviceDetailsCard/ServiceDetailsCard";
import logo from "./../../assets/logo.svg"
import './serviceDetails.css'
const ServiceDetails = () => {
    const serviceData = useLoaderData()
    const { title, img, description, facility, price, _id } = serviceData;
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
                    <h2 className='checkout-header fs-45 fw-500 font-white'>Service Details</h2>
                </div>
            </div>
            <Row className="service-details-contains">
                <Col lg={9} className="service-details-left">
                    <div className="service-details-left-img">
                        <Image src={img} fluid ></Image>
                    </div>
                    <div className="mt-5 service-details fs-16 fw-400 font-dark-03">
                        <h2 className="fs-35 fw-700 font-dark-01">{title}</h2>
                        <p className="font-dark-03 text-capitalize my-5">{description}</p>
                        <Row lg={2} className="service-details-card">
                            {
                                facility.map((facilityService, index) => <ServiceDetailsCard key={index} facilityService={facilityService}></ServiceDetailsCard>)
                            }
                        </Row>
                        <p className="my-5 text-capitalize">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text</p>
                        <Row className="working-step">
                            <h2 className="fs-35 fw-700 font-dark-01 mb-5">3 Simple Steps to Process</h2>
                            <Col className="text-center">
                                <Card className="working-step-card">
                                    <div className="work-serial">
                                        <div className="work-serial-front">
                                            <p className="fs-20 fw-700 font-white text-center">01</p>
                                        </div>
                                    </div>
                                    <h4 className="fs-20 fw-700 font-dark-01 mb-3">Step One</h4>
                                    <p className="fs-16 fw-400 text-capitalize font-dark-03">It uses a dictionary of over 200 .</p>
                                </Card>
                            </Col>
                            <Col className="text-center">
                                <Card className="working-step-card">
                                    <div className="work-serial">
                                        <div className="work-serial-front">
                                            <p className="fs-20 fw-700 font-white text-center">02</p>
                                        </div>
                                    </div>
                                    <h4 className="fs-20 fw-700 font-dark-01 mb-3">Step Two</h4>
                                    <p className="fs-16 fw-400 text-capitalize font-dark-03">It uses a dictionary of over 200 .</p>
                                </Card>
                            </Col>
                            <Col className="text-center">
                                <Card className="working-step-card">
                                    <div className="work-serial">
                                        <div className="work-serial-front">
                                            <p className="fs-20 fw-700 font-white text-center">03</p>
                                        </div>
                                    </div>
                                    <h4 className="fs-20 fw-700 font-dark-01 mb-3">Step Three</h4>
                                    <p className="fs-16 fw-400 text-capitalize font-dark-03">It uses a dictionary of over 200 .</p>
                                </Card>
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