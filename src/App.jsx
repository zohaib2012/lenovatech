import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIServices from './components/AIServices';
import About from './components/About';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyPage from './pages/CaseStudyPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CareersPage from './pages/CareersPage';
import NotFoundPage from './pages/NotFoundPage';
import { HiArrowUp } from 'react-icons/hi';

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

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AIServices />
      <About />
      <Team />
      <Portfolio />
      <Packages />
      <Process />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:slug" element={<CaseStudyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}
