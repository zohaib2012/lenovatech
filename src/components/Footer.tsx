import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { HiHeart } from 'react-icons/hi';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import DownloadApp from './DownloadApp';
import './Footer.css';

interface FooterLink {
  label: string;
  href: string;
}

interface Social {
  icon: ReactNode;
  href: string;
  label: string;
}

const footerLinks: Record<string, FooterLink[]> = {
  Services: [
    { label: 'Web Development', href: '/services' },
    { label: 'Mobile Apps', href: '/services' },
    { label: 'Custom Software', href: '/services' },
    { label: 'E-Commerce', href: '/services' },
    { label: 'SaaS Development', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Our Process', href: '/#process' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/#faq' },
  ],
  Contact: [
    { label: '0330-6553479', href: 'tel:+923306553479' },
    { label: 'lenovatech69@gmail.com', href: 'mailto:lenovatech69@gmail.com' },
    { label: 'lenovatech.site', href: 'https://lenovatech.site' },
    { label: 'Lahore, Pakistan', href: '#' },
  ],
};

const socials: Social[] = [
  { icon: <FaLinkedinIn size={16} />, href: 'https://www.linkedin.com/company/lenovatech', label: 'LinkedIn' },
  { icon: <FaFacebookF size={16} />, href: 'https://www.facebook.com/lenovatech', label: 'Facebook' },
  { icon: <FaInstagram size={16} />, href: 'https://www.instagram.com/lenovatech', label: 'Instagram' },
  { icon: <FaGithub size={16} />, href: 'https://github.com/lenovatech', label: 'GitHub' },
  { icon: <FaWhatsapp size={16} />, href: 'https://wa.me/923306553479', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Logo size={36} />
            </Link>
            <p className="footer-desc">
              Full-stack development agency delivering scalable web, mobile, and enterprise solutions since 2017.
            </p>
            <div className="footer-socials">
              {socials.map((s, i) => (
                <a key={i} href={s.href} className="social-link" aria-label={s.label} target="_blank" rel="noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="footer-col" key={title}>
              <h4 className="footer-col-title">{title}</h4>
              <ul className="footer-links">
                {links.map((link, i) => (
                  <li key={i}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href}>{link.label}</Link>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
                {title === 'Contact' && (
                  <li>
                    <DownloadApp variant="footer" />
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LenovaTech. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <p className="footer-made">Made with <HiHeart className="heart" /> in Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
