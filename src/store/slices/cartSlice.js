import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const existingCartItemIndex = state.cartProducts.findIndex(
        (cartProduct) => product.id === cartProduct.product.id
      );
      const existingCartProduct = state.cartProducts[existingCartItemIndex];

      if (existingCartProduct) {
        const updatedItem = {
          ...existingCartProduct,
          quantity: existingCartProduct.quantity + product.quantity,
        };
        state.cartProducts[existingCartItemIndex] = updatedItem;
        state.totalCost = state.totalCost + product.price * product.quantity;
      } else {
        state.totalCost = state.totalCost + product.price;
        state.cartProducts.push({ product, quantity: 1 });
      }
    },
    removeCartProduct: (state, action) => {
      const id = action.payload;
      const existingCartItemIndex = state.cartProducts.findIndex(
        (cartProduct) => id === cartProduct.product.id
      );
      const existingCartProduct = state.cartProducts[existingCartItemIndex];

      state.totalCost =
        state.totalCost -
        existingCartProduct.product.price * existingCartProduct.quantity;
      state.cartProducts = state.cartProducts.filter(
        (cartProduct) => cartProduct.product.id !== id
      );
    },
    clearCart: (state) => {
      state.cartProducts = [];
      state.totalCost = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
