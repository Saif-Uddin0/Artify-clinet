import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import ArtworkDetails from "../Component/ArtworkDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            element:<Home></Home>
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
            element: <ArtworkDetails></ArtworkDetails>,
            loader: ({params})=> fetch(`http://localhost:3000/artwork-details/${params.id}`),
        }
    ]
  },
]);
