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
            <a href="https://www.instagram.com/codingclubsctce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
            <a href="https://discord.com/invite/7w2wt3tvZa" target="_blank" rel="noopener noreferrer">DISCORD</a>
            <a href="https://chat.whatsapp.com/LTBlf3CJoYB1BdZDVwLDuP" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
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
