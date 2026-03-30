import { useEffect, useRef } from 'react';
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import './Hero.css';

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 191, 165, ${p.opacity})`;
        ctx.fill();
      });

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 191, 165, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={particlesRef} className="hero-particles" />

      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Full-Stack Development Agency — Since 2017
        </div>

        <h1 className="hero-title">
          We Build <span className="gradient-text">Digital Products</span>
          <br />That Drive Growth
        </h1>

        <p className="hero-description">
          From stunning websites to powerful enterprise platforms — we design, develop,
          and deploy scalable solutions using the MERN stack and React Native.
          Trusted by 50+ businesses since 2017.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Start Your Project <HiArrowRight />
          </a>
          <a href="#portfolio" className="btn btn-outline">
            <HiPlay /> View Our Work
          </a>
        </div>

        <div className="hero-tech">
          <span className="hero-tech-label">Powered By</span>
          <div className="hero-tech-icons">
            <div className="tech-icon-badge" title="MongoDB"><SiMongodb size={22} /></div>
            <div className="tech-icon-badge" title="Express.js"><SiExpress size={22} /></div>
            <div className="tech-icon-badge" title="React"><FaReact size={22} /></div>
            <div className="tech-icon-badge" title="Node.js"><FaNodeJs size={22} /></div>
            <div className="tech-icon-badge" title="React Native"><FaReact size={22} /></div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">9+</span>
            <span className="hero-stat-label">Years Experience</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">150+</span>
            <span className="hero-stat-label">Projects Delivered</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">50+</span>
            <span className="hero-stat-label">Happy Clients</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">98%</span>
            <span className="hero-stat-label">Client Retention</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
