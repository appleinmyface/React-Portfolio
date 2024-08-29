import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <About />
        {/* Add routing later to switch between different pages */}
        <Contact />
        <Portfolio />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
