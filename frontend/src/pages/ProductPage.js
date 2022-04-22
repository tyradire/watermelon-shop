import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { getOneProduct } from '../utils/ProductApi';
import { addToBasket } from '../utils/BasketApi';
import { useParams } from 'react-router-dom';
import like from '../assets/like.svg';
import { Context } from '../index';

const ProductPage = () => {

  const {product} = useContext(Context)
  const [pageItem, setPageItem] = useState({info: []})
  const {id} = useParams();

  const addProduct = () => {
    addToBasket(id)
    .then((item) => {
      let newProduct = {};
      newProduct[item.product.productId] = { name: pageItem.name, price: pageItem.price, img: pageItem.img, key: item.product.id, quantity: 1, productId: item.product.productId };
      product.addProductToBasket(newProduct);
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    getOneProduct(id)
    .then(product => setPageItem(product))
  }, []);

  return (
    <Container className='mt-5 d-flex'>
      <Col md={4}>
        <Image width={300} height={300} src={process.env.REACT_APP_PUBLIC_URL + pageItem.img}/>
      </Col>
      <Col md={4} className='mt-4'>
        <Row className='d-flex flex-column align-items-center'>
          <h2>{pageItem.name}</h2>
        </Row>
        <div>
          {pageItem.info}
        </div>
        <div className='d-flex ms-2 mt-3 align-items-center'>
          {pageItem.price} &#8381;
          <Button variant={'outline-dark'} className='ms-5 mr-3' onClick={addProduct}>Купить</Button>
        </div>
      </Col>
      <Col md={4}>
        <div 
          className='d-flex align-items-center justify-content-center mt-5'
          style={{background: `url(${like}) no-repeat center center`, width: 40, height: 40, backgroundSize: 'contain'}}
        >
          {pageItem.rating}
        </div>
      </Col>
    </Container>
  );
};

export default ProductPage;