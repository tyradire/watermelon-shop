import React, { useContext } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import likeBtn from '../../assets/like.svg';
import likeBtnActive from '../../assets/like-active.svg';
import { PRODUCT_ROUTE } from '../../utils/consts';
import { addToBasket } from '../../utils/BasketApi';
import {Context} from "../../index";
import { observer } from 'mobx-react-lite';
import './ProductItem.css';
import { addLike, deleteLike } from '../../utils/LikeApi';

const ProductItem = observer(({ card, vendor, vendorId, productId }) => {

  const {product} = useContext(Context)
  const {user} = useContext(Context);
  const navigate = useNavigate();

  const toggleLike = () => {
    if (user.likes.includes(card.id)) {
      deleteLike(card.id)
      .then(res => user.deleteLikeById(card.id))
      .catch(err => console.log(err))
    } else {
    addLike(card.id)
    .then(res => user.addLikeById(productId))
    .catch(err => console.log(err))}
  }

  const addProduct = () => {
    addToBasket(card.id)
    .then((item) => {
      let newProduct = {};
      newProduct[item.product.productId] = { name: card.name, vendorId: vendorId, price: card.price, img: card.img, key: item.product.id, quantity: 1, productId: item.product.productId };
      product.addProductToBasket(newProduct);
    })
    .catch(err => console.log(err));
  };

  // src={like ? likeBtn : likeBtnActive}

  return (
    <Col md={3} className='mt-1' >
      <Card style={{width: 190, borderRadius: 4}} border={'light'} bg={'light'} >
        <Image className='product-item__image' width={190} height={190} src={process.env.REACT_APP_PUBLIC_URL + card.img} onClick={() => navigate(PRODUCT_ROUTE + '/' + card.id)}/>
        <div className='text-black-50 mt-1 mx-1 d-flex justify-content-between align-items-center'>
          <div className='product-item__product-name'>{card.name}</div>
          <div className='d-flex align-items-center'>
            {/* <div>{card.rating}&nbsp;</div> */}
            <Image className='product-item__like-btn' 
              width={16} 
              height={16} 
              src={
                user.likes.includes(productId) ? likeBtnActive : likeBtn
              } 
              onClick={toggleLike}/>
          </div>
        </div>
        <div style={{textAlign: 'center'}} className='text-black-50 product-item__vendor-name'>{vendor}</div>
      </Card>
      <Button style={{width: 190}} className="rounded-0" variant="outline-success" size="sm" onClick={addProduct}>Добавить в корзину</Button>
    </Col>
    
  );
});

export default ProductItem;