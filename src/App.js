import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTopArrow from './Components/ScrollToTopArrow';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTopArrow />
    </div>
  );
}

export default App;
