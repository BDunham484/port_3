import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
