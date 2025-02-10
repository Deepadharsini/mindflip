import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations"; // Import the Recommendations page

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-blue-500 text-white p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-bold">MindFlip</h1>
            <div className="space-x-4">
              <Link to="/register" className="hover:underline">
                Register
              </Link>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/home" className="hover:underline">
                Home
              </Link>
              <Link to="/recommendations" className="hover:underline">
                Recommendations
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recommendations" element={<Recommendations />} /> {/* Add the route */}
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-200 py-4 text-center">
          © 2025 MindFlip. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
