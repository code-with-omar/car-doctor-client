import { useLoaderData } from 'react-router-dom';
import './checkOut.css'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const CheckOut = () => {
    const checkOutData = useLoaderData()
    console.log(checkOutData)
    const { title, price, _id, img } = checkOutData
    const { user } = useContext(AuthContext)
    const handleCheckOut = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value
        const email = form.email.value;
        const price = user?.price || form.price.value
        const booking = {
            customerName: name,
            email,
            date,
            service: title,
            service_id: _id,
            img: img,
            price
        }
        console.log(booking)
        //send data database
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
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

    }
    return (
        <Container className='checkout-wrap'>
            <div className='checkout-banner-wrap'>
                <div className='checkout-banner'>
                    <h2 className='checkout-header fs-45 fw-500 font-white'>Check Out</h2>
                </div>
            </div>
            <Form className='bg-dark-07 checkout-form' onSubmit={handleCheckOut}>
                <h2 className=' fs-35 fw-700 font-orange text-center mb-5'>{title}</h2>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name" defaultValue={user?.name} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="date" placeholder="Date" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter Name" defaultValue={user?.email} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" defaultValue={`$ ${price}`} disabled />
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