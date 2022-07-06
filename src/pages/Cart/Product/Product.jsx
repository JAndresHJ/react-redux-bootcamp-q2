import React from 'react';
import { StyledButton } from '../../../components/common/styled.components';
import { Column, Row } from '../../../components/common/styled.components';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { getTotal } from '../Cart';
import {
  ProductContainer,
  ProductDetailsContainer,
  StyledImg,
  DetailsWrapper,
  PriceContainer,
  PriceQuantityContainer,
} from './Product.styled';

const Product = ({ product, onQuantityChange }) => {
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
              defaultValue={1}
              onChange={(e) => onQuantityChange(e, product)}
              label='Quantity'
              type='number'
              inputProps={{ min: 0 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledButton variant='contained'>Remove</StyledButton>
          </Column>
          <PriceContainer>
            <Typography>Price: </Typography>
            <Typography>{product.price}</Typography>
          </PriceContainer>
          <PriceContainer>
            <Typography>Total: </Typography>
            <Typography>
              ${getTotal(product.quantity, product.price).toFixed(2)}
            </Typography>
          </PriceContainer>
        </Row>
      </PriceQuantityContainer>
    </ProductContainer>
  );
};

export default Product;
