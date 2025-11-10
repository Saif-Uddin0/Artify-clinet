import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes.jsx';
import AuthPorvider from './Provider/AuthPorvider.jsx';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthPorvider>
      <RouterProvider router={router} />
    </AuthPorvider>
    <ToastContainer />
  </StrictMode>,
)
