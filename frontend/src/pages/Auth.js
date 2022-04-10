import React from 'react';
import { Container, Card, Form, Button, Col } from 'react-bootstrap';
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
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </h2>
        <Form className='d-flex flex-column'>
          <Form.Control 
            className='mt-3'
            placeholder='Введите ваш Email'
            type='email'
          />
          <Form.Control 
            className='mt-3'
            placeholder='Введите ваш пароль'
            type='password'
          />
          <Col
            className='d-flex justify-content-between mt-3 pl-3 pr-3'
          >
            {
              isLogin ? <div>Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйся</Link></div>
              : <div>Есть аккаунт? <Link to={LOGIN_ROUTE}>Войти</Link></div>
            }
            <Button
              variant={'outline-success'}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Col>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;