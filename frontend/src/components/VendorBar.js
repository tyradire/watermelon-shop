import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

const VendorBar = observer(() => {
  const { product } = useContext(Context);
  return (
    <ListGroup>
      {product.vendors.map(vendor => 
        <ListGroup.Item 
          style={{cursor: 'pointer'}}
          active={vendor.id === product.selectedVendor.id}
          onClick={() => product.setSelectedVendor(vendor)}
          key={vendor.id}>
          {vendor.name}
        </ListGroup.Item>
        )}
    </ListGroup>
  );
});

export default VendorBar;