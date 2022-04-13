import React, { useState, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE, ERRORS } from '../utils/consts';
import { register, authorize, getToken } from '../utils/ApiAuth';
import { Context } from '../index';
import './Auth.css';
import Register from '../components/Register';
import Login from '../components/Login';

const Auth = observer(() => {

  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE

  const [registerError, setRegisterError] = useState('');
  const [loginError, setLoginError] = useState('');

  // useEffect(() => {
  //   const jwt = localStorage.getItem('jwt');
  //   if (jwt) {
  //     getToken(jwt)
  //     .then((res) => {
  //       user.setIsAuth(true);
  //       navigate(SHOP_ROUTE);
  //     })
  //     .catch(err => console.log(err));
  //   }
  // }, [])

  const handleRegisterSubmit = (email, password) => {
    register(email, password)
    .then(() => {
      handleLoginSubmit(email, password);
    })
    .catch((err) => {
      console.log(err);
      setRegisterError(ERRORS[err]);
    })
  }

  const handleLoginSubmit = (email, password) => {
    authorize(email, password)
    .then((res) => {
      localStorage.setItem('jwt', res.token);
      user.setUser(user);
      console.log(user)
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);

    })
    .catch((err) => {
      console.log(err);
      setLoginError(ERRORS[err]);
    })
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card className='p-5 card'>
        <h2 className='m-auto'>
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </h2>
        {
          isLogin ? <Login onSubmitLogin={handleLoginSubmit} loginError={loginError} /> : <Register onSubmitRegister={handleRegisterSubmit} registerError={registerError} />
        }
      </Card>
    </Container>
  );
});

export default Auth;