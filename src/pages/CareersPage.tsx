import { Link } from 'react-router-dom';
import { HiArrowLeft, HiBriefcase, HiMail, HiLocationMarker, HiClock, HiCurrencyDollar } from 'react-icons/hi';

const jobs = [
  {
    title: 'React Developer',
    type: 'Full-Time',
    location: 'Lahore, Pakistan (Remote)',
    salary: 'Market Competitive',
    desc: 'We are looking for a skilled React developer with experience in building modern, responsive web applications. You will work on diverse projects ranging from SaaS platforms to e-commerce solutions.',
    requirements: [
      '2+ years experience with React and modern JavaScript',
      'Strong understanding of hooks, state management, and component architecture',
      'Experience with REST APIs and asynchronous programming',
      'Familiarity with version control (Git)',
      'Knowledge of TypeScript is a plus',
    ],
  },
  {
    title: 'Node.js Developer',
    type: 'Full-Time',
    location: 'Lahore, Pakistan (Remote)',
    salary: 'Market Competitive',
    desc: 'Join our backend team to build scalable APIs, microservices, and serverless functions. You will architect and implement robust backend systems for our clients.',
    requirements: [
      '2+ years experience with Node.js and Express.js',
      'Experience with MongoDB, PostgreSQL, or similar databases',
      'Understanding of RESTful API design and GraphQL',
      'Knowledge of authentication and security best practices',
      'Experience with cloud platforms (AWS/GCP) is a plus',
    ],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-Time',
    location: 'Lahore, Pakistan (Remote)',
    salary: 'Market Competitive',
    desc: 'We need a creative UI/UX designer who can translate complex requirements into intuitive, beautiful interfaces. You will own the design process from wireframes to high-fidelity prototypes.',
    requirements: [
      '2+ years experience in UI/UX design',
      'Proficiency in Figma, Adobe XD, or similar tools',
      'Strong portfolio showcasing web and mobile designs',
      'Understanding of design systems and component libraries',
      'Knowledge of basic HTML/CSS is a plus',
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="section" style={{ paddingTop: 140 }}>
      <div className="container">
        <Link to="/" className="btn btn-outline" style={{ marginBottom: 32 }}>
          <HiArrowLeft size={18} /> Back to Home
        </Link>

        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          <span className="section-label">Careers</span>
          <h1 className="section-title">
            Join <span className="gradient-text">Our Team</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            At LenovaTech, we believe in building great software with great people. We foster a culture
            of learning, collaboration, and innovation. If you're passionate about technology and
            eager to grow, we'd love to hear from you.
          </p>
        </div>

        <div className="card" style={{ marginBottom: 40, textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: 700, margin: '0 auto' }}>
            We are a remote-first team based in Lahore, Pakistan. We value initiative, craftsmanship,
            and continuous learning. Our developers work with modern tools and frameworks on exciting
            projects for clients around the world.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 48 }}>
          {jobs.map((job, i) => (
            <div className="card" key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 8 }}>{job.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><HiBriefcase size={15} /> {job.type}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><HiLocationMarker size={15} /> {job.location}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><HiCurrencyDollar size={15} /> {job.salary}</span>
                  </div>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>{job.desc}</p>
              <h4 style={{ fontSize: '0.92rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>Requirements:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {job.requirements.map((req, j) => (
                  <li key={j} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                  }}>
                    <span style={{ color: 'var(--accent)' }}>•</span> {req}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card" style={{
          textAlign: 'center',
          background: 'var(--gradient-glow)',
          borderColor: 'var(--accent)',
        }}>
          <HiMail size={32} style={{ color: 'var(--accent)', marginBottom: 16 }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 8 }}>Don't See the Right Role?</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 20 }}>
            We're always looking for talented people. Send your resume to us and we'll reach out when a position opens up.
          </p>
          <a href="mailto:lenovatech69@gmail.com" className="btn btn-primary">
            <HiMail size={18} /> Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
