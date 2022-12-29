import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isLoggedin = true;

  return isLoggedin ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
