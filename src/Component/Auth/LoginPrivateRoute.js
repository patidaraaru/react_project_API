import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import LoginContext from './LoginContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(LoginContext);
  localStorage.setItem("LoginEmail", JSON.stringify(user));
 
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
