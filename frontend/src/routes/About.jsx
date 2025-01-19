import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="bg-gray-50 text-gray-900">
        {/* Hero Section */}
        <section className="text-white py-16">
          <div className="container mx-auto px-6 flex items-center flex-col">
            {/* Content */}
            <div className="text-center">
              <h1 className="text-4xl font-semibold mb-4 text-blue-500">
                About Us
              </h1>
              <p className="text-lg mb-8 max-w-3xl mx-auto md:mx-0 text-gray-600">
                We are a team of passionate professionals committed to
                delivering high-quality solutions for individuals and
                businesses.
              </p>
              <button className="bg-blue-500 text-gray-100 px-6 py-2 rounded-full font-medium">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">
            Meet Our Team
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Our team is made up of skilled professionals who are dedicated to
            providing the best service and solutions to our clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <img
                src="https://avatar.iran.liara.run/public/35"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-gray-500">Software Engineer</p>
            </div>
            <div>
              <img
                src="https://avatar.iran.liara.run/public/47"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">Jane Smith</h3>
              <p className="text-gray-500">UI/UX Designer</p>
            </div>
            <div>
              <img
                src="https://avatar.iran.liara.run/public/10"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">Alex Brown</h3>
              <p className="text-gray-500">Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
