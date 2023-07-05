import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
});

export const persistor = persistStore(store);
