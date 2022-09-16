import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero'
import About from './components/About';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <About></About>
      </main>
    </div>
  );
}

export default App;
