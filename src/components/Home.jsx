'use client';

import { useState, useEffect } from 'react';
import './Home.css';
import { scrollToSection } from '../utils/scroll';

const useTypingEffect = (text, speed = 60, delay = 0) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout;
    let i = 0;

    const startTyping = () => {
      const type = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, speed);
        } else {
          setDone(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
};

const Home = () => {
  const name = useTypingEffect('Moritz Nentwig', 70, 300);
  const title = useTypingEffect('Software Developer & Security Engineer', 40, 1400);

  return (
    <section id="home" className="section home-section">
      <div className="home-grid-bg" aria-hidden="true" />
      <div className="home-glow" aria-hidden="true" />
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <div className="terminal-prefix stagger-1">
              <span className="terminal-symbol">&gt;</span>
              <span className="terminal-path">~/moritz</span>
            </div>
            <h1 className="home-title stagger-2">
              {name.displayed}
              <span className={`cursor ${name.done ? 'blink' : ''}`}>_</span>
            </h1>
            <p className="home-subtitle stagger-3">
              {title.displayed}
              {name.done && !title.done && <span className="cursor">_</span>}
            </p>
            <p className="home-description stagger-4">
              Security engineer based in Lindau, Germany. I build and operate production-grade applications with security built in from day one.
              Master's in Computer Science, experience in fintech and banking.
            </p>
            <div className="home-cta stagger-5">
              <a
                href="#projects"
                className="cta-button primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="cta-button secondary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="profile-image-wrapper stagger-1">
            <img src="/ment.jpeg" alt="Moritz Nentwig - Software Developer and Security Engineer" className="profile-image" width="280" height="280" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
