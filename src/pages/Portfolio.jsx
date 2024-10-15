import React from 'react';
import Project from '../components/Project'; // Adjust the path as necessary
import './Portfolio.css'; // Import the CSS file for styling

//images
import weatherdashboard from '../assets/weatherdashboard.png';
import TaskBoard from '../assets/TaskBoard.png';
import PlayHits from '../assets/PlayHits.png';
import movie from '../assets/mov.ie.png';
import blog from '../assets/simplyblogging.png';

const Portfolio = () => {
  // Example project data; replace these with your actual project details
  const projects = [
    {
      name: 'Weather Dashboard',
      image: weatherdashboard,  
      githubUrl: 'https://github.com/appleinmyface/Weather-Dashboard',
      deployedUrl: 'https://appleinmyface.github.io/Weather-Dashboard/',  
    },
    {
      name: 'Task Board',
      image: TaskBoard,  
      githubUrl: 'https://github.com/appleinmyface/Interactive-Task-Board',
      deployedUrl: 'https://appleinmyface.github.io/Interactive-Task-Board/',  
    },
    {
      name: 'PlayHits',
      image: PlayHits,  
      githubUrl: 'https://github.com/Raikuzu92/PlayHits',
      deployedUrl: 'https://playhits-1.onrender.com',  
    },
    {
      name: 'Mov.Ie',
      image: movie,  
      githubUrl: 'https://hestrain.github.io/mov.ie/index.html',
      deployedUrl: 'https://hestrain.github.io/mov.ie/index.html',  
    },
    {
      name: 'Simply Blogging Blog',
      image: blog,  
      githubUrl: 'https://github.com/appleinmyface/Simply-Blogging-Blog',
      deployedUrl: 'https://appleinmyface.github.io/Simply-Blogging-Blog/',  
    },
    {
      name: 'More Coming Soon',
      image: 'https://www.wyzant.com/blog/wp-content/uploads/2020/09/Coding-a-Blog-image-courtesy-of-bloggertips.png',  
      githubUrl: 'https://github.com/appleinmyface',
      deployedUrl: 'https://github.com/appleinmyface',  
    },
  ];

  return (
    // Portfolio component JSX
    <div className="portfolio">
    <h1 className="portfolio-title text-lg-start">Portfolio</h1>
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <Project
          key={index}
          image={project.image}
          name={project.name}
          githubUrl={project.githubUrl}
          deployedUrl={project.deployedUrl}
        />
      ))}
    </div>
  </div>
  );
};

export default Portfolio;
