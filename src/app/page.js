import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import StructuredData from '../components/SEO/StructuredData';

export default function Page() {
  return (
    <div className="app">
      <div className="noise-overlay" aria-hidden="true" />
      <StructuredData />
      <Navigation />
      <main>
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
