import './App.css';
import Contact from './sections/Contact/Contact';
import Education from './sections/Education/Education';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
