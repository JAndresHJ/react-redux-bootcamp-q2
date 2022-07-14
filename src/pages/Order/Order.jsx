import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { orderActions } from '../../store';

// Components
import Typography from '@mui/material/Typography';
import { OrderContainer } from './Order.styled';
import { StyledButton } from '../../components/common/styled.components';

const Order = () => {
  const { order } = useSelector((state) => state.order);
  const { push } = useHistory();
  const dispatch = useDispatch();

  /**
   * Once the order is completed, redirects
   * to the products page.
   */
  const goToProducts = () => {
    push('./products');
    dispatch(orderActions.clearOrder());
  };

  return (
    <OrderContainer>
      <Typography align='center' variant='h3' gutterBottom component='div'>
        {order.message}
      </Typography>
      <span>
        Your order number is: <b>{order.order}</b>
      </span>
      <StyledButton onClick={goToProducts}>Continue Shopping</StyledButton>
    </OrderContainer>
  );
};

export default Order;
