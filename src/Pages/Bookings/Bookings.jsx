import { Container } from "react-bootstrap";
import './bookings.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Booking from "./Booking/Booking";

const Bookings = () => {
    const { user, loading } = useContext(AuthContext);
    const [bookings, setBooking] = useState([]);

    useEffect(() => {
        if (user && user.email) {
            const url = `http://localhost:5000/bookings?email=${user.email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setBooking(data);
                })
                .catch(error => {
                    console.error("Error fetching bookings:", error);
                });
        }
    }, [user]);

    return (
        <Container className="bookings-wrap">
            <div className='checkout-banner-wrap'>
                <div className='checkout-banner'>
                    <h2 className='checkout-header fs-45 fw-500 font-white'>Cart Details</h2>
                </div>
            </div>
            <div className="bookings-contains">
                {
                    bookings.map(booking=><Booking key={booking._id} booking={booking}></Booking>)
                }
            </div>
        </Container>
    );
};

export default Bookings;
