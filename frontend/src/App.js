import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './index';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { getToken } from './utils/ApiAuth';

const App = observer(() => {

  const {user} = useContext(Context);
  
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getToken(jwt)
      .then((res) => {
        user.setUser(true)
        user.setIsAuth(true);
      })
      .catch(err => console.log(err))
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
