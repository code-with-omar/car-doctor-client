import { Card, Col } from 'react-bootstrap';
import './product.css'
import CartImage from './../../../../assets/icons/cart.png'
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
    const { title, image, price,_id } = product

    return (
        <Col className="product-card-wrap mb-5 text-center position-relative">
            <Card className="mb-4 h-100 product-card-contains p-3">
                <div className='product-img '>
                    <Card.Img variant="top" src={image} className="product-img p-4 rounded " />
                    <Link to={`/orderProduct/${_id}`}>
                        <img className='position-absolute product-card-img' src={CartImage} />
                    </Link>
                </div>

                <Card.Body>
                    <Card.Title className="font-dark-02 fs-25 fw-700 mb-3">{title}</Card.Title>
                    <Card.Text className="">
                        <span className="fs-20 font-orange fw-700">Price: ${price}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;