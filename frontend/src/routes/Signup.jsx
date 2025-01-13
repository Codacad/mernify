import React, { useState } from "react";
import { useSignupMutation } from "../state/user-auth/userAuth";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [signup, { data, error, isLoading }] = useSignupMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signupResponse = await signup(formData);
      if (signupResponse.data) {
        console.log("Signup Response:", signupResponse.data.message);
        navigate("/signin");
      }
      if (signupResponse.error) {
        console.log("Signup Error:", signupResponse.error.data.message);
      }
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  return (
    <div className="md:min-h-screen my-8 flex mx-4 items-center justify-center bg-white">
      <div className="bg-gray-50 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullname"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm">{error.data.message}</div>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? "Siging up, please wait..." : "Sign Up"}
          </button>
        </form>
        {/* Redirect to Sign In */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
