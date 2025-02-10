import React, { useState } from "react";

const EmojiMeter = () => {
  const emojis = [
    { icon: "😡", label: "Angry" },
    { icon: "😢", label: "Sad" },
    { icon: "😐", label: "Neutral" },
    { icon: "😊", label: "Happy" },
    { icon: "😂", label: "Excited" },
  ];

  // Initialize ratings for each emoji
  const [ratings, setRatings] = useState(emojis.map(() => 50)); // Default all sliders to 50

  const handleSliderChange = (value, index) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = value;
    setRatings(updatedRatings);
  };

  return (
    <div className="flex flex-col items-center space-y-6 bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-xl">
      <h2 className="text-xl font-semibold text-gray-800">How do you feel?</h2>
      <div className="w-full space-y-4">
        {emojis.map((emoji, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex flex-col items-center w-16">
              <span className="text-3xl">{emoji.icon}</span>
              <p className="text-sm text-gray-600">{emoji.label}</p>
            </div>
            <div className="flex-grow">
              <input
                type="range"
                min="0"
                max="100"
                value={ratings[index]}
                onChange={(e) => handleSliderChange(Number(e.target.value), index)}
                className="w-full"
              />
              <p className="text-right text-sm text-gray-500 mt-1">{ratings[index]}%</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        Submit
      </button>
    </div>
  );
};

export default EmojiMeter;
