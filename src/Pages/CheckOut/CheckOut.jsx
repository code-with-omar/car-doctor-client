import { useLoaderData } from 'react-router-dom';
import CheckOutImage from "./../../assets/images/checkout/checkout.png"
import './checkOut.css'
import { Container } from 'react-bootstrap';

const CheckOut = () => {
    const checkOutData = useLoaderData();

    return (
        <Container className='checkout-wrap'>
            <div className='checkout-banner'>
                <h2 className='checkout-header fs-45 fw-45 font-white'>Check Out</h2>
               
            </div>
        </Container>
    );
};

export default CheckOut;