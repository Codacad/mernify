import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Rise of JavaScript Frameworks",
    content:
      "JavaScript frameworks have revolutionized web development by offering pre-built tools for developers. Libraries like React and Vue.js provide reactive components, while Angular leads in enterprise-level applications...",
    image:
      "https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Understanding Backend Technologies",
    content:
      "Backend development involves server-side programming, databases, and APIs. Technologies like Node.js, Django, and Ruby on Rails streamline backend logic and database interactions...",
    image:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Tm9kZWpzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Why Tailwind CSS is Taking Over",
    content:
      "Tailwind CSS is a utility-first CSS framework that allows developers to quickly build modern, responsive designs. With its unique approach, Tailwind has drastically simplified the styling process...",
    image:
      "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3NzfGVufDB8fDB8fHww",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-white lg:w-[80%] mx-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="header flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
            Our Blogs
          </h1>
          <Link
             className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm"
            to={"/blog/create"}
          >
            Write Blog
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {blog.content.slice(0, 100)}...
                </p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
