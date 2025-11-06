import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/90 py-6">
        <div className="container mx-auto px-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Backend Developer Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
