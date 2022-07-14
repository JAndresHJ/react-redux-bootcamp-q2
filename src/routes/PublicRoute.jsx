import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  component: Component,
  isLoggedIn,
  setIsLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Redirect to='/api/products' />
        ) : (
          <Component check={true} setIsLoggedIn={setIsLoggedIn} {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
