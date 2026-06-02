import { Link } from 'react-router-dom';
import { HiArrowLeft, HiShieldCheck, HiDatabase, HiUserGroup, HiMail, HiGlobe } from 'react-icons/hi';

export default function PrivacyPage() {
  const sections = [
    {
      icon: <HiDatabase size={22} />,
      title: 'Information We Collect',
      content: 'We collect information you provide directly, such as your name, email address, phone number, and company details when you fill out forms on our website. We also automatically collect certain technical information including IP address, browser type, device information, and usage data through cookies and similar technologies to improve your experience.',
    },
    {
      icon: <HiUserGroup size={22} />,
      title: 'How We Use Your Information',
      content: 'We use the collected information to respond to your inquiries, provide our services, improve our website, send relevant communications about our services with your consent, comply with legal obligations, and prevent fraudulent or unauthorized activity. We do not sell your personal information to third parties.',
    },
    {
      icon: <HiShieldCheck size={22} />,
      title: 'Data Protection & Security',
      content: 'We implement industry-standard security measures including SSL encryption, secure server infrastructure, access controls, and regular security audits to protect your personal information. However, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.',
    },
    {
      icon: <HiGlobe size={22} />,
      title: 'Third-Party Services',
      content: 'We may use third-party services for analytics (Google Analytics), email communication, payment processing, and hosting. These service providers have access to your information only to perform specific tasks on our behalf and are contractually obligated to protect your data. We recommend reviewing their privacy policies.',
    },
    {
      icon: <HiMail size={22} />,
      title: 'Contact Us',
      content: 'If you have any questions about this Privacy Policy or our data practices, please contact us at lenovatech69@gmail.com or call +92 330 6553479. You have the right to access, correct, or delete your personal data at any time by reaching out to us.',
    },
  ];

  return (
    <div className="section" style={{ paddingTop: 140 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <Link to="/" className="btn btn-outline" style={{ marginBottom: 32 }}>
          <HiArrowLeft size={18} /> Back to Home
        </Link>

        <div style={{ marginBottom: 40 }}>
          <span className="section-label">Legal</span>
          <h1 className="section-title">Privacy Policy</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Last updated: January 2026</p>
        </div>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 40 }}>
          At LenovaTech, we take your privacy seriously. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {sections.map((s, i) => (
            <div className="card" key={i}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  minWidth: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--gradient-glow)',
                  borderRadius: 12,
                  color: 'var(--accent)',
                }}>{s.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem' }}>{s.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
