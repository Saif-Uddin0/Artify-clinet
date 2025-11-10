import React from 'react';
import Navbar from '../Component/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Shared/Footer';

const Root = () => {
    return (
        <div className='bg-gradient-to-r from-gray-50 to-gray-100'>
            <header className='sticky z-50 h-fit top-0'>
                <Navbar></Navbar>
            </header>



            <main>
                <Outlet></Outlet>
            </main>
            


            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;