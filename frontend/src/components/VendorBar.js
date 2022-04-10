import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

const VendorBar = observer(() => {
  const { product } = useContext(Context);
  return (
    <ListGroup>
      {product.vendors.map(vendor => 
        <ListGroup.Item key={vendor.id}>
          {vendor.name}
        </ListGroup.Item>
        )}
    </ListGroup>
  );
});

export default VendorBar;