// Navigation.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav-header">
        <h3 className="logo">Derick Hernandez</h3>
        <div className="hamburger" onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </div>
      </div>
      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
