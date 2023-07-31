import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AuthRoute = ({ path, element: Element }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return <Route path={path} element={isAuthenticated ? <Element /> : <Navigate to="/login" />} />;
};

export default AuthRoute;
