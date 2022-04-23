import React, { useContext, useEffect } from 'react';
import './BasketPageList.css';
import BasketPageCard from './BasketPageCard';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { getBasketProducts } from '../utils/BasketApi';

const BasketPageList = observer(() => {

  const {product} = useContext(Context);

  useEffect(() => {
    getBasketProducts()
    .then(products => {
      product.setBasket(products.product);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <div>
      {
        Object.keys(product.basket).map(item => {
        return <BasketPageCard key={product.basket[item].key} card={product.basket[item]} vendor={product.vendors[item.vendorId]} />}
        )
      }
    </div>
  );
});

export default BasketPageList;