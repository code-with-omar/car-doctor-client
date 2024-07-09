import { Col, Container, Row, Form } from 'react-bootstrap';
import './signUp.css';
import LoginImage from './../../assets/images/login/login.svg';
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

import Swal from 'sweetalert2'

import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ name, email, password })
        createUser(email, password)
            .then(result => {
                const user = result.user
                if (user) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "User Create successfull. Now you can sing in",
                        showConfirmButton: true,
                        confirmButtonText: "Close"

                    });
                }
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: "Email is already used",
                    showConfirmButton: true,
                    confirmButtonText: "Close"

                });
            })
        form.reset()
    }
    return (
        <Container className='form-wrap'>
            <Row md={2} className='d-flex justify-content-between'>
                <Col className='login-left-side'>
                    <img src={LoginImage} />
                </Col>
                <Col className='form-contains'>
                    <h3 className='fs-40 fw-600 text-center font-dark-02 '>Sign Up</h3>
                    <Form onSubmit={handleSignUp} className='fs-18 fw-600 font-dark-02 form-contain'>
                        <Form.Group className="mb-3">
                            <Form.Label className='mb-3'>Name</Form.Label>
                            <Form.Control type="name" name='name' className='form-input' placeholder="Enter your name" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='mb-3'>Email address</Form.Label>
                            <Form.Control type="email" name='email' className='form-input' placeholder="Enter email" required />
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label className='mb-3'>Password</Form.Label>
                            <Form.Control type="password" name='password' className='form-input' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="submit" className=' fs-20 fw-600 line-height-30 font-white bg-orange-01' value="Sign Up" />
                        </Form.Group>
                    </Form>
                    <div className='login-with text-center'>
                        <p className='fs-16 font-dark-02 fw-500 my-3'>Or Sign Up with</p>
                        <div className="login-with-way d-flex justify-content-center ">
                            <div className='login-way-contain align-items-center d-flex'>
                                <FcGoogle className='login-icon' />
                            </div>
                            <div className='login-way-contain align-items-center d-flex'>

                                <FaFacebookF className='login-icon' />
                            </div>
                            <div className='login-way-contain align-items-center d-flex'>

                                <FaLinkedin className='login-icon' />
                            </div>

                        </div>
                        <h3 className='fs-18 fw-600 font-dark-03 mt-3'>Have an account? <Link to='/signIn' className='font-orange' > Sign In</Link></h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;
