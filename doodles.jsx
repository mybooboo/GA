/* ===== Doodle SVG components ===== */
/* Hand-drawn kawaii decorations: sparkles, hearts, paper plane, stars, motion lines, clouds, grass */

const Sparkle = ({ size = 24, color = "#FFFFFF", className = "", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style}>
    <path
      d="M12 1 C12.6 7 13 7.4 19 8 C13 8.6 12.6 9 12 15 C11.4 9 11 8.6 5 8 C11 7.4 11.4 7 12 1 Z"
      fill={color}
      stroke="rgba(255,255,255,0.5)"
      strokeWidth="0.5"
    />
  </svg>
);

const SmallStar = ({ size = 14, color = "#FFD45A", className = "", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style}>
    <path
      d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"
      fill={color}
    />
  </svg>
);

const HeartDoodle = ({ size = 22, color = "#FFB3C4", className = "", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={style}>
    <path
      d="M16 27 C6 19 3 14 6 9 C8.5 4.5 14 5 16 9 C18 5 23.5 4.5 26 9 C29 14 26 19 16 27 Z"
      fill={color}
    />
  </svg>
);

const PaperPlane = ({ size = 56, color = "#FFFFFF", className = "", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className} style={style}>
    <g fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 30 L56 12 L46 56 L32 38 L8 30 Z" />
      <path d="M32 38 L56 12" />
      <path d="M32 38 L30 50" />
    </g>
  </svg>
);

const MotionLines = ({ color = "#FFFFFF", size = 36, className = "", style = {} }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 36 28" className={className} style={style}>
    <g stroke={color} strokeWidth="3" strokeLinecap="round" fill="none">
      <path d="M4 8 L18 8" />
      <path d="M2 16 L22 16" />
      <path d="M6 24 L20 24" />
    </g>
  </svg>
);

const DotDash = ({ color = "#FFFFFF", className = "", style = {} }) => (
  <svg width="40" height="20" viewBox="0 0 40 20" className={className} style={style}>
    <g stroke={color} strokeWidth="3" strokeLinecap="round" fill={color}>
      <circle cx="6" cy="10" r="1.8" />
      <line x1="14" y1="10" x2="22" y2="10" />
      <circle cx="30" cy="10" r="1.8" />
    </g>
  </svg>
);

const MiniGhostDoodle = ({ color = "#FFFFFF", className = "", style = {} }) => (
  <svg width="56" height="56" viewBox="0 0 56 56" className={className} style={style}>
    <g fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 40 C12 30 16 18 28 18 C40 18 44 30 42 40 L38 46 L34 42 L30 46 L26 42 L22 46 L18 42 Z" />
      <circle cx="23" cy="32" r="1.8" fill={color} />
      <circle cx="33" cy="32" r="1.8" fill={color} />
      <path d="M26 37 Q28 39 30 37" />
    </g>
    {/* tiny lines around */}
    <g stroke={color} strokeWidth="2" strokeLinecap="round">
      <line x1="6" y1="22" x2="2" y2="20" />
      <line x1="6" y1="28" x2="2" y2="30" />
      <line x1="50" y1="22" x2="54" y2="20" />
    </g>
  </svg>
);

const Cloud = ({ size = 100, opacity = 0.95, className = "", style = {} }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 100 60" className={className} style={{ ...style, opacity }}>
    <g fill="white">
      <ellipse cx="22" cy="40" rx="20" ry="16" />
      <ellipse cx="42" cy="28" rx="22" ry="20" />
      <ellipse cx="66" cy="34" rx="20" ry="18" />
      <ellipse cx="82" cy="42" rx="14" ry="12" />
      <rect x="14" y="40" width="74" height="14" rx="7" />
    </g>
  </svg>
);

const Strawberry = ({ size = 28, className = "", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 32 36" className={className} style={style}>
    <path
      d="M16 8 C24 8 28 14 28 20 C28 27 22 33 16 33 C10 33 4 27 4 20 C4 14 8 8 16 8 Z"
      fill="#FF5A5A"
      stroke="#C5392F"
      strokeWidth="1.2"
    />
    {/* leaves */}
    <path
      d="M16 3 C12 4 9 6 8 9 C11 9 13 8 16 7 C19 8 21 9 24 9 C23 6 20 4 16 3 Z"
      fill="#7ED957"
      stroke="#4DA331"
      strokeWidth="1.2"
    />
    <path d="M16 3 L16 9" stroke="#4DA331" strokeWidth="1.4" strokeLinecap="round" />
    {/* seeds */}
    <g fill="#FFE680">
      <ellipse cx="11" cy="16" rx="0.9" ry="1.2" transform="rotate(-20 11 16)" />
      <ellipse cx="17" cy="14" rx="0.9" ry="1.2" />
      <ellipse cx="22" cy="17" rx="0.9" ry="1.2" transform="rotate(20 22 17)" />
      <ellipse cx="9" cy="22" rx="0.9" ry="1.2" transform="rotate(-15 9 22)" />
      <ellipse cx="14" cy="22" rx="0.9" ry="1.2" />
      <ellipse cx="20" cy="22" rx="0.9" ry="1.2" />
      <ellipse cx="25" cy="22" rx="0.9" ry="1.2" transform="rotate(15 25 22)" />
      <ellipse cx="12" cy="27" rx="0.9" ry="1.2" />
      <ellipse cx="17" cy="28" rx="0.9" ry="1.2" />
      <ellipse cx="22" cy="27" rx="0.9" ry="1.2" />
    </g>
  </svg>
);

const Daisy = ({ size = 22, className = "", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className} style={style}>
    <g fill="white" stroke="#E8D78A" strokeWidth="0.8">
      {/* 8 petals around center */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * 360;
        return (
          <ellipse
            key={i}
            cx="20" cy="9" rx="4" ry="7"
            transform={`rotate(${a} 20 20)`}
          />
        );
      })}
    </g>
    <circle cx="20" cy="20" r="4.5" fill="#FFD45A" stroke="#E8B73D" strokeWidth="0.8" />
    <circle cx="20" cy="20" r="2" fill="#FFB73D" opacity="0.5" />
  </svg>
);

