import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  ButtonContainer,
  StyledCard,
} from '../../components/ProductCard/ProductCard.styled';
import { MainContainer } from '../Products/Products.styled';
import { StyledButton } from '../../components/common/styled.components';
import { productsActions } from '../../store';

const Favorites = () => {
  const { favorites } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  /**
   * Removes the current product form the
   * products slice.
   * @param {*} product
   */
  const removeFromFavorites = (product) => {
    dispatch(productsActions.removeFromFavorites(product));
  };

  return (
    <div>
      {favorites.length > 0 ? (
        <>
          <h1>Favorites</h1>
          <MainContainer>
            {favorites?.map((product) => (
              <StyledCard key={product.id}>
                <CardMedia
                  component='img'
                  height='150'
                  image={product.images[0]}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant='h6' gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant='subtitle2'>
                    {product.categories}
                  </Typography>
                  <Typography
                    fontWeight='bold'
                    mt={2}
                    mb={2}
                    align='right'
                    variant='body2'
                  >
                    ${product.price}
                  </Typography>
                  <Divider light />
                  <ButtonContainer>
                    <StyledButton
                      onClick={() => removeFromFavorites(product)}
                      fullWidth
                      variant='contained'
                    >
                      Remove from favorites
                    </StyledButton>
                  </ButtonContainer>
                </CardContent>
              </StyledCard>
            ))}
          </MainContainer>
        </>
      ) : (
        <Typography mt={4} align='center' variant='h5'>
          You do not have favorites products. Browse our{' '}
          <Link to='/products'>products</Link>
        </Typography>
      )}
    </div>
  );
};

export default Favorites;
