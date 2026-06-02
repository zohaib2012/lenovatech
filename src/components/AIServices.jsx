import { useState } from 'react';
import { HiChip, HiChat, HiPhotograph, HiThumbUp, HiChartBar, HiDocumentText, HiCube, HiLightBulb } from 'react-icons/hi';
import './AIServices.css';

const categories = [
  { id: 'conversational', label: 'Conversational AI', icon: <HiChat /> },
  { id: 'perception', label: 'Perception AI', icon: <HiPhotograph /> },
  { id: 'analytics', label: 'Analytics & ML', icon: <HiChartBar /> },
];

const services = {
  conversational: [
    { icon: <HiChat size={28} />, title: 'AI Chatbots & Virtual Assistants', desc: 'GPT-powered conversational AI that handles customer support, lead qualification, and internal helpdesk with natural, human-like interactions.' },
    { icon: <HiChip size={28} />, title: 'Natural Language Processing (NLP)', desc: 'Text analysis, sentiment detection, entity recognition, language translation, and content summarization using state-of-the-art NLP models.' },
    { icon: <HiDocumentText size={28} />, title: 'Document Intelligence', desc: 'Automated document processing with intelligent data extraction, classification, and validation from invoices, contracts, forms, and reports.' },
  ],
  perception: [
    { icon: <HiPhotograph size={28} />, title: 'Computer Vision', desc: 'Image recognition, object detection, facial recognition, OCR, and video analytics for security, retail, healthcare, and industrial applications.' },
    { icon: <HiCube size={28} />, title: 'Custom ML Models', desc: 'End-to-end model development, training, evaluation, and deployment with MLOps pipelines for production-grade machine learning systems.' },
    { icon: <HiLightBulb size={28} />, title: 'AI Consulting & Strategy', desc: 'AI feasibility assessment, technology roadmap, data readiness evaluation, and strategic planning to maximize return on AI investments.' },
  ],
  analytics: [
    { icon: <HiThumbUp size={28} />, title: 'Recommendation Engines', desc: 'Personalized product, content, and service recommendations powered by collaborative filtering, content-based algorithms, and hybrid models.' },
    { icon: <HiChartBar size={28} />, title: 'Predictive Analytics', desc: 'Sales forecasting, demand prediction, customer churn analysis, and risk assessment using time-series analysis and machine learning models.' },
    { icon: <HiChip size={28} />, title: 'Generative AI Solutions', desc: 'Custom GPT fine-tuning, RAG pipelines, AI content generation, and knowledge retrieval systems for enterprise productivity and automation.' },
  ],
};

export default function AIServices() {
  const [activeTab, setActiveTab] = useState('conversational');

  return (
    <section id="ai-services" className="section ai-services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">AI/ML Capabilities</span>
          <h2 className="section-title">
            Intelligence That <span className="gradient-text">Drives Results</span>
          </h2>
          <p className="section-subtitle">
            From conversational AI to computer vision and predictive analytics — we build custom
            AI solutions that automate workflows, uncover insights, and transform your business.
          </p>
        </div>

        <div className="ai-services-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`ai-services-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="ai-services-grid">
          {services[activeTab].map((service, i) => (
            <div className="ai-service-card card" key={i}>
              <div className="ai-service-icon">{service.icon}</div>
              <h3 className="ai-service-title">{service.title}</h3>
              <p className="ai-service-desc">{service.desc}</p>
              <div className="ai-service-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
