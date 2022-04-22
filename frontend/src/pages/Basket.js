import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { addToBasket, deleteOnePiece, getBasketProducts } from '../utils/BasketApi';
import { Context } from '../index';
import './Basket.css';
import BasketItem from '../components/BasketItem';

const Basket = observer(() => {
  
  const {product} = useContext(Context)

  // const total = Object.keys(product.basket).reduce((a, b) => a + product.basket[b].price * product.basket[b].quantity, 0);

  const [finalCount, setFinalCount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const clickMinus = () => {
    setFinalCount(finalCount - 1)
    setFinalPrice(finalCount * cost)
  };
  const clickPlus = () => {
    setFinalCount(finalCount + 1)
    setFinalPrice(finalCount * cost)
  };
  
  const cost = 100;

  return (
    <div>
      <div className='card-test'>
        <img className='card__image' 
          src={'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rks1jIt_s4Ohr2dG-BDXZpIqaKTM5SRkZCeTgDn6uOyic'} 
          alt="товар" 
        />
        <div className='card__info'>
          <div className='card__product'>
            <p className='card__title'>Весёлый арбуз</p>
            <p className='card__description'>Самый прикольный арбуз в мире</p>
            <p>{cost} &#8381;</p>
          </div>  
          <p className='card__vendor'>Арбузикс STYLE</p>
        </div>
        <div className='card__product-cost'>
          <div className='card__quantity-wrapper'>
            <button alt='minus-button' className='card__btn' onClick={() => clickMinus()} disabled={finalCount < 1}>
              <p className='card__btn-symbol'>-</p>
            </button>
            <p className='card__quantity'>{finalCount}</p>
            <button alt='minus-button' className='card__btn ' onClick={() => clickPlus()} >
              <p className='card__btn-symbol'>+</p>
            </button>
          </div>
          <p className='card__price'>{finalPrice}</p>
        </div>
      </div>
    </div>
  );
});

export default Basket;