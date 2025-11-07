import React from 'react';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Specs from './components/Specs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Showcase />
      <Specs />
      <Footer />
    </div>
  );
}
