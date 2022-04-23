import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { addToBasket, deleteOnePiece, getBasketProducts } from '../utils/BasketApi';
import { Context } from '../index';
import './Basket.css';
import BasketItem from '../components/BasketItem';
import BasketPageCard from '../components/BasketPageCard';

const Basket = observer(() => {
  
  const {product} = useContext(Context)

  // const total = Object.keys(product.basket).reduce((a, b) => a + product.basket[b].price * product.basket[b].quantity, 0);

  return (
    <div>
      <BasketPageCard />
      <BasketPageCard />
      <BasketPageCard />
      <BasketPageCard />
      <BasketPageCard />
    </div>
  );
});

export default Basket;