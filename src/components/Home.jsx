import './Home.css';
import profileImage from '../../assets/ment.jpeg';
import { scrollToSection } from '../utils/scroll';

const Home = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container">
        <div className="home-content">
          <div className="profile-image-wrapper">
            <img src={profileImage} alt="Moritz Nentwig - Software Developer and Security Engineer" className="profile-image" />
          </div>
          <div className="home-text">
            <h1 className="home-title">
              Software Developer &<br />
              Security Engineer
            </h1>
            <p className="home-description">
              Software and security engineer based in Lindau, Germany. I build and operate production-grade applications with security built in from day one.
              Master's in Computer Science, experience in fintech and banking. Fluent in German and English.
            </p>
            <p className="home-quote">
              <em>"I like to build, test, and break stuff - curiosity drives the process. 🧑‍💻📚"</em>
            </p>
            <div className="home-cta">
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
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
