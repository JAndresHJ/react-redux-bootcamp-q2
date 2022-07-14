import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cartActions } from './cartSlice';

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/orders',
        {
          headers: {
            'X-API-KEY': '4GY3hxhbpS1hM2rTUhv5U6gTgEyu99SxLRpOVzAe',
          },
          method: 'POST',
          body: '',
        }
      );
      const data = await response.json();
      thunkAPI.dispatch(cartActions.clearCart());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error while creating the order');
    }
  }
);

const initialState = {
  order: null,
  loading: false,
};

const orderSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.order = null;
    },
  },
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.loading = true;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.order = action.payload;
      state.loading = false;
    },
    [createOrder.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
