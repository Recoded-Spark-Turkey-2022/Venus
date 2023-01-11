import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectUserLoggedIn } from '../features/userSlice/userSlice';

const ProtectedRoute = () => {
  const isLoggedin = useSelector(selectUserLoggedIn);
  console.log(isLoggedin);

  return isLoggedin ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
