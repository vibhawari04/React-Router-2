import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Navbar = (props) => {
  console.log(props);
  let setLoggedIn = props.setLoggedIn;
  let isLoggedIn = props.isLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-x-6 text-white ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* login -signup -logout-dasboard */}
      <div className="flex ml-5 mr-3 gap-4  items-center">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richbalck-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Log in
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup ">
            <button className="bg-richbalck-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button className="bg-richbalck-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard ">
            <button className="bg-richbalck-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
