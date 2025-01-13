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
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8c1.104 0 2-.9 2-2m-8 0c0-1.1.896-2 2-2m6 0a6 6 0 11-6 6m2 4h-2v2m2-2a6 6 0 00-6-6"
                  />
                </svg>
                <a
                  href="mailto:support@example.com"
                  className="hover:text-blue-500"
                >
                  iam@rizwanansari.in
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18m-3-3l3 3-3 3M4 10a6 6 0 018-5.916V12m0 0V5m0 7v1a5 5 0 00-1 3v1a2 2 0 002 2v1H6"
                  />
                </svg>
                31952 Riyadh Street, Alkhobr, Saudi Arabia
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16c2.1 0 4-1.5 4-4H7v4zM7 20c4 0 8-3.5 8-8H7v8z"
                  />
                </svg>
                +966 (536) 317-438
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} MERNify. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
