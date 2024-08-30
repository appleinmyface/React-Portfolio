import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Derick Hernandez. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="https://github.com/appleinmyface" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/derick-hernandez-922b50325/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li>Email: <a href="mailto:derickhh.05@gmail.com">derickhh.05@gmail.com</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
