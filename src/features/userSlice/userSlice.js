import { createSlice } from '@reduxjs/toolkit';
import { serverTimestamp } from 'firebase/firestore';

const initialState = {
  userName: null,
  userEmail: null,
  timeStamp: null,
  isLoggedIn: null,
};

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
});

export const { setUserLoggedIn, setUserLoggedOut } = userSlice.actions;

// Responsible for delivering userName
export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserLoggedIn = (state) => state.user.isLoggedIn;
export default userSlice.reducer;
