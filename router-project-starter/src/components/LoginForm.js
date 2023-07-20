import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showpass, setpass] = useState(false);

  function chnageHandler(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <div className="flex flex-col w-full gap-y-4 mt-6">
      <form onSubmit={submitHandler}>
        <label className="w-full ">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-red-700">*</sup>
          </p>
          <input
            required
            type="text"
            value={formData.email}
            onChange={chnageHandler}
            placeholder="Enter Email id"
            name="email"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
          />
        </label>

        <label className="w-full relative ">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] pt-5">
            Password <sup className="text-red-700">*</sup>
          </p>
          <input
            required
            type={showpass ? "text" : "password"}
            value={formData.password}
            onChange={chnageHandler}
            placeholder="Enter Password"
            name="password"
            className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
          />
          <span
            className="absolute right-[1.5rem]  top-[5.9rem;] cursor-pointer"
            onClick={() => setpass((prev) => !prev)}
          >
            {showpass ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}{" "}
          </span>

          <Link to="#">
            <p className="text-xs mt-1 ml-auto text-blue-100 w-full max-w-max ">
              Forgot Password
            </p>
          </Link>
        </label>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 w-full px-[12px] py-[8px] my-5">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
