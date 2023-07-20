import React from "react";
import signupimage from "../../src/assets/signup.png";
import Template from "../../src/components/template";

const Signup = ({ setLoggedIn }) => {
  return (
    <div>
      <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build Skills Today,Tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupimage}
        formtype="signup"
        setLoggedIn={setLoggedIn}
      />
    </div>
  );
};

export default Signup;
