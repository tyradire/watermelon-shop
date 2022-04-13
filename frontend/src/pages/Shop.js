import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductList from '../components/ProductList';
import VendorBar from '../components/VendorBar';
import { getProducts } from '../utils/ProductApi';
import { getVendors } from '../utils/VendorApi';
import {Context} from "../index";

const Shop = observer(() => {
  const {product} = useContext(Context)

  useEffect(() => {
    getVendors().then(data => product.setVendors(data))
    getProducts().then(data => product.setProducts(data))
  }, [])

  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3} className='mt-2'>
          <VendorBar/>
        </Col>
        <Col md={9}>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;