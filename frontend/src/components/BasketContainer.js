import React from 'react';
import './BasketContainer.css';
import BasketItem from './BasketItem';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BASKET_ROUTE } from '../utils/consts';

const BasketContainer = () => {

  const navigate = useNavigate();

  return (
    <div className='basket'>
      <div className='basket__btn' ></div>
      <div className='basket__content'>
        <span className='basket__arrow'></span>
        <div className='basket__products'>
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
          <BasketItem />
        </div>
        <div className='basket__footer d-flex justify-content-between align-items-center'>
          <div>
            <p className='footer__description-price'>Общая сумма</p>
            <p className='footer__price'>3000 &#8381;</p>
          </div>
          <Button className='h-75' variant="outline-success" size="sm" onClick={() => navigate(BASKET_ROUTE)}>В корзину</Button>
        </div>
      </div>
    </div>
  );
};

export default BasketContainer;