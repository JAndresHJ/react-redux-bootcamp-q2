import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store';

// Components
import { StyledButton } from '../../../components/common/styled.components';
import { Column, Row } from '../../../components/common/styled.components';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
  ProductContainer,
  ProductDetailsContainer,
  StyledImg,
  DetailsWrapper,
  PriceContainer,
  PriceQuantityContainer,
} from './Product.styled';

const getTotal = (quantity, price) => quantity * price;

const Product = ({ product, quantity }) => {
  const dispatch = useDispatch();

  const onRemoveProduct = () => {
    dispatch(cartActions.removeCartProduct(product.id));
  };

  const onQuantityChange = (event) => {
    dispatch(
      cartActions.addProduct({
        ...product,
        quantity: parseInt(event.target.value) - quantity,
      })
    );
  };

  return (
    <ProductContainer>
      <ProductDetailsContainer>
        <StyledImg src={product.images[0]} alt='product_img' />
        <DetailsWrapper>
          <Typography variant='h6'>{product.name}</Typography>
        </DetailsWrapper>
      </ProductDetailsContainer>
      <PriceQuantityContainer>
        <Row>
          <Column>
            <TextField
              defaultValue={quantity}
              onChange={onQuantityChange}
              label='Quantity'
              type='number'
              inputProps={{ min: 1 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledButton onClick={onRemoveProduct} variant='contained'>
              Remove
            </StyledButton>
          </Column>
          <PriceContainer>
            <Typography>Price: </Typography>
            <Typography>{product.price}</Typography>
          </PriceContainer>
          <PriceContainer>
            <Typography>Total: </Typography>
            <Typography>
              ${getTotal(quantity, product.price).toFixed(2)}
            </Typography>
          </PriceContainer>
        </Row>
      </PriceQuantityContainer>
    </ProductContainer>
  );
};

export default Product;
