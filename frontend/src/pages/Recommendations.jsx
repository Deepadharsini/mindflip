import React from "react";

const Recommendations = () => {
  const books = [
    "Atomic Habits",
    "The Alchemist",
    "Thinking, Fast and Slow",
    "Sapiens",
    "The Subtle Art of Not Giving a F*ck",
  ];

  const movies = [
    "The Pursuit of Happyness",
    "Forrest Gump",
    "Good Will Hunting",
    "Inception",
    "The Shawshank Redemption",
  ];

  const songs = [
    "Imagine - John Lennon",
    "Bohemian Rhapsody - Queen",
    "Lose Yourself - Eminem",
    "Shape of You - Ed Sheeran",
    "Blinding Lights - The Weeknd",
  ];

  const tasks = [
    "Phone a Friend",
    "Go for a Walk",
    "Do 10 Pushups",
    "Drink a Glass of Water",
    "Write Down 3 Things You're Grateful For",
  ];

  const Section = ({ title, items }) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow rounded-lg hover:shadow-md transition"
          >
            <p className="text-gray-700 text-sm font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Recommendations
        </h1>
        <Section title="Recommended Books" items={books} />
        <Section title="Recommended Movies" items={movies} />
        <Section title="Recommended Songs" items={songs} />
        <Section title="Tasks to Uplift Your Mood" items={tasks} />
      </div>
    </div>
  );
};

export default Recommendations;
