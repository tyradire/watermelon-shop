import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '../index';
import ProductItem from './ProductItem';

const ProductList = observer(() => {

  const { product } = useContext(Context)


  return (
    <Row className='d-flex'>
      {product.products.map(item => 
         item.vendorId === ( Number(product.selectedVendor.id) || item.vendorId ) ?
          <ProductItem key={item.id} product={item} vendor={product.vendors[item.vendorId]}/>
        : ''
      )}
    </Row>
  );
});

export default ProductList;