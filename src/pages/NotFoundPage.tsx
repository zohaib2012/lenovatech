import { Link } from 'react-router-dom';
import { HiEmojiSad } from 'react-icons/hi';

export default function NotFoundPage() {
  return (
    <div className="section" style={{
      paddingTop: 160,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: 'var(--gradient-glow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          color: 'var(--accent)',
        }}>
          <HiEmojiSad size={48} />
        </div>
        <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: 8 }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16, color: 'var(--text-primary)' }}>
          Page Not Found
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}
