import React from 'react';

const Card = ({ imageUrl, profileImageUrl, description }) => {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg m-4 bg-white hover:shadow-xl transition duration-300 border">
      <img className="w-full h-48 object-cover" src={imageUrl} alt="Card" />
      <div className="px-6 py-4">
        <button className="bg-white border-2 border-rose-600 text-red-500 font-bold py-2 px-4 rounded-full mb-4"style={{ fontFamily: 'Roboto, sans-serif' }}>
          Button
        </button>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full" src={profileImageUrl} alt="Profile" />
          <p className="text-gray-700 text-base ml-4">John Doe</p>
        </div>
      </div>
    </div>
  );
};

const CardPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-center">
        <Card
          imageUrl="https://media.istockphoto.com/id/1392986755/photo/stock-market-concept.jpg?s=612x612&w=0&k=20&c=ufmDzuE7f6F3Z50Af1z0CZkUvbQANS3l38CO-hgLi-U="
          profileImageUrl="https://media.istockphoto.com/id/1739147760/photo/cartoon-man-portrait-in-headset-with-speech-and-text-bubbles-call-center.jpg?s=612x612&w=0&k=20&c=G_8YPJNy5QhldwzcZHcJU44pOwXTpNxnPktB_ljCKi4="
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          
        />
        <Card
          imageUrl="https://media.istockphoto.com/id/1283458404/photo/work-at-home-and-education-concept-on-blue-background.jpg?s=612x612&w=0&k=20&c=OdGHrNSkQwYkdRcFq8fAr3_Zw73oEmr3t2SLy0RmLo0="
          profileImageUrl="https://media.istockphoto.com/id/1295601768/photo/3d-illustration-of-man-holding-smartphone-and-showing-at-screen-close-up-portrait-of-smiling.jpg?s=612x612&w=0&k=20&c=qRheAJ4uoBsSHjUDw5tqVI9wOVNpxRJNkefd49uZ2aw="
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          imageUrl="https://media.istockphoto.com/id/1357874909/vector/checklist-on-a-clipboard-paper-promotion-and-discount-related-symbols-3d-web-vector.jpg?s=612x612&w=0&k=20&c=UsbVU9_Xydrtt1Kv0mvGzBSzElRgaok0JJFJkX1ICAo="
          profileImageUrl="https://media.istockphoto.com/id/1226886130/photo/3d-illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-cartoon-businessman.jpg?s=612x612&w=0&k=20&c=uggAty-__XRQEUPw3ex_5hehLCTLnCwbYZpoe_Cv3oQ="
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
      <div className="flex flex-wrap justify-center">
        <Card
          imageUrl="https://media.istockphoto.com/id/1412391811/photo/infochart-on-screen-3d-render-illustration-realistic-computer-with-arrow-and-chart-colorful.jpg?s=612x612&w=0&k=20&c=Q0gyIxgNNrs0ZO0zZM-Iwic5YlaP_q2GuLILCsAw4uw="
          profileImageUrl="https://media.istockphoto.com/id/1391785761/photo/3d-illustration-of-young-smiling-woman-ellen-talking-phone-calling-by-telephone-communication.jpg?s=612x612&w=0&k=20&c=14P9Cn8aH2-Ud0sObFahKfWheKMoUu6FIdcEuZvruRg="
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          imageUrl="https://media.istockphoto.com/id/1489199758/vector/data-analytics-concept-business-graph-dashboard-marketing-research-statistic-to-analyze.jpg?s=612x612&w=0&k=20&c=yqfCFrs1KmAu4R3VkhIZOSYC653dGQRHNFPevx1MWFo="
          profileImageUrl="https://media.istockphoto.com/id/1389898060/photo/young-support-woman-cute-iconic-character-3d-rendering.jpg?s=612x612&w=0&k=20&c=ulkg3hq0P1mEmzrtqY7l8LF7r5o52kvKd7f4a3SNutM="
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          imageUrl="https://media.istockphoto.com/id/185229100/photo/3d-app-icons.jpg?s=612x612&w=0&k=20&c=bnICAoIwp7khPU-UVeNU5pANAz9XNPxfZrO8sCQRmAI="
          profileImageUrl="https://media.istockphoto.com/id/1248415323/photo/3d-illustration-of-happy-smiling-businessman-in-suit-with-laptop-sitting-in-armchair-cartoon.jpg?s=612x612&w=0&k=20&c=pQQez7m8lNwrlZsJNdCPVixdfCZfA8vQl6Zgmu6D_Vo="
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};

export default CardPage;
