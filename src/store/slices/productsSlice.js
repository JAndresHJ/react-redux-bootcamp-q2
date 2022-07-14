import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/products',
        {
          headers: {
            'X-API-KEY': process.env.REACT_APP_PRODUCTS_API_KEY,
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      const data = await response.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching products');
    }
  }
);

const initialState = {
  products: [],
  loading: false,
  favorites: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const product = action.payload;
      const productIdx = state.products.items.findIndex(
        (favProduct) => favProduct.id === product.id
      );
      const favoriteProduct = state.products.items[productIdx];
      state.products.items[productIdx] = {
        ...favoriteProduct,
        isFavorite: true,
      };
      const favoriteProductIdx = state.favorites.findIndex(
        (favProduct) => favProduct.id === product.id
      );

      if (favoriteProductIdx === -1) {
        state.favorites.push(product);
      }
    },
    removeFromFavorites: (state, action) => {
      const favoriteProduct = action.payload;
      const productIdx = state.products.items.findIndex(
        (product) => favoriteProduct.id === product.id
      );
      state.products.items[productIdx] = {
        ...favoriteProduct,
        isFavorite: false,
      };
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== favoriteProduct.id
      );
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default productsSlice.reducer;

export const productsActions = productsSlice.actions;
