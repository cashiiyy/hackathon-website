import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-content ${visible ? 'visible' : ''}`}>
        <h1 className="hero-title">
          <span className="glow-blue">SCTCE</span> HACKATHON 2026
        </h1>
        <p className="hero-subtitle">
          Organized by <span className="highlight">Coding Club</span> of Sree Chitra Thirunal College of Engineering
        </p>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
