import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { SHOP_ROUTE } from '../../utils/consts';
import './NavBar.css';

const NavBar = observer(() => {
  const {user} = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link className="Link" to={SHOP_ROUTE}>
          Watermelon Shop
        </Link>
        {user.isAuth ?
          <Nav className="ml-auto">
            <Button variant={'outline-light'} >Админ панель</Button>
            <Button variant={'outline-light'} className="ml-2">Войти</Button>
          </Nav>
          :
          <Nav className="ml-auto">
            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
})

export default NavBar;