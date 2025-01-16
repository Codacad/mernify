import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo200x100.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              <img className="h-[70px]" src={Logo} alt="" />
            </h3>
            <p className="text-gray-500">
              A seamless and secure platform for managing user authentication
              and authorization.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-blue-500 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-white text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3b82f6"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                <a
                  href="mailto:support@example.com"
                  className="hover:text-blue-500"
                >
                  iam@rizwanansari.in
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#3b82f6"
                >
                  <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                </svg>
                31952 Riyadh Street, Alkhobar, Saudi Arabia
              </li>
              <li className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3b82f6"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                +966 (536) 317-438
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MERNify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
