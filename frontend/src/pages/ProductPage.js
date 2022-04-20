import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { getOneProduct } from '../utils/ProductApi';
import { addToBasket } from '../utils/BasketApi';
import like from '../assets/like.svg';
import { useParams } from 'react-router-dom';

const ProductPage = () => {

  const [product, setProduct] = useState({info: []});
  const {id} = useParams();

  const addProduct = () => {
    addToBasket(id)
    .then(product => console.log(product, ' успешно добавлен'))
    .catch(err => console.log(err, ' не добавлен'));
  }

  useEffect(() => {
    getOneProduct(id).then(data => setProduct(data))
  }, []);

  return (
    <Container className='mt-5 d-flex'>
      <Col md={4}>
        <Image width={300} height={300} src={process.env.REACT_APP_PUBLIC_URL + product.img}/>
      </Col>
      <Col md={4} className='mt-4'>
        <Row className='d-flex flex-column align-items-center'>
          <h2>{product.name}</h2>
        </Row>
        <div>
          {product.info}
        </div>
        <div className='d-flex ms-2 mt-3 align-items-center'>
          {product.price} &#8381;
          <Button variant={'outline-dark'} className='ms-5 mr-3' onClick={addProduct}>Купить</Button>
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