// src/App.jsx
import React from 'react';
import Header from './components/Header'; // Correct path
import Footer from './components/Footer';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default App;
