import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "The Rise of JavaScript Frameworks",
    content:
      "JavaScript frameworks have revolutionized web development by offering pre-built tools for developers. Libraries like React and Vue.js provide reactive components, while Angular leads in enterprise-level applications. These frameworks simplify complex tasks, allowing developers to focus on building features rather than re-inventing the wheel. The competition among frameworks has also driven the evolution of JavaScript, making it one of the most versatile and powerful programming languages today.",
    image: "https://via.placeholder.com/400x200?text=JavaScript+Frameworks",
  },
  {
    id: 2,
    title: "Understanding Backend Technologies",
    content:
      "Backend development involves server-side programming, databases, and APIs. Technologies like Node.js, Django, and Ruby on Rails streamline backend logic and database interactions. Developers often focus on RESTful APIs, authentication systems, and cloud deployment. Modern backend systems aim to be secure, scalable, and efficient, bridging the gap between users and databases while ensuring a seamless experience.",
    image: "https://via.placeholder.com/400x200?text=Backend+Technologies",
  },
  {
    id: 3,
    title: "Why Tailwind CSS is Taking Over",
    content:
      "Tailwind CSS is a utility-first CSS framework that allows developers to quickly build modern, responsive designs. With its unique approach, Tailwind has drastically simplified the styling process by providing a robust set of classes that eliminate the need for traditional CSS files. It has gained massive popularity in the developer community due to its flexibility and efficiency, becoming a go-to solution for modern web design.",
    image: "https://via.placeholder.com/400x200?text=Tailwind+CSS",
  },
];

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Blog not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
            <p className="text-gray-700 mb-6">{blog.content}</p>
            <Link
              to="/blogs"
              className="text-blue-500 hover:underline font-medium"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
