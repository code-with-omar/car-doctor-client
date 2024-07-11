import { Card, Col } from "react-bootstrap";
import './serviceDetailsCard.css'
const ServiceDetailsCard = ({ facilityService }) => {
    const { name, details } = facilityService;
    return (
        <Col className="mb-5">
            <Card className="cards">
                <h4 className="fs-20 fw-700 font-dark-02 text-capitalize">{name}</h4>
                <p className="fs-16 fw-400 font-dark-03 text-capitalize mt-2">{details}</p>
            </Card>
        </Col>
    );
};

export default ServiceDetailsCard;