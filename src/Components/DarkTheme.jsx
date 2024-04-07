import React from 'react';

const DarkTheme = () => {
  return (
    <div className="bg-black text-white py-20 px-4 mt-24 flex flex-col md:flex-row justify-between items-center">
      {/* Left side */}
      <div className="w-full md:w-1/2 mx-4 md:mx-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Ready to Get Started?</h1>
        <button className="bg-purple-500 text-white font-bold py-2 px-3 text-sm rounded-full mr-4 mb-2 mt-4"style={{ fontFamily: 'Roboto, sans-serif' }}>SIGN UP FOR FREE</button>
        <span className="text-white underline decoration-red-500 font-bold mt-4">Talk to Sales</span>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/3 relative mx-4 md:mr-20 mt-8 md:mt-0">
        <div className="bg-black p-6 rounded-lg flex flex-col justify-center border-white border shadow-2xl">
          <p className="text-lg">"At any level of scale, Revenue Cat just works"</p>
          <div className="flex items-center mt-4">
            <img className="w-12 h-12 rounded-full mr-4" src="https://media.istockphoto.com/id/1226886130/photo/3d-illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-cartoon-businessman.jpg?s=612x612&w=0&k=20&c=uggAty-__XRQEUPw3ex_5hehLCTLnCwbYZpoe_Cv3oQ=" alt="Profile" />
            <div>
              <p className="font-bold">David Smith, Widgetsmith</p>
              <span className="text-white underline decoration-red-500">READ CASE STUDY</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DarkTheme;
