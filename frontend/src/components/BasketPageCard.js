import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { deleteOnePiece, addToBasket } from '../utils/BasketApi';
import { Context } from '../index';
import './BasketPageCard.css';

const BasketPageCard = observer(({ card, vendor }) => {

  const { product } = useContext(Context);

  const clickMinus = () => {
    deleteOnePiece(card.productId);
    product.deleteProductPiece(card.productId);
  };

  const clickPlus = () => {
    addToBasket(card.productId)
    .then((item) => {
      let newProduct = {};
      console.log('потеря',vendor)
      newProduct[item.product.productId] = { name: card.name, vendor: vendor, price: card.price, img: card.img, key: item.product.id, quantity: 1, productId: item.product.productId };
      product.addProductToBasket(newProduct);
    })
    .catch(err => console.log(err));
  };

  // const total = Object.keys(product.basket).reduce((a, b) => a + product.basket[b].price * product.basket[b].quantity, 0);
  const total = card.price * card.quantity;

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
          <p className='basket-card__price'>{card.price} &#8381; за 1 шт.</p>
        </div>
        <div className='basket-card__product-cost'>
          <div className='basket-card__quantity-wrapper'>
            <button alt='minus-button' className='basket-card__btn' onClick={() => clickMinus()} disabled={false}>
              <p className='basket-card__btn-symbol'>-</p>
            </button>
            <p className='basket-card__quantity'>{card.quantity}</p>
            <button alt='minus-button' className='basket-card__btn ' onClick={() => clickPlus()} >
              <p className='basket-card__btn-symbol'>+</p>
            </button>
          </div>
          <p className='basket-card__total-price'>{total} &#8381;</p>
        </div>
      </div>
  );
});

export default BasketPageCard;