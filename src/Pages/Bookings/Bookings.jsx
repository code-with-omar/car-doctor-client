import { Container } from "react-bootstrap";
import './bookings.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Booking from "./Booking/Booking";
import Swal from "sweetalert2";

const Bookings = () => {
    const { user, loading } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
            .catch(error => {
                console.error("Error fetching bookings:", error);
            });

    }, [url]);
    const handleDeleteBooking = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining)
                        }
                    })
            }
        });
    }
    const handleUpdate = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    //update status
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)
                }
            })
    }
    return (
        <Container className="bookings-wrap">
            <div className='checkout-banner-wrap'>
                <div className='checkout-banner'>
                    <h2 className='checkout-header fs-45 fw-500 font-white'>Cart Details</h2>
                </div>
            </div>
            <div className="bookings-contains">
                <h2 className="font-orange fw-700 text-center mb-5 fs-25">Total Booking :{bookings.length}</h2>
                {
                    bookings.map(booking => <Booking key={booking._id} booking={booking} handleDeleteBooking={handleDeleteBooking} handleUpdate={handleUpdate}></Booking>)
                }
            </div>
        </Container>
    );
};

export default Bookings;
