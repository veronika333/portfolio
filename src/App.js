import React from 'react';
import './App.css';
import NavBar from '../src/components/navBar/NavBar';
import TheCarousel from './components/carousel/TheCarousel';
import TitleMessage from './components/title-message/TitleMessage';
import About from './pages/about/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TheCarousel />
      <TitleMessage />
      <About />
    </div>
  );
}

export default App;
