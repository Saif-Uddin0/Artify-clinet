import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import ArtworkDetails from "../Component/ArtworkDetails";
import AuthLayout from "../Layout/AuthLayout";
import { path } from "framer-motion/client";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/explore-art',
                element: <h1>Explore art</h1>
            },
            {
                path: '/add-art',
                element: <h1>Add Art</h1>
            },
            {
                path: '/my-gallery',
                element: <h1>My Gallery</h1>
            },
            {
                path: '/my-favorite',
                element: <h1>My favourite</h1>
            },
            {
                path: '/artwork-details/:id',
                element:
                    <PrivateRoutes>
                        <ArtworkDetails></ArtworkDetails>
                    </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:3000/artwork-details/${params.id}`),
            }
        ]

    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [

            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    }
]);
