import React, { useContext } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import likeBtn from '../../assets/like.svg';
import likeBtnActive from '../../assets/like-active.svg';
import { PRODUCT_ROUTE } from '../../utils/consts';
import { addToBasket, deleteOnePiece } from '../../utils/BasketApi';
import {Context} from "../../index";
import { observer } from 'mobx-react-lite';
import './ProductItem.css';
import { addLike, deleteLike } from '../../utils/LikeApi';
import ButtonWithCounter from '../ButtonWithCounter/ButtonWithCounter';

const ProductItem = observer(({ card, vendor, vendorId, productId, alert }) => {

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

  const notAuth = () => {
    alert(true);
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

  const deleteProduct = () => {
    console.log('удаление')
    deleteOnePiece(card.id);
    product.deleteProductPiece(card.id);
  }

  // src={like ? likeBtn : likeBtnActive}

  return (
    <Col md={3} className='product-item' >
      <Card style={{width: 190}} border={'light'} bg={'light'} >
        <Image className='product-item__image' width={190} height={190} src={process.env.REACT_APP_PUBLIC_URL + card.img} onClick={() => navigate(PRODUCT_ROUTE + '/' + card.id)}/>
        <div className='text-black-50 mt-1 mx-1 d-flex justify-content-between align-items-center'>
          <div className='product-item__product-name'>{card.name}</div>
          <div className='d-flex align-items-center'>
            <Image className='product-item__like-btn'
              width={16} 
              height={16} 
              src={
                user.likes.includes(productId) ? likeBtnActive : likeBtn
              }
              onClick={user.isAuth ? toggleLike : notAuth}/>
          </div>
        </div>
        <div style={{textAlign: 'center'}} className='text-black-50 product-item__vendor-name'>{vendor}</div>
      </Card>
      {/* <Button 
        style={{width: 190}} 
        className="rounded-0" 
        variant={
          Object.keys(product.basket).includes(productId + '') ?
          "success" :
          "outline-success"
        } 
        size="sm" 
        onClick={addProduct} 
        disabled={!user.isAuth}
        >
          {Object.keys(product.basket).includes(productId + '') ? 'Добавить ещё' : 'Добавить в корзину'}
      </Button> */}
      <ButtonWithCounter productId={productId} addProduct={addProduct} deleteProduct={deleteProduct} card={card} />
    </Col>
    
  );
});

export default ProductItem;