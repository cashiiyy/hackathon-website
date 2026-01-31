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
            <span className="bullet glow-red"></span>
            Open to undergraduate students
          </li>
          <li>
            <span className="bullet glow-yellow"></span>
            Team or individual participation allowed
          </li>
          <li>
            <span className="bullet glow-blue"></span>
            Must be available for entire hackathon duration
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Registration;
