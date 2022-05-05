import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import './UnauthorizedAlert.css';

const UnauthorizedAlert = ({ show, setShow, location }) => {

  return (
    <Alert className='mt-5 w-75 mx-auto unauthorized-alert' show={show} variant="warning">
        <div className='d-flex '>
          <p className='unauthorized-alert__description'>
            Только зарегистрированные пользователи могут добавлять товары в {location}
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
  );
};

export default UnauthorizedAlert;