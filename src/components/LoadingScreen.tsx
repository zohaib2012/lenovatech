import './LoadingScreen.css';
import Logo from './Logo';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-logo">
        <Logo size={60} />
      </div>
      <div className="loading-bar-container">
        <div className="loading-bar" />
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}
