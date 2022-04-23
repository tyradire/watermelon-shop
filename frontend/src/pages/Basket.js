import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import './Basket.css';
import BasketPageList from '../components/BasketPageList';
import { getBasketProducts } from '../utils/BasketApi';

const Basket = observer(() => {
  
  const {product} = useContext(Context)

  useEffect(() => {
    getBasketProducts()
    .then(products => {
      product.setBasket(products.product);
    })
    .catch(err => console.log(err));
  }, [])

  // const total = Object.keys(product.basket).reduce((a, b) => a + product.basket[b].price * product.basket[b].quantity, 0);

  return (
    <BasketPageList />
  );
});

export default Basket;