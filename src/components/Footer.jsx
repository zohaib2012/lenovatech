import { HiHeart } from 'react-icons/hi';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import './Footer.css';

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'Custom Software', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'SaaS Development', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  Contact: [
    { label: '0330-6553479', href: 'tel:+923306553479' },
    { label: 'lenovatech69@gmail.com', href: 'mailto:lenovatech69@gmail.com' },
    { label: 'lenovatech.site', href: 'https://lenovatech.site' },
    { label: 'Lahore, Pakistan', href: '#' },
  ],
};

const socials = [
  { icon: <FaLinkedinIn size={16} />, href: '#', label: 'LinkedIn' },
  { icon: <FaFacebookF size={16} />, href: '#', label: 'Facebook' },
  { icon: <FaInstagram size={16} />, href: '#', label: 'Instagram' },
  { icon: <FaGithub size={16} />, href: '#', label: 'GitHub' },
  { icon: <FaWhatsapp size={16} />, href: 'https://wa.me/923306553479', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <Logo size={36} />
            </a>
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
                  <li key={i}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LenovaTech. All rights reserved.</p>
          <p className="footer-made">Made with <HiHeart className="heart" /> in Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
