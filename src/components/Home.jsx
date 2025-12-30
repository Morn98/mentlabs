import './Home.css';
import profileImage from '../../assets/ment.jpeg';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

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
              I'm a software and security engineer based in Lindau, Germany, building and operating production-grade applications with security built in from day one. 
              With a Master's in Computer Science and experience in fintech and banking, 
              I support companies as a reliable engineer — from hands-on development to security-critical systems. 
              Fluent in German and English.
            </p>
            <p className="home-quote">
              <em>"I like to build, test, and break stuff - curiosity drives the process. 🧑‍💻📚"</em>
            </p>
            <div className="home-cta">
              <button
                className="cta-button primary"
                onClick={() => scrollToSection('skills')}
              >
                View Skills
              </button>
              <button
                className="cta-button secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
