// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="py-4 px-6 pb-8 flex justify-between items-center">
      <Link to="/" className="text-xl hover:text-gray-600 transition">
        Min Kim
      </Link>
      <div className="space-x-6">
        <Link
          to="/projects"
          className="text-gray-600 hover:text-black transition"
        >
          Projects
        </Link>
        <Link
          to="/manufacturing"
          className="text-gray-600 hover:text-black transition"
        >
          Manufacturing
        </Link>
        
      </div>
    </nav>
  );
}
