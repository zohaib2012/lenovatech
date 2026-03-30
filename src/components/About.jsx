import { HiShieldCheck, HiCode, HiLightningBolt, HiUserGroup, HiClock, HiCurrencyDollar } from 'react-icons/hi';
import './About.css';

const reasons = [
  { icon: <HiClock size={24} />, title: '9+ Years Experience', desc: 'Delivering digital solutions since 2017 across diverse industries.' },
  { icon: <HiCode size={24} />, title: 'In-House Expertise', desc: 'Every line of code is written by our team — no outsourcing.' },
  { icon: <HiShieldCheck size={24} />, title: 'Full Code Ownership', desc: 'Your project, your code. 100% source code transferred to you.' },
  { icon: <HiLightningBolt size={24} />, title: 'Agile Delivery', desc: 'Weekly sprint demos so you always see progress in real-time.' },
  { icon: <HiCurrencyDollar size={24} />, title: 'Fair Payment Terms', desc: '40% upfront, 40% mid-project, 20% on completion.' },
  { icon: <HiUserGroup size={24} />, title: 'Post-Launch Support', desc: '1 month free support included with every project we deliver.' },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-layout">
          <div className="about-left">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">
              We Don't Just Build Software.
              <br />
              <span className="gradient-text">We Build Partnerships.</span>
            </h2>
            <p className="section-subtitle">
              LenovaTech is a Lahore-based development agency delivering end-to-end
              digital solutions. We combine clean architecture, agile processes, and
              long-term support to help businesses scale with confidence.
            </p>
            <div className="about-highlights">
              <div className="about-highlight">
                <span className="about-highlight-number">150+</span>
                <span className="about-highlight-label">Projects Delivered</span>
              </div>
              <div className="about-highlight">
                <span className="about-highlight-number">50+</span>
                <span className="about-highlight-label">Happy Clients</span>
              </div>
              <div className="about-highlight">
                <span className="about-highlight-number">98%</span>
                <span className="about-highlight-label">Retention Rate</span>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="reasons-grid">
              {reasons.map((r, i) => (
                <div className="reason-card" key={i}>
                  <div className="reason-icon">{r.icon}</div>
                  <div>
                    <h4 className="reason-title">{r.title}</h4>
                    <p className="reason-desc">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
