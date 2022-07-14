import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CartWrapper,
  SummaryItem,
  SummaryWrapper,
  ProductWrapper,
  DetailsContainer,
} from './Cart.styled';
import { StyledButton } from '../../components/common/styled.components';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../../store';
import { useHistory } from 'react-router-dom';

// Components
import Typography from '@mui/material/Typography';
import Product from './Product/Product';
import Loading from '../../components/common/Loading';

const Cart = () => {
  const { cartProducts, totalCost } = useSelector((state) => state.cart);
  const { loading, order } = useSelector((state) => state.order);
  const { push } = useHistory();
  const dispatch = useDispatch();
  const totalItems = cartProducts.reduce((acc, object) => {
    return acc + object.quantity;
  }, 0);

  const onCheckout = () => {
    dispatch(createOrder());
  };

  useEffect(() => {
    if (order && cartProducts.length === 0) {
      push('/api/order');
    }
  }, [order, cartProducts, push, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {cartProducts.length > 0 ? (
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
              {cartProducts.map(({ product, quantity }, idx) => (
                <Product
                  key={`${product.id}-${idx}`}
                  product={product}
                  quantity={quantity}
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
                  {totalItems}
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
                  {totalCost.toFixed(2)}
                </Typography>
              </SummaryItem>
              <StyledButton onClick={onCheckout} fullWidth variant='contained'>
                Checkout
              </StyledButton>
            </SummaryWrapper>
          </CartWrapper>
        </>
      ) : (
        <Typography mt={4} align='center' variant='h5'>
          There is no items in your Cart. Browse our{' '}
          <Link to='/api/products'>products</Link>
        </Typography>
      )}
    </div>
  );
};

export default Cart;
