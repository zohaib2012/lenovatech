import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { HiPhone, HiMail, HiGlobe, HiLocationMarker, HiClock, HiExclamationCircle } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { detectSpam, rateLimit } from '../utils/spamProtection';
import './Contact.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

interface ContactInfoItem {
  icon: JSX.Element;
  label: string;
  value: string;
  href: string | null;
}

const contactInfo: ContactInfoItem[] = [
  { icon: <HiPhone size={20} />, label: 'Phone', value: '0330-6553479', href: 'tel:+923306553479' },
  { icon: <FaWhatsapp size={20} />, label: 'WhatsApp', value: '0330-6553479', href: 'https://wa.me/923306553479' },
  { icon: <HiMail size={20} />, label: 'Email', value: 'lenovatech69@gmail.com', href: 'mailto:lenovatech69@gmail.com' },
  { icon: <HiGlobe size={20} />, label: 'Website', value: 'lenovatech.site', href: 'https://lenovatech.site' },
  { icon: <HiLocationMarker size={20} />, label: 'Location', value: 'Lahore, Pakistan', href: null },
  { icon: <HiClock size={20} />, label: 'Hours', value: 'Mon - Sat, 10AM - 8PM', href: null },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  project: string;
  budget: string;
  message: string;
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', project: '', budget: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState('');
  const [spamError, setSpamError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSpamError('');
    setCaptchaError('');

    if (!captchaToken) {
      setCaptchaError('Please complete the reCAPTCHA verification.');
      return;
    }

    if (detectSpam(form.message)) {
      setSpamError('Your message appears to contain spam. Please remove any promotional content.');
      return;
    }

    if (rateLimit()) {
      setSpamError('You are submitting too quickly. Please wait a few seconds and try again.');
      return;
    }

    setStatus('sending');

    const now = new Date();
    const time = now.toLocaleString('en-PK', { dateStyle: 'full', timeStyle: 'short' });

    const templateParams = {
      name: `${form.name} (${form.email}${form.phone ? ', ' + form.phone : ''})`,
      time: `${time}\nProject: ${form.project || 'Not specified'}\nBudget: ${form.budget || 'Not specified'}`,
      message: form.message,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
      publicKey: EMAILJS_PUBLIC_KEY,
    })
      .then(() => {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', project: '', budget: '', message: '' });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch((err: unknown) => {
        console.error('EmailJS Error:', err);
        const subject = encodeURIComponent(`New Project Inquiry from ${form.name}`);
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nProject Type: ${form.project || 'Not specified'}\nBudget: ${form.budget || 'Not specified'}\n\nProject Details:\n${form.message}`
        );
        window.open(`mailto:lenovatech69@gmail.com?subject=${subject}&body=${body}`, '_self');
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', project: '', budget: '', message: '' });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
        setTimeout(() => setStatus('idle'), 4000);
      });
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
                <input type="text" name="name" required placeholder="Your name" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" name="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="03XX-XXXXXXX" value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Project Type</label>
                <select name="project" value={form.project} onChange={handleChange}>
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
              <select name="budget" value={form.budget} onChange={handleChange}>
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
              <textarea name="message" required rows={5} placeholder="Tell us about your project, goals, and timeline..." value={form.message} onChange={handleChange} />
            </div>
            {spamError && (
              <div className="form-error">
                <HiExclamationCircle size={18} />
                <span>{spamError}</span>
              </div>
            )}
            <div className="form-group recaptcha-wrapper">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                onChange={(token) => { setCaptchaToken(token); setCaptchaError(''); }}
                theme={document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'}
              />
              {captchaError && <span className="captcha-error">{captchaError}</span>}
            </div>
            <button type="submit" className="btn btn-primary contact-submit" disabled={status === 'sending'}>
              {status === 'sending' ? <><span className="spinner" /> Sending...</> : status === 'sent' ? '✓ Message Sent Successfully!' : status === 'error' ? '✗ Failed — Try Again' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
