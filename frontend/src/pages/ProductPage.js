import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import like from '../assets/like.svg';

const ProductPage = () => {

  const product = {id: 1, name: 'Квадратный арбуз', price: 500, rating: 5, info: 'Однолетнее травянистое растение, вид рода Арбуз (Citrullus) семейства Тыквенные (Cucurbitaceae)', img: "https://i0.wp.com/sadovodu.com/wp-content/uploads/2017/10/kvadratnyy_arbuz_12_26083819.png"}

  return (
    <Container className='mt-5 d-flex'>
      <Col md={4}>
        <Image width={300} height={300} src={product.img}/>
      </Col>
      <Col md={4} className='mt-4'>
        <Row className='d-flex flex-column align-items-center'>
          <h2>{product.name}</h2>
        </Row>
        <div>
          {product.info}
        </div>
        <div className='d-flex ms-2 mt-3 align-items-center'>
          {product.price} ₽
          <Button variant={'outline-dark'} className='ms-5 mr-3'>Купить</Button>
        </div>
      </Col>
      <Col md={4}>
        <div 
          className='d-flex align-items-center justify-content-center mt-5'
          style={{background: `url(${like}) no-repeat center center`, width: 40, height: 40, backgroundSize: 'contain'}}
        >
          {product.rating}
        </div>
      </Col>
    </Container>
  );
};

export default ProductPage;