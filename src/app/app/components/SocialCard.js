"use client"; 

import { useState } from "react";

const SocialCard = ({ image, caption }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1); 
  };

  return (
    <div className="w-full h-screen max-w-md mb-6 flex flex-col justify-between items-center bg-white rounded-lg shadow-md snap-start">

      <img
        src={image}
        alt="Post"
        className="object-cover w-full h-3/4 rounded-t-lg"
      />

      <p className="text-lg text-center p-4">{caption}</p>
      

      <div className="flex flex-col items-center mb-4">
        <button
          onClick={handleLike}
          className="py-2 px-4 bg-blue-500 text-white rounded-full mt-4 hover:bg-blue-400 transition duration-200"
        >
          Like
        </button>
        <span className="text-lg mt-2">{likes} Likes</span>
      </div>
    </div>
  );
};

export default SocialCard;

