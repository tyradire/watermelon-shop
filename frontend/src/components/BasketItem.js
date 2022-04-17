import React from 'react';
import seer from '../assets/seer.JPG';
import './BasketItem.css';

const BasketItem = (props) => {

  console.log('props ', props.product)

  return (
    <div className='product'>
      <img alt={'product'} src={seer}/>
      <p className='product__title'>{ props.product['name'] }</p>
      <p className='product__count'>1 шт</p>
      <p className='product__price'>{ props.product['price'] } &#8381;</p> 
    </div>
  );
};

export default BasketItem;