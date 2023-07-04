import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { accountReducer } from './accountSlice';
import { userReducer } from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  account: accountReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
