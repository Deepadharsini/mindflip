import React from "react";
import EmojiMeter from "../components/EmojiMeter";
import TextBox from "../components/TextBox";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to MindFlip</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <EmojiMeter />
        <TextBox />
        <button className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default Home;
