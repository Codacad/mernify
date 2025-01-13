import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Testimonials from "../Components/Testimonials";
import FeaturesHighlights from "../Components/FeaturesHighlights";
import Footer from "../Components/Footer";
const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hello {user ? user.fullname : "Guest"}
          </h2>
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Project Securing MERN App
          </h1>
          <p className="text-lg mb-6">
            Your one-stop solution for secure and efficient user management.
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Secure Authentication
              </h3>
              <p className="text-gray-600">
                We provide top-notch security protocols to ensure your users’
                data stays safe.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Easy Integration
              </h3>
              <p className="text-gray-600">
                Seamlessly integrate our system with your existing application.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Scalable Solutions
              </h3>
              <p className="text-gray-600">
                Our platform grows with your business, offering unparalleled
                scalability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-6">
            Join us today and experience the future of user authentication.
          </p>
          <Link
            to="/signup"
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Sign Up Now
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Features Higglighting */}
      <FeaturesHighlights />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
