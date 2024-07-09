import { Button, Card, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import './serviceCard.css'
const ServiceCard = ({ service }) => {
    const { title, img, price } = service
    return (
        <Col className="service-card-wrap mb-5">
            <Card className="mb-4 h-100 service-card-contains">
                <Card.Img variant="top" src={img} className="service-img p-4 rounded" />
                <Card.Body>
                    <Card.Title className="font-dark-02 fs-25 fw-700 mb-3">{title}</Card.Title>
                    <Card.Text className="d-flex justify-content-between">
                        <span  className="fs-20 font-orange fw-700">Price: ${price}</span>
                        <FaArrowRight className="service-arrow"/>
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>

    );
};

export default ServiceCard;