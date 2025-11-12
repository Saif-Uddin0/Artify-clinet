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
import AddArtwork from "../Pages/AddArtWork";
import ExploreArtworks from "../Pages/ExploreArtWorks";
import MyGallery from "../Pages/MyGallery";
import MyFavourite from "../Pages/MyFavourite";



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
                element: <ExploreArtworks></ExploreArtworks>
            },
            {
                path: '/add-art',
                element: <PrivateRoutes>
                    <AddArtwork></AddArtwork>
                </PrivateRoutes>
            },
            {
                path: '/my-gallery',
                element: <PrivateRoutes>
                    <MyGallery></MyGallery>
                </PrivateRoutes>
            },
            {
                path: '/my-favorite',
                element: <PrivateRoutes>
                    <MyFavourite></MyFavourite>
                </PrivateRoutes>
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
