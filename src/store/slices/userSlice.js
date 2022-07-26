import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginApi from '../../utils/loginApi';

export const login = createAsyncThunk(
  'user/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await loginApi(username, password);
      return { user: response, isLoggedIn: true };
    } catch (error) {
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
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
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

export const userActions = userSlice.actions;

export default userSlice.reducer;
