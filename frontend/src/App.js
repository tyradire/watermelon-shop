import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './index';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { Spinner } from 'react-bootstrap';
import { get }

const App = observer(() => {

  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
  })

  if (loading) {
    return <Spinner className='d-flex align-items-center justify-content-center' animation={"grow"}/>
}

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
