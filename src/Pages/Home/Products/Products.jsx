import { Button, Container, Row } from "react-bootstrap";
import './products.css'
import { useEffect, useState } from "react";
import Product from "./Product/Product";
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    console.log(products)
    return (
        <Container>
            <div className="products-contains">
                <h3 className='fs-20 fw-700 font-orange mb-3 text-center'>Popular Products</h3>
                <h2 className="fs-45 fw-700 font-dark-01 my-3 text-center">Browse Our Products</h2>
                <p className="fs-16 fw-400 line-height-30 text-capitalize text-center mb-3">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                </p>
            </div>
            <Row md={3} lg={4} sm={1} className="product pt-5">
                {products.map(product => (
                    <Product key={product._id} product={product} />
                ))}
            </Row>
        </Container>
    );
};

export default Products;