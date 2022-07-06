import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import { Header } from '../components/Header';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute
          path='/login'
          setIsLoggedIn={setIsLoggedIn}
          component={Login}
          isLoggedIn={isLoggedIn}
        />
        <PrivateRoute
          exact
          path='/products'
          component={Products}
          isLoggedIn={isLoggedIn}
        />
        <PrivateRoute
          exact
          path='/cart'
          component={Cart}
          isLoggedIn={isLoggedIn}
        />
        <Redirect to='/login' />
      </Switch>
    </Router>
  );
};
