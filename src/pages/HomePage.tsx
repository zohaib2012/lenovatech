import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Packages from '../components/Packages';
import Process from '../components/Process';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="scroll-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <HiArrowUp size={20} />
    </button>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Packages />
      <Process />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Contact />
      <ScrollToTop />
    </>
  );
}
