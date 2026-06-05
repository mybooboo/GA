/* ===== 햄찌 표정 SVG 세트 ===== */
/* Compact bust portrait of hamzzi with variable expression */

const HamzziFace = ({ size = 140, expression = "default", showHat = true, accent = "#FFB3B3", labelBelow }) => {
  const W = 200;
  const H = 220;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg width={size} height={size * (H / W)} viewBox={`0 0 ${W} ${H}`}>
        <defs>
          <radialGradient id={`body-${expression}`} cx="50%" cy="42%" r="58%">
            <stop offset="0%" stopColor="#FFF6E0" />
            <stop offset="100%" stopColor="#FBE7B7" />
          </radialGradient>
          <radialGradient id={`hat-${expression}`} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FF8A8A" />
            <stop offset="100%" stopColor="#E55A5A" />
          </radialGradient>
        </defs>

        {/* Body (cheeks of head fluff) */}
        <ellipse cx="100" cy="135" rx="78" ry="68" fill={`url(#body-${expression})`} stroke="#C9A876" strokeWidth="2" />
        {/* fluffy outline tufts */}
        <g fill={`url(#body-${expression})`} stroke="#C9A876" strokeWidth="2" strokeLinejoin="round">
          <path d="M30 130 Q24 142 30 148 Q26 158 36 156 Z" />
          <path d="M170 130 Q176 142 170 148 Q174 158 164 156 Z" />
          <path d="M44 180 Q40 192 50 192 Q48 200 58 196 Z" />
          <path d="M156 180 Q160 192 150 192 Q152 200 142 196 Z" />
          <path d="M90 195 Q92 208 100 208 Q108 208 110 195 Z" />
        </g>

        {/* Hat (strawberry) */}
        {showHat && (
          <g>
            {/* leaf */}
            <path d="M82 28 Q80 14 100 12 Q120 14 118 28 Q108 22 100 26 Q92 22 82 28 Z" fill="#7ED957" stroke="#4DA331" strokeWidth="2" strokeLinejoin="round" />
            <path d="M100 12 L100 32" stroke="#4DA331" strokeWidth="2.5" strokeLinecap="round" />
            {/* hat dome */}
            <path d="M42 96 Q40 50 100 38 Q160 50 158 96 Q160 108 152 110 Q140 100 100 100 Q60 100 48 110 Q40 108 42 96 Z" fill={`url(#hat-${expression})`} stroke="#A33A2F" strokeWidth="2" strokeLinejoin="round" />
            {/* hat dots (strawberry seeds) */}
            <g fill="#FFE680">
              <circle cx="68" cy="74" r="2.4" />
              <circle cx="82" cy="58" r="2.4" />
              <circle cx="100" cy="68" r="2.4" />
              <circle cx="118" cy="56" r="2.4" />
              <circle cx="132" cy="74" r="2.4" />
              <circle cx="78" cy="86" r="2.4" />
              <circle cx="120" cy="86" r="2.4" />
            </g>
            {/* hat rim shadow */}
            <ellipse cx="100" cy="100" rx="58" ry="6" fill="#A33A2F" opacity="0.18" />
          </g>
        )}

        {/* Face features */}
        <Expression expression={expression} accent={accent} />
      </svg>
      {labelBelow && (
        <div style={{
          marginTop: 8,
          fontFamily: 'Jua, sans-serif',
          fontSize: 13,
          color: 'var(--ink-700)',
        }}>{labelBelow}</div>
      )}
    </div>
  );
};

