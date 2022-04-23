import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../index';
import './BasketPageCard.css';

const BasketPageCard = observer(({ card }) => {

  const { product } = useContext(Context);

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
    <div className='basket-card'>
        <img className='basket-card__image' 
          src={process.env.REACT_APP_PUBLIC_URL + card['img']} 
          alt="товар" 
        />
        <div className='basket-card__info'>
          <div className='basket-card__product'>
            <p className='basket-card__title'>{card.name}</p>
            <p className='basket-card__description'>{card.info}</p>
            <p className='basket-card__vendor'>{product.vendors[card.vendorId]}</p>
          </div>  
          <p>{card.price} &#8381;</p>
        </div>
        <div className='basket-card__product-cost'>
          <div className='basket-card__quantity-wrapper'>
            <button alt='minus-button' className='basket-card__btn' onClick={() => clickMinus()} disabled={finalCount < 1}>
              <p className='basket-card__btn-symbol'>-</p>
            </button>
            <p className='basket-card__quantity'>{card.quantity}</p>
            <button alt='minus-button' className='basket-card__btn ' onClick={() => clickPlus()} >
              <p className='basket-card__btn-symbol'>+</p>
            </button>
          </div>
          <p className='basket-card__price'>{finalPrice}</p>
        </div>
      </div>
  );
});

export default BasketPageCard;