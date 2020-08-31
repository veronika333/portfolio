import React from 'react';
import './App.css';
import NavBar from '../src/components/navBar/NavBar';
import TheCarousel from './components/carousel/TheCarousel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TheCarousel />
    </div>
  );
}

export default App;
