import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions, productsActions } from '../../store';

// Components
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {
  StyledCard,
  ButtonContainer,
  PriceContainer,
  IconContainer,
} from './ProductCard.styled';
import { StyledButton } from '../common/styled.components';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const ProductCard = ({ product, isFavorite }) => {
  const { name, price, categories, images } = product;
  const [alert, setAlert] = useState({
    open: false,
    message: '',
  });
  const dispatch = useDispatch();

  /**
   * Adds the current product to the cart state with a
   * quantity property.
   */
  const onAddProduct = () => {
    dispatch(cartActions.addProduct({ ...product, quantity: 1 }));
  };

  /**
   * It will add a product to favorites if is not added yet
   * otherwise it will remove it.
   */
  const addOrRemoveFavorite = () => {
    if (product.isFavorite || isFavorite) {
      dispatch(productsActions.removeFromFavorites(product));
      setAlert({ open: true, message: 'Removed from favorites!' });
    } else {
      dispatch(productsActions.addToFavorites(product));
      setAlert({ open: true, message: 'Added to favorites!' });
    }
  };

  return (
    <StyledCard>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={alert.open}
        autoHideDuration={3000}
        onClose={() => setAlert({ ...alert, open: false })}
      >
        <Alert severity='success' sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
      <CardMedia component='img' height='150' image={images[0]} alt={name} />
      <CardContent>
        <Typography fontWeight='bold' variant='body1' gutterBottom>
          {name}
        </Typography>
        <Typography variant='subtitle2'>{categories}</Typography>
        <PriceContainer>
          <IconContainer>
            <FavoriteIcon
              style={{
                color: product.isFavorite || isFavorite ? 'red' : '#e3e3e3',
              }}
              onClick={addOrRemoveFavorite}
            />
          </IconContainer>
          <Typography
            fontWeight='bold'
            mt={2}
            mb={2}
            align='right'
            variant='body2'
          >
            ${price}
          </Typography>
        </PriceContainer>
        <Divider light />
        <ButtonContainer>
          <StyledButton onClick={onAddProduct} fullWidth variant='contained'>
            Add to Cart
          </StyledButton>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
