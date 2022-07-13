import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../utils/products.json';
import {
  CartWrapper,
  SummaryItem,
  SummaryWrapper,
  ProductWrapper,
  DetailsContainer,
} from './Cart.styled';
import { StyledButton } from '../../components/common/styled.components';

// Components
import Typography from '@mui/material/Typography';
import Product from './Product/Product';

const {
  data: { products },
} = productsData;

const mockCartProducts = [
  products.items[0],
  products.items[1],
  products.items[2],
  products.items[3],
  products.items[4],
];

export const getTotal = (quantity = 1, price) => {
  return quantity * price;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState(mockCartProducts);

  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + getTotal(item.quantity, item.price), 0);

  const onQuantityChange = (event, product) => {
    console.log('Value: ', event.target.value);
    const { value } = event.target;
    if (!value || value === '0') {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      return;
    }
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === product.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: parseInt(event.target.value) }
            : item
        );
      }
    });
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        <>
          <Typography mt={4} align='center' variant='h3'>
            Shopping Cart
          </Typography>
          <CartWrapper>
            <ProductWrapper>
              <DetailsContainer>
                <Typography mb={3} align='left' variant='h5'>
                  Products Details
                </Typography>
              </DetailsContainer>
              {cartItems.map((product, idx) => (
                <Product
                  key={`${product.id}-${idx}`}
                  product={product}
                  onQuantityChange={onQuantityChange}
                />
              ))}
            </ProductWrapper>
            <SummaryWrapper>
              <Typography variant='h4' gutterBottom component='p'>
                Summary
              </Typography>
              <SummaryItem>
                <Typography variant='subtitle1' gutterBottom component='p'>
                  Items:
                </Typography>
                <Typography variant='subtitle1' gutterBottom component='p'>
                  {cartItems.length}
                </Typography>
              </SummaryItem>
              <SummaryItem>
                <Typography
                  fontWeight='bold'
                  variant='subtitle1'
                  gutterBottom
                  component='p'
                >
                  Total Cost:
                </Typography>
                <Typography
                  fontWeight='bold'
                  variant='subtitle1'
                  gutterBottom
                  component='p'
                >
                  {calculateTotal(cartItems).toFixed(2)}
                </Typography>
              </SummaryItem>
              <StyledButton fullWidth variant='contained'>
                Checkout
              </StyledButton>
            </SummaryWrapper>
          </CartWrapper>
        </>
      ) : (
        <Typography mt={4} align='center' variant='h5'>
          There is no items in your Cart. Browse our{' '}
          <Link to='/products'>products</Link>
        </Typography>
      )}
    </div>
  );
};

export default Cart;
