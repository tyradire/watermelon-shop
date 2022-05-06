import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../index';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { SHOP_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, FAVOURITES_ROUTE } from '../../utils/consts';
import BasketContainer from '../BasketContainer/BasketContainer';
import like from '../../assets/like-active.svg';

const NavBar = observer(() => {

  const location = useLocation()
  const notBasket = location.pathname !== BASKET_ROUTE
  const isFavourites = location.pathname === FAVOURITES_ROUTE

  const {user} = useContext(Context);
  const {product} = useContext(Context);
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('jwt');
    user.setUser({});
    user.setIsAuth(false);
    user.setLikes([]);
    product.clearBasket();
  }

  return (
    <Navbar className='p-0 navbar' bg="dark" variant="dark">
      <Container>
        <Nav>
        <Navbar.Brand className="text-decoration-none text-white" href={SHOP_ROUTE}>
          Watermelon Shop
        </Navbar.Brand>
        {user.isAuth ? 
        <Nav.Link className={`text-decoration-none  d-inline ${isFavourites ? 'text-danger' : ''}`} href={FAVOURITES_ROUTE}>
          Favourites <img src={like} alt="Лайк" width={16} height={16} />
        </Nav.Link> : ''
        }
        </Nav>
        {user.isAuth ?
          <Nav>
            <p className='text-white-50 m-3'>{user.email}</p>
            {notBasket ? <BasketContainer /> : ''}
            {user.role === 'ADMIN' ? <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)} className="ms-2 m-2" >Админ панель</Button> : ''}
            <Button variant={'outline-light'} onClick={() => signOut()} className="ms-2 m-2">Выйти</Button>
          </Nav>
          :
          <Nav>
            <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)} className="m-2">Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
})

export default NavBar;