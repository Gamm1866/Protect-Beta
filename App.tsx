
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ProgramDetails } from './components/ProgramDetails';
import { Footer } from './components/Footer';

/**
 * Main App Component
 * PowerTech Academy Landing Page
 * Features extreme horizontal padding for a premium, focused look.
 */
const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF5722] selection:text-white">
      <Navbar />
      <main className="px-6 md:px-12 lg:px-24 xl:px-48 2xl:px-[500px] transition-all duration-500">
        <Hero />
        <BentoGrid />
        <ProgramDetails />
        <Footer />
      </main>
    </div>
  );
};

export default App;
