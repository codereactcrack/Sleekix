import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.css'; // Importing the CSS file

const Layout = () => {
  return (
    <div className='layout-container'>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