function Expression({ expression, accent }) {
  switch (expression) {
    case 'happy':
      return (
        <g>
          {/* eyes — closed crescents */}
          <path d="M76 130 Q82 122 90 130" stroke="#3C2B1F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M110 130 Q116 122 124 130" stroke="#3C2B1F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          {/* cheeks */}
          <ellipse cx="68" cy="148" rx="9" ry="6" fill={accent} opacity="0.85" />
          <ellipse cx="132" cy="148" rx="9" ry="6" fill={accent} opacity="0.85" />
          {/* nose */}
          <ellipse cx="100" cy="148" rx="3" ry="2.4" fill="#9C6A4E" />
          {/* mouth — big smile */}
          <path d="M88 158 Q100 172 112 158" stroke="#3C2B1F" strokeWidth="2.6" strokeLinecap="round" fill="#FFB3B3" />
        </g>
      );
    case 'surprised':
      return (
        <g>
          {/* eyes — wide circles with shine */}
          <circle cx="82" cy="132" r="6" fill="#3C2B1F" />
          <circle cx="118" cy="132" r="6" fill="#3C2B1F" />
          <circle cx="84" cy="130" r="1.6" fill="white" />
          <circle cx="120" cy="130" r="1.6" fill="white" />
          {/* cheeks */}
          <ellipse cx="68" cy="150" rx="8" ry="5.5" fill={accent} opacity="0.75" />
          <ellipse cx="132" cy="150" rx="8" ry="5.5" fill={accent} opacity="0.75" />
          {/* nose */}
          <ellipse cx="100" cy="150" rx="3" ry="2.4" fill="#9C6A4E" />
          {/* mouth — small o */}
          <ellipse cx="100" cy="164" rx="4" ry="5" fill="#3C2B1F" />
        </g>
      );
    case 'sleepy':
      return (
        <g>
          {/* eyes — closed lines with z */}
          <path d="M76 134 Q82 130 88 134" stroke="#3C2B1F" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M112 134 Q118 130 124 134" stroke="#3C2B1F" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* cheeks */}
          <ellipse cx="68" cy="148" rx="8" ry="5" fill={accent} opacity="0.75" />
          <ellipse cx="132" cy="148" rx="8" ry="5" fill={accent} opacity="0.75" />
          {/* nose */}
          <ellipse cx="100" cy="148" rx="3" ry="2.4" fill="#9C6A4E" />
          {/* mouth — small line */}
          <path d="M94 162 Q100 167 106 162" stroke="#3C2B1F" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          {/* zzz */}
          <g fill="#5BC4FF" fontFamily="Jua" fontSize="14">
            <text x="148" y="80">z</text>
            <text x="158" y="68" fontSize="11">z</text>
            <text x="166" y="56" fontSize="9">z</text>
          </g>
        </g>
      );
    case 'love':
      return (
        <g>
          {/* eyes — hearts */}
          <Heart x={82} y={130} size={6} />
          <Heart x={118} y={130} size={6} />
          {/* cheeks */}
          <ellipse cx="68" cy="148" rx="10" ry="6.5" fill={accent} />
          <ellipse cx="132" cy="148" rx="10" ry="6.5" fill={accent} />
          {/* nose */}
          <ellipse cx="100" cy="150" rx="3" ry="2.4" fill="#9C6A4E" />
          {/* mouth — open smile */}
          <path d="M88 160 Q100 175 112 160 Q100 168 88 160 Z" fill="#FF8AAA" stroke="#3C2B1F" strokeWidth="2.4" strokeLinejoin="round" />
        </g>
      );
    case 'wink':
      return (
        <g>
          {/* left eye — closed crescent */}
          <path d="M76 132 Q82 124 90 132" stroke="#3C2B1F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          {/* right eye — open circle */}
          <circle cx="118" cy="132" r="4.5" fill="#3C2B1F" />
          <circle cx="119.5" cy="130.5" r="1.4" fill="white" />
          {/* cheeks */}
          <ellipse cx="68" cy="148" rx="9" ry="6" fill={accent} opacity="0.85" />
          <ellipse cx="132" cy="148" rx="9" ry="6" fill={accent} opacity="0.85" />
          {/* nose */}
          <ellipse cx="100" cy="148" rx="3" ry="2.4" fill="#9C6A4E" />
          {/* mouth — smirk */}
          <path d="M90 160 Q102 170 114 158" stroke="#3C2B1F" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        </g>
      );
    case 'cheeky':
      return (
        <g>
          {/* eyes — small dots */}
          <circle cx="82" cy="132" r="3.5" fill="#3C2B1F" />
          <circle cx="118" cy="132" r="3.5" fill="#3C2B1F" />
          {/* eyebrow tilt */}
          <path d="M74 121 L92 124" stroke="#3C2B1F" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M126 121 L108 124" stroke="#3C2B1F" strokeWidth="2.2" strokeLinecap="round" />
          {/* cheeks */}
          <ellipse cx="68" cy="148" rx="9" ry="6" fill={accent} opacity="0.85" />
          <ellipse cx="132" cy="148" rx="9" ry="6" fill={accent} opacity="0.85" />
          {/* nose */}
          <ellipse cx="100" cy="148" rx="3" ry="2.4" fill="#9C6A4E" />
          {/* tongue out */}
          <path d="M88 158 Q100 174 112 158" stroke="#3C2B1F" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <path d="M96 164 Q100 172 104 164 L104 168 Q100 174 96 168 Z" fill="#FF8AAA" stroke="#3C2B1F" strokeWidth="1.6" strokeLinejoin="round" />
        </g>
      );
    default: // default neutral happy
      return (
        <g>
          <circle cx="82" cy="132" r="4.5" fill="#3C2B1F" />
          <circle cx="118" cy="132" r="4.5" fill="#3C2B1F" />
          <circle cx="83.5" cy="130.5" r="1.4" fill="white" />
          <circle cx="119.5" cy="130.5" r="1.4" fill="white" />
          <ellipse cx="68" cy="148" rx="9" ry="6" fill={accent} opacity="0.85" />
          <ellipse cx="132" cy="148" rx="9" ry="6" fill={accent} opacity="0.85" />
          <ellipse cx="100" cy="148" rx="3" ry="2.4" fill="#9C6A4E" />
          <path d="M94 160 Q100 166 106 160" stroke="#3C2B1F" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </g>
      );
  }
}

function Heart({ x, y, size = 6 }) {
  return (
    <path
      d={`M${x} ${y + size * 0.4}
          C${x - size * 0.6} ${y - size * 0.4} ${x - size * 1.4} ${y + size * 0.6} ${x} ${y + size * 1.6}
          C${x + size * 1.4} ${y + size * 0.6} ${x + size * 0.6} ${y - size * 0.4} ${x} ${y + size * 0.4} Z`}
      fill="#FF6B8B"
    />
  );
}

Object.assign(window, { HamzziFace });
