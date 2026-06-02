import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { HiSearch, HiTemplate, HiColorSwatch, HiCode, HiShieldCheck, HiCloudUpload, HiAcademicCap, HiSupport } from 'react-icons/hi';
import './Process.css';

interface Step {
  icon: ReactNode;
  num: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { icon: <HiSearch size={24} />, num: '01', title: 'Discovery', desc: 'Understanding your business, goals, audience, and requirements through in-depth consultation.' },
  { icon: <HiTemplate size={24} />, num: '02', title: 'Planning', desc: 'Define scope, wireframes, database schema, technical architecture, and detailed timeline.' },
  { icon: <HiColorSwatch size={24} />, num: '03', title: 'UI/UX Design', desc: 'Beautiful interfaces with focus on usability, accessibility, and brand consistency.' },
  { icon: <HiCode size={24} />, num: '04', title: 'Development', desc: 'Sprint-based agile development with weekly demos and real-time progress updates.' },
  { icon: <HiShieldCheck size={24} />, num: '05', title: 'QA & Testing', desc: 'Rigorous testing — functionality, performance, security, cross-browser, and responsive.' },
  { icon: <HiCloudUpload size={24} />, num: '06', title: 'Deployment', desc: 'Server setup, hosting configuration, SSL, and zero-downtime production deployment.' },
  { icon: <HiAcademicCap size={24} />, num: '07', title: 'Handover', desc: 'Complete source code, documentation, credentials, and training session for your team.' },
  { icon: <HiSupport size={24} />, num: '08', title: 'Support', desc: '1 month free post-launch support for bug fixes, adjustments, and technical assistance.' },
];

export default function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">How We Work</span>
          <h2 className="section-title">
            Our <span className="gradient-text">Development Process</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A proven, transparent process that ensures quality delivery on time, every time.
          </p>
        </div>

        <motion.div
          className="process-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {steps.map((step, i) => (
            <motion.div
              className="process-step"
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <div className="process-num">{step.num}</div>
              <div className="process-icon">{step.icon}</div>
              <h4 className="process-title">{step.title}</h4>
              <p className="process-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="process-connector" />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
