import React from 'react';
import './Resume.css'; // Import the new CSS file

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Derick Hernandez</h1>
      <p>Email: <a href="mailto:derickhh.05@gmail.com">derickhh.05@gmail.com</a><br />
        LinkedIn: <a href="https://www.linkedin.com/in/derick-hernandez-922b50325/" target="_blank" rel="noopener noreferrer">linkedin.com/in/derick-hernandez-922b50325/</a><br />
        GitHub: <a href="https://github.com/appleinmyface" target="_blank" rel="noopener noreferrer">github.com/appleinmyface</a>
      </p>

      <hr />

      <h2>About Me</h2>
      <p>
        I am an aspiring web developer with a passion for creating dynamic, responsive websites and applications. I have been coding since high school and my journey in web development has equipped me with a solid foundation in both front-end and full-stack technologies.
      </p>

      <hr />

      <h2>Education</h2>
      <p>UCF Coding Bootcamp <br /> Completion Date: September 12th, 2024</p>

      <hr />

      <h2>Skills</h2>
      <ul>
        <li>Front-End Development: HTML5, CSS3, JavaScript, Bootstrap, jQuery</li>
        <li>Full-Stack Development: Node.js, Express.js, SQL, RESTful APIs, AJAX, MongoDB</li>
        <li>Web Development Frameworks: React</li>
        <li>Database Management: Structured (SQL)</li>
        <li>Project Management: Agile Development, Team Collaboration, Git, Source Control</li>
        <li>Additional Skills: Testing, Object-Oriented Programming (OOP), Computer Science Fundamentals</li>
      </ul>

      <hr />

      <h2>Experience</h2>
      <h3>Team Collaboration & Agile Development</h3>
      <p>
        Worked in collaborative team environments, practicing Agile development methodologies. Contributed to issue tracking, functional feedback, and project management.
      </p>

      <h3>Technical Interview Preparation</h3>
      <p>
        Built strong foundational knowledge in computer science principles and coding practices, preparing for technical interviews with hands-on experience and project-based learning.
      </p>

      <a href="/Derick_Hernandez_Resume.pdf" download="Derick_Hernandez_Resume.pdf" className="download-link">
        Download My Resume
      </a>
    </div>
  );
};

export default Resume;
