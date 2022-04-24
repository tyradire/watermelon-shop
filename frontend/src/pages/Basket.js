import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import './Basket.css';
import BasketPageList from '../components/BasketPageList';
import { getBasketProducts } from '../utils/BasketApi';
import { Button } from 'react-bootstrap';

const Basket = observer(() => {
  
  const {product} = useContext(Context)
  const [basketIsLoading, setBasketIsLoading] = useState(true);

  // console.log(Object.keys(product.basket))
  const priceCount = Object.keys(product.basket).reduce((a, b) => a + product.basket[b].price * product.basket[b].quantity, 0)
  const productCount = Object.keys(product.basket).reduce((a, b) => a + product.basket[b].quantity, 0);
  
  function morph(int, array) {
    return (array = array || ['товар', 'товара', 'товаров']) && array[(int % 100 > 4 && int % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(int % 10 < 5) ? int % 10 : 5]];
  }

  useEffect(() => {
    getBasketProducts()
    .then(products => {
      product.setBasket(products.product);
      setBasketIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <div className='basket-page__container'>
      <BasketPageList />
      <div>
        <div className='basket-page__sidebar'>
          <input className='basket-page__input' type={'date'} id='datePicker'></input>
        </div><div className='basket-page__sidebar'>
          <p className='basket-page__info'>Итого: {basketIsLoading ? 0 : productCount} {morph(productCount, ['товар', 'товара', 'товаров'])} на {priceCount} &#8381;</p>
          <Button className='h-75 mx-auto mb-2 w-75' variant="outline-success" size="sm" >Оплатить покупку</Button>
        </div>
      </div>
    </div>
  );
});

export default Basket;