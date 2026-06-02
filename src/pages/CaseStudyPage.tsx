import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft, HiExternalLink, HiCheckCircle, HiStar } from 'react-icons/hi';
import caseStudies from '../data/caseStudies';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    return (
      <div className="section" style={{ textAlign: 'center', paddingTop: 160 }}>
        <div className="container">
          <h1 className="section-title">Case Study Not Found</h1>
          <Link to="/" className="btn btn-primary" style={{ marginTop: 24 }}>Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section" style={{ paddingTop: 140 }}>
      <div className="container">
        <Link to="/" className="btn btn-outline" style={{ marginBottom: 32 }}>
          <HiArrowLeft size={18} /> Back to Home
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 48, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <span className="section-label">{study.category}</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>{study.title}</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: 8 }}>
              Client: <strong style={{ color: 'var(--text-primary)' }}>{study.client}</strong>
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: 24 }}>
              Industry: <strong style={{ color: 'var(--text-primary)' }}>{study.industry}</strong>
            </p>
            <a href={study.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <HiExternalLink size={18} /> Visit Live Site
            </a>
          </div>
          <div
            style={{
              flex: '1 1 300px',
              height: 280,
              borderRadius: 20,
              background: `linear-gradient(135deg, ${study.color}33, ${study.color}11)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border)',
            }}
          >
            <span style={{ fontSize: '3rem', fontWeight: 800, color: study.color, opacity: 0.3 }}>{study.client}</span>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>The Problem</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>{study.problem}</p>
        </div>

        <div className="card" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>Our Solution</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>{study.solution}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
          <div className="card">
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 16 }}>Technologies Used</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {study.technologies.map(t => (
                <span key={t} className="portfolio-tag" style={{
                  padding: '6px 14px',
                  background: 'var(--gradient-glow)',
                  borderRadius: 8,
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  color: 'var(--accent)',
                }}>{t}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 16 }}>Key Features</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {study.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <HiCheckCircle size={16} style={{ color: 'var(--accent)', marginTop: 3, minWidth: 16 }} /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 16 }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {study.results.map((r, i) => (
              <div key={i} style={{
                padding: 16,
                background: 'var(--gradient-glow)',
                borderRadius: 12,
                textAlign: 'center',
                fontWeight: 600,
                color: 'var(--accent)',
                fontSize: '0.95rem',
              }}>{r}</div>
            ))}
          </div>
        </div>

        <div className="card" style={{
          background: 'var(--gradient-glow)',
          borderColor: 'var(--accent)',
          textAlign: 'center',
          marginBottom: 48,
        }}>
          <HiStar size={24} style={{ color: 'var(--accent)', marginBottom: 12 }} />
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 16, maxWidth: 700, margin: '0 auto 16px' }}>
            "{study.testimonial.quote}"
          </p>
          <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>{study.testimonial.author}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{study.testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
