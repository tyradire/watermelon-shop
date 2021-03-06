import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import ProductItem from './ProductItem/ProductItem';
import './FavouriteList.css';

const FavouriteList = observer(() => {

  const { product } = useContext(Context)
  const { user } = useContext(Context)

  return (
    <div className='product-list'>
      {
  product.products.map((item) => {
    if ((item.vendorId === ( Number(product.selectedVendor.id) || item.vendorId )) && user.likes.includes(item.id)) {
      return <ProductItem key={item.id} card={item} vendor={product.vendors[item.vendorId]} vendorId={item.vendorId} productId={item.id} />
    }
  })
}
    </div>
  );
});

export default FavouriteList;