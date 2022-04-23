import React, { useState } from 'react';
import './BasketPageCard.css';

const BasketPageCard = () => {

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
  const name = 'Весёлый арбуз';
  const description = 'Самый прикольный арбуз в мире';
  const vendor = 'Арбузикс STYLE';

  return (
    <div className='basket-card'>
        <img className='basket-card__image' 
          src={'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rks1jIt_s4Ohr2dG-BDXZpIqaKTM5SRkZCeTgDn6uOyic'} 
          alt="товар" 
        />
        <div className='basket-card__info'>
          <div className='basket-card__product'>
            <p className='basket-card__title'>{name}</p>
            <p className='basket-card__description'>{description}</p>
            <p>{cost} &#8381;</p>
          </div>  
          <p className='basket-card__vendor'>{vendor}</p>
        </div>
        <div className='basket-card__product-cost'>
          <div className='basket-card__quantity-wrapper'>
            <button alt='minus-button' className='basket-card__btn' onClick={() => clickMinus()} disabled={finalCount < 1}>
              <p className='basket-card__btn-symbol'>-</p>
            </button>
            <p className='basket-card__quantity'>{finalCount}</p>
            <button alt='minus-button' className='basket-card__btn ' onClick={() => clickPlus()} >
              <p className='basket-card__btn-symbol'>+</p>
            </button>
          </div>
          <p className='basket-card__price'>{finalPrice}</p>
        </div>
      </div>
  );
};

export default BasketPageCard;