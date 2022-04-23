import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { addToBasket, deleteOnePiece, getBasketProducts } from '../utils/BasketApi';
import { Context } from '../index';
import './Basket.css';
import BasketPageList from '../components/BasketPageList';

const Basket = observer(() => {
  
  const {product} = useContext(Context)

  // const total = Object.keys(product.basket).reduce((a, b) => a + product.basket[b].price * product.basket[b].quantity, 0);

  return (
    <BasketPageList />
  );
});

export default Basket;