import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import like from '../assets/like.svg';
import { PRODUCT_ROUTE } from '../utils/consts';
import './ProductItem.css';

const ProductItem = ({ product, vendor }) => {

  const navigate = useNavigate();

  return (
    <Col md={3} className='mt-1' onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
      <Card style={{width: 180, cursor: 'pointer', borderRadius: 4}} border={'light'} bg={'light'} >
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
    </Col>
  );
};

export default ProductItem;