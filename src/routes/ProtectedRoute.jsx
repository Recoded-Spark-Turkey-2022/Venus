import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import {
  selectUserLoggedIn,
  setUserLoggedIn,
  selectUserStatus,
} from '../features/userSlice/userSlice';

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector(selectUserStatus);
  console.log(userStatus);
  const accessToken = localStorage.getItem('token');
  useEffect(() => {
    const unsb = () => {
      dispatch(setUserLoggedIn({ isLoggedIn: accessToken }));
      console.log('hey');
    };
    return () => {
      unsb();
    };
  }, []);
  const isUserLoggedIn = useSelector(selectUserLoggedIn);
  console.log(accessToken);
  console.log(isUserLoggedIn);

  return accessToken || isUserLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default ProtectedRoute;
