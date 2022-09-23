import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  
  return (
    <div>
      <Header
      aboutSelected={aboutSelected}
      setAboutSelected={setAboutSelected}
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Header>
      <main>
        <Hero></Hero>
        {aboutSelected && <About></About>}
        {portfolioSelected && <Portfolio></Portfolio>}
        {resumeSelected && <Resume></Resume>}
        {contactSelected && <Contact></Contact>}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
