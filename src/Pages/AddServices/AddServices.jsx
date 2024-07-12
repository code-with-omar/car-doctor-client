import { Col, Container, Form, Row } from 'react-bootstrap';
import './addServices.css'
const AddServices = () => {
    return (
        <Container>
            <div className='checkout-banner-wrap'>
                <div className='checkout-banner'>
                    <h2 className='checkout-header fs-45 fw-500 font-white'>Service Details</h2>
                </div>
            </div>
            <Form className='bg-dark-07 checkout-form' >
                <h2 className=' fs-35 fw-700 font-orange text-center mb-5'></h2>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Service Title</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Service Name" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Service Number</Form.Label>
                        <Form.Control type="number" name="serviceName" placeholder="Service Number" required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Image URL" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" placeholder='Price' />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" placeholder='Description' />

                    </Form.Group>
                </Row>
                <Row className="">
                    <h4>Facilities</h4>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="nameOfFacility" placeholder="Name of facility" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="facilityDescription" placeholder='Description' />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="nameOfFacility" placeholder="Name of facility" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="facilityDescription" placeholder='Description' />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="nameOfFacility" placeholder="Name of facility" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="facilityDescription" placeholder='Description' />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="nameOfFacility" placeholder="Name of facility" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="facilityDescription" placeholder='Description' />
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

export default AddServices;