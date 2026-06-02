import { Link } from 'react-router-dom';
import { HiCalendar, HiClock, HiTag } from 'react-icons/hi';
import blogPosts from '../data/blogPosts';

export default function BlogPage() {
  return (
    <div className="section" style={{ paddingTop: 140 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-label">Our Blog</span>
          <h1 className="section-title">
            Insights & <span className="gradient-text">Expertise</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Thoughts on technology, development best practices, and building products that make a difference.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="card" style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
              overflow: 'hidden',
            }}>
              <div style={{
                height: 200,
                background: 'var(--gradient-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: 1,
                borderBottom: '1px solid var(--border)',
              }}>
                {post.category}
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><HiCalendar size={14} /> {post.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><HiClock size={14} /> {post.readTime}</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      padding: '4px 10px',
                      background: 'var(--gradient-glow)',
                      borderRadius: 6,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'var(--accent)',
                    }}><HiTag size={12} /> {tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
