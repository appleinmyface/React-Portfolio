import React from 'react';
import './Project.css'; // Import the CSS file for styling

const Project = ({ image, name, deployedUrl, githubUrl }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <h3 className="project-title">
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      <p className="project-link">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </p>
    </div>
  );
};

export default Project;
