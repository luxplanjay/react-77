import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './accountSlice';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    account: accountReducer,
  },
});
