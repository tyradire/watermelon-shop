import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Admin = () => {
  return (
    <Container className='d-flex flex-column'>
      <Button variant='outline-dark' className='mt-4 p2'>Добавить производителя</Button>
      <Button variant='outline-dark' className='mt-4 p2'>Добавить продукт</Button>
    </Container>
  );
};

export default Admin;