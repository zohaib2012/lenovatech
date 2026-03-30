import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import './FAQ.css';

const faqs = [
  { q: 'What services does LenovaTech offer?', a: 'We offer complete web development (business sites, SPAs, e-commerce, dashboards), mobile app development (React Native for iOS & Android), and custom software solutions (ERP, CRM, SaaS, POS, LMS, booking systems). We handle everything from design to deployment.' },
  { q: 'How long does a typical project take?', a: 'It depends on scope: business websites take 2-3 weeks, web applications 4-8 weeks, and enterprise systems 8-16+ weeks. We provide accurate timelines after the discovery phase.' },
  { q: 'What are the payment terms?', a: 'We follow a milestone-based structure: 40% upfront before kickoff, 40% at mid-project after core development approval, and 20% upon completion and handover.' },
  { q: 'Will I own the source code?', a: 'Yes, 100%. Upon final payment, complete source code and project ownership is transferred to you. The code is yours to modify, host, or extend.' },
  { q: 'Do you provide post-launch support?', a: 'Every project includes 1 month of free post-launch support covering bug fixes, minor adjustments, and technical assistance. Extended support is available through our maintenance packages.' },
  { q: 'What technology stack do you use?', a: 'We specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), React Native for mobile, and also work with PostgreSQL, MySQL, Redis, Next.js, NestJS, Docker, AWS, and more.' },
  { q: 'Can you integrate payment gateways?', a: 'Absolutely — we integrate Stripe, PayPal, JazzCash, EasyPaisa, and other payment providers with secure checkout flows and subscription billing.' },
  { q: 'Do you sign NDAs?', a: 'Yes. We are happy to sign a Non-Disclosure Agreement before project discussions begin to ensure your business ideas and data remain fully confidential.' },
  { q: 'Do you handle hosting and deployment?', a: 'Yes. We set up hosting, configure the server, deploy your application, and set up SSL. Domain registration and renewal is the client\'s responsibility.' },
  { q: 'How do I get started?', a: 'Simply reach out via phone (0330-6553479), email (lenovatech69@gmail.com), or our website contact form. We\'ll schedule a free consultation to discuss your requirements.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Everything you need to know about working with us. Can't find your answer? Contact us directly.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <div className="faq-question">
                <span>{faq.q}</span>
                <HiChevronDown className="faq-chevron" />
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
