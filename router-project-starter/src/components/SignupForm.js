import React from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showpass, setpassword] = useState(false);

  const [accountType, setaccountType] = useState("student");
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("pass ", FormData.password);
    console.log("confirmpass ", FormData.confirmPassword);
    if (FormData.password !== FormData.confirmPassword) {
      toast.error("password not matched");
      return;
    }

    setLoggedIn(true);
    toast.success("Signed Up");
    navigate("/dashboard");
  }

  return (
    <div className="w-full  h-auto">
      {/*  student instructor */}

      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          onClick={() => setaccountType("student")}
          className={`${
            accountType === "student"
              ? " bg-richblack-900 text-richblack-5"
              : " bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>

        <button
          onClick={() => setaccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? " bg-richblack-900 text-richblack-5"
              : " bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            <p>
              First Name <sup className="text-red-700">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={FormData.firstname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
            />
          </label>
          <br />
          <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            <br />{" "}
            <p>
              Last Name <sup className="text-red-700">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={FormData.lastname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
            />
          </label>
        </div>
        <br />
        <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          <p>
            Email Address <sup className="text-red-700">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email"
            value={FormData.email}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
          />
        </label>

        <div className="flex justify-between py-5">
          <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] relative ">
            <p>
              Create PassWord <sup className="text-red-700">*</sup>
            </p>
            <input
              required
              type={showpass ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={FormData.password}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
            />
            <span
              onClick={() => setpassword((prev) => !prev)}
              className="absolute right-[1.5rem]  top-[1.9rem;] cursor-pointer"
            >
              {showpass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}{" "}
            </span>
          </label>

          <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] relative">
            <p>
              Confirm PassWord <sup className="text-red-700">*</sup>
            </p>
            <input
              required
              type={showpass ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={FormData.confirmPassword}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
            />
            <span
              onClick={() => setpassword((prev) => !prev)}
              className="absolute right-[1.5rem]  top-[1.9rem;] cursor-pointer"
            >
              {showpass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}{" "}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 w-full px-[12px] py-[8px] my-5">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
