import React from 'react';
import './Registration.css';

const Registration = () => {
  return (
    <section className="registration-section" id="registration">
      <div className="status-container">
        <div className="hexagon">
          <div className="hexagon-inner">
            <span className="status-label">STATUS</span>
            <span className="status-text glow-green">OPEN</span>
          </div>
        </div>
      </div>

      <div className="requirements-container">
        <h2 className="section-title small">REQUIREMENTS</h2>
        <ul className="requirements-list">
          <li>
            <span className="bullet"></span>
            Open to undergraduate students
          </li>
          <li>
            <span className="bullet"></span>
            Team or individual participation allowed
          </li>
          <li>
            <span className="bullet"></span>
            Must be available for entire hackathon duration
          </li>
        </ul>
        <div className="registration-actions">
          <button className="btn-primary">REGISTER NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Registration;
