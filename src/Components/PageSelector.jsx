import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri'; // Importing the right arrow icon

const PageSelector = ({ currentPage, onPageChange }) => {
  const totalPages = 8; // Total number of pages

  // Function to handle page change
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-4">

      {/* Page Numbers */}
      <div className="flex items-center mb-2 md:mb-0">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage === index + 1 ? 'bg-yellow-500 text-white font-bold' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Next Page Button with Arrow Icon */}
      <button
        className="flex items-center md:ml-4 text-gray-600 hover:text-gray-800"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next <RiArrowRightSLine className="ml-1 text-red-500" />
      </button>
    </div>
  );
};

export default PageSelector;
