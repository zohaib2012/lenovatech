import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { BsSun, BsMoon } from 'react-icons/bs';
import Logo from './Logo';
import DownloadApp from './DownloadApp';
import './Navbar.css';

interface NavLink {
  label: string;
  href: string;
  route?: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '/services', route: '/services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '/portfolio', route: '/portfolio' },
  { label: 'Packages', href: '#packages' },
  { label: 'Process', href: '#process' },
  { label: 'Blog', href: '/blog', route: '/blog' },
  { label: 'Contact', href: '/contact', route: '/contact' },
];

const sectionLinks = navLinks.filter(l => l.href.startsWith('#'));
const routeLinks = navLinks.filter(l => l.route);

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = sectionLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const handleSectionClick = (href: string) => {
    setMobileOpen(false);
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/' + href;
    }
  };

  const handleRouteClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
          <Logo size={42} />
        </Link>

        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map(link => {
            if (link.route) {
              return (
                <Link
                  key={link.href}
                  to={link.route}
                  className="nav-link"
                  onClick={handleRouteClick}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <a
                key={link.href}
                href={isHome ? link.href : '/' + link.href}
                className={`nav-link ${isHome && activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleSectionClick(link.href); }}
              >
                {link.label}
              </a>
            );
          })}
          <DownloadApp variant="navbar" />
          {isHome ? (
            <button className="btn btn-primary nav-cta" onClick={() => handleSectionClick('#contact')}>
              Get a Quote
            </button>
          ) : (
            <Link to="/#contact" className="btn btn-primary nav-cta">
              Get a Quote
            </Link>
          )}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
          </button>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
