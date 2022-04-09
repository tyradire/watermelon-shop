import React from 'react';
import { Container, Card, Form, Button, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import './Auth.css';

const Auth = () => {

  const location = useLocation()
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card className='p-5 card'>
        <h2 className='m-auto'>
          Авторизация
        </h2>
        <Form className='m-auto'>
          <Form.Control 
            className='mt-3'
            placeholder='Введите ваш Email'
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите ваш пароль'
          />
          <Row
            className='d-flex justify-content-between mt-3 pl-3 pr3'
          >
            {
              isLogin ? <div>Нет аккаунта? <Link to={REGISTRATION_ROUTE}></Link></div>
              : <div>Есть аккаунт? <Link to={LOGIN_ROUTE}>Войти</Link></div>
            }
            <Button
              className='mt-3 align-self-end'
              variant='online-success'
            >
              Войти
            </Button>
          </Row>
        </Form>
      </Card>

    </Container>
  );
}

export default Auth;