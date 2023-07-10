import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './accountSlice';
import { userReducer } from './userSlice';

const customMiddleware = store => next => action => {
  console.log('custom middleware!!!!!');
  next(action);
};

const a1 = {
  type: 'a1',
  payload: 1,
  meta: {
    ga: true,
  },
};

const a2 = {
  type: 'a2',
  payload: 2,
  meta: {
    ga: true,
  },
};

const a3 = {
  type: 'a3',
  payload: 3,
};

const googleMiddleware = store => next => action => {
  if (action?.meta?.ga) {
    // GA.send(action);
  }

  console.log('googleMiddleware');
  next(action);
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    account: accountReducer,
  },
  middleware: getDefaultMiddleware => {
    return [customMiddleware, ...getDefaultMiddleware(), googleMiddleware];
  },
});
