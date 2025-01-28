import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  if (user) {
    return children;
  }
  return <Navigate to={"/signin"} />;
};

export default ProtectedRoutes;
