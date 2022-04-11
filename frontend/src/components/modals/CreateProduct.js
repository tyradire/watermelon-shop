import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';

const CreateProduct = ({ show, onHide }) => {

  const { product } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить продукт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Выберите производителя</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.vendors.map(vendor =>
                <Dropdown.Item key={vendor.id}>{vendor.name}</Dropdown.Item>  
              )}
            </Dropdown.Menu>
            <Form.Control 
              className='mt-3'
              placeholder='Введите название продукта'
            />
            <Form.Control 
              className='mt-3'
              placeholder='Введите стоимость продукта'
              type='number'
            />
            <Form.Control 
              className='mt-3'
              type='file'
            />
            <hr/>
            <Button
              variant='outline-dark'
              onClick={addInfo}
            >
              Добавить новое свойство
            </Button>
            {info.map(i =>
              <Row>
                <Col md={4}>
                  <Form.Control 
                    placeholder='Введите название свойства'
                  />
                </Col>
                <Col md={4}>
                  <Form.Control 
                    placeholder='Введите описание свойства'
                  />
                </Col>
                <Col md={4}>
                  <Button
                    variant='outline-danger'
                  >
                    Удалить
                  </Button>
                </Col>
              </Row>
            )}
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProduct;