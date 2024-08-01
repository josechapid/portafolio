import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Education from './components/Education/Education';
import Footer from "./components/Footer/Footer";
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  
  return (
    <>
      <Navbar id="navBar" />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contactMe">
          <ContactMe/>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App
