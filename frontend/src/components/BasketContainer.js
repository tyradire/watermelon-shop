import React, { useContext, useEffect } from 'react';
import './BasketContainer.css';
import BasketItem from './BasketItem';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BASKET_ROUTE } from '../utils/consts';
import { getBasketProducts } from '../utils/BasketApi';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const BasketContainer = observer(() => {

  const navigate = useNavigate();
  const {product} = useContext(Context)
  const {user} = useContext(Context);

  const total = product.basket.reduce((a, b) => a + b.product['price'], 0);

  useEffect(() => {
    console.log('is auth ', user.isAuth)
    getBasketProducts()
    .then(products => {
      product.setBasket(products.product);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <div className='basket'>
      <div className='basket__btn' ></div>
      <div className='basket__content'>
        <span className='basket__arrow'></span>
        <div className='basket__products'>

          {product.basket.map(item => 
         
          <BasketItem key={item.id} product={item.product} />
      
      )}
        </div>
        <div className='basket__footer d-flex justify-content-between align-items-center'>
          <div>
            <p className='footer__description-price'>Общая сумма</p>
            <p className='footer__price'>{total} &#8381;</p>
          </div>
          <Button className='h-75' variant="outline-success" size="sm" onClick={() => navigate(BASKET_ROUTE)}>В корзину</Button>
        </div>
      </div>
    </div>
  );
});

export default BasketContainer;