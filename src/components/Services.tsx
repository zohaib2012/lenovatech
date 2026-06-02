import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiDeviceMobile, HiCog, HiShoppingCart, HiChartBar, HiCloud, HiLink, HiLightningBolt, HiShieldCheck, HiDatabase, HiGlobe, HiDesktopComputer } from 'react-icons/hi';
import './Services.css';

interface Category {
  id: string;
  label: string;
  icon: ReactNode;
}

interface ServiceItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

const categories: Category[] = [
  { id: 'web', label: 'Web Development', icon: <HiGlobe /> },
  { id: 'mobile', label: 'Mobile Apps', icon: <HiDeviceMobile /> },
  { id: 'software', label: 'Custom Software', icon: <HiCog /> },
];

const services: Record<string, ServiceItem[]> = {
  web: [
    { icon: <HiGlobe size={28} />, title: 'Business Websites', desc: 'Professional corporate sites, portfolios, and landing pages — pixel-perfect, SEO-optimized, and blazing fast.' },
    { icon: <HiLightningBolt size={28} />, title: 'Web Applications (SPA)', desc: 'Interactive single-page apps with real-time updates, smooth navigation, and app-like experience.' },
    { icon: <HiCode size={28} />, title: 'Full-Stack MERN Platforms', desc: 'End-to-end platforms with React frontend, Node.js backend, MongoDB database, and secure authentication.' },
    { icon: <HiShoppingCart size={28} />, title: 'E-Commerce Solutions', desc: 'Complete online stores with product catalog, cart, checkout, inventory, and payment gateway integration.' },
    { icon: <HiChartBar size={28} />, title: 'Admin Dashboards', desc: 'Custom management panels with RBAC, analytics, data tables, charts, and full CRUD operations.' },
    { icon: <HiLink size={28} />, title: 'API Development', desc: 'RESTful and GraphQL APIs — third-party integrations, webhooks, and optimized mobile backends.' },
  ],
  mobile: [
    { icon: <HiDeviceMobile size={28} />, title: 'Cross-Platform Apps', desc: 'Single codebase for iOS & Android using React Native — native feel with reduced cost and time.' },
    { icon: <HiDesktopComputer size={28} />, title: 'Custom UI/UX Design', desc: 'Mobile interfaces designed from scratch — intuitive navigation, branded identity, smooth animations.' },
    { icon: <HiShieldCheck size={28} />, title: 'Auth & Security', desc: 'Social login, OTP verification, biometric authentication, and JWT-based secure session management.' },
    { icon: <HiLightningBolt size={28} />, title: 'Real-Time Features', desc: 'Live chat, push notifications, real-time feeds powered by Socket.io and Firebase.' },
    { icon: <HiCloud size={28} />, title: 'Offline-First Architecture', desc: 'Apps that work without internet — local caching, offline data access, and background sync.' },
    { icon: <HiDatabase size={28} />, title: 'Backend for Mobile', desc: 'Scalable Node.js APIs built for mobile — optimized payloads, pagination, and token auth.' },
  ],
  software: [
    { icon: <HiCog size={28} />, title: 'ERP & CRM Systems', desc: 'Enterprise platforms with sales, inventory, HR, finance, and reporting — all in one system.' },
    { icon: <HiShoppingCart size={28} />, title: 'POS & Inventory', desc: 'Point-of-sale with real-time stock tracking, barcode scanning, and automated alerts.' },
    { icon: <HiCloud size={28} />, title: 'SaaS Products', desc: 'Multi-tenant SaaS with subscription billing, onboarding flows, and scalable infrastructure.' },
    { icon: <HiChartBar size={28} />, title: 'Analytics Dashboards', desc: 'Data visualization with live charts, KPI widgets, filterable reports, and exportable data.' },
    { icon: <HiDatabase size={28} />, title: 'School & LMS', desc: 'Learning management with enrollment, attendance, grades, fees, online classes, and parent portals.' },
    { icon: <HiLightningBolt size={28} />, title: 'Business Automation', desc: 'Workflow tools that eliminate repetitive tasks — automated triggers, document generation, scheduling.' },
  ],
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('web');

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">
            Services That <span className="gradient-text">Deliver Results</span>
          </h2>
          <p className="section-subtitle">
            End-to-end development services for web, mobile, and enterprise — built with modern
            technology and designed for real business impact.
          </p>
        </div>

        <div className="services-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`services-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="services-grid"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {services[activeTab].map((service, i) => (
              <motion.div
                className="service-card card"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-line" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
