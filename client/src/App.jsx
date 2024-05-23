import {Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import Education from './components/Education/Education'




function App() {
  
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/education" element={<Education />} />
      </Routes>

    </div>
 
  );
}

export default App
