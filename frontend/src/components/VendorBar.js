import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { getVendors } from '../utils/VendorApi';
import './VendorBar.css';
import VendorBarItem from './VendorBarItem';

const VendorBar = observer(() => {
  
  const { product } = useContext(Context);

  useEffect(() => {
    getVendors()
    .then(data => product.setVendors(data))
    .catch(err => console.log(err))
  })

  const selectVendorBar = (id, name) => {
    console.log('func')
    product.setSelectedVendor({id: id, name: name});
  }

  return (
    <div className='vendor-bar' >
      <div action className='vendor-bar__item' onClick={() => product.setSelectedVendor({id: '', name: ''})}>
        Все продавцы
      </div>
      {Object.keys(product.vendors).map(vendor => 
        <VendorBarItem
          onClick={() => selectVendorBar(vendor, product.vendors[vendor])
          }
          id={vendor}
          key={vendor}
          name={product.vendors[vendor]}
          selectVendorBar={selectVendorBar}
        />
        )}
    </div>
  );

});

export default VendorBar;