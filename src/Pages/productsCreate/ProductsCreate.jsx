import { Col, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const ProductsCreate = () => {
    const handleProductsCreate = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.name.value;
        const product_id = form.productNumber.value;
        const image = form.image.value;
        const price = form.price.value;
        const products = {
                product_id,
                title,
                image,
                price
            }
        
        fetch('http://localhost:5000/productsCreates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Add Success",
                        showConfirmButton: true,
                        confirmButtonText: "Close",
                        timer: 1500
                    });
                }
            })
    }
    return (
        <Container>
            <div className='checkout-banner-wrap'>
                <div className='checkout-banner'>
                    <h2 className='checkout-header fs-45 fw-500 font-white'>Add Products</h2>
                </div>
            </div>
            <Form className='bg-dark-07 checkout-form' onSubmit={handleProductsCreate}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Service Title</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Service Name" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Service Number</Form.Label>
                        <Form.Control type="number" name="productNumber" placeholder="Service Number" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" name="image" placeholder="Image URL" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" placeholder='Price' />
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

export default ProductsCreate;