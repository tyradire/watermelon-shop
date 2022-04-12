import React, {useState} from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    
  }

  return (
    <Form className='d-flex flex-column'>
      <Form.Control 
        className='mt-3'
        placeholder='Введите ваш Email'
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Form.Control 
        className='mt-3'
        placeholder='Введите ваш пароль'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Col
        className='d-flex justify-content-between mt-3 pl-3 pr-3'
      >
        <div>Есть аккаунт? <Link to={LOGIN_ROUTE}>Войти</Link></div>
        <Button
          variant={'outline-success'}
          onClick={handleSubmit}
        >
          {isLogin ? 'Войти' : 'Регистрация'}
        </Button>
      </Col>
    </Form>
  );
};

export default Login;