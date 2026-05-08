'use client';

export default function NaOClMolecule({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 280" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glowNa" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glowO" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glowCl" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bondGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Glow effects */}
      <circle cx="40" cy="170" r="60" fill="url(#glowNa)" className="animate-pulse" />
      <circle cx="160" cy="60" r="55" fill="url(#glowO)" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
      <circle cx="260" cy="180" r="65" fill="url(#glowCl)" className="animate-pulse" style={{ animationDelay: '0.8s' }} />

      {/* Na atom */}
      <circle cx="40" cy="170" r="32" fill="#1e40af" stroke="#3b82f6" strokeWidth="2.5" filter="url(#shadow)" />
      <text x="40" y="170" textAnchor="middle" dy=".35em" fill="white" fontSize="16" fontWeight="800" fontFamily="Inter, sans-serif">Na</text>

      {/* O atom */}
      <circle cx="160" cy="60" r="28" fill="#991b1b" stroke="#ef4444" strokeWidth="2.5" filter="url(#shadow)" />
      <text x="160" y="60" textAnchor="middle" dy=".35em" fill="white" fontSize="14" fontWeight="800" fontFamily="Inter, sans-serif">O</text>

      {/* Cl atom */}
      <circle cx="260" cy="180" r="34" fill="#166534" stroke="#22c55e" strokeWidth="2.5" filter="url(#shadow)" />
      <text x="260" y="180" textAnchor="middle" dy=".35em" fill="white" fontSize="14" fontWeight="800" fontFamily="Inter, sans-serif">Cl</text>

      {/* Bonds */}
      <line x1="68" y1="155" x2="136" y2="80" stroke="url(#bondGrad)" strokeWidth="4" strokeLinecap="round" />
      <line x1="184" y1="78" x2="232" y2="158" stroke="url(#bondGrad)" strokeWidth="4" strokeLinecap="round" />

      {/* Labels */}
      <text x="40" y="220" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">Sodium</text>
      <text x="160" y="100" textAnchor="middle" fill="#f87171" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">Oxygen</text>
      <text x="260" y="230" textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">Chlorine</text>

      {/* Electron orbits (decorative) */}
      <ellipse cx="160" cy="170" rx="130" ry="50" fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="1" strokeDasharray="6 4" />
    </svg>
  );
}
