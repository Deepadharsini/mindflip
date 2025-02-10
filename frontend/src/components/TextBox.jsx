import React from "react";

const TextBox = () => {
  return (
    <div className="flex flex-col w-full mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Describe your day:</h2>
      <textarea
        placeholder="Write about your day here..."
        rows="4"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>
    </div>
  );
};

export default TextBox;
