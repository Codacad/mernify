import React, { useState } from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            We're here to help! Reach out to us through the following options.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:w-[80%] mx-auto grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Office Details */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Our Office
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> Riyadh Street, Alkhobar, Kingdom of
              Saudi Arabia
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:iam@rizwanansari.in"
                className="text-blue-500 underline"
              >
                iam@rizwanansari.in
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +536-317-438
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Working Hours
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
              </li>
              <li>
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM
              </li>
              <li>
                <strong>Sunday:</strong> Closed
              </li>
            </ul>
          </div>

          {/* Quick Inquiry */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Quick Inquiry
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Main Contact Form */}
        <div className="lg:w-[80%] bg-[rgba(0,0,0,.05)] mx-auto rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
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
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 lg:w-[80%] mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                How can I reach you?
              </h3>
              <p className="text-gray-600">
                You can contact us via email or phone. Visit our office during
                working hours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Do you offer 24/7 support?
              </h3>
              <p className="text-gray-600">
                Our regular hours are listed above. For emergencies, please
                email us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
