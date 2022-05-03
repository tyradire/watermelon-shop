import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

const VendorBar = observer(() => {
  
  const { product } = useContext(Context);

  return (
    <ListGroup>
      <ListGroup.Item style={{cursor: 'pointer', fontWeight: 'bold'}} onClick={() => product.setSelectedVendor({id: '', name: ''})}>
        Все продавцы
      </ListGroup.Item>
      {Object.keys(product.vendors).map(vendor => 
        <ListGroup.Item 
          style={{cursor: 'pointer'}}
          active={vendor === product.selectedVendor.id}
          onClick={() => product.setSelectedVendor({id: vendor, name:product.vendors[vendor]})}
          key={vendor}>
          {product.vendors[vendor]}
        </ListGroup.Item>
        )}
    </ListGroup>
  );

});

export default VendorBar;