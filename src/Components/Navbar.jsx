import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-gray-100 p-4 ${isScrolled ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section with logo and name */}
        <div className="flex items-center px-16">
          <img  src="data:image/png;base64,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" alt="Logo" className="h-8 mr-3   " />
          {/* <span className="text-red-500 text-lg font-semibold">Revenue Cat</span> */}
        </div>

        {/* Middle section with navigation links */}
        <div className="hidden md:flex flex-grow justify-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <div className="flex items-center">
            <a href="#" className="text-gray-700 mx-4 hover:text-black relative">
              Products <IoMdArrowDropdown className="inline-block ml-1" />
              <div className="absolute bg-gray-800 rounded-md shadow-lg mt-2 py-2 px-4 left-0 w-32 z-10 hidden">
                <a href="#" className="block text-white hover:text-gray-300">Sublink 1</a>
                <a href="#" className="block text-white hover:text-gray-300">Sublink 2</a>
              </div>
            </a>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-700 mx-4 hover:text-black  relative">
              Docs <IoMdArrowDropdown className="inline-block ml-1" />
              <div className="absolute bg-gray-800 rounded-md shadow-lg mt-2 py-2 px-4 left-0 w-32 z-10 hidden">
                <a href="#" className="block text-white hover:text-gray-300">Sublink 1</a>
                <a href="#" className="block text-white hover:text-gray-300">Sublink 2</a>
              </div>
            </a>
          </div>
          <a href="#" className="text-gray-700 mx-4 hover:text-black">Customer</a>
          <a href="#" className="text-gray-700 mx-4 hover:text-black">Pricing</a>
          <a href="#" className="text-gray-700 mx-4 hover:text-black">Blog</a>
        </div>

        {/* Right section with login and signup */}
        <div className="flex items-center pr-10">
          <a href="#" className="text-gray-700 mr-4 hover:text-black font-semibold underline decoration-red-500" style={{ fontFamily: 'Roboto, sans-serif' }}>LOGIN</a>
          <button className="bg-violet-500 text-white px-6 py-1 rounded-full" style={{ fontFamily: 'Roboto, sans-serif' }}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
