import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createVendor } from '../../utils/VendorApi';

const DeleteProduct = ({ show, onHide }) => {

  const [value, setValue] = useState('');

  const test = () => {
    createVendor({name: value}).then(data => {
      setValue('');
      onHide();
    })
  }

  return (
    <div>
      <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Удалить производителя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Введите название производителя'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={test}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default DeleteProduct;