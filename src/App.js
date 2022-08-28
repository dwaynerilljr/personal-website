import { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import './App.css';
import Toolbox from './components/Toolbox';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => {
    if (window.scrollY <= 0) {
        setIsOpen(false);
    }
  }

  window.addEventListener('scroll', closeNav);

  const toggle = () => {
    const nav = document.getElementById("nav")
    nav.classList.add("bg-neon-teal", "text-default-black")
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <About />
      {/* <Toolbox /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
