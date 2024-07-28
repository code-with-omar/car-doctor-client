import { Button, Col, Image, Row } from "react-bootstrap";


const ProductOrder = ({ order, handleDeleteOrders }) => {
    const { price, title, place, image, _id } = order
    


    return (
        <Row className='booking fs-20 fw-600 mb-5 bg-dark-06 d-flex align-items-center'>

            <Col lg={1} md={1} sm={1}>
                <Button variant="outline-danger" onClick={() => handleDeleteOrders(_id)}>X</Button>
            </Col>
            <Col lg={2} md={2} sm={2}>
                <Image src={image} fluid rounded></Image>
            </Col>
            <Col lg={3} md={3} sm={3}>
                <h4 className='font-dark-02'>{title}</h4>
            </Col>
            <Col lg={2} md={2} sm={2}>
                <p className='font-dark-02'>{price}</p>
            </Col>
            <Col lg={4} md={4} sm={4}>
                <p>{place}</p>
            </Col>
        </Row>
    );
};

export default ProductOrder;