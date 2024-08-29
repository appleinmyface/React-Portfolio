import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Derick Hernandez. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
