import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// Pages
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Order from '../pages/Order';
import Favorites from '../pages/Favorites';

export const AppRouter = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute path='/login' component={Login} isLoggedIn={isLoggedIn} />
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
        <PrivateRoute
          exact
          path='/order'
          component={Order}
          isLoggedIn={isLoggedIn}
        />
        <PrivateRoute
          exact
          path='/favorites'
          component={Favorites}
          isLoggedIn={isLoggedIn}
        />
        <Redirect to='/login' />
      </Switch>
    </Router>
  );
};
