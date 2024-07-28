import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import ProductOrder from "./ProductOrder/ProductOrder";

const ProductOrderCheck = () => {
    const { user, loading } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const url = `http://localhost:5000/orders?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
            .catch(error => {
                console.error("Error fetching bookings:", error);
            });

    }, [url]);
    const handleDeleteOrders = id => {
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
                fetch(`http://localhost:5000/orders/${id}`, {
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
                            const remaining = orders.filter(booking => booking._id !== id)
                            setOrders(remaining)
                        }
                    })
            }
        });
    }
    return (
        <Container className="bookings-wrap">
            <div className='checkout-banner-wrap'>
                <div className='checkout-banner'>
                    <h2 className='checkout-header fs-45 fw-500 font-white'>Cart Details</h2>
                </div>
            </div>
            <div className="bookings-contains">
                <h2 className="font-orange fw-700 text-center mb-5 fs-25">Total Booking :{orders.length}</h2>
                {
                    orders.map(order => <ProductOrder key={order._id} order={order} handleDeleteOrders={handleDeleteOrders}></ProductOrder>)
                }
            </div>
        </Container>
    );
};

export default ProductOrderCheck;