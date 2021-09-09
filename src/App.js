import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import './App.css';
import Toolbox from './components/Toolbox';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Toolbox />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;
