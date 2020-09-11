import React from 'react';
import './App.css';
import NavBar from '../src/components/navBar/NavBar';
import TheCarousel from './components/carousel/TheCarousel';
import TitleMessage from './components/title-message/TitleMessage';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Education from './pages/education/Education';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TheCarousel />
      <TitleMessage />
      <About />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
