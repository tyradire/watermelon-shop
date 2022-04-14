import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index';
import { getVendors } from '../../utils/VendorApi';
import { observer } from 'mobx-react-lite';
import { createProduct } from '../../utils/ProductApi';

const CreateProduct = observer(({ show, onHide }) => {

  const { product } = useContext(Context);
  
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  }

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  };

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const addProduct = () => {
    console.log(name, price, file, product.selectedVendor.id, info)
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('vendorId', product.selectedVendor.id);
    // formData.append('info', JSON.stringify(info));
    createProduct(formData).then(data => onHide())
    //createProduct({name, price, vendorId: product.selectedVendor.id}).then(data => onHide())
  }

  useEffect(() => {
    getVendors().then(data => product.setVendors(data))
  }, [])

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
            <Dropdown.Toggle>{product.selectedVendor.name || 'Выберите производителя'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {product.vendors.map(vendor =>
                <Dropdown.Item onClick={() => product.setSelectedVendor(vendor)} key={vendor.id}>{vendor.name}</Dropdown.Item>  
              )}
            </Dropdown.Menu>
            <Form.Control 
              className='mt-3'
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Введите название продукта'
            />
            <Form.Control 
              className='mt-3'
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              placeholder='Введите стоимость продукта'
              type='number'
            />
            <Form.Control 
              className='mt-3'
              type='file'
              onChange={selectFile}
            />
            <hr/>
            <Button
              variant='outline-dark'
              onClick={addInfo}
            >
              Добавить новое свойство
            </Button>
            {info.map(i =>
              <Row className='mt-3' key={i.number}>
                <Col md={4}>
                  <Form.Control 
                    value={i.title}
                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                    placeholder='Введите название свойства'
                  />
                </Col>
                <Col md={4}>
                  <Form.Control 
                    value={i.description}
                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                    placeholder='Введите описание свойства'
                  />
                </Col>
                <Col md={4}>
                  <Button
                    variant='outline-danger'
                    onClick={() => removeInfo(i.number)}
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
        <Button variant='outline-success' onClick={addProduct}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateProduct;