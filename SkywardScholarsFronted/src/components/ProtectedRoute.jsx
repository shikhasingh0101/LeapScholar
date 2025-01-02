import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check if the user is authenticated (e.g., check for a token in localStorage)
  const isAuthenticated = !!localStorage.getItem("auth-token");

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
