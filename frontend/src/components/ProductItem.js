import React, { useContext, useEffect } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import like from '../assets/like.svg';
import { PRODUCT_ROUTE } from '../utils/consts';
import { addToBasket } from '../utils/BasketApi';
import {Context} from "../index";
import { observer } from 'mobx-react-lite';
import './ProductItem.css';

const ProductItem = observer(({ card, vendor }) => {

  const navigate = useNavigate();
  const {product} = useContext(Context)

  const addProduct = () => {
    addToBasket(card.id)
    .then((item) => {
      let newProduct = {};
      console.log('item ', item)
      newProduct[item.product.productId] = { name: card.name, price: card.price, img: card.img, key: item.product.id, quantity: 1};

      //obj[item.product.id] = { name: item.product.name, price: item.product.price, img: item.product.img, key:item.id, vendorId: item.product.vendorId, quantity: 1 };

      //newProduct.product = {name: card.name, img: card.img, price: card.price };
      product.addProductToBasket(newProduct);
    })
    .catch(err => console.log(err));
  };

  return (
    <Col md={3} className='mt-1' >
      <Card onClick={() => navigate(PRODUCT_ROUTE + '/' + card.id)} style={{width: 180, cursor: 'pointer', borderRadius: 4}} border={'light'} bg={'light'} >
        <Image className='product-item__image' width={178} height={178} src={process.env.REACT_APP_PUBLIC_URL + card.img}/>
        <div className='text-black-50 mt-1 mx-2 d-flex justify-content-between align-items-center'>
          <div className='product-item__product-name'>{card.name}</div>
          <div className='d-flex align-items-center'>
            <div>{card.rating}&nbsp;</div>
            <Image width={16} height={16} src={like}/>
          </div>
        </div>
        <div style={{textAlign: 'center'}} className='text-black-50 product-item__vendor-name'>{vendor}</div>
      </Card>
      <Button style={{width: 180}} className="rounded-0" variant="outline-success" size="sm" onClick={addProduct}>Добавить в корзину</Button>
    </Col>
    
  );
});

export default ProductItem;