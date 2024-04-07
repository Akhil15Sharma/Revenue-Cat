import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-50 h-screen md:h-3/4 py-12 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-6 flex justify-center md:justify-end">
          <img src="https://media.istockphoto.com/id/1469320349/photo/note-book-and-pencil-3d-icon-isolated-on-yellow.webp?b=1&s=170667a&w=0&k=20&c=AS3tXxKmv1M3bjPtRGHeWPkXq-5TJGYGVppF9lea4NI=" alt="Notebook with Pen" className="w-2/3 md:w-auto h-auto max-w-sm md:max-w-full rounded-lg shadow-lg" />
        </div>
        
        {/* Text */}
        <div className="w-full md:w-1/2 md:ml-8 mr-6 text-center md:text-left">
          <button className=" hover:bg-green-400  bg-white border-2 border-green-600 text-green-500 font-bold py-2 px-4 rounded-full mb-4 md:mb-2"style={{ fontFamily: 'Roboto, sans-serif' }}>Latest Post</button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">Welcome to our Website</h1>
          <p className="text-lg text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo et quam feugiat sagittis. Nullam condimentum enim at dolor dapibus tristique.</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
