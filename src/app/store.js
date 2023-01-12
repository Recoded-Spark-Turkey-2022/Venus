// eslint-disable-next-line no-unused-vars
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import listingReducer from '../features/listings/listingSlice';

export const store = configureStore({
  reducer: {
    listing: listingReducer,
  },
  // eslint-disable-next-line no-shadow
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
