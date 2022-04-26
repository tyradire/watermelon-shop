import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { SHOP_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE, BASKET_ROUTE } from '../utils/consts';
import BasketContainer from './BasketContainer';

const NavBar = observer(() => {

  const location = useLocation()
  const notBasket = location.pathname !== BASKET_ROUTE

  const {user} = useContext(Context);
  const navigate = useNavigate();

  console.log(user)

  const signOut = () => {
    localStorage.removeItem('jwt');
    user.setUser({});
    user.setIsAuth(false);
  }

  return (
    <Navbar className='p-0' bg="dark" variant="dark">
      <Container>
        <Link className="text-decoration-none text-white" to={SHOP_ROUTE}>
          Watermelon Shop
        </Link>
        {user.isAuth ?
          <Nav >
            {notBasket ? <BasketContainer /> : ''}
            {user.getRole === 'ADMIN' ? <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)} className="ms-2 m-2" >Админ панель</Button> : ''}
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