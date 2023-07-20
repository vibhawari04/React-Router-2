import React, { Children } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  if (isLoggedIn) return Children;
  else return navigate("/login");
};

export default PrivateRoute;
