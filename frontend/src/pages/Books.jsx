import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Papa from "papaparse";

const emotionGradients = {
  joy: "from-yellow-400 via-white to-orange-500",
  anger: "from-red-600 via-white to-red-400",
  sadness: "from-blue-900 via-white to-blue-500",
  surprise: "from-purple-400 via-white to-indigo-500",
  fear: "from-gray-800 via-white to-gray-600",
  love: "from-pink-500 via-white to-red-400",
  default: "from-gray-300 via-white to-gray-500",
};

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const detectedEmotion = location.state?.emotion || "Neutral";

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch("/final_csv.csv");
        if (!response.ok) throw new Error("Failed to fetch CSV");

        const csvData = await response.text();
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const filteredBooks = result.data.filter(
              (book) =>
                book.Mood?.toLowerCase() === detectedEmotion.toLowerCase()
            );
            setBooks(filteredBooks);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error loading CSV:", error.message);
        setLoading(false);
      }
    };

    fetchCSV();
  }, [detectedEmotion]);

  const cleanText = (text) => text.replace(/�/g, "é");
  const gradientClass =
    emotionGradients[detectedEmotion.toLowerCase()] || emotionGradients.default;

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); // Number of full stars
        const hasHalfStar = rating % 1 !== 0; // Check if there's a decimal part
        const totalStars = hasHalfStar ? fullStars + 1 : fullStars; // Max stars to render
      
        return (
          <div className="flex items-center space-x-1  border-gray-300 rounded-lg p-2 text-4xl">
            {Array(5)
              .fill(0)
              .map((_, i) => {
                if (i < fullStars) {
                  return <span key={i} className="text-yellow-400">★</span>; // Full star
                } else if (i === fullStars && hasHalfStar) {
                  return <span key={i} className="text-yellow-400">⯪</span>; // Half star (using a unicode for half star)
                } else {
                  return <span key={i} className="text-gray-300">★</span>; // Empty star
                }
              })}
          </div>
        );
      };
      

  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradientClass} p-8`}>
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        Books for Your Mood:{" "}
        <span className={`capitalize ${gradientClass}`}>{detectedEmotion}</span>
      </h1>

      {loading ? (
        <p className="text-center text-white text-lg">Loading books...</p>
      ) : books.length > 0 ? (
        <ul className="space-y-4">
          {books.map((book, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-lg shadow-md text-gray-800 flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold">
                  {cleanText(book.Title)}
                </h2>
                <p className="text-lg">by {cleanText(book.Author)}</p>
                {book.Link && (
                  <a
                    href={book.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 underline mt-2 inline-block"
                  >
                    More info
                  </a>
                )}
              </div>
              <div className="flex items-center space-x-1 border-gray-300 rounded-lg p-2">
                {renderStars(book.Rating)}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-white text-lg">
          No books found for this mood.
        </p>
      )}
    </div>
  );
};

export default Books;
