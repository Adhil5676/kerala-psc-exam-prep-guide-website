import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col rounded-2xl items-center justify-center min-h-screen bg-gray-300 text-white p-6">
      {/* Title with Logo */}
      <div className="flex items-center space-x-4">
        <img
          src="../public/images/logo01.png"
          alt="Logo"
          className="w-16 h-16 rounded-full shadow-lg object-cover border-2 border-blue-600"
        />
        <h1 className="text-5xl font-bold text-blue-600 font-mallu">ശിൽപ്പം</h1>
      </div>

      <p className="mt-2 text-lg text-gray-600">നിങ്ങളുടെ PSC സഹായി</p>

      {/* Image Section */}
      <div className="flex justify-center rounded-lg mt-6  overflow-hidden">
        <img
          className="rounded-2xl w-3/4 sm:w-1/2  shadow-xl"
          src="../public/images/police.jpg"
          alt="Kerala PSC Exam"
        />
      </div>

      {/* Subtitle & Description */}
      <h1 className="text-3xl font-bold text-blue-600 mt-6 sm:text-2xl">
        Your Kerala PSC Exam Prep Guide
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Prepare for Kerala PSC exams efficiently.
      </p>
    </div>
  );
};

export default Home;
