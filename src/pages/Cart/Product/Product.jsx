import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store';

// Components
import {
  StyledButton,
  StyledInput,
} from '../../../components/common/styled.components';
import Typography from '@mui/material/Typography';
import {
  ProductContainer,
  ProductDetailsContainer,
  StyledImg,
  DetailsWrapper,
  PriceContainer,
  PriceQuantityContainer,
  QuantityColumn,
  InputPriceContainer,
} from './Product.styled';

const getTotal = (quantity, price) => quantity * price;

const Product = ({ product, quantity }) => {
  const dispatch = useDispatch();

  /**
   * Remotes the current product from the
   * cart state.
   */
  const onRemoveProduct = () => {
    dispatch(cartActions.removeCartProduct(product.id));
  };

  /**
   * If the value entered is different than 0 the current
   * product will be added to the cart state and update the
   * quantity otherwise the product will be removed.
   * @param {*} event
   */
  const onQuantityChange = (event) => {
    const { value } = event.target;
    if (value === '0') {
      dispatch(cartActions.removeCartProduct(product.id));
    } else {
      dispatch(
        cartActions.addProduct({
          ...product,
          quantity: parseInt(value) - quantity,
        })
      );
    }
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
        <InputPriceContainer>
          <QuantityColumn>
            <StyledInput
              defaultValue={quantity}
              onChange={onQuantityChange}
              label='Quantity'
              type='number'
              inputProps={{ min: 0 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledButton onClick={onRemoveProduct} variant='contained'>
              Remove
            </StyledButton>
          </QuantityColumn>
          <PriceContainer>
            <Typography>Price: </Typography>
            <Typography>${product.price}</Typography>
          </PriceContainer>
          <PriceContainer>
            <Typography>Total: </Typography>
            <Typography>
              ${getTotal(quantity, product.price).toFixed(2)}
            </Typography>
          </PriceContainer>
        </InputPriceContainer>
      </PriceQuantityContainer>
    </ProductContainer>
  );
};

export default Product;
