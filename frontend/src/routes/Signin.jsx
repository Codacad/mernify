import React, { useState } from "react";
import { useSigninMutation } from "../state/user-auth/userAuth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../state/user-auth/authSlice";
import { useDispatch } from "react-redux";
const SignIn = () => {
  const [signin, { data, error, isLoading }] = useSigninMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
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
      const signinResponse = await signin(formData);
      if (signinResponse.data) {
        dispatch(setUser(signinResponse.data));
        localStorage.setItem("user", JSON.stringify(signinResponse.data));
        navigate("/dashboard");
      }
      if (signinResponse.error) {
        console.log("Signin Error:", signinResponse.error.data);
      }
    } catch (error) {
      console.error("Sign In Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-gray-50 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? "Signing in, please wait..." : "Sign In"}
          </button>
        </form>
        {/* Redirect to Sign Up */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
