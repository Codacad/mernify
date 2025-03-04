import React, {useEffect, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../state/user-auth/userAuth";
import { setUser } from "../state/user-auth/authSlice";
import Logo from "../assets/images/logo200x100.svg";
const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logout] = useLogoutUserMutation();
  const dropdownRef = useRef()
  const handleLogout = async () => {
    try {
      const logoutResponse = await logout();
      if (logoutResponse.data) {
        localStorage.removeItem("user");
        dispatch(setUser(null));
        navigate("/");
        handleMobileMenu();
      }
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // Handle Moblie Menu toggle
  const handleMobileMenu = () => {
    document.querySelector(".mobile-menu").classList.toggle("active");
  };
  const handleProfileMenuToggle = () => {
    // Toggle the 'profile-menu-active' class
    dropdownRef.current.classList.toggle("profile-menu-active");
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

          <Link to="/blogs" className="hover:text-gray-700">
            Blogs
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
          <ul className="md:flex hidden space-x-4 items-center">
            <li className="relative">
              <img
                src="https://i.pravatar.cc/300"
                onClick={handleProfileMenuToggle}
                className="cursor-pointer relative rounded-full overflow-hidden w-10 h-10 z-20 object-cover"
                alt=""
              />
              <ul ref={dropdownRef} className="absolute p-2 z-20 top-12 right-0 profile-menu bg-gray-50 shadow-md rounded-md w-40 space-y-2">
                <li className="flex items-center space-x-2">
                  <Link
                    to={"/dashboard"}
                    className="p-2 w-full hover:bg-gray-200"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to={"/profile"}
                    className="p-2 w-full hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    to={"/settings"}
                    className="p-2 w-full hover:bg-gray-200"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="md:block hidden w-full px-4 hover:bg-gray-200 py-2 text-gray-900 hover:text-gray-950"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        ) : (
          <div className="space-x-4 md:flex hidden">
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 shadow-sm text-white py-2 px-4 rounded"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="hover:bg-blue-600 border hover:text-white border-blue-600 shadow-sm text-blue-600 py-2 px-4 rounded"
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
          className="text-blue-500 focus:outline-none"
          onClick={handleMobileMenu}
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
        className="mobile-menu md:hidden bg-gray-700 text-white col-span-2"
      >
        <div className="p-4 space-y-2">
          <Link
            to="/"
            onClick={handleMobileMenu}
            className="block py-2 hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            onClick={handleMobileMenu}
            className="block py-2 hover:text-gray-300"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            onClick={handleMobileMenu}
            className="block py-2 hover:text-gray-300"
          >
            Profile
          </Link>
          <Link
            to="/blogs"
            onClick={handleMobileMenu}
            className="block py-2 hover:text-gray-300"
          >
            Blogs
          </Link>
          <Link
            to="/about"
            onClick={handleMobileMenu}
            className="block py-2 hover:text-gray-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={handleMobileMenu}
            className="block py-2 hover:text-gray-300"
          >
            Contact
          </Link>

          {user ? (
            <Link
              to="/logout"
              onClick={handleLogout}
              className="block md:hidden py-2 hover:text-gray-300"
            >
              Logout
            </Link>
          ) : (
            <>
              <div className="mt-4 space-y-2">
                <Link
                  to="/signup"
                  onClick={handleMobileMenu}
                  className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Sign Up
                </Link>
                <Link
                  to="/signin"
                  onClick={handleMobileMenu}
                  className="block border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 py-2 px-4 rounded"
                >
                  Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
