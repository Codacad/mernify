import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
          <p className="text-gray-700 text-lg">
            Learn more about our mission, values, and the services we provide.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to deliver high-quality solutions that empower individuals and businesses to achieve their goals.
              We are committed to innovation, integrity, and excellence in everything we do.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              Our vision is to be a leader in our industry, fostering growth and creating opportunities for our clients and community. 
              We strive to be a trusted partner in the digital world.
            </p>
          </div>

          {/* Services Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">What We Do</h2>
            <p className="text-gray-700">
              We specialize in providing innovative solutions, including web development, software design, and IT support. 
              Our goal is to meet your needs with exceptional service and expertise.
            </p>
          </div>

          {/* Team Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">Our Team</h2>
            <p className="text-gray-700">
              Our team consists of skilled professionals dedicated to delivering the best results. We value collaboration, creativity, and commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
