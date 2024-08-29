// Navigation.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'; // Ensure this file exists for styling

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')} // Use function to handle active state
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
