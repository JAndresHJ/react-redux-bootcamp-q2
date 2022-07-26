import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store';

// Components
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { MenuLink } from '../../styles/components/Header.styles';

const UserMenu = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const logout = () => {
    if (isLoggedIn) {
      dispatch(userActions.logout());
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size='large'
        aria-label='user'
        aria-controls='menu-header'
        aria-haspopup='true'
        onClick={handleMenu}
        sx={{
          color: 'white',
        }}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <MenuLink onClick={logout} to='/login'>
            {isLoggedIn ? 'Logout' : 'Login'}
          </MenuLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MenuLink to='/favorites'>Favorites</MenuLink>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
