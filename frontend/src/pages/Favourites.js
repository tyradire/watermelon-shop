import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Empty from '../components/Empty/Empty';
import FavouriteList from '../components/FavouriteList';
import VendorBar from '../components/VendorBar';
import { Context } from '../index';
import './Favourites.css';

const Favourites = observer(() => {

  const {user} = useContext(Context);

  return (
    <div>
      <div className='favourites'>
        <div>
          <VendorBar />
        </div>
        <div>
          { user.likes.length > 0
            ? <FavouriteList /> 
            : <Empty location={'избранном'} />
          }
        </div>
      </div>
    </div>
)});

export default Favourites;