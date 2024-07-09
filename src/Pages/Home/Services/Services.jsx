import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, []);

    return (
        <Container className="services-wrap">
            <div className="services-contains">
                <h3 className='fs-20 fw-700 font-orange mb-3 text-center'>About Us</h3>
                <h2 className="fs-45 fw-700 font-dark-01 my-3 text-center">Our Service Area</h2>
                <p className="fs-16 fw-400 line-height-30 text-capitalize text-center mb-3">
                    the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which do not look even slightly believable.
                </p>
            </div>
            <Row md={3} lg={4} sm={1}className="service pt-5">
                {services.map(service => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </Row>
        </Container>
    );
};

export default Services;
