import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="bg-gray-100 py-8 px-6 mx-auto md:px-8 md:mx-16 relative">
      {/* Parabolic line */}
      <svg
        className="absolute left-0 top-0 h-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        stroke="red"
        strokeWidth="2"
      >
        <path d="M 0 100 Q 50 50 100 100" />
      </svg>

      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center relative z-10">
        <h2 className="text-gray-800 text-3xl md:text-4xl font-bold mb-4 md:mb-0 mr-0 md:mr-6">
          Subscribe to Our Monthly Newsletter
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <input
            type="email"
            placeholder="Your Email Address"
            className="bg-white rounded-l-lg py-2 px-4 mb-2 md:mb-0 md:mr-2 w-full md:w-auto shadow-md"
          />
          <button className="bg-purple-600 text-white rounded-full py-2 px-4 hover:bg-purple-700 transition duration-300 shadow-md relative z-10"style={{ fontFamily: 'Roboto, sans-serif' }}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
