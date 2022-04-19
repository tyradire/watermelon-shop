import React from 'react';
import './BasketItem.css';
import { observer } from 'mobx-react-lite';

const BasketItem = observer(({ product, deleteProduct }) => {

  const deleteItem = () => {
    console.log('лог из БаскетАйтема ', product.key)
    deleteProduct(product.key)
  } 

  return (
    <div className='product'>
      <button className='product__delete-btn' onClick={deleteItem}>x</button>
      <img className='product__image' alt={'product'} src={process.env.REACT_APP_PUBLIC_URL + product['img']}/>
      <p className='product__title'>{ product['name'] }</p>
      <p className='product__count'>{product.quantity}</p>
      <p className='product__price'>{ product.price } &#8381;</p> 
    </div>
  );
});

export default BasketItem;