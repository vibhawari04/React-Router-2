import React from "react";
import Template from "../components/template";
import logimage from "../assets/login.png";

const Login = ({ setLoggedIn }) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build Skills Today, Tomorrow And Beyond."
        desc2="Education to future-proof your career."
        image={logimage}
        formtype="login"
        setLoggedIn={setLoggedIn}
      />
    </div>
  );
};

export default Login;
