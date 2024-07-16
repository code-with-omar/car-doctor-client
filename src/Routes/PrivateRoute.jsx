import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Container, Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <Container className="w-25 m-auto my-5">
                <Spinner animation="grow" role="status" variant="success"></Spinner>
                <Spinner animation="grow" variant="success" className="mx-2"/>
                <Spinner animation="grow" variant="danger" className="mx-2"/>
                <Spinner animation="grow" variant="warning" className="mx-2"/>
            </Container>
        )
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/signIn' replace></Navigate>
};

export default PrivateRoute;