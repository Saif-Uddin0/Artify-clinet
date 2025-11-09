import React from 'react';
import Navbar from '../Component/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Shared/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;