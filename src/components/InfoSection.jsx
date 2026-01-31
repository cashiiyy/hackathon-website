import React, { useEffect, useRef } from 'react';
import './InfoSection.css';

const InfoSection = ({ title, content, id, align = 'center', image = null }) => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`info-section align-${align}`} id={id} ref={sectionRef}>
      <div className="container">
        <div className="info-content-wrapper">
          <div className="info-text">
            <h2 className="section-title">{title}</h2>
            <div className="info-body">{content}</div>
          </div>
          {image && (
            <div className="info-image">
              <img src={image} alt={title} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
