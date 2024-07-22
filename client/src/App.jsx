import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Education from './components/Education/Education';
import Footer from "./components/Footer/Footer";

function App() {
  
  return (
    <>
      <Navbar />
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
      </main>
      <Footer />
    </>
  );
}

export default App
