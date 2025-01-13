import React from "react";

const FeaturesHighlights = () => {
  const features = [
    {
      title: "Secure Login System",
      description:
        "Enjoy peace of mind with our highly secure and encrypted login system, designed to protect your data at all times.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm6-2a6 6 0 00-6-6V4m6 0h3m-6 0v3m-3-9a6 6 0 00-6 6m6 6v3m3-9a6 6 0 016 6"
          />
        </svg>
      ),
    },
    {
      title: "Customizable Profiles",
      description:
        "Update your personal details and manage your preferences effortlessly through our intuitive interface.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14v2a3 3 0 01-3 3H6a3 3 0 01-3-3v-2a3 3 0 013-3h3a3 3 0 013 3z"
          />
        </svg>
      ),
    },
    {
      title: "Real-Time Data",
      description:
        "Stay updated with real-time data synchronization, ensuring that your information is always accurate.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 20l-6-6m6 0l6 6m-6-6V4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Explore Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlights;
