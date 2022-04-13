import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import like from '../assets/like.svg';
import { PRODUCT_ROUTE } from '../utils/consts';

const ProductItem = ({ product }) => {

  const navigate = useNavigate();

  return (
    <Col md={3} className='mt-1' onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
      <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
        <Image width={150} height={150} src={process.env.REACT_APP_PUBLIC_URL + product.img}/>
        <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
          <div>Арбузикс</div>
          <div className='d-flex align-items-center'>
            <div>{product.rating}&nbsp;</div>
            <Image width={16} height={16} src={like}/>
          </div>
        </div>
        <div>{product.name}</div>
      </Card>
    </Col>
  );
};

export default ProductItem;