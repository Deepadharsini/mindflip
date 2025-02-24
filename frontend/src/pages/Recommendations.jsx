import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const emotionGradients = {
  joy: "from-yellow-400 via-white to-orange-500",
  anger: "from-red-600 via-white to-red-400",
  sad: "from-blue-900 via-white to-blue-500",
  surprise: "from-purple-400 via-white to-indigo-500",
  fear: "from-gray-800 via-white to-gray-600",
  love: "from-pink-500 via-white to-red-400",
  default: "from-gray-300 via-white to-gray-500"
};

const Recommendations = () => {
  const [emotion, setEmotion] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.emotion) {
      setEmotion(location.state.emotion.toLowerCase());
    } else {
      navigate("/");
    }
  }, [location, navigate]);

  const handleClick = (category) => {
    navigate(`/${category}`, { state: { emotion } });
  };

  const gradientClass = emotionGradients[emotion] || emotionGradients.default;

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-r ${gradientClass} p-4 space-y-6`}
    >
      <div className="w-4/5 bg-white p-10 rounded-lg shadow-2xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Your Detected Emotion:{" "}
          <span className="text-indigo-600 capitalize">{emotion}</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We would like to recommend you <strong>books, movies, and songs</strong> to uplift your mood!
        </p>

        <div className="flex flex-col space-y-4">
          <div
            className="p-5 bg-gray-300 text-center text-2xl font-bold text-gray-800 rounded-lg shadow-md cursor-pointer hover:bg-indigo-600 hover:text-white transition-all duration-300"
            onClick={() => handleClick("books")}
          >
            📚 BOOKS
          </div>

          <div
            className="p-5 bg-gray-300 text-center text-2xl font-bold text-gray-800 rounded-lg shadow-md cursor-pointer hover:bg-indigo-600 hover:text-white transition-all duration-300"
            onClick={() => handleClick("movies")}
          >
            🎬 MOVIES
          </div>

          <div
            className="p-5 bg-gray-300 text-center text-2xl font-bold text-gray-800 rounded-lg shadow-md cursor-pointer hover:bg-indigo-600 hover:text-white transition-all duration-300"
            onClick={() => handleClick("songs")}
          >
            🎵 SONGS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
