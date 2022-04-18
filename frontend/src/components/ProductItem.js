import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import like from '../assets/like.svg';
import { PRODUCT_ROUTE } from '../utils/consts';
import { addToBasket } from '../utils/BasketApi';
import './ProductItem.css';

const ProductItem = ({ product, vendor }) => {

  const navigate = useNavigate();

  const addProduct = () => {
    addToBasket(product.id)
  };

  return (
    <Col md={3} className='mt-1' >
      <Card onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)} style={{width: 180, cursor: 'pointer', borderRadius: 4}} border={'light'} bg={'light'} >
        <Image className='product-item__image' width={178} height={178} src={process.env.REACT_APP_PUBLIC_URL + product.img}/>
        <div className='text-black-50 mt-1 mx-2 d-flex justify-content-between align-items-center'>
          <div className='product-item__product-name'>{product.name}</div>
          <div className='d-flex align-items-center'>
            <div>{product.rating}&nbsp;</div>
            <Image width={16} height={16} src={like}/>
          </div>
        </div>
        <div style={{textAlign: 'center'}} className='text-black-50 product-item__vendor-name'>{vendor}</div>
      </Card>
      <Button style={{width: 180}} className="rounded-0" variant="outline-success" size="sm" onClick={addProduct}>Добавить в корзину</Button>
    </Col>
    
  );
};

export default ProductItem;