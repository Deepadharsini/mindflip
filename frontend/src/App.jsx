import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import { useState } from "react";
import Navbar from "./pages/Navbar"; // ✅ Import Navbar

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authToken") ? true : false
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* ✅ Use Navbar component */}
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route
              path="/home"
              element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/recommendations"
              element={isAuthenticated ? <Recommendations /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-gray-200 py-4 text-center">
          © 2025 MindFlip. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