const HamzziStamp = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40">
    <defs>
      <clipPath id="hamzzi-clip">
        <circle cx="20" cy="20" r="18" />
      </clipPath>
    </defs>
    <circle cx="20" cy="20" r="19" fill="#FFE9A8" stroke="#E83E3E" strokeWidth="2" strokeDasharray="2 1.5" />
    <g clipPath="url(#hamzzi-clip)">
      {/* strawberry hat */}
      <path d="M9 18 C9 12 14 8 20 8 C26 8 31 12 31 18 L31 22 L9 22 Z" fill="#FF6B6B" />
      <ellipse cx="14" cy="15" rx="0.8" ry="0.8" fill="#FFE680" />
      <ellipse cx="18" cy="14" rx="0.8" ry="0.8" fill="#FFE680" />
      <ellipse cx="22" cy="13" rx="0.8" ry="0.8" fill="#FFE680" />
      <ellipse cx="26" cy="15" rx="0.8" ry="0.8" fill="#FFE680" />
      {/* leaf */}
      <path d="M17 8 C18 6 22 6 23 8 Z" fill="#7ED957" />
      {/* face */}
      <ellipse cx="20" cy="28" rx="9" ry="8" fill="#FFE9C2" />
      <circle cx="17" cy="27" r="1.2" fill="#3C2B1F" />
      <circle cx="23" cy="27" r="1.2" fill="#3C2B1F" />
      <ellipse cx="15" cy="30" rx="1.6" ry="1" fill="#FFB3B3" />
      <ellipse cx="25" cy="30" rx="1.6" ry="1" fill="#FFB3B3" />
    </g>
  </svg>
);

const GrassHill = ({ className = "", style = {} }) => (
  <svg width="100%" height="120" viewBox="0 0 430 120" preserveAspectRatio="none" className={className} style={style}>
    <defs>
      <linearGradient id="gh" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#7ED957" />
        <stop offset="100%" stopColor="#5BB243" />
      </linearGradient>
    </defs>
    {/* back hill */}
    <path d="M0 40 C100 10 200 60 300 30 C380 5 430 30 430 40 L430 120 L0 120 Z" fill="#9BE26A" />
    {/* front hill */}
    <path d="M0 70 C70 40 160 90 250 60 C340 35 410 80 430 70 L430 120 L0 120 Z" fill="url(#gh)" />
    {/* grass blades */}
    <g fill="#3F9A2D">
      <path d="M30 85 Q32 78 34 85" />
      <path d="M70 92 Q72 82 74 92" />
      <path d="M130 90 Q132 82 134 90" />
      <path d="M210 95 Q212 85 214 95" />
      <path d="M290 88 Q292 80 294 88" />
      <path d="M360 95 Q362 85 364 95" />
    </g>
  </svg>
);

// Export all components to global window for cross-script access
Object.assign(window, {
  Sparkle, SmallStar, HeartDoodle, PaperPlane,
  MotionLines, DotDash, MiniGhostDoodle, Cloud,
  Strawberry, Daisy, HamzziStamp, GrassHill
});
