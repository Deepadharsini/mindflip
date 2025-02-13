import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodRatings, setMoodRatings] = useState({});
  const [feedbackText, setFeedbackText] = useState(""); // State for text input

  const moodOptions = [
    { label: "Happy", emoji: "😊" },
    { label: "Sad", emoji: "😔" },
    { label: "Excited", emoji: "😃" },
    { label: "Angry", emoji: "😠" },
    { label: "Neutral", emoji: "😐" },
  ];

  const handleMoodSelect = (moodLabel) => {
    
    setSelectedMood(moodLabel === selectedMood ? null : moodLabel);
    if (!moodRatings[moodLabel]) {
      setMoodRatings({ ...moodRatings, [moodLabel]: 5 }); // Default to 5 (midpoint)
    }
  };

  const handleRatingChange = (moodLabel, rating) => {
    setMoodRatings({ ...moodRatings, [moodLabel]: rating });
  };

  const handleTextChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const handleSubmit = () => {
   
    if (selectedMood) {
      const submissionData = {
        mood: selectedMood,
        rating: moodRatings[selectedMood] || "Not Rated",
        feedback: feedbackText,
      };
  
      // Store in localStorage:
      localStorage.setItem("submissionData", JSON.stringify(submissionData)); // Key, Value (must be stringified)
       
      alert( // Keep your alert for now
        `Selected Mood: ${selectedMood}, Rating: ${
          moodRatings[selectedMood] || "Not Rated"
        }, Feedback: ${feedbackText}`
      );
      navigate("/recommendations");
    } else {
      alert("Please select a mood.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 p-2">
      <h1 className="absolute top-25 text-4xl font-extrabold text-gray-900 mb-4">
        Welcome to MindFlip
      </h1>
      <p className="absolute top-40 text-lg text-gray-600 mb-6 text-center">
        A personalized mental health recommendation system just for you!
      </p>
      <div className="bg-blue-200 p-3 rounded-xl shadow-2xl w-full max-w-lg">
        <div className="flex justify-center gap-4 mb-4">
          {moodOptions.map((option) => (
            <div key={option.label} className="flex flex-col items-center">
              <button
                onClick={() => handleMoodSelect(option.label)}
                className={`text-3xl transition-all duration-300 mb-2 p-2 rounded-full
                  ${selectedMood === option.label ? "bg-yellow-200 shadow-inner" : "hover:bg-yellow-100"}`}
              >
                {option.emoji}
              </button>
              <p className="text-sm text-gray-800">{option.label}</p>
            </div>
          ))}
        </div>

        {selectedMood && (
  <div className="w-full">
    <input
      type="range"
      min="1"
      max="10"
      value={moodRatings[selectedMood] || 5}
      onChange={(e) => handleRatingChange(selectedMood, parseInt(e.target.value))}
      className="w-full h-2 rounded-lg appearance-none bg-gray-200 cursor-pointer"
      style={{
        background: `linear-gradient(to right,rgb(31, 25, 142) ${
          ((moodRatings[selectedMood] - 1) / 9) * 100
        }%, #E5E7EB ${(moodRatings[selectedMood] / 10) * 100}%)`
      }}
    />
    <div className="flex justify-between text-sm text-gray-500 mt-1">
      {[...Array(10)].map((_, index) => (
        <span key={index}>{index + 1}</span>
      ))}
    </div>
  </div>
)}


        <textarea
          className="w-full border p-2 rounded mt-4"
          placeholder="Enter your feedback here..."
          value={feedbackText}
          onChange={handleTextChange}
          rows="4"
        />

        <div className="flex justify-center mt-4"> {/* Centered button */}
          <button
            onClick={handleSubmit}
            className="w-60 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 ease-in-out"
          >    
            Submit Feedback
          </button>
        </div>
      </div>

      {/* ... (rest of your code) */}
    </div>
  );
};

export default Home;