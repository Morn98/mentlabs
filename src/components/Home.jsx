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
              Based in Lindau am Bodensee, Germany, I specialize in software development and security engineering. 
              With a Master's in Computer Science and hands-on experience at Leapter, Liechtensteinische Landesbank, 
              ACTICO and MOGWAI Labs, I build production-grade applications and systems that balance functionality 
              with defense-in-depth principles. 
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
