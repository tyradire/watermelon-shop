import React from 'react';
import './BasketContainer.css';
import BasketItem from './BasketItem';

const BasketContainer = () => {

  const handleMouseEnter = () => {
    console.log('корзина')
  }

  return (
    <div className='basket'>
      <div className='basket-btn' onMouseEnter={() => handleMouseEnter()}></div>
      <div className='basket-content'>
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
      </div>
    </div>
  );
};

export default BasketContainer;