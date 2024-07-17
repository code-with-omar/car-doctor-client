import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import NotFound from "../Pages/NotFound/NotFound";
import AddServices from "../Pages/AddServices/AddServices";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import ProductsCreate from "../Pages/productsCreate/ProductsCreate";
import Orders from "../Pages/Orders/Orders";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/order/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/order/${params.id}`)
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            }
            , {
                path: '/addServices',
                element: <AddServices></AddServices>
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: '/productsCreates',
                element: <PrivateRoute><ProductsCreate></ProductsCreate></PrivateRoute>
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }
            , {
                path: '*',
                element: <NotFound></NotFound>
            }

        ]
    },
]);
export default router