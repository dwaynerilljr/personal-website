import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import './App.css';
import Toolbox from './components/Toolbox';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Toolbox />
    </React.Fragment>
  );
}

export default App;
