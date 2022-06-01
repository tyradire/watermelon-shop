import React, { useState } from 'react';
import burgerButton from '../../assets/burger.svg';
import './BurgerButton.css';

const BurgerButton = () => {

  const [burgerOpen, setBurgerOpen] = useState(false);

  const openBurgerMenu = () => {
    setBurgerOpen(!burgerOpen);
  }

  return (
    <div>
      <div className={burgerOpen ? 'burger__cover burger__cover_opened' : 'burger__cover'}>
      <div onClick={() => {openBurgerMenu()}} className='closed'>X</div>
      </div>
      <img onClick={() => {openBurgerMenu()}} className='burger' alt='button' src={burgerButton}/>
    </div>
  );
};

export default BurgerButton;