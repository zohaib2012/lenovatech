import { useState } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import './Portfolio.css';

const filters = ['All', 'Web App', 'E-Commerce', 'SaaS'];

const projects = [
  {
    title: 'RxSense',
    category: 'SaaS',
    tags: ['React', 'Node.js', 'Cloud', 'Healthcare'],
    desc: 'Cloud-based pharmacy management platform for health systems — operations optimization, data analytics, and in-house dispensing solutions.',
    color: '#2563eb',
    url: 'https://www.rxsense.com/health-systems',
    image: '/portfolio/rxsense.png',
  },
  {
    title: 'SensAI',
    category: 'SaaS',
    tags: ['React', 'AI/ML', 'Node.js', 'MongoDB'],
    desc: 'AI-powered career intelligence platform with personalized job insights, smart resume optimization, and interview preparation tools.',
    color: '#14b8a6',
    url: 'https://sens-ai-harsh810.live/',
    image: '/portfolio/sensai.png',
  },
  {
    title: 'Brainwave',
    category: 'SaaS',
    tags: ['Next.js', 'AI', 'React', 'Tailwind CSS'],
    desc: 'Open AI chat application with productivity-boosting tools, smart conversations, and a sleek modern dark interface.',
    color: '#8b5cf6',
    url: 'https://brainwave-ai-nextjs.vercel.app/',
    image: '/portfolio/brainwave.png',
  },
  {
    title: 'Property Dealers Lahore',
    category: 'Web App',
    tags: ['React', 'Node.js', 'MongoDB', 'Google Maps'],
    desc: 'Real estate listing platform with property search, dealer directory, location-based filtering, and sales/rental management for the Lahore market.',
    color: '#d97706',
    url: 'https://propertydealerslahore.com/',
    image: '/portfolio/propertydealers.png',
  },
  {
    title: 'Laced Up',
    category: 'E-Commerce',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    desc: 'Premium footwear e-commerce store with product catalog, size filters, wishlist, cart, and secure checkout with COD & online payment support.',
    color: '#ef4444',
    url: 'https://lacedup.pk/',
    image: '/portfolio/lacedup.png',
  },
  {
    title: 'Sports Direct',
    category: 'E-Commerce',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    desc: 'Large-scale sports retail e-commerce platform with brand catalog, category-based navigation, and multi-region support for global customers.',
    color: '#1d4ed8',
    url: 'https://www.sportsdirect.com/sport',
    image: '/portfolio/sportsdirect.png',
  },
  {
    title: 'Pakistan Property Services',
    category: 'Web App',
    tags: ['React', 'Node.js', 'MongoDB', 'Maps'],
    desc: 'Full-featured real estate platform with 360-degree virtual tours, live property rates, maps integration, and WhatsApp inquiry system.',
    color: '#166534',
    url: 'https://pakistanpropertyservices.com.pk/',
    image: '/portfolio/pakistanproperty.png',
  },
  {
    title: 'Befiler',
    category: 'SaaS',
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
    desc: 'Business registration and tax filing platform with NTN registration, sales tax filing, company formation, and USA LLC services.',
    color: '#dc2626',
    url: 'https://www.befiler.com/business-services',
    image: '/portfolio/befiler.png',
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
                {project.image ? (
                  <img src={project.image} alt={project.title} className="portfolio-img" loading="lazy" />
                ) : (
                  <div className="portfolio-preview-icon" style={{ color: project.color }}>
                    <HiCode size={48} />
                  </div>
                )}
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
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    <HiExternalLink size={16} />
                    <span>Visit Live Site</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
