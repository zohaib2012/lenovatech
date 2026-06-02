import { Link } from 'react-router-dom';
import { HiArrowLeft, HiDocumentText, HiUser, HiCurrencyDollar, HiLockClosed, HiShieldExclamation, HiScale } from 'react-icons/hi';

export default function TermsPage() {
  const sections = [
    {
      icon: <HiDocumentText size={22} />,
      title: 'Services Description',
      content: 'LenovaTech provides web development, mobile app development, custom software development, AI/ML solutions, and related digital services. The specific scope, deliverables, timeline, and pricing for each project will be defined in a separate Statement of Work (SOW) or project proposal agreed upon by both parties.',
    },
    {
      icon: <HiUser size={22} />,
      title: 'Client Responsibilities',
      content: 'The client agrees to provide timely feedback, necessary access to systems and information, and clear requirements throughout the project. Delays caused by the client\'s failure to fulfill these responsibilities may result in adjusted timelines. The client is responsible for providing accurate and complete information for the project.',
    },
    {
      icon: <HiCurrencyDollar size={22} />,
      title: 'Payment Terms',
      content: 'Payment terms are defined in the project proposal. Unless otherwise agreed, our standard payment schedule is 40% upfront, 40% upon mid-project milestone completion, and 20% upon final delivery. All payments are due within 15 days of invoice date. Late payments may result in project suspension.',
    },
    {
      icon: <HiLockClosed size={22} />,
      title: 'Intellectual Property',
      content: 'Upon full payment, the client receives 100% ownership of the custom code, designs, and deliverables created specifically for their project. LenovaTech retains the right to use pre-existing tools, libraries, and frameworks. We may request permission to display the project in our portfolio unless otherwise agreed.',
    },
    {
      icon: <HiShieldExclamation size={22} />,
      title: 'Limitation of Liability',
      content: 'LenovaTech\'s liability is limited to the total amount paid for the specific project giving rise to the claim. We are not liable for indirect, incidental, or consequential damages including lost profits, data loss, or business interruption. We do not warrant that the software will be error-free or uninterrupted.',
    },
    {
      icon: <HiScale size={22} />,
      title: 'Governing Law',
      content: 'These terms are governed by the laws of Pakistan. Any disputes arising from these terms shall be resolved through amicable negotiation first, and if unresolved, through the courts of Lahore, Pakistan. These terms constitute the entire agreement between the parties regarding our services.',
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
          <h1 className="section-title">Terms of Service</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Last updated: January 2026</p>
        </div>

        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 40 }}>
          By engaging LenovaTech\'s services or using our website, you agree to these Terms of Service.
          Please read them carefully before proceeding with any project.
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
