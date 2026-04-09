export default function Logo({ size = 40 }) {
  const textSize = size * 0.38;
  const tagSize = size * 0.16;
  const totalWidth = size * 5.2;

  return (
    <svg
      width={totalWidth}
      height={size}
      viewBox="0 0 260 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-svg"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a6fb5" />
          <stop offset="50%" stopColor="#00bfa5" />
          <stop offset="100%" stopColor="#7cff6b" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00bfa5" />
          <stop offset="100%" stopColor="#7cff6b" />
        </linearGradient>
      </defs>

      {/* Hexagon outer */}
      <polygon
        points="25,2 44,13 44,37 25,48 6,37 6,13"
        stroke="url(#logoGrad)"
        strokeWidth="2.5"
        fill="none"
      />

      {/* L letter inside hexagon */}
      <path
        d="M20,14 L20,34 L34,34"
        stroke="url(#logoGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Small diagonal accent on the L */}
      <path
        d="M20,14 L30,22"
        stroke="url(#logoGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Glow dot */}
      <circle cx="44" cy="13" r="2" fill="#7cff6b" opacity="0.9" />

      {/* LENOVATECH text */}
      <text x="55" y="28" fontFamily="'Inter', 'Segoe UI', sans-serif" fontSize="19" fontWeight="800" letterSpacing="2">
        <tspan fill="url(#logoGrad2)">LENOVA</tspan>
        <tspan fill="url(#logoGrad2)">TECH</tspan>
      </text>

      {/* Tagline */}
      <text x="55" y="42" fontFamily="'Inter', 'Segoe UI', sans-serif" fontSize="7.5" fontWeight="500" letterSpacing="3" fill="#8892a4">
        INNOVATIVE IT SOLUTIONS
      </text>
    </svg>
  );
}
