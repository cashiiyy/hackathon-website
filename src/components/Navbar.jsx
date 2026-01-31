import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = ({ isVisible }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-links">
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#schedule" className="nav-link">SCHEDULE</a>
          <a href="#process" className="nav-link">PROCESS</a>
          <a href="#registration" className="nav-link">REGISTRATION</a>
          <a href="#prizes" className="nav-link">PRIZES</a>
        </div>
        <div className="nav-logo">
          <span className="logo-text"><span className="sctce">SCTCE</span> CODING CLUB</span>
          <img src={logo} alt="Logo" className="nav-icon" />
          <a href="https://sctcoding.club/" className="nav-cta-link">
            <button className="nav-cta">JOIN NOW</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
