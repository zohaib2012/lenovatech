import { useState } from 'react';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Ahmed Khan',
    role: 'CEO, TradeFlow Solutions',
    text: 'LenovaTech delivered our trading platform ahead of schedule. The real-time features and responsive design exceeded our expectations. Highly recommended!',
    rating: 5,
    initial: 'A',
  },
  {
    name: 'Sarah Malik',
    role: 'Founder, EduConnect',
    text: 'They built our complete LMS from scratch — student portal, teacher dashboard, fee management. The quality of code and attention to detail was impressive.',
    rating: 5,
    initial: 'S',
  },
  {
    name: 'Usman Raza',
    role: 'Director, MediCare Clinics',
    text: 'Our hospital management system has transformed our operations. Appointment scheduling, patient records, billing — everything works flawlessly.',
    rating: 5,
    initial: 'U',
  },
  {
    name: 'Fatima Noor',
    role: 'Owner, Vista Properties',
    text: 'The real estate platform they built for us has significantly increased our online leads. Clean design, fast performance, and great ongoing support.',
    rating: 5,
    initial: 'F',
  },
  {
    name: 'Hassan Ali',
    role: 'CTO, ShopVista',
    text: 'Switched to LenovaTech after two failed agencies. They rebuilt our e-commerce platform in 6 weeks — Stripe integration, inventory system, everything works perfectly.',
    rating: 5,
    initial: 'H',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - visibleCount : c - 1));
  const next = () => setCurrent(c => (c >= testimonials.length - visibleCount ? 0 : c + 1));

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">Client Love</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Trusted by 50+ businesses. Here's what they have to say about working with us.
          </p>
        </div>

        <div className="testimonials-wrapper">
          <button className="testimonial-nav prev" onClick={prev}><HiChevronLeft size={24} /></button>
          <div className="testimonials-track">
            {testimonials.slice(current, current + visibleCount).map((t, i) => (
              <div className="testimonial-card card" key={i}>
                <div className="testimonial-stars">
                  {Array(t.rating).fill(0).map((_, j) => <HiStar key={j} className="star" />)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="testimonial-nav next" onClick={next}><HiChevronRight size={24} /></button>
        </div>

        <div className="testimonial-dots">
          {Array(testimonials.length - visibleCount + 1).fill(0).map((_, i) => (
            <button key={i} className={`dot ${current === i ? 'active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
