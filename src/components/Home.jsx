'use client';

import './Home.css';
import { scrollToSection } from '../utils/scroll';

const Home = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container">
        <div className="home-content">
          <div className="profile-image-wrapper stagger-1">
            <img src="/ment.jpeg" alt="Moritz Nentwig - Software Developer and Security Engineer" className="profile-image" width="280" height="280" />
          </div>
          <div className="home-text">
            <h1 className="home-title stagger-2">
              Moritz Nentwig
            </h1>
            <p className="home-subtitle stagger-3">Software Developer & Security Engineer</p>
            <p className="home-description stagger-4">
              Software and security engineer based in Lindau, Germany. I build and operate production-grade applications with security built in from day one.
              Master's in Computer Science, experience in fintech and banking. Fluent in German and English.
            </p>
            <p className="home-quote stagger-4">
              <em>&ldquo;I like to build, test, and break stuff — curiosity drives the process.&rdquo;</em>
            </p>
            <div className="home-cta stagger-5">
              <a
                href="#skills"
                className="cta-button primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('skills');
                }}
              >
                View Skills
              </a>
              <a
                href="#contact"
                className="cta-button secondary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
