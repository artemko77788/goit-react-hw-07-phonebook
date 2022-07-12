import { configureStore } from '@reduxjs/toolkit';
import { contactsApi, contactFilter } from './contactSlise';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [contactFilter.name]: contactFilter.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export default store;
