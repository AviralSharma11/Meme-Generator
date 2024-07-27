import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function HeadingGame() {
    const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHomeClick = () => {
    navigate("/");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <nav className="flex bg-gray-200 justify-between px-10 py-2 items-center">
        <div className="flex gap-4 py-4 justify-around items-center">
          <div className="mr-10 font-semibold">
            <a href="#" onClick={handleHomeClick}>Home</a>
          </div>
          <div className="font-semibold">
            <a href="#" onClick={toggleModal}>Instructions</a>
          </div>
        </div>
        <div className="flex">
          <img src="/Images/profile.jpg" alt="Profile" className="h-24 w-24 rounded-full" />
        </div>
      </nav>
      <div
        className="flex h-80 justify-center items-start w-screen mb-10"
        style={{
          background:
            "linear-gradient(to right , rgb(0, 0, 0) 0%, rgb(11, 2, 40) 100%)",
          clipPath: "polygon(100% 0%,100% 70%,0 100%,0% 0%)",
        }}
      >
        <img src="/Images/MEME.jpg" className="h-36 mt-10" alt="" />
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

export default HeadingGame;
