import React from 'react';
import AppRouter from './AppRouter';
import NavBar from './NavBar/NavBar';
import './Main.css';
import Footer from './Footer';

const Main = () => {
  return (
    <div className='main'>
      <NavBar />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default Main;