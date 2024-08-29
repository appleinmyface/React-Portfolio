import React from 'react';
import Navigation from './Navigation'; // Ensure this path is correct
import './Header.css'; // Ensure this path is correct

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Derick Hernandez</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
