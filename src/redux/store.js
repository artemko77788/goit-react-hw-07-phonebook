import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReduser from './todoSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReduser = combineReducers({
  todos: todoReduser,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReduser = persistReducer(persistConfig, rootReduser);

const store = configureStore({
  reducer: persistedReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
