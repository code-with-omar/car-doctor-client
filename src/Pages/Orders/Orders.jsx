import { useContext } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Orders = () => {
    const product = useLoaderData();
    const { user } = useContext(AuthContext);
    const { title, price, image } = product;

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const place = form.place.value
        const email = form.email.value;
        const price = user?.price || form.price.value;
        const order = {
            customerName: name,
            title,
            email,
            place,
            price,
            image
        }
        fetch(`http://localhost:5000/productsOrder`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Booking Success",
                        showConfirmButton: true,
                        confirmButtonText: "Close",
                        timer: 1500
                    });
                }

            })
        form.reset()
    };

    return (
        <Container>
            <div className="checkout-banner-wrap">
                <div className="checkout-banner">
                    <h2 className="checkout-header fs-45 fw-500 font-white">Order Product</h2>
                </div>
            </div>
            <Form className="bg-dark-07 orders-form p-5" onSubmit={handleOrder}>
                <h2 className="fs-35 fw-700 font-orange text-center mb-5">{title}</h2>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name" defaultValue={user?.name} required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPlace">
                        <Form.Label>Place</Form.Label>
                        <Form.Control type="text" name="place" placeholder="Place" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter Email" defaultValue={user?.email} required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" defaultValue={`$${price}`} disabled />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className='my-3'>
                        <Form.Control type="submit" value="Order" className='fs-20 fw-600 line-height-30 font-white check-submit-btn' />
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    );
};

export default Orders;
