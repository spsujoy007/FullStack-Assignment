import React from 'react';
import Navbar from '../components/Home/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>

            <footer className='flex items-center justify-center w-full h-[100px] mt-20 bg-purple-600'>
                <p className='text-white'>Let's help everyone... </p>
            </footer>
        </div>
    );
};

export default Layout;