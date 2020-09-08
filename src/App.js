import React from 'react';
import './App.css';
import NavBar from '../src/components/navBar/NavBar';
import TheCarousel from './components/carousel/TheCarousel';
import TitleMessage from './components/title-message/TitleMessage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TheCarousel />
      <TitleMessage />
    </div>
  );
}

export default App;
