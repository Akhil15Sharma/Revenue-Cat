import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaWifi } from 'react-icons/fa';

const Navigation = () => {
  return (
    <div className="bg-white py-4 md:py-9  flex flex-col md:flex-row justify-between items-center">
      {/* Left section */}
      <nav className="mb-4 md:mb-0 md:ml-6"style={{ fontFamily: 'Roboto, sans-serif' }}>
        <ul className="flex flex-wrap md:flex-nowrap justify-center md:justify-start">
          <li className="mx-4 md:mx-6 mb-2 md:mb-0">
            <a href="#" className="text-black hover:text-gray-800 bg-yellow-300 px-3 py-1 rounded-full">All Articles</a>
          </li>
          <li className="mr-4 md:mr-6 mb-2 md:mb-0">
            <a href="#" className="text-black hover:text-gray-800">Company</a>
          </li>
          <li className="mr-4 md:mr-6 mb-2 md:mb-0">
            <a href="#" className="text-black hover:text-gray-800">Engineering</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-800">Growth</a>
          </li>
        </ul>
      </nav>

      {/* Right section */}
      <div className="flex items-center mx-6 md:mr-6">
        <p className="text-black mr-2 md:mr-4 mb-2 md:mb-0">Follow for updates</p>
        <AiOutlineTwitter className="text-blue-500 text-xl mr-2 md:mr-4" />
        <FaWifi className="text-green-500 text-xl" />
      </div>
    </div>
  );
}

export default Navigation;
