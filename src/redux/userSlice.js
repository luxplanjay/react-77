import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
});

export const userReducer = userSlice.reducer;
