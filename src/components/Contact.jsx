import { useState } from 'react';
import { HiPhone, HiMail, HiGlobe, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  { icon: <HiPhone size={20} />, label: 'Phone', value: '0330-6553479', href: 'tel:+923306553479' },
  { icon: <FaWhatsapp size={20} />, label: 'WhatsApp', value: '0330-6553479', href: 'https://wa.me/923306553479' },
  { icon: <HiMail size={20} />, label: 'Email', value: 'lenovatech69@gmail.com', href: 'mailto:lenovatech69@gmail.com' },
  { icon: <HiGlobe size={20} />, label: 'Website', value: 'lenovatech.site', href: 'https://lenovatech.site' },
  { icon: <HiLocationMarker size={20} />, label: 'Location', value: 'Lahore, Pakistan', href: null },
  { icon: <HiClock size={20} />, label: 'Hours', value: 'Mon - Sat, 10AM - 8PM', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', project: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Project Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Type: ${form.project}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:lenovatech69@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Ready to <span className="gradient-text">Start Your Project?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Let's discuss your idea and turn it into a powerful digital product. Free consultation — no commitments.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-side">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-desc">
              Reach out through any channel. We typically respond within 2 hours during business hours.
            </p>
            <div className="contact-info-list">
              {contactInfo.map((item, i) => (
                <a key={i} href={item.href || '#'} className="contact-info-item" target={item.href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" required placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="03XX-XXXXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Project Type</label>
                <select value={form.project} onChange={e => setForm({ ...form, project: e.target.value })}>
                  <option value="">Select type</option>
                  <option>Business Website</option>
                  <option>Web Application</option>
                  <option>E-Commerce Store</option>
                  <option>Mobile App</option>
                  <option>SaaS Platform</option>
                  <option>ERP / CRM System</option>
                  <option>Custom Software</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Budget Range</label>
              <select value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}>
                <option value="">Select budget</option>
                <option>Under PKR 50,000</option>
                <option>PKR 50,000 - 150,000</option>
                <option>PKR 150,000 - 500,000</option>
                <option>PKR 500,000 - 1,000,000</option>
                <option>PKR 1,000,000+</option>
                <option>Let's discuss</option>
              </select>
            </div>
            <div className="form-group">
              <label>Project Details *</label>
              <textarea required rows={5} placeholder="Tell us about your project, goals, and timeline..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary contact-submit">
              {sent ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
