import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <ul className="flex justify-center gap-6">
        <li>
          <NavLink
            to="/home"
            className="text-white px-4 py-2 rounded-md transition duration-300 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="text-white px-4 py-2 rounded-md transition duration-300 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="text-white px-4 py-2 rounded-md transition duration-300 hover:bg-gray-700"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
