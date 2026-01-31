import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="glow-blue">CODING CLUB</span> SCTCE
          </div>
          <p className="footer-tagline">Innovating the future, one byte at a time.</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GITHUB</a>
          </div>
          <div className="copyright">
            © 2026 Coding Club SCTCE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
