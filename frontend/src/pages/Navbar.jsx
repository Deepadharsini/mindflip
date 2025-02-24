import { useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("authToken"); // Remove token from localStorage
    setIsAuthenticated(false); // Update authentication state
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="bg-black text-white shadow-md h-20 relative">
      <nav className="container mx-auto flex items-center h-full">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <img src="/loggo.png" alt="MindFlip Logo" className="max-h-24 w-44" />
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2">
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="text-black text-lg font-sans hover:underline bg-white px-3 py-1 rounded-3xl"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
