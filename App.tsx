import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import PressPortfolio from './components/PressPortfolio';
import VideoContent from './components/VideoContent';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen relative bg-background text-secondary overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <PressPortfolio />
      <VideoContent />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;