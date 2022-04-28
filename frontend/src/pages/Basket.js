import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import './Basket.css';
import BasketPageList from '../components/BasketPageList';
import { getBasketProducts } from '../utils/BasketApi';
import { Button } from 'react-bootstrap';

const Basket = observer(() => {
  
  const {product} = useContext(Context);
  const {user} = useContext(Context);
  const [basketIsLoading, setBasketIsLoading] = useState(true);
  const [inputEmail, setInputEmail] = useState(user.email);
  const [inputPhone, setInputPhone] = useState('');
  const [inputDate, setInputDate] = useState('');

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

  let date = new Date()
  let todayDate = date.toISOString().split('T')[0];
  let now = Date.now();
  let nowNew = new Date(now + 86400000 * 3).toLocaleDateString().split('.').reverse().join('-');

  return (
    <div className='basket-page__container'>
      <BasketPageList />
      <div>
        <div className='basket-page__sidebar'>
          <p className='basket-page__input-title'>Выберите дату доставки</p>
          <input 
          className='basket-page__input basket-page__input_date' 
          min={todayDate} 
          max={nowNew} 
          type={'date'} 
          id='datePicker'
          onChange={(e) => setInputDate(e.target.value)}
          ></input>
          <p className='basket-page__input-title' >Введите email</p>
          <input 
            className='basket-page__input' 
            value={inputEmail} 
            type={'email'}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder='example@example.com'
          ></input>
          <p className='basket-page__input-title'>Введите номер телефона</p>
          <input 
            type="tel" 
            placeholder='+1 (123) 456-78-90'
            className='basket-page__input' 
            onChange={(e) => setInputPhone(e.target.value)}
          ></input>
        </div>
        <div className='basket-page__sidebar'>
          <p className='basket-page__info'>Итого: {basketIsLoading ? 0 : productCount} {morph(productCount, ['товар', 'товара', 'товаров'])} на {priceCount} &#8381;</p>
          <Button 
            className='h-75 mx-auto mb-2 w-75' 
            variant="outline-success" 
            size="sm" 
            disabled={!(inputPhone && inputDate && inputEmail)} 
            onClick={() => console.log(inputDate, inputEmail, inputPhone)}
          >Купить</Button>
        </div>
      </div>
    </div>
  );
});

export default Basket;