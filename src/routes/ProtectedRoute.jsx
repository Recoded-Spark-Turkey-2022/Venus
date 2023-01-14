import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectUserLoggedIn } from '../features/userSlice/userSlice';

const ProtectedRoute = () => {
  const isUserLoggedIn = useSelector(selectUserLoggedIn);

  console.log(isUserLoggedIn);
  return isUserLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
