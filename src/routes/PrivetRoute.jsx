import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location=useLocation();


  if (loading) {
    return <p>Loading...</p>; // এখানে spinner দেওয়া যেতে পারে
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" replace />;
};

export default PrivateRoute;
