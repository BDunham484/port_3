import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  return (
    <div>
      <Nav
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      projectsSelected={projectsSelected}
      setProjectsSelected={setProjectsSelected}
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      ></Nav>
      <main>
        <Hero></Hero>
        {/* <About></About>
        <Projects></Projects>
        <Contact></Contact> */}
        {aboutSelected && <About></About>}
        {projectsSelected && <Projects></Projects>}
        {contactSelected && <Contact></Contact> }
      </main>
    </div>
  );
}

export default App;
