import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const UserSignedIn = ({ children, yes }) => {
  const { user } = useSelector((state) => state.auth);
  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default UserSignedIn;
