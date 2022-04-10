import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import like from '../assets/like.svg';

const ProductItem = ({ product }) => {
  return (
    <Col md={3} className='mt-1'>
      <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
        <Image width={150} height={150} src={product.img}/>
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