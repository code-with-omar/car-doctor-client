import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/signIn' replace></Navigate>
};

export default PrivateRoute;