/* eslint-disable consistent-return */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getDocs, collection } from 'firebase/firestore';

import { db } from '../../firebase/firebase.config';

const initialState = {
  listing: [],
  loading: true,
  error: '',
};
export const fetchListsing = createAsyncThunk(
  'listing/fetchListsing',
  async () => {
    try {
      const newArr = [];
      const querySnapshot = await getDocs(collection(db, 'listings'));
      querySnapshot.forEach((doc) => {
        return newArr.push(doc.data());
      });
      return newArr;
    } catch (error) {
      console.log(error);
    }
  }
);
export const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListsing.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchListsing.fulfilled, (state, action) => {
      state.loading = false;
      state.listing = action.payload;
      state.error = '';
    });
    builder.addCase(fetchListsing.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
      state.listing = [];
    });
  },
});

export default listingSlice.reducer;

export const getAllListings = (state) => state.listing.listing;
export const loadingState = (state) => state.listing.loading;
