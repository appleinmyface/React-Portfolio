import React from 'react';
import './Home.css';
import pfp from '../assets/Derick_Resume.png';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <img src={pfp} alt="Derick Hernandez" className="profile-pic" />
                <h2>Welcome to My Portfolio</h2>
                <h1><span>I am Derick Hernandez,</span> Full-Stack Developer.</h1>
                <p>I am a dedicated full-stack developer and graduate from UCF, fluent in English and Spanish, with a strong foundation in JavaScript, Node.js, React.js, and various full-stack technologies, driven to create impactful web applications and continuously improve my skills.</p>
            </header>
            <div className="home-buttons">
                <a href="/contact" className="btn connect">Connect with Me</a>
                <a href="/resume" className="btn resume">Resume</a>
            </div>
        </div>
    );
};

export default Home;
