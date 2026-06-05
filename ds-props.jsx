/* ===== 햄찌의 디저트월드 — 디자인 시스템 (main doc) ===== */

const { useState } = React;

/* ---------- Small inline SVG props ---------- */
const PropStrawberryBasket = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {/* basket */}
    <path d="M14 56 L86 56 L78 86 Q50 92 22 86 Z" fill="#D9A06A" stroke="#8B5C36" strokeWidth="2" />
    <path d="M14 56 L86 56" stroke="#8B5C36" strokeWidth="2" />
    {/* weave lines */}
    <g stroke="#8B5C36" strokeWidth="1.2" fill="none">
      <path d="M22 64 Q26 67 30 64 Q34 67 38 64 Q42 67 46 64 Q50 67 54 64 Q58 67 62 64 Q66 67 70 64 Q74 67 78 64" />
      <path d="M22 74 Q26 77 30 74 Q34 77 38 74 Q42 77 46 74 Q50 77 54 74 Q58 77 62 74 Q66 77 70 74 Q74 77 78 74" />
    </g>
    {/* strawberries piled */}
    <g>
      <path d="M30 42 C36 42 38 48 38 52 C38 58 34 60 30 60 C26 60 22 58 22 52 C22 48 24 42 30 42 Z" fill="#FF5A5A" stroke="#C5392F" strokeWidth="1.4" />
      <path d="M30 38 Q26 40 24 44 Q28 44 30 42 Q32 44 36 44 Q34 40 30 38 Z" fill="#7ED957" stroke="#4DA331" strokeWidth="1.2" />
      <path d="M50 36 C56 36 60 42 60 48 C60 56 54 60 50 60 C46 60 40 56 40 48 C40 42 44 36 50 36 Z" fill="#FF5A5A" stroke="#C5392F" strokeWidth="1.4" />
      <path d="M50 32 Q46 34 44 38 Q48 38 50 36 Q52 38 56 38 Q54 34 50 32 Z" fill="#7ED957" stroke="#4DA331" strokeWidth="1.2" />
      <path d="M70 42 C76 42 78 48 78 52 C78 58 74 60 70 60 C66 60 62 58 62 52 C62 48 64 42 70 42 Z" fill="#FF5A5A" stroke="#C5392F" strokeWidth="1.4" />
      <path d="M70 38 Q66 40 64 44 Q68 44 70 42 Q72 44 76 44 Q74 40 70 38 Z" fill="#7ED957" stroke="#4DA331" strokeWidth="1.2" />
      {/* seeds */}
      <g fill="#FFE680">
        <circle cx="28" cy="48" r="0.9" /><circle cx="32" cy="52" r="0.9" /><circle cx="30" cy="55" r="0.9" />
        <circle cx="48" cy="44" r="0.9" /><circle cx="52" cy="48" r="0.9" /><circle cx="50" cy="52" r="0.9" />
        <circle cx="68" cy="48" r="0.9" /><circle cx="72" cy="52" r="0.9" /><circle cx="70" cy="55" r="0.9" />
      </g>
    </g>
  </svg>
);

const PropCookie = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="52" r="36" fill="#E6A86A" stroke="#9C6A3D" strokeWidth="2" />
    <circle cx="50" cy="52" r="36" fill="none" stroke="#C68552" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
    <g fill="#5C3D2E">
      <circle cx="38" cy="42" r="3" />
      <circle cx="58" cy="38" r="2.4" />
      <circle cx="62" cy="58" r="3" />
      <circle cx="42" cy="62" r="2.4" />
      <circle cx="52" cy="52" r="2" />
    </g>
  </svg>
);

const PropCupcake = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {/* wrapper */}
    <path d="M26 56 L34 88 L66 88 L74 56 Z" fill="#FFB3C4" stroke="#D96A89" strokeWidth="2" />
    <g stroke="#D96A89" strokeWidth="1.2" fill="none">
      <line x1="34" y1="60" x2="36" y2="86" /><line x1="42" y1="60" x2="42" y2="88" />
      <line x1="50" y1="60" x2="50" y2="88" /><line x1="58" y1="60" x2="58" y2="88" />
      <line x1="66" y1="60" x2="64" y2="86" />
    </g>
    {/* frosting */}
    <path d="M22 56 Q26 36 50 32 Q74 36 78 56 Q70 60 50 60 Q30 60 22 56 Z" fill="#FFF6E0" stroke="#C9A876" strokeWidth="2" strokeLinejoin="round" />
    {/* cherry */}
    <circle cx="50" cy="28" r="6" fill="#FF5A5A" stroke="#C5392F" strokeWidth="1.4" />
    <path d="M50 22 Q52 16 56 14" stroke="#4DA331" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* sprinkles */}
    <g stroke="#FF8AAA" strokeWidth="2" strokeLinecap="round">
      <line x1="32" y1="50" x2="34" y2="52" /><line x1="44" y1="46" x2="46" y2="48" />
      <line x1="60" y1="48" x2="62" y2="50" /><line x1="68" y1="52" x2="70" y2="54" />
    </g>
  </svg>
);

const PropDaisySingle = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {/* stem */}
    <path d="M50 56 Q52 78 50 90" stroke="#4DA331" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M52 70 Q60 68 64 60" stroke="#4DA331" strokeWidth="2.4" fill="#7ED957" strokeLinecap="round" />
    {/* petals */}
    <g fill="white" stroke="#E8D78A" strokeWidth="1.4">
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * 360;
        return <ellipse key={i} cx="50" cy="32" rx="9" ry="16" transform={`rotate(${a} 50 48)`} />;
      })}
    </g>
    <circle cx="50" cy="48" r="9" fill="#FFD45A" stroke="#E8B73D" strokeWidth="1.4" />
    <circle cx="50" cy="48" r="4" fill="#FFB73D" opacity="0.6" />
  </svg>
);

const PropMilkCarton = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <path d="M30 28 L70 28 L70 88 Q50 92 30 88 Z" fill="#FFD2DE" stroke="#D96A89" strokeWidth="2" strokeLinejoin="round" />
    {/* top fold */}
    <path d="M30 28 L50 16 L70 28 Z" fill="#FFB3C4" stroke="#D96A89" strokeWidth="2" strokeLinejoin="round" />
    <line x1="50" y1="16" x2="50" y2="28" stroke="#D96A89" strokeWidth="2" />
    {/* berry label */}
    <circle cx="50" cy="56" r="14" fill="white" stroke="#FF6B8B" strokeWidth="2" strokeDasharray="3 2" />
    <text x="50" y="60" textAnchor="middle" fontFamily="Jua" fontSize="11" fill="#FF6B8B">딸기</text>
    <text x="50" y="74" textAnchor="middle" fontFamily="Jua" fontSize="9" fill="#FF6B8B">우유</text>
  </svg>
);

const PropCloud = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <g fill="white" stroke="#B5DDF7" strokeWidth="2" strokeLinejoin="round">
      <ellipse cx="32" cy="62" rx="18" ry="14" />
      <ellipse cx="54" cy="50" rx="22" ry="18" />
      <ellipse cx="74" cy="60" rx="16" ry="14" />
    </g>
    {/* face */}
    <g fill="#4CB6FF">
      <circle cx="44" cy="56" r="2" />
      <circle cx="64" cy="56" r="2" />
      <path d="M48 62 Q54 66 60 62" stroke="#4CB6FF" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  </svg>
);

Object.assign(window, {
  PropStrawberryBasket, PropCookie, PropCupcake, PropDaisySingle, PropMilkCarton, PropCloud
});
