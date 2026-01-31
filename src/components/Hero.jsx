import React from 'react';
import './Hero.css';

const Hero = ({ isIntroDone }) => {
  return (
    <section className="hero">
      <div className={`hero-content ${isIntroDone ? 'visible' : ''}`}>
        <h1 className="hero-title">
          <span className="premium-text">SCTCE</span> <span className="retro-text">HACKATHON 2026</span>
        </h1>
        <p className="hero-subtitle">
          Organized by <span className="highlight">Coding Club</span> of Sree Chitra Thirunal College of Engineering
        </p>
        <div className="hero-actions">
          <a href="https://sctcoding.club/">
            <button className="btn-primary">REGISTER NOW</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
