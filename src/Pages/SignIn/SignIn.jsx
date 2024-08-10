import { Col, Container, Form, Row } from 'react-bootstrap';
import './../SignUp/signUp.css'
import LoginImage from './../../assets/images/login/login.svg'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
const SignIn = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password })
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                const user = { email }
                axios.post('http://localhost:5000/jwt', user)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate(location?.state ? location?.state:'/')
            })
            .catch(error => {
                console.log(error)
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
                    <h3 className='fs-40 fw-600 text-center font-dark-02 '>Sign In</h3>
                    <Form onSubmit={handleSignIn} className='fs-18 fw-600 font-dark-02 form-contain'>

                        <Form.Group className="mb-3">
                            <Form.Label className='mb-3'>Email address</Form.Label>
                            <Form.Control type="email" name='email' className='form-input' placeholder="Enter email" required />
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label className='mb-3'>Password</Form.Label>
                            <Form.Control type="password" name='password' className='form-input' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="submit" className=' fs-20 fw-600 line-height-30 font-white bg-orange-01' value="Sign In" />
                        </Form.Group>
                    </Form>
                    <div className='login-with text-center'>
                        <p className='fs-16 font-dark-02 fw-500 my-3'>Or Sign In with</p>
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
                        <h3 className='fs-18 fw-600 font-dark-03 mt-3'>Have an not account? <Link to='/signUp' className='font-orange' > Sign Up</Link></h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;