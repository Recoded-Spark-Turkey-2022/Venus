import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { onAuthStateChanged } from 'firebase/auth';
import { serverTimestamp } from 'firebase/firestore';
import { authentication } from '../../firebase/firebase.config';

const initialState = {
  userName: null,
  userEmail: null,
  timeStamp: null,
  isLoggedIn: localStorage.getItem('token') ? true : null,
  userStatus: false,
};

export const checkUserStatus = createAsyncThunk(
  'user/checkUserStatus',
  async () => {
    try {
      onAuthStateChanged(authentication, (user) => {
        if (user) {
          console.log(user, 'redux-toolkit');
          return true;
        }
        return false;
      });
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.timeStamp = serverTimestamp();

      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setUserLoggedOut: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkUserStatus.pending, (state) => {
      state.userStatus = false;
    });
    builder.addCase(checkUserStatus.fulfilled, (state, action) => {
      state.userStatus = action.payload;
    });
    builder.addCase(checkUserStatus.rejected, (state) => {
      state.userStatus = false;
    });
  },
});

export const { setUserLoggedIn, setUserLoggedOut } = userSlice.actions;

// Responsible for delivering userName
export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserLoggedIn = (state) => state.user.isLoggedIn;
export const selectUserStatus = (state) => state.user.userStatus;
export default userSlice.reducer;
