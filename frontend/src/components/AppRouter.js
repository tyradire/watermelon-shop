import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';

function AppRouter(props) {

  const {user} = useContext(Context);
  console.log(user);

  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} path={path} component={Component} exact/>
      )}
      {publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} component={Component} exact/>
      )}
      <Navigate to={SHOP_ROUTE} />
    </Routes>
  );
}

export default AppRouter;