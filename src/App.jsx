import React, { useState } from 'react';
import './App.css';
import Background from './components/Background';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Process from './components/Process';
import Registration from './components/Registration';
import InfoSection from './components/InfoSection';
import Prizes from './components/Prizes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Intro from './components/Intro';

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="app-container">
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      <Background />
      <Navbar isVisible={introDone} />
      <main className={introDone ? 'content-visible' : 'content-hidden'}>
        <Hero isIntroDone={introDone} />
        <InfoSection 
          id="about"
          title="ABOUT HACKATHON"
          content={
            <p>
              SCTCE Hackathon 2026 is a flagship event organized by the Coding Club of SCTCE. 
              It's a platform for technical enthusiasts to collaborate, innovate, and solve real-world problems. 
              Join us for 24 hours of non-stop coding, learning, and growth.
            </p>
          }
        />
        <Schedule />
        <Process />
        <InfoSection 
          id="theme"
          title="HACKATHON THEME"
          align="center"
          content={
            <div className="theme-announcement">
              TO BE ANNOUNCED
            </div>
          }
        />
        <Registration />
        <Prizes />
        <Footer />
      </main>
    </div>
  );
}

export default App;
