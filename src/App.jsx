import React, { useState, useEffect } from 'react';
import './App.css';
import TVSlideshow from './components/TVSlideshow';
import DecorativeElements from './components/DecorativeElements';

function App() {
  return (
    <div className="main-container">
      <h1 className="memorial-text">In Loving Memory of Patricia Galcatcher</h1>
      <DecorativeElements />
      <TVSlideshow />
    </div>
  );
}

export default App; 