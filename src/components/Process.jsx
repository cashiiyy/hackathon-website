import React, { useEffect, useRef } from 'react';
import './Process.css';

const steps = [
  { id: 1, title: 'Registration', desc: 'Secure your spot for the ultimate challenge.' },
  { id: 2, title: 'Online Screening', desc: 'Submit your idea and plan for the hackathon.' },
  { id: 3, title: 'Shortlisting', desc: 'Top teams will be invited to the final round.' },
  { id: 4, title: 'On-campus Hackathon', desc: '24 hours of non-stop coding at SCTCE.' },
];

const Process = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = containerRef.current.querySelectorAll('.process-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-section" id="process">
      <h2 className="section-title">PROCESS</h2>
      <div className="process-container" ref={containerRef}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="process-card">
              <div className="step-number">{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
            {index < steps.length - 1 && <div className="process-connector"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Process;
