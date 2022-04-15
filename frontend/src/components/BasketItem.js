import React from 'react';
import seer from '../assets/seer.JPG';
import './BasketItem.css';

const BasketItem = () => {
  return (
    <div className='product'>
      <img alt={'product'} src={seer}/>
      <p className='product__title'>Сыр Arla Nature Сливочный 45% 400г</p>
      <p className='product__count'>1 шт</p>
      <p className='product__price'>200 Р</p> 
    </div>
  );
};

export default BasketItem;