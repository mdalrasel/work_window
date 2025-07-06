import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <div className='fixed z-10 container mx-auto '><Navbar /></div>
            <div className='min-h-[calc(100vh-580px)] pt-20'>
                <Outlet />
            </div>
            <Footer />
            
        </div>
    );
};

export default MainLayout;