import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Songs = () => {
  const [emotion, setEmotion] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.emotion) {
      setEmotion(location.state.emotion);
    } else {
      navigate("/");
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-white to-indigo-500 p-4">
      <div className="w-4/5 bg-white p-10 rounded-lg shadow-2xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          🎵 Songs for Your Emotion:{" "}
          <span className="text-indigo-600 capitalize">{emotion}</span>
        </h1>
        <ul className="text-2xl text-gray-700 space-y-4">
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Songs;
