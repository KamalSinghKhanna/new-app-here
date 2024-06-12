import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 shadow-lg">
      <ul className="flex space-x-4 justify-center text-white">
        <li>
          <Link to="/" className="hover:text-gray-300 text-xl font-semibold">
            Address Page
          </Link>
        </li>
        <li>
          <Link
            to="/largelist"
            className="hover:text-gray-300 text-xl font-semibold"
          >
            Large List
          </Link>
        </li>
        <li>
          <Link
            to="/redux-demo"
            className="hover:text-gray-300 text-xl font-semibold"
          >
            Redux Demo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
