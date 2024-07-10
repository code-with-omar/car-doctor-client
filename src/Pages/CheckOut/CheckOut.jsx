import { useLoaderData } from 'react-router-dom';
import CheckOutImage from "./../../assets/images/checkout/checkout.png"
import './checkOut.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const CheckOut = () => {
    const checkOutData = useLoaderData();
    const { title, price } = checkOutData
    return (
        <Container className='checkout-wrap'>
            <div className='checkout-banner-wrap'>
                <div className='checkout-banner'>
                    <h2 className='checkout-header fs-45 fw-500 font-white'>Check Out</h2>
                </div>
            </div>
            <Form className='bg-dark-07 checkout-form'>
                <h2 className=' fs-35 fw-700 font-orange text-center mb-5'>{title}</h2>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="date" placeholder="Date" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" placeholder="Price" defaultValue={`$ ${price}`}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className=''>
                        <Form.Control type="submit" value="Submit" className='fs-20 fw-600 line-height-30 font-white check-submit-btn' />
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    );
};

export default CheckOut;