import { Col, Container, Form, Row } from 'react-bootstrap';
import './addServices.css'
import Swal from 'sweetalert2';
const AddServices = () => {
    const handleAddServices = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.name.value;
        const service_id = form.serviceName.value;
        const img = form.image.value;
        const price = form.price.value;
        const description = form.description.value;
        const nameOfFacility_1 = form.nameOfFacility_1.value;
        const nameOfFacility_2 = form.nameOfFacility_2.value;
        const nameOfFacility_3 = form.nameOfFacility_3.value;
        const nameOfFacility_4 = form.nameOfFacility_4.value;
        const facilityDescription_1 = form.facilityDescription_1.value;
        const facilityDescription_2 = form.facilityDescription_2.value;
        const facilityDescription_3 = form.facilityDescription_3.value;
        const facilityDescription_4 = form.facilityDescription_4.value;

        const services = [
            {
                service_id,
                title,
                img,
                price,
                description,
                facility: [
                    {
                        name: nameOfFacility_1,
                        details: facilityDescription_1
                    },
                    {
                        name: nameOfFacility_2,
                        details: facilityDescription_2
                    },
                    {
                        name: nameOfFacility_3,
                        details: facilityDescription_3
                    },
                    {
                        name: nameOfFacility_4,
                        details: facilityDescription_4
                    }
                ]
            }
        ];

        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
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
        form.reset()

    };



    return (
        <Container>
            <div className='checkout-banner-wrap'>
                <div className='checkout-banner'>
                    <h2 className='checkout-header fs-45 fw-500 font-white'>Service Details</h2>
                </div>
            </div>
            <Form className='bg-dark-07 checkout-form' onSubmit={handleAddServices}>
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
                        <Form.Control type="text" name="image" placeholder="Image URL" required />
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
                        <Form.Control type="text" name="nameOfFacility_1" placeholder="Name of facility" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="facilityDescription_1" placeholder='Description' />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="nameOfFacility_2" placeholder="Name of facility" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="facilityDescription_2" placeholder='Description' />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="nameOfFacility_3" placeholder="Name of facility" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="facilityDescription_3" placeholder='Description' />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="nameOfFacility_4" placeholder="Name of facility" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" name="facilityDescription_4" placeholder='Description' />
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