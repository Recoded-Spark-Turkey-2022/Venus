/* eslint-disable consistent-return */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getDocs, collection, addDoc } from 'firebase/firestore';

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
export const addListing = createAsyncThunk(
  'listing/addListing',
  async (_, { getState }) => {
    try {
      const collectionRef = collection(db, 'listings');
      const response = await addDoc(collectionRef, getState().listing.listing);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    addToListing: (state, action) => {
      state.listing = state.listing.push(action.payload);
    },
  },
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
    builder.addCase(addListing.fulfilled, (state, action) => {
      state.listing = [...state.listing, action.payload];
    });
  },
});

export default listingSlice.reducer;
export const { addToListing } = listingSlice.actions;
export const getAllListings = (state) => state.listing.listing;
export const loadingState = (state) => state.listing.loading;
