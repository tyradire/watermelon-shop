import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { getVendors } from '../utils/VendorApi';
import { getProducts } from '../utils/ProductApi';
import { getToken } from '../utils/ApiAuth';

const AppRouter = () => {

  const {user} = useContext(Context);
  const {product} = useContext(Context);

  useEffect(() => {
    Promise.all([getVendors(), getProducts() ])
    .then(([ vendors, products ]) => {
      product.setVendors(vendors);
      product.setProducts(products);

    })
    //.catch(err => {
    
  }, [])

  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={<Component/>} exact/>
      )}
      {publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={<Component/>} exact/>
      )}
      <Route to={SHOP_ROUTE} />
    </Routes>
  );
}

export default AppRouter;