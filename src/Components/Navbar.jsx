import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="flex justify-center gap-2">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
