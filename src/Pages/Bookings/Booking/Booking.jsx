import { Button, Col, Image, Row } from 'react-bootstrap';
import './booking.css'
import Swal from 'sweetalert2';

const Booking = ({ booking, handleDeleteBooking, handleUpdate }) => {

    const { price, service, date, img, _id, status } = booking

    return (
        <Row className='booking fs-20 fw-600 mb-5'>

            <Col lg={1} md={1} sm={1}>
                <Button variant="outline-danger" onClick={() => handleDeleteBooking(_id)}>X</Button>
            </Col>
            <Col lg={1} md={1} sm={1}>
                <Image src={img} fluid rounded></Image>
            </Col>
            <Col lg={3} md={3} sm={3}>
                <h4 className='font-dark-02'>{service}</h4>
            </Col>
            <Col lg={2} md={2} sm={2}>
                <p className='font-dark-02'>{price}</p>
            </Col>
            <Col lg={3} md={3} sm={3}>
                <p>{date}</p>
            </Col>
            <Col lg={2} md={2} sm={2}>
                {
                    status === 'confirm'?<Button className='bg-orange-01 font-white disabled' onClick={() => handleUpdate(_id)}>confirm</Button>:
                        <Button className='bg-orange-01 font-white' onClick={() => handleUpdate(_id)}>Pending</Button>
               }
            </Col>
        </Row>
    );
};

export default Booking;