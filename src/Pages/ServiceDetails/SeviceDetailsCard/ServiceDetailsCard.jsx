import { Card, Col } from "react-bootstrap";

const ServiceDetailsCard = ({ facilityService }) => {
    const { name, details } = facilityService;
    return (
        <Col>
            <Card>
                <h2>{name}</h2>
                <p>{details}</p>
            </Card>
        </Col>
    );
};

export default ServiceDetailsCard;