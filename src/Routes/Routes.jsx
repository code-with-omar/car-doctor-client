import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import NotFound from "../Pages/NotFound/NotFound";
import AddServices from "../Pages/AddServices/AddServices";


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
                element:<CheckOut></CheckOut>,
                loader:({params})=>fetch(`http://localhost:5000/order/${params.id}`)
            },
            {
                path:'/service/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
            }
            ,{
                path:'/addServices',
                element:<AddServices></AddServices>
            }
            ,{
                path:'*',
                element:<NotFound></NotFound>
            }

        ]
    },
]);
export default router