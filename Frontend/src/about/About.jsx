import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-6 py-12">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg transition-all duration-300">
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center">
          Welcome to <span className="text-pink-500">📖 Haven</span>
        </h1>
        <br />
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center">
          Your one-stop destination for book lovers! Explore thousands of books and dive into the world of imagination.
        </p>

        {/* About Section */}
        <div className="mt-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">📚 Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our mission is to make books accessible to everyone. Whether you're a student, an avid reader, or just starting your reading journey, we have books that inspire, educate, and entertain.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            { title: "🚀 Fast Delivery", text: "Quick and reliable delivery for all your favorite books." },
            { title: "💰 Affordable Pricing", text: "Get the best deals on a wide range of books." },
            { title: "🌍 E-Books Available", text: "Go green with our extensive e-book collection." },
            { title: "📖 Wide Selection", text: "From classics to bestsellers, we have it all!" },
          ].map((feature, index) => (
            <div key={index} className="p-5 bg-gray-200 dark:bg-gray-700 rounded-lg shadow transform transition hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 flex justify-center">
          <Link to="/course">
            <button className="px-6 py-3 bg-pink-400 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105">
              Browse Books 📚
            </button>
          </Link>
        </div>
        <div className="flex justify-between items-center text-center w-full px-6">
  <Link to="/course">
    <button className="mt-6 bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
      ↩
    </button>
  </Link>
  
  <Link to="/contact">
    <button className="mt-6 bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
      ↪
    </button>
  </Link>
</div>
      </div>
    </div>
  );
}

export default About;
