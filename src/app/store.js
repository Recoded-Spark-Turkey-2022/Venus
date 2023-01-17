// eslint-disable-next-line no-unused-vars
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import listingReducer from '../features/listings/listingSlice';
import userReducer from '../features/userSlice/userSlice';

export const store = configureStore({
  reducer: {
    listing: listingReducer,
    user: userReducer,
  },
  // eslint-disable-next-line no-shadow
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
