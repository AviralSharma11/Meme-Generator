import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function HeaderHomepage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHomeClick = () => {
    navigate("/homepage");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const handleSignoutClick = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="flex bg-gray-200 justify-between px-10 py-2 items-center">
        <div className="flex gap-4 py-4 justify-around items-center">
          <div className="mr-10 font-semibold hover:text-blue-400">
            <a href="#" onClick={handleHomeClick}>Home</a>
          </div>
          <div className="font-semibold hover:text-blue-400">
            <a href="#" onClick={toggleModal}>Instructions</a>
          </div>
          <div className="mr-10 font-semibold hover:text-red-700">
            
            <a href="#" onClick={handleSignoutClick}>Sign Out</a>
          </div>
        </div>
        <div className="flex">
          <img src="/Images/profile.jpg" alt="Profile" className="h-24 w-24 rounded-full" />
        </div>
      </nav>
      <div className="relative overflow-hidden h-96 flex justify-center">
        <video
          autoPlay
          loop
          muted
          id="video"
          className="absolute top-0 h-full object-cover rounded-[20px] w-[900px]"
        >
          <source src="/Videos/a.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Instructions</h2>
            <p>Here are the instructions...</p>
            <button
              onClick={toggleModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderHomepage;