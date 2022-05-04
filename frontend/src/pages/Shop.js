import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import ProductList from '../components/ProductList';
import VendorBar from '../components/VendorBar';
import { getProducts } from '../utils/ProductApi';
import {Context} from "../index";
import './Shop.css';

const Shop = observer(() => {

  const [show, setShow] = useState(false);

  const {product} = useContext(Context)

  const alert = () => {
    setShow(true)
    setTimeout(function () {
      setShow(false);
    }, 4000);
  }

  useEffect(() => {
    getProducts(product.selectedVendor.id)
    .then(data => product.setProducts(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3} className='mt-2'>
          <VendorBar />
        </Col>
        <Col md={9}>
          <ProductList alert={alert} />
        </Col>
      </Row>
      <Alert className='mt-5 w-75 mx-auto shop__alert' show={show} variant="warning">
        <div className='d-flex '>
          <p className='shop__alert-description'>
            Только зарегистрированные пользователи могут добавлять товары в избранное
          </p>
          <div>
            <Button size="sm" className='m-1' onClick={() => setShow(false)} variant="success">
              Войти
            </Button>
            <Button size="sm" className='m-1' onClick={() => setShow(false)} variant="success">
              Зарегистрироваться
            </Button>
          </div> 
        </div>   
      </Alert>
    </Container>
  );
});

export default Shop;