import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Swi <br /> Thapaswi</h1>
          <p>Software Developer</p>
        </div>

        {/* Scroll Icon */}
        <div className="scroll-down">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" fill="none" />
            <polyline points="14,18 20,24 26,18" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>
    </div>
  );
}

export default App;
