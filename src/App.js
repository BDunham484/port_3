import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  
  return (
    <div>
      <Nav
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      projectsSelected={projectsSelected}
      setProjectsSelected={setProjectsSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <Hero></Hero>
        {aboutSelected && <About></About>}
        {projectsSelected && <Projects></Projects>}
        {resumeSelected && <Resume></Resume>}
        {contactSelected && <Contact></Contact>}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
