import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FavouriteList from '../components/FavouriteList';
import VendorBar from '../components/VendorBar';

const Favourites = () => {

  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3} className='mt-2'>
          <VendorBar />
        </Col>
        <Col md={9}>
          <FavouriteList />
        </Col>
      </Row>
    </Container>
)};

export default Favourites;