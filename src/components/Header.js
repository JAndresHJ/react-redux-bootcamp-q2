import React from 'react';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import {
  Bar,
  Links,
  FlexContainer,
} from '../styles/components/Header.styles.js';

const Header = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const totalItems = cartProducts.reduce((acc, object) => {
    return acc + object.quantity;
  }, 0);

  return (
    <Bar id='myTopnav'>
      <Links to='/'>Wizestore</Links>
      <FlexContainer>
        <Badge
          sx={{
            '& .MuiBadge-badge': {
              right: 6,
              top: 17,
              padding: '0 4px',
            },
          }}
          badgeContent={totalItems}
          color='error'
        >
          <Links to='/cart'>Cart</Links>
        </Badge>
        <Links to='/products'>Products</Links>
        <Links to='/login'>Login</Links>
        <Links to='/favorites'>Favorites</Links>
      </FlexContainer>
    </Bar>
  );
};

export default Header;
