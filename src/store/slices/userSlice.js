import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginApi from '../../utils/loginApi';

export const login = createAsyncThunk(
  'user/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await loginApi(username, password);
      return { user: response, isLoggedIn: true };
    } catch (error) {
      //console.error(error);
      return thunkAPI.rejectWithValue('Invalid credentials');
    }
  }
);

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [login.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.isLoggedIn = false;
    },
  },
});

export default userSlice.reducer;
