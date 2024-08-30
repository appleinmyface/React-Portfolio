import React from 'react';

const Resume = () => {
  return (
    <div className="resume-container" style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '10px' }}>Derick Hernandez</h1>
      <p style={{ marginBottom: '5px' }}>689-677-2692 | <a href="mailto:derickhh.05@gmail.com">derickhh.05@gmail.com</a></p>
      <p style={{ marginBottom: '20px' }}>
        LinkedIn: <a href="https://www.linkedin.com/in/derick-hernandez-922b50325/" target="_blank" rel="noopener noreferrer">linkedin.com/in/derick-hernandez-922b50325/</a><br />
        GitHub: <a href="https://github.com/appleinmyface" target="_blank" rel="noopener noreferrer">github.com/appleinmyface</a>
      </p>

      <hr style={{ marginBottom: '20px' }} />

      <h2 style={{ marginBottom: '10px' }}>About Me</h2>
      <p style={{ marginBottom: '20px' }}>
        I am an aspiring web developer with a passion for creating dynamic, responsive websites and applications. I have been coding since high school and my journey in web development has equipped me with a solid foundation in both front-end and full-stack technologies, enabling me to build efficient, user-friendly web applications from scratch or by leveraging modern frameworks. As a fluent speaker of both English and Spanish, I bring strong communication skills and the ability to collaborate effectively in diverse teams. I'm eager to contribute to innovative projects, continually learn, and grow in the ever-evolving tech landscape.
      </p>

      <hr style={{ marginBottom: '20px' }} />

      <h2 style={{ marginBottom: '10px' }}>Education</h2>
      <p style={{ marginBottom: '20px' }}>UCF Coding Bootcamp <br />
         Completion Date: September 12th, 2024</p>

      <hr style={{ marginBottom: '20px' }} />

      <h2 style={{ marginBottom: '10px' }}>Skills</h2>
      <ul style={{ marginBottom: '20px' }}>
        <li>Front-End Development: HTML5, CSS3, JavaScript, Bootstrap, jQuery</li>
        <li>Full-Stack Development: Node.js, Express.js, SQL, RESTful APIs, AJAX, MongoDB</li>
        <li>Web Development Frameworks: React</li>
        <li>Database Management: Structured (SQL)</li>
        <li>Project Management: Agile Development, Team Collaboration, Git, Source Control</li>
        <li>Additional Skills: Testing, Object-Oriented Programming (OOP), Computer Science Fundamentals</li>
      </ul>

      <hr style={{ marginBottom: '20px' }} />

      <h2 style={{ marginBottom: '10px' }}>Experience</h2>
      <h3 style={{ marginBottom: '5px' }}>Team Collaboration & Agile Development</h3>
      <p style={{ marginBottom: '20px' }}>
        Worked in collaborative team environments, practicing Agile development methodologies. Contributed to issue tracking, functional feedback, and project management.
      </p>

      <h3 style={{ marginBottom: '5px' }}>Technical Interview Preparation</h3>
      <p style={{ marginBottom: '20px' }}>
        Built strong foundational knowledge in computer science principles and coding practices, preparing for technical interviews with hands-on experience and project-based learning.
      </p>

      <a 
        href="/Derick_Hernandez_Resume.pdf" 
        download="Derick_Hernandez_Resume.pdf" 
        style={{ 
          display: 'inline-block', 
          padding: '10px 20px', 
          backgroundColor: '#4750FF', 
          color: '#fff', 
          textDecoration: 'none', 
          borderRadius: '5px', 
          textAlign: 'center' 
        }}
      >
        Download My Resume
      </a>
    </div>
  );
};

export default Resume;
