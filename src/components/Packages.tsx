import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar, HiLightningBolt, HiSparkles, HiCheck, HiX, HiShieldCheck, HiSupport, HiCog } from 'react-icons/hi';
import './Packages.css';

interface PackageItem {
  name: string;
  icon: ReactNode;
  tagline: string;
  price: string;
  priceUsd: string;
  timeline?: string;
  period?: string;
  bestFor?: string;
  features: [boolean, string][];
  popular: boolean;
}

const devPackages: PackageItem[] = [
  {
    name: 'Starter',
    icon: <HiStar size={24} />,
    tagline: 'Perfect for small businesses & startups',
    price: '30,000',
    priceUsd: '110',
    timeline: '2-3 Weeks',
    bestFor: 'Business websites, portfolios, landing pages',
    features: [
      [true, 'Up to 5-7 responsive pages'],
      [true, 'React.js modern frontend'],
      [true, 'Mobile + Tablet + Desktop optimized'],
      [true, 'SEO-friendly structure & meta tags'],
      [true, 'Contact form with email notification'],
      [true, 'WhatsApp chat widget'],
      [true, 'Google Maps integration'],
      [true, 'Social media integration'],
      [true, 'Basic admin panel (CMS)'],
      [true, 'SSL certificate setup'],
      [true, 'Hosting setup & deployment'],
      [true, '1 month free support'],
      [true, '3 revision rounds'],
      [false, 'Full-stack MERN backend'],
      [false, 'User authentication & RBAC'],
      [false, 'Payment gateway integration'],
      [false, 'Real-time features'],
      [false, 'Mobile app (React Native)'],
    ],
    popular: false,
  },
  {
    name: 'Professional',
    icon: <HiLightningBolt size={24} />,
    tagline: 'For growing businesses & web apps',
    price: '60,000',
    priceUsd: '215',
    timeline: '4-8 Weeks',
    bestFor: 'E-commerce, booking platforms, web apps, portals',
    features: [
      [true, 'Up to 10-15 pages/screens'],
      [true, 'Full-Stack MERN application'],
      [true, 'User authentication (Login/Register/Reset)'],
      [true, 'Role-based access control (RBAC)'],
      [true, 'Custom admin dashboard with analytics'],
      [true, 'REST API development'],
      [true, 'Database design & optimization'],
      [true, 'Payment integration (Stripe/JazzCash/EasyPaisa)'],
      [true, 'Email notification system'],
      [true, 'Search, filter & pagination'],
      [true, 'Image/file upload (Cloudinary)'],
      [true, 'Third-party API integrations'],
      [true, 'Performance optimization & caching'],
      [true, 'Hosting & SSL included'],
      [true, '1 month priority support'],
      [true, '3 revisions per milestone'],
      [false, 'Real-time features (Socket.io)'],
      [false, 'Mobile app (React Native)'],
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: <HiSparkles size={24} />,
    tagline: 'For large-scale enterprise systems',
    price: '1,00,000',
    priceUsd: '360',
    timeline: '8-16+ Weeks',
    bestFor: 'ERP, SaaS, CRM, enterprise & multi-module systems',
    features: [
      [true, 'Unlimited pages/screens'],
      [true, 'Complex multi-module system'],
      [true, 'Advanced RBAC with permissions matrix'],
      [true, 'Multi-tenant architecture'],
      [true, 'Real-time features (Socket.io/WebSockets)'],
      [true, 'Push notifications (Web + Mobile)'],
      [true, 'Mobile app (React Native, iOS + Android)'],
      [true, 'Advanced reporting & data dashboards'],
      [true, 'Business process automation'],
      [true, 'Third-party system integrations'],
      [true, 'CI/CD pipeline setup'],
      [true, 'Load testing & performance benchmarking'],
      [true, 'Comprehensive documentation & training'],
      [true, 'Dedicated project manager'],
      [true, 'Hosting, SSL & deployment'],
      [true, '1 month+ extended support'],
      [true, 'Unlimited revisions during dev'],
      [true, 'Full source code ownership'],
    ],
    popular: false,
  },
];

const maintenancePackages: PackageItem[] = [
  {
    name: 'Basic',
    icon: <HiShieldCheck size={24} />,
    tagline: 'For static sites & small businesses',
    price: '15,000',
    priceUsd: '50',
    period: '/month',
    features: [
      [true, 'Monthly security updates & patches'],
      [true, 'Server monitoring & uptime checks'],
      [true, 'Bug fixes (up to 5 hrs/month)'],
      [true, 'Monthly backup'],
      [true, 'Email support (48hr response)'],
      [false, 'Performance optimization'],
      [false, 'Database optimization'],
      [false, 'Feature development'],
      [false, 'Priority support'],
    ],
    popular: false,
  },
  {
    name: 'Standard',
    icon: <HiSupport size={24} />,
    tagline: 'For web apps & growing businesses',
    price: '35,000',
    priceUsd: '120',
    period: '/month',
    features: [
      [true, 'Everything in Basic, plus:'],
      [true, 'Performance & speed monitoring'],
      [true, 'Bug fixes + minor tweaks (15 hrs/month)'],
      [true, 'Weekly backups'],
      [true, 'Database optimization'],
      [true, 'Third-party integration monitoring'],
      [true, 'Priority email + WhatsApp (24hr response)'],
      [false, 'Feature development & enhancements'],
      [false, 'Dedicated account manager'],
    ],
    popular: true,
  },
  {
    name: 'Premium',
    icon: <HiCog size={24} />,
    tagline: 'For enterprise & mission-critical systems',
    price: '75,000',
    priceUsd: '270',
    period: '/month',
    features: [
      [true, 'Everything in Standard, plus:'],
      [true, 'Feature development (30 hrs/month)'],
      [true, 'Daily backups + disaster recovery'],
      [true, 'Load monitoring & auto-scaling'],
      [true, 'CI/CD pipeline maintenance'],
      [true, 'Priority bug fixes (4-6hr response)'],
      [true, 'Dedicated account manager'],
      [true, 'Monthly performance report'],
      [true, 'Phone + WhatsApp + Email (6hr response)'],
    ],
    popular: false,
  },
];

export default function Packages() {
  const [activeTab, setActiveTab] = useState<string>('development');
  const packages = activeTab === 'development' ? devPackages : maintenancePackages;
  const isMaintenance = activeTab === 'maintenance';

  return (
    <section id="packages" className="section packages-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">Pricing</span>
          <h2 className="section-title">
            Transparent <span className="gradient-text">Packages</span> for Every Scale
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Choose the package that fits your project. All packages include quality assurance,
            responsive design, and deployment support.
          </p>
        </div>

        <div className="packages-toggle">
          <button
            className={`toggle-btn ${activeTab === 'development' ? 'active' : ''}`}
            onClick={() => setActiveTab('development')}
          >
            Development Packages
          </button>
          <button
            className={`toggle-btn ${activeTab === 'maintenance' ? 'active' : ''}`}
            onClick={() => setActiveTab('maintenance')}
          >
            Maintenance & Support
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className="packages-grid"
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
          {packages.map((pkg, i) => (
            <motion.div
              className={`package-card ${pkg.popular ? 'popular' : ''}`}
              key={pkg.name}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              {pkg.popular && <div className="popular-badge">Most Popular</div>}
              <div className="package-header">
                <div className="package-icon">{pkg.icon}</div>
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-tagline">{pkg.tagline}</p>
                <div className="package-price">
                  <span className="price-label">Starting from</span>
                  <div className="price-row">
                    <span className="price-currency">PKR</span>
                    <span className="price-amount">{pkg.price}</span>
                    {isMaintenance && <span className="price-period">{pkg.period}</span>}
                  </div>
                  <span className="price-usd">${pkg.priceUsd} USD{isMaintenance ? pkg.period : ''}</span>
                </div>
                {!isMaintenance && (
                  <div className="package-timeline">
                    <span>{pkg.timeline}</span>
                  </div>
                )}
              </div>
              <div className="package-features">
                {pkg.features.map(([included, text], j) => (
                  <div className={`package-feature ${included ? '' : 'disabled'}`} key={j}>
                    {included ? <HiCheck className="feature-check" /> : <HiX className="feature-x" />}
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              {!isMaintenance && pkg.bestFor && (
                <div className="package-best-for">
                  <strong>Best for:</strong> {pkg.bestFor}
                </div>
              )}
              <a href="#contact" className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} package-btn`}>
                Get a Quote
              </a>
            </motion.div>
          ))}
          </motion.div>
        </AnimatePresence>

        <div className="packages-note">
          <p>All development packages include: <strong>40% upfront</strong> - <strong>40% mid-project</strong> - <strong>20% on completion</strong> | Full source code ownership | NDA available</p>
        </div>
      </div>
    </section>
  );
}
