import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../state/user-auth/userAuth";
import { setUser } from "../state/user-auth/authSlice";
import Logo from "../assets/images/logo200x100.svg";
import Cookie from "js-cookie";
const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logout] = useLogoutUserMutation();
  const handleLogout = async () => {
    try {
      const logoutResponse = await logout();
      if (logoutResponse.data) {
        localStorage.removeItem("user");
        Cookie.remove("authToken");
        dispatch(setUser(null));
        navigate("/");
      }
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };
  return (
    <nav className="bg-gray-100 text-black grid grid-cols-2 md:grid-cols-1 justify-between items-center">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            <img className="h-[70px]" src={Logo} alt="" />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-gray-700">
            Dashboard
          </Link>
          <Link to="/blogs" className="hover:text-gray-700">
            Blogs
          </Link>
          <Link to="/profile" className="hover:text-gray-700">
            Profile
          </Link>
          <Link to="/about" className="hover:text-gray-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-700">
            Contact
          </Link>
        </div>

        {/* Buttons */}
        {user ? (
          <button
            onClick={handleLogout}
            className="md:block hidden py-2 hover:text-gray-800"
          >
            Logout
          </button>
        ) : (
          <div className="space-x-4 md:flex hidden">
            <Link
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 py-2 px-4 rounded"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-end items-center px-4">
        <button
          type="button"
          className="text-white focus:outline-none"
          onClick={() =>
            document.getElementById("mobile-menu").classList.toggle("hidden")
          }
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-gray-700 text-white p-4 col-span-2"
      >
        <Link to="/" className="block py-2 hover:text-gray-300">
          Home
        </Link>
        <Link to="/dashboard" className="block py-2 hover:text-gray-300">
          Dashboard
        </Link>
        <Link to="/profile" className="block py-2 hover:text-gray-300">
          Profile
        </Link>
        <Link to="/blogs" className="block py-2 hover:text-gray-300">
          Blogs
        </Link>
        <Link to="/about" className="block py-2 hover:text-gray-300">
          About
        </Link>
        <Link to="/contact" className="block py-2 hover:text-gray-300">
          Contact
        </Link>

        {user ? (
          <Link
            to="/logout"
            className="block md:hidden py-2 hover:text-gray-300"
          >
            Logout
          </Link>
        ) : (
          <>
            <div className="mt-4 space-y-2">
              <Link
                to="/signup"
                className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                className="block border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 py-2 px-4 rounded"
              >
                Sign In
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
