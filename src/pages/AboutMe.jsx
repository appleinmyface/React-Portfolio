import React, { useEffect, useState } from 'react';
import './AboutMe.css'; // Import your CSS file for styling
import profilePic from '../assets/Derick_Resume.png'; // Import the image

// TypingEffect component to create the typing animation
const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId); // Clear interval when done
      }
    }, speed);
    
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [text, speed]);

  return <h1 className="typing-effect">{displayedText}</h1>;
};

// AboutMe component to display user information
const AboutMe = () => {
  return (
    <section className="about-me">
      <img src={profilePic} alt="Derick Hernandez" className="profile-pic" />
      <div className="bio">
        <TypingEffect text="D erick Hernandez" speed={100} />
        <p><strong>Role:</strong> Student at UCF, Studying to Become a Full Stack Developer</p>
        <p><strong>Location:</strong> Florida, Born in Puerto Rico</p>
        <p><strong>Education:</strong> I began studying coding in high school, focusing on Java and Python. Now, I am fully immersed in JavaScript and a range of full-stack languages and technologies, including JavaScript, Node.js, React.js, CSS, HTML, SQL, MongoDB, PostgreSQL, and Sequelize.</p>
        <p><strong>Experience:</strong> As a UCF (University of Central Florida) graduate, I have developed numerous applications, which you can explore in the portfolio section of this website.</p>
        <p><strong>Skills:</strong> I am a perseverant individual who constantly seeks solutions, a hard worker, and someone who strives to excel in all endeavors. I also speak two languages fluently, them being English and Spanish.</p>
        <p><strong>Hobbies:</strong> Basketball, Video games, Coding.</p>
        <p><strong>Social Media:</strong></p>
        <ul>
          <li>GitHub: <a href="https://github.com/appleinmyface" target="_blank" rel="noopener noreferrer">appleinmyface</a></li>
          <li>Linkedin: <a href="https://www.linkedin.com/in/derick-hernandez-922b50325/" target="_blank" rel="noopener noreferrer">Derick Hernandez</a></li>
          <li>Email: <a href="mailto:derickhh.05@gmail.com">derickhh.05@gmail.com</a></li>
        </ul>
      </div>
    </section>
  );
};


export default AboutMe;
