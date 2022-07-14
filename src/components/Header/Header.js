import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Bar,
  Links,
  FlexContainer,
} from '../../styles/components/Header.styles.js';
import UserMenu from './UserMenu.jsx';

const Header = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const { isLoggedIn } = useSelector((state) => state.user);
  const totalItems = cartProducts.reduce((acc, object) => {
    return acc + object.quantity;
  }, 0);

  return (
    <Bar id='myTopnav'>
      <Links to='/'>Wizestore</Links>
      {isLoggedIn && (
        <FlexContainer>
          <Links to='/api/products'>Products</Links>
          <Badge
            sx={{
              '& .MuiBadge-badge': {
                right: 10,
                top: 18,
              },
            }}
            badgeContent={totalItems}
            color='error'
          >
            <Links to='/cart'>
              <ShoppingCartIcon />
            </Links>
          </Badge>
          <UserMenu />
        </FlexContainer>
      )}
    </Bar>
  );
};

export default Header;
