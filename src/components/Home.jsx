import './Home.css';

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
          <h1 className="home-title">
            Software Developer &<br />
            Security Analyst / Engineer
          </h1>
          <p className="home-description">
            Specialized in secure software development, robust architecture design,
            and DevSecOps practices. Building reliable, security-focused solutions
            that protect what matters most.
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
    </section>
  );
};

export default Home;
