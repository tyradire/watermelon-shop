import React from 'react';
import './BasketItem.css';

const BasketItem = ({ product, id, deleteProduct }) => {


  const deleteItem = () => {
    console.log('лог из БаскетАйтема ', id)
    deleteProduct(id)
  }

  return (
    <div className='product'>
      <button className='product__delete-btn' onClick={deleteItem}>x</button>
      <img className='product__image' alt={'product'} src={process.env.REACT_APP_PUBLIC_URL + product['img']}/>
      <p className='product__title'>{ product['name'] }</p>
      <p className='product__count'>1 шт</p>
      <p className='product__price'>{ product.price } &#8381;</p> 
    </div>
  );
};

export default BasketItem;