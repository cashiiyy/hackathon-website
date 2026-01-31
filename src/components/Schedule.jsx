import React, { useEffect, useRef } from 'react';
import './Schedule.css';

const events = [
  { date: 'Feb 01', title: 'Registration Opens', glow: 'green' },
  { date: 'Feb 15', title: 'Registration Closes', glow: 'red' },
  { date: 'Feb 20', title: 'Opening Ceremony', glow: 'blue' },
  { date: 'Feb 21', title: 'Hackathon Begins', glow: 'yellow' },
  { date: 'Feb 22', title: 'Mentoring Sessions', glow: 'blue' },
  { date: 'Feb 23', title: 'Final Presentation & Judging', glow: 'green' },
  { date: 'Feb 23', title: 'Closing Ceremony', glow: 'red' },
];

const Schedule = () => {
  const sectionRef = useRef(null);

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

    const items = sectionRef.current.querySelectorAll('.schedule-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="schedule-section" id="schedule">
      <h2 className="section-title">SCHEDULE</h2>
      <div className="schedule-container" ref={sectionRef}>
        <div className="timeline-line"></div>
        {events.map((event, index) => (
          <div key={index} className="schedule-item">
            <div className="event-date">{event.date}</div>
            <div className={`event-dot glow-${event.glow}`}></div>
            <div className="event-title">{event.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
