import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'; // 👈 New Home section (Hero part)
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <>
        <Navbar toggleDarkMode={toggleDarkMode} /> {/* Pass toggle if you want theme button */}

        {/* Background and Global Styles */}
        <div className="pt-24 min-h-screen text-black dark:text-white transition-colors duration-500 bg-gradient-to-b from-gray-900 to-black">

          {/* Sections */}
          <section id="home">
            <Home />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="certifications">
            <Certifications />
          </section>

          <section id="contact">
            <Contact />
          </section>

          {/* Footer */}
          <Footer />

        </div>
      </>
    </div>
  );
}

export default App;
