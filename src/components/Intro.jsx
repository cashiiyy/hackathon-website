import React, { useState, useEffect } from 'react';
import './Intro.css';
import logo from '../assets/logo.png';

const Intro = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onFinish, 1000);
          }, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`intro-container ${isDone ? 'fade-out' : ''}`}>
      <div className="intro-content">
        <div className="logo-wrapper">
          <img src={logo} alt="Coding Club SCTCE" className="intro-logo" />
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-text">
          <span className="label">INITIALIZING SYSTEM...</span>
          <span className="percentage">{progress}%</span>
        </div>
      </div>
      <div className="grid-overlay"></div>
    </div>
  );
};

export default Intro;
