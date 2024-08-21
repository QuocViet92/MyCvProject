import { Outlet } from 'react-router-dom';
import Header from './Header';
import React from 'react';
import Footer from './Footer';

export default function Layout() {
    return (
        <div>
            <Header />
            <div className='outlet'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
