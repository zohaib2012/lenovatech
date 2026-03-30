import { useState } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import './Portfolio.css';

const filters = ['All', 'Web App', 'Mobile', 'E-Commerce', 'SaaS', 'Enterprise'];

const projects = [
  {
    title: 'ProFit QuoterApp',
    category: 'SaaS',
    tags: ['Angular', 'ASP.NET Core', 'SQL Server'],
    desc: 'AI-powered landscape estimation SaaS platform with quote generation, client portal, and company branding.',
    color: '#00bfa5',
  },
  {
    title: 'Aone Trade Platform',
    category: 'Web App',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    desc: 'Full-featured trading platform with live market data, portfolio tracking, real-time price updates, and secure payments.',
    color: '#f59e0b',
  },
  {
    title: 'MediCare HMS',
    category: 'Enterprise',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    desc: 'Hospital management system with role-based access, appointment scheduling, patient records, and billing.',
    color: '#ef4444',
  },
  {
    title: 'ShopVista E-Commerce',
    category: 'E-Commerce',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    desc: 'Modern e-commerce platform with product catalog, cart, wishlist, secure checkout, and inventory management.',
    color: '#8b5cf6',
  },
  {
    title: 'PropertyHub',
    category: 'Web App',
    tags: ['React', 'Tailwind', 'Express', 'MongoDB'],
    desc: 'Real estate platform with dynamic listings, advanced search/filter, inquiry management, and agent dashboard.',
    color: '#3b82f6',
  },
  {
    title: 'EduLearn LMS',
    category: 'Enterprise',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    desc: 'Learning management system with online classes, assignments, grade tracking, fee management, and parent portal.',
    color: '#22c55e',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">Our Work</span>
          <h2 className="section-title">
            Projects That <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A selection of recent projects showcasing our expertise across web, mobile, and enterprise development.
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`portfolio-filter ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map((project, i) => (
            <div className="portfolio-card card" key={i}>
              <div className="portfolio-preview" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}>
                <div className="portfolio-preview-icon" style={{ color: project.color }}>
                  <HiCode size={48} />
                </div>
                <span className="portfolio-category" style={{ background: `${project.color}20`, color: project.color }}>
                  {project.category}
                </span>
              </div>
              <div className="portfolio-info">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-desc">{project.desc}</p>
                <div className="portfolio-tags">
                  {project.tags.map(tag => (
                    <span className="portfolio-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
