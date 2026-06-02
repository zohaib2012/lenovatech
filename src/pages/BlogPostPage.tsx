import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft, HiCalendar, HiClock, HiTag, HiUser } from 'react-icons/hi';
import blogPosts from '../data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="section" style={{ textAlign: 'center', paddingTop: 160 }}>
        <div className="container">
          <h1 className="section-title">Post Not Found</h1>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: 24 }}>View All Posts</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section" style={{ paddingTop: 140 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <Link to="/blog" className="btn btn-outline" style={{ marginBottom: 32 }}>
          <HiArrowLeft size={18} /> Back to Blog
        </Link>

        <div style={{ marginBottom: 40 }}>
          <span className="section-label">{post.category}</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', marginBottom: 20 }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, marginBottom: 20, fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><HiUser size={16} /> {post.author}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><HiCalendar size={16} /> {post.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><HiClock size={16} /> {post.readTime}</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {post.tags.map(tag => (
              <span key={tag} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                padding: '6px 12px',
                background: 'var(--gradient-glow)',
                borderRadius: 8,
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'var(--accent)',
              }}><HiTag size={14} /> {tag}</span>
            ))}
          </div>
        </div>

        <div style={{
          height: 250,
          borderRadius: 16,
          background: 'var(--gradient-glow)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          fontWeight: 600,
          letterSpacing: 1,
          marginBottom: 40,
        }}>
          {post.category} — Featured Image
        </div>

        {post.content.map((paragraph, i) => (
          <p key={i} style={{
            color: 'var(--text-secondary)',
            lineHeight: 1.9,
            fontSize: '1rem',
            marginBottom: 24,
          }}>
            {paragraph}
          </p>
        ))}

        <div style={{
          marginTop: 48,
          padding: 24,
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'var(--gradient-glow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent)',
            fontWeight: 800,
            fontSize: '1.2rem',
            minWidth: 56,
          }}>MA</div>
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>{post.author}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Founder & CEO, LenovaTech</p>
          </div>
        </div>
      </div>
    </div>
  );
}
