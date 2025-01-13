import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "This app has completely streamlined our authentication process. The user-friendly interface is a game-changer!",
      image: "https://i.pravatar.cc/300",
      role: "Software Developer",
    },
    {
      name: "Jane Smith",
      feedback:
        "I love how secure and efficient the platform is. It's perfect for managing user profiles seamlessly.",
      image: "https://i.pravatar.cc/300",
      role: "Product Manager",
    },
    {
      name: "Ali Khan",
      feedback:
        "As a tech enthusiast, I appreciate the simplicity and robust features of this app. Highly recommended!",
      image: "https://i.pravatar.cc/300",
      role: "Tech Enthusiast",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full shadow"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 text-center mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 text-center mb-4">
                {testimonial.role}
              </p>
              <p className="text-gray-600 text-center">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
