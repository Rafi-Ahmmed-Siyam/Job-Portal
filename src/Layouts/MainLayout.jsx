import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Foooter from '../Pages/Shared/Foooter';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <header className='sticky top-0 z-50'>
                <Navbar />
            </header>
            <main className='min-h-[calc(100vh-280px)]'>
                <Outlet />
            </main>
            <Foooter />
        </div>
    );
};

export default MainLayout;