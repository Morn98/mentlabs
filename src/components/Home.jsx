'use client';

import './Home.css';

const Home = () => {
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
              <span className="home-title-typed">Moritz Nentwig</span>
            </h1>
            <p className="home-subtitle stagger-3">Software Developer &amp; Security Engineer</p>
            <p className="home-description stagger-4">
              Security engineer based in Lindau, Germany. I build and operate production-grade applications with security built in from day one.
              Master's in Computer Science, experience in fintech and banking.
            </p>
            <div className="home-cta stagger-5">
              <a href="#projects" className="cta-button primary">
                View Projects
              </a>
              <a href="#contact" className="cta-button secondary">
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
