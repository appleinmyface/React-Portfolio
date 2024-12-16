import React from 'react';
import './Resume.css'; // Import the new CSS file

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Derick Hernandez</h1>
      <p>
        <a href="mailto:derickhh.05@gmail.com">derickhh.05@gmail.com</a><br />
        LinkedIn: <a href="https://www.linkedin.com/in/derick-hernandez-922b50325/" target="_blank" rel="noopener noreferrer">linkedin.com/in/derick-hernandez-922b50325/</a><br />
        GitHub: <a href="https://github.com/appleinmyface" target="_blank" rel="noopener noreferrer">github.com/appleinmyface</a>
      </p>

      <hr />

      <h2>About Me</h2>
      <p>
        Aspiring web developer with a strong foundation in front-end and full-stack technologies, including React, Node.js, and MongoDB. Experienced in building dynamic, responsive web applications and collaborating in Agile teams. Fluent in English and Spanish, with excellent communication skills. Passionate about innovation, continuous learning, and contributing to impactful projects in the tech space.
      </p>

      <hr />

      <h2>Education</h2>
      <p>
        UCF Coding Bootcamp <br />
        Completion Date: September 12, 2024<br />
        Intensive program focused on full-stack web development, including both front-end and back-end technologies.
      </p>

      <hr />

      <h2>Skills</h2>
      <ul>
        <li>Front-End Development: HTML5, CSS3, JavaScript, Bootstrap</li>
        <li>Full-Stack Development: Node.js, Express.js, SQL, RESTful APIs, MongoDB</li>
        <li>Web Development Frameworks: React</li>
        <li>Database Management: SQL, MongoDB</li>
        <li>Project Management: Agile Development, Git, Source Control (GitHub)</li>
        <li>Additional Skills: Testing, Object-Oriented Programming (OOP), Computer Science Fundamentals</li>
      </ul>

      <hr />

      <h2>Experience</h2>
      <h3>Team Collaboration & Agile Development</h3>
      <p>
        Collaborated in Agile development teams of 4 members to deliver full-stack web applications within sprint deadlines. Conducted code reviews, provided technical feedback, and improved overall code quality using Git for version control and peer reviews.
      </p>

      <h3>Full-Stack Web Application Projects</h3>
      <p>
        <strong>React Portfolio:</strong> Built a modern, responsive portfolio using React.js, showcasing my web development skills and projects in an interactive way. Designed with HTML, CSS, and JavaScript, optimizing for both performance and maintainability.
      </p>
      <p>
        <strong>Social Network API:</strong> Developed a RESTful API for a social network web application using Node.js, Express.js, MongoDB, and Mongoose. Designed API endpoints for creating, retrieving, updating, and deleting users and associated thoughts and reactions. Handled user management, thought posting, reactions, and friend lists.
      </p>

      <a href="/DerickHernandez_Resume.pdf" download="DerickHernandez_Resume.pdf" className="download-link">
        Download My Resume
      </a>
    </div>
  );
};

export default Resume;
