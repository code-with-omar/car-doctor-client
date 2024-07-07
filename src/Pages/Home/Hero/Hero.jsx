import { Button, Carousel, Container } from 'react-bootstrap';
import Image1 from "./../../../assets/images/banner/1.jpg"
import Image2 from "./../../../assets/images/banner/2.jpg"
import Image3 from "./../../../assets/images/banner/3.jpg"
import Image4 from "./../../../assets/images/banner/4.jpg"
import Image5 from "./../../../assets/images/banner/5.jpg"
import Image6 from "./../../../assets/images/banner/6.jpg"
import './Hero.css'
const Hero = () => {
    return (
        <Container className='carousal-wrap'>
            <Carousel fade className='carousal-contains'>
                <Carousel.Item >
                    <img className="d-block w-100" src={Image1} />
                    <Carousel.Caption className="carousal-details w-100">
                        <div className='carousal-heading-para w-50'>
                            <h2 className="fw-700 fs-60 font-white line-height-75 mb-3">Affordable Price For Car Servicing</h2>
                            <p className='line-height-30 fs-18 fw-400 font-white mb-3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <Button variant="outline-danger" href="#Latest Project" className='fs-18 fw-600 font-white'>Latest Project</Button>
                            <Button variant="danger" href="#Discover" className='fs-18 fw-600 font-white mx-5'>Discover More</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image2} />
                    <Carousel.Caption className="carousal-details w-100">
                        <div className='carousal-heading-para w-50'>
                            <h2 className="fw-700 fs-60 font-white line-height-75 mb-3">Affordable Price For Car Servicing</h2>
                            <p className='line-height-30 fs-18 fw-400 font-white mb-3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <Button variant="outline-danger" href="#Latest Project" className='fs-18 fw-600 font-white'>Latest Project</Button>
                            <Button variant="danger" href="#Discover" className='fs-18 fw-600 font-white mx-5'>Discover More</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image3} />

                    <Carousel.Caption className="carousal-details w-100">
                        <div className='carousal-heading-para w-50'>
                            <h2 className="fw-700 fs-60 font-white line-height-75 mb-3">Affordable Price For Car Servicing</h2>
                            <p className='line-height-30 fs-18 fw-400 font-white mb-3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <Button variant="outline-danger" href="#Latest Project" className='fs-18 fw-600 font-white'>Latest Project</Button>
                            <Button variant="danger" href="#Discover" className='fs-18 fw-600 font-white mx-5'>Discover More</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image4} />
                    <Carousel.Caption className="carousal-details w-100">
                        <div className='carousal-heading-para w-50'>
                            <h2 className="fw-700 fs-60 font-white line-height-75 mb-3">Affordable Price For Car Servicing</h2>
                            <p className='line-height-30 fs-18 fw-400 font-white mb-3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <Button variant="outline-danger" href="#Latest Project" className='fs-18 fw-600 font-white'>Latest Project</Button>
                            <Button variant="danger" href="#Discover" className='fs-18 fw-600 font-white mx-5'>Discover More</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image5} />

                    <Carousel.Caption className="carousal-details w-100">
                        <div className='carousal-heading-para w-50'>
                            <h2 className="fw-700 fs-60 font-white line-height-75 mb-3">Affordable Price For Car Servicing</h2>
                            <p className='line-height-30 fs-18 fw-400 font-white mb-3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <Button variant="outline-danger" href="#Latest Project" className='fs-18 fw-600 font-white'>Latest Project</Button>
                            <Button variant="danger" href="#Discover" className='fs-18 fw-600 font-white mx-5'>Discover More</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Image6} />
                    <Carousel.Caption className="carousal-details w-100">
                        <div className='carousal-heading-para w-50'>
                            <h2 className="fw-700 fs-60 font-white line-height-75 mb-3">Affordable Price For Car Servicing</h2>
                            <p className='line-height-30 fs-18 fw-400 font-white mb-3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <Button variant="outline-danger" href="#Latest Project" className='fs-18 fw-600 font-white'>Latest Project</Button>
                            <Button variant="danger" href="#Discover" className='fs-18 fw-600 font-white mx-5'>Discover More</Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Hero;