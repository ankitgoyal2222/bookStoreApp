import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Get in <span className="text-green-600">Touch</span> With Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Have questions, book suggestions, or just want to say hello? We're here to help!
        </p>
      </div>

      {/* Contact Container */}
      <div className="max-w-5xl w-full bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">📍 Our Store</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Visit our bookstore and explore a world of stories!
          </p>
          <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
            <li>📍 123 Book Street, Library City, BK 56789</li>
            <li>📧 Email: support@bookhaven.com</li>
            <li>📞 Phone: 6375468024</li>
          </ul>

          {/* Social Media */}
          <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">🌎 Connect With Us</h2>
          <br />
          <div className="mt-4 flex space-x-4">
            <a href="https://www.facebook.com/bookshop.org/" className="text-blue-500 text-2xl hover:text-pink-700 transition"> ⓕ facebook</a>
            <a href="https://x.com/Biggreenbookshttps://x.com/bookshop_org?lang=en" className="text-Black-500 text-2xl hover:text-pink-700 transition">𝕏 Twitter</a>
            <a href="https://www.instagram.com/bookshop_org/?hl=en" className="text-red-500 text-2xl hover:text-pink-700 transition">🅾 Instagram</a>
          </div>
          <div className="flex justify-between items-center text-center w-full px-40">
           <Link to="/about">
                      <button className="mt-6 bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                      ↩
                      </button>
                    </Link>
                    </div>
        </div>
                
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">✉️ Send Us a Message</h2>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
            ></textarea>
            <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-transform transform hover:scale-105">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
