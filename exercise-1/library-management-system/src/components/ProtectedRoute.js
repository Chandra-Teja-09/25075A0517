import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute Component
 * Wrapper component that ensures only logged-in users can access certain routes
 * Redirects to login page if user is not authenticated
 */
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return <div className="main-content"><p>Loading...</p></div>;
  }

  // If user is logged in, render the component, otherwise redirect to login
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
