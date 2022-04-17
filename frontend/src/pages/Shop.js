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
    Promise.all([getVendors(), getProducts()])
    .then(([ vendors, products ]) => {
      product.setVendors(vendors)
      product.setProducts(products)
    })
    //.catch(err => {
    
  }, [])

  useEffect(() => {
    getProducts(product.selectedVendor.id).then(data => product.setProducts(data))
  }, [product.selectedVendor])

  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3} className='mt-2'>
          <VendorBar />
        </Col>
        <Col md={9}>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;