import React from "react";
import { Navigate } from "react-router-dom";
import Cookie from "js-cookie";
const UserSignedIn = ({ children }) => {
  const isLoggedIn = Cookie.get("authToken");
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default UserSignedIn;
