import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import './Portfolio.css';

interface Project {
  title: string;
  category: string;
  tags: string[];
  desc: string;
  color: string;
  url: string;
  image: string;
}

const filters: string[] = ['All', 'Web App', 'E-Commerce', 'SaaS'];

const projects: Project[] = [
  {
    title: 'GMX',
    category: 'Web App',
    tags: ['React', 'Web3', 'DeFi', 'Trading'],
    desc: 'Decentralized perpetual exchange with real-time charts, leverage trading, multi-asset pools, and on-chain liquidity — all wallet-connected and gas-optimized.',
    color: '#3b82f6',
    url: 'https://app.gmx.io/#/trade',
    image: '/portfolio/gmx.png',
  },
  {
    title: 'Compass',
    category: 'Web App',
    tags: ['Next.js', 'Real Estate', 'Search', 'Maps'],
    desc: 'Premium US real estate marketplace with exclusive listings, AI-powered search, agent tools, and immersive property discovery for buyers, sellers, and renters.',
    color: '#000000',
    url: 'https://www.compass.com/',
    image: '/portfolio/compass.png',
  },
  {
    title: 'Graana.com',
    category: 'Web App',
    tags: ['React', 'Real Estate', 'Pakistan', 'Search'],
    desc: 'Pakistan\'s trusted online real estate portal with vetted properties, advanced search, investment tools, and integrated building-materials marketplace.',
    color: '#ed5e49',
    url: 'https://www.graana.com/',
    image: '/portfolio/graana.png',
  },
  {
    title: 'Property Finder',
    category: 'Web App',
    tags: ['React', 'Real Estate', 'UAE', 'AI Search'],
    desc: 'UAE\'s leading property platform with AI-powered home search, transactions data, agent directory, mortgage tools, and full multi-emirate coverage.',
    color: '#ef4444',
    url: 'https://www.propertyfinder.ae/',
    image: '/portfolio/propertyfinder.png',
  },
  {
    title: 'PostEx',
    category: 'SaaS',
    tags: ['React', 'FinTech', 'Logistics', 'COD'],
    desc: 'Pakistan\'s award-winning COD logistics & growth-capital platform — instant payouts, business suite, financing, and end-to-end e-commerce fulfillment.',
    color: '#22c55e',
    url: 'https://postex.pk/',
    image: '/portfolio/postex.png',
  },
  {
    title: 'Better Stack',
    category: 'SaaS',
    tags: ['Next.js', 'AI', 'Observability', 'Cloud'],
    desc: 'AI-powered SRE observability platform with real-time error tracking, log management, incident response, and uptime monitoring — built for modern engineering teams.',
    color: '#6366f1',
    url: 'https://betterstack.com/',
    image: '/portfolio/betterstack.png',
  },
  {
    title: 'ClickUp',
    category: 'SaaS',
    tags: ['React', 'Productivity', 'AI', 'Workflow'],
    desc: 'All-in-one productivity platform combining tasks, docs, chat, goals & AI agents — designed to replace dozens of tools with a single workspace.',
    color: '#fb4d8d',
    url: 'https://clickup.com/',
    image: '/portfolio/clickup.png',
  },
  {
    title: 'Mercury',
    category: 'SaaS',
    tags: ['React', 'FinTech', 'Banking', 'Stripe'],
    desc: 'Modern digital banking platform for startups and businesses — seamless account opening, payments, treasury, credit cards, and powerful API integrations.',
    color: '#5469d4',
    url: 'https://mercury.com/',
    image: '/portfolio/mercury.png',
  },
  {
    title: 'Housecall Pro',
    category: 'SaaS',
    tags: ['React', 'Field Service', 'Mobile', 'Payments'],
    desc: 'End-to-end field service management software for home service businesses — scheduling, dispatch, invoicing, payments, and customer CRM in one platform.',
    color: '#fbbf24',
    url: 'https://www.housecallpro.com/',
    image: '/portfolio/housecallpro.png',
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
  const [active, setActive] = useState<string>('All');

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

        <AnimatePresence mode="wait">
          <motion.div
            className="portfolio-grid"
            key={active}
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {filtered.map((project) => (
              <motion.div
                className="portfolio-card card"
                key={project.title}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                layout
              >
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
                  <span className="portfolio-view-btn">View Project</span>
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
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
