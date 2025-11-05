import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Services />
      <Showcase />
      <Contact />
    </div>
  );
};

export default App;
