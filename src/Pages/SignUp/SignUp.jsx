import { Col, Container, Image, Row, Form } from 'react-bootstrap';
import './signUp.css';
import LoginImage from './../../assets/images/login/login.svg';
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <Container className='form-wrap'>
            <Row md={2} className='d-flex justify-content-between login-left-side'>
                <Col>
                    <Image src={LoginImage} />
                </Col>
                <Col className='form-contains'>
                    <h3 className='fs-40 fw-600 text-center font-dark-02 '>Sign Up</h3>
                    <Form className='fs-18 fw-600 font-dark-02 form-contain'>

                        <Form.Group className="mb-3">
                            <Form.Label className='mb-3'>Email address</Form.Label>
                            <Form.Control type="email" className='form-input' placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='mb-3'>Password</Form.Label>
                            <Form.Control type="password" className='form-input' placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="submit" className=' fs-20 fw-600 line-height-30 font-white bg-orange-01' value="Submit" />
                        </Form.Group>
                    </Form>
                    <div className='login-with text-center'>
                        <p className='fs-16 font-dark-02 fw-500 my-3'>Or Sign In with</p>
                        <div className="login-with-way d-flex justify-content-center ">
                            <div className='login-way-contain align-items-center d-flex'>
                                <FcGoogle className='login-icon' />
                            </div>
                            <div className='login-way-contain align-items-center d-flex'>

                                <FaFacebookF className='login-icon'/>
                            </div>
                            <div className='login-way-contain align-items-center d-flex'>

                                <FaLinkedin className='login-icon'/>
                            </div>
                           
                        </div>
                        <h3 className='fs-18 fw-600 font-dark-03 mt-5'>Have an account? <Link to='/login' className='font-orange' > Sign In</Link></h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;
