import { HiUser, HiCode, HiColorSwatch, HiClipboardList } from 'react-icons/hi';
import './Team.css';

const members = [
  {
    icon: <HiUser size={40} />,
    initials: 'MA',
    name: 'Muhammad Ali',
    role: 'Founder & CEO',
    bio: '12+ years in technology, delivering 150+ projects across web, mobile, and AI. Passionate about building solutions that drive real business impact.',
  },
  {
    icon: <HiCode size={40} />,
    initials: 'CT',
    name: 'Usman Khan',
    role: 'Chief Technology Officer',
    bio: 'Full-stack architect specializing in MERN stack, cloud infrastructure, and AI/ML systems. Leads the technical vision and engineering excellence.',
  },
  {
    icon: <HiColorSwatch size={40} />,
    initials: 'LD',
    name: 'Ayesha Hassan',
    role: 'Lead UI/UX Designer',
    bio: 'Crafting intuitive, pixel-perfect interfaces with a focus on user-centered design, accessibility, and seamless brand experiences across all platforms.',
  },
  {
    icon: <HiCode size={40} />,
    initials: 'DV',
    name: 'Abdullah Riaz',
    role: 'Lead Developer',
    bio: 'Expert React and Node.js developer with deep experience in scalable architecture, API design, performance optimization, and team mentorship.',
  },
  {
    icon: <HiClipboardList size={40} />,
    initials: 'PM',
    name: 'Fatima Noor',
    role: 'Project Manager',
    bio: 'Certified Scrum Master ensuring every project delivers on time and on budget. Specializes in client communication, agile workflows, and risk management.',
  },
  {
    icon: <HiUser size={40} />,
    initials: 'BD',
    name: 'Hassan Iqbal',
    role: 'Business Development',
    bio: 'Driving client partnerships and strategic growth. Dedicated to understanding client needs and delivering solutions that exceed expectations.',
  },
];

export default function Team() {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Team</span>
          <h2 className="section-title">
            Meet the <span className="gradient-text">People Behind the Code</span>
          </h2>
          <p className="section-subtitle">
            A passionate team of engineers, designers, and strategists dedicated to building
            world-class digital products.
          </p>
        </div>

        <div className="team-grid">
          {members.map((member, i) => (
            <div className="team-card card" key={i}>
              <div className="team-avatar">{member.icon}</div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
