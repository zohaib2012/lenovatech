import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaFigma, FaStripe } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostgresql, SiRedis, SiTailwindcss, SiTypescript, SiNextdotjs, SiFirebase, SiNestjs, SiSocketdotio, SiVercel, SiJest } from 'react-icons/si';
import './TechStack.css';

const techs = [
  { icon: <FaReact size={32} />, name: 'React.js', cat: 'Frontend' },
  { icon: <SiNextdotjs size={32} />, name: 'Next.js', cat: 'Frontend' },
  { icon: <SiTypescript size={32} />, name: 'TypeScript', cat: 'Language' },
  { icon: <SiTailwindcss size={32} />, name: 'Tailwind CSS', cat: 'Styling' },
  { icon: <FaNodeJs size={32} />, name: 'Node.js', cat: 'Backend' },
  { icon: <SiExpress size={32} />, name: 'Express.js', cat: 'Backend' },
  { icon: <SiNestjs size={32} />, name: 'NestJS', cat: 'Backend' },
  { icon: <SiMongodb size={32} />, name: 'MongoDB', cat: 'Database' },
  { icon: <SiPostgresql size={32} />, name: 'PostgreSQL', cat: 'Database' },
  { icon: <SiRedis size={32} />, name: 'Redis', cat: 'Cache' },
  { icon: <SiFirebase size={32} />, name: 'Firebase', cat: 'Cloud' },
  { icon: <FaAws size={32} />, name: 'AWS', cat: 'Cloud' },
  { icon: <SiVercel size={32} />, name: 'Vercel', cat: 'Hosting' },
  { icon: <FaDocker size={32} />, name: 'Docker', cat: 'DevOps' },
  { icon: <FaGitAlt size={32} />, name: 'Git/GitHub', cat: 'Version Control' },
  { icon: <SiSocketdotio size={32} />, name: 'Socket.io', cat: 'Real-Time' },
  { icon: <FaStripe size={32} />, name: 'Stripe', cat: 'Payments' },
  { icon: <FaFigma size={32} />, name: 'Figma', cat: 'Design' },
];

export default function TechStack() {
  return (
    <section id="tech" className="section tech-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label">Technology</span>
          <h2 className="section-title">
            Built With <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We use battle-tested, industry-standard technologies to build fast, scalable, and maintainable products.
          </p>
        </div>

        <div className="tech-grid">
          {techs.map((t, i) => (
            <div className="tech-card" key={i}>
              <div className="tech-card-icon">{t.icon}</div>
              <span className="tech-card-name">{t.name}</span>
              <span className="tech-card-cat">{t.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
