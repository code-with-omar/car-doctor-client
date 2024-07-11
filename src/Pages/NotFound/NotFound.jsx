import { Container } from "react-bootstrap";
import NotFoundImg from './../../assets/404.png';

const NotFound = () => {
    return (
        <Container >
            <div className="not-found-page">

                <img src={NotFoundImg} alt="" />
            </div>
        </Container>
    );
};

export default NotFound;