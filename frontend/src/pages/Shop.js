import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VendorBar from '../components/VendorBar';

const Shop = () => {
  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3}>
          <VendorBar/>
        </Col>
        <Col md={9}>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;