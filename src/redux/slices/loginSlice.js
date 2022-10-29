import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  SigninParams,
  signinUser,
} from '../../services/authservice/auth.service';
import {removeAuth, setAuth} from '../../utils/storage';

const initialState = {
  result: null,
  error: '',
  loading: false,
};
export const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    storeToken(state, action) {
      state.result = action.payload;
    },
    logoutUsers(state) {
      storeToken(null);
      removeAuth();
      state.result = null;
      state.loading = false;
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(loginuser.pending, state => {
      state.loading = true;
      state.error = '';
      state.result = null;
    });
    builder.addCase(loginuser.fulfilled, (state, action) => {
      setAuth(action?.payload?.accessToken);
      state.loading = false;
      state.result = action.payload.accessToken;
    });
    builder.addCase(loginuser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const {storeToken, logoutUsers} = loginSlice.actions;
export const loginuser = createAsyncThunk(
  'login',
  async (params) => {
    return (await signinUser(params)).data;
  },
);
