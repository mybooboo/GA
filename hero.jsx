/* ===== Hero section ===== */

const { useState, useEffect, useRef, useMemo } = React;

function Hero() {
  return (
    <section className="hero" data-screen-label="Hero" style={{
      position: 'relative',
      paddingTop: 28,
      paddingBottom: 0,
      overflow: 'hidden',
    }}>
      {/* Floating decorative clouds (back layer) */}
      <Cloud size={140} opacity={0.85} style={{ position: 'absolute', top: 80, left: -40 }} className="bob" />
      <Cloud size={110} opacity={0.7} style={{ position: 'absolute', top: 230, right: -30, animationDelay: '1s' }} className="bob" />
      <Cloud size={90} opacity={0.6} style={{ position: 'absolute', top: 380, left: -20, animationDelay: '2s' }} className="bob" />

      {/* Top doodle decorations */}
      <PaperPlane
        size={58}
        style={{ position: 'absolute', top: 36, right: 18, '--rot': '15deg', transform: 'rotate(15deg)' }}
        className="drift"
      />
      <DotDash style={{ position: 'absolute', top: 96, right: 80 }} />
      <SmallStar size={14} style={{ position: 'absolute', top: 60, left: 28 }} className="twinkle" />
      <SmallStar size={18} style={{ position: 'absolute', top: 180, right: 18 }} className="twinkle" />
      <Sparkle size={20} style={{ position: 'absolute', top: 124, left: 14 }} className="twinkle" />

      {/* Hero typography */}
      <div style={{ textAlign: 'center', padding: '8px 24px 0', position: 'relative', zIndex: 2 }}>
        <div className="font-doodle" style={{
          color: 'white',
          fontSize: 16,
          letterSpacing: '0.4em',
          marginBottom: 4,
          textShadow: '0 2px 0 rgba(40,80,140,0.15)'
        }}>
          ★ MAY 2026 ★
        </div>

        <div className="font-bubble plush-text" style={{
          fontSize: 64,
          lineHeight: 0.92,
          marginTop: 6,
        }}>
          HELLO!
        </div>

        <div className="font-bubble plush-text" style={{
          fontSize: 56,
          lineHeight: 0.95,
          marginTop: -4,
        }}>
          STRAW<span style={{ position: 'relative', display: 'inline-block' }}>
            B
            <HeartDoodle size={14} color="#FFB3C4" style={{ position: 'absolute', top: -4, right: -2 }} />
          </span>ERRY
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          marginTop: 8,
          padding: '6px 18px',
          background: '#FFF1C9',
          borderRadius: 999,
          boxShadow: '0 4px 0 rgba(216, 178, 80, 0.5)',
          border: '2.5px solid white',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ color: '#E83E3E', fontSize: 14 }}>🍓</span>
          <span className="font-display" style={{ fontSize: 18, color: '#0086E8', letterSpacing: '0.06em' }}>
            햄찌의 출석체크
          </span>
          <span style={{ color: '#E83E3E', fontSize: 14 }}>🍓</span>
        </div>
      </div>

      {/* Character — main star */}
      <div style={{
        position: 'relative',
        marginTop: 12,
        textAlign: 'center',
        zIndex: 3,
      }}>
        {/* Pink scallop discount badge */}
        <div style={{
          position: 'absolute',
          left: 12,
          top: 36,
          width: 96,
          height: 96,
          transform: 'rotate(-12deg)',
          zIndex: 4,
        }} className="bob">
          <ScallopBadge>
            <div style={{ fontSize: 10, color: '#A33857', fontFamily: 'Gowun Dodum, sans-serif' }}>5월 한정</div>
            <div className="font-display" style={{ fontSize: 22, color: '#D34466', lineHeight: 1 }}>최대</div>
            <div className="font-display" style={{ fontSize: 26, color: '#D34466', lineHeight: 1 }}>30%</div>
            <div style={{ fontSize: 11, color: '#A33857', fontFamily: 'Jua', letterSpacing: '0.1em' }}>할인쿠폰</div>
          </ScallopBadge>
        </div>

        {/* Mini ghost-character sketch (lower left of frame) */}
        <MiniGhostDoodle style={{ position: 'absolute', left: 14, bottom: 60, zIndex: 4 }} className="wiggle" />
        <MotionLines style={{ position: 'absolute', left: 4, top: 130, zIndex: 4 }} />

        {/* Speech bubble heart */}
        <div style={{
          position: 'absolute',
          right: 18,
          top: 100,
          zIndex: 4,
        }}>
          <SpeechHeart />
        </div>

        {/* Floating decorative sparkles around character */}
        <SmallStar size={20} style={{ position: 'absolute', left: 24, top: 200, zIndex: 4 }} className="twinkle" />
        <SmallStar size={14} style={{ position: 'absolute', right: 30, top: 240, zIndex: 4, animationDelay: '0.6s' }} className="twinkle" />
        <Sparkle size={26} color="white" style={{ position: 'absolute', right: 60, top: 50, zIndex: 4 }} className="twinkle" />

        <div className="bob" style={{
          display: 'inline-block',
          filter: 'drop-shadow(0 24px 18px rgba(40, 80, 140, 0.22))',
          zIndex: 3,
        }}>
          <img
            src="assets/hamzzi-transparent.png"
            alt="햄찌"
            style={{ width: 320, height: 'auto', display: 'block', margin: '0 auto', userSelect: 'none', pointerEvents: 'none' }}
            draggable={false}
          />
        </div>

        {/* ONLY badge bottom right */}
        <div style={{
          position: 'absolute',
          right: 18,
          bottom: 80,
          background: '#FFF1C9',
          border: '2.5px dashed #E83E3E',
          borderRadius: '50%',
          width: 84,
          height: 84,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(8deg)',
          zIndex: 4,
        }}>
          <div style={{ fontSize: 10, color: '#8B6A52', fontFamily: 'Gowun Dodum' }}>ONLY</div>
          <div className="font-display" style={{ fontSize: 24, color: '#E83E3E', lineHeight: 1 }}>31</div>
          <div style={{ fontSize: 11, color: '#5C3D2E', fontFamily: 'Jua' }}>DAYS!</div>
          <div style={{ fontSize: 9, color: '#8B6A52', fontFamily: 'Gowun Dodum', marginTop: 2 }}>5.1 - 5.31</div>
        </div>
      </div>

      {/* Grass hill at bottom */}
      <div style={{ position: 'relative', marginTop: -10, zIndex: 2 }}>
        {/* daisies on grass */}
        <Daisy size={20} style={{ position: 'absolute', left: 18, bottom: 8, zIndex: 3 }} />
        <Daisy size={14} style={{ position: 'absolute', left: 56, bottom: 22, zIndex: 3 }} />
        <Daisy size={18} style={{ position: 'absolute', right: 32, bottom: 10, zIndex: 3 }} />
        <Daisy size={14} style={{ position: 'absolute', right: 84, bottom: 24, zIndex: 3 }} />
        {/* tiny strawberries on grass */}
        <Strawberry size={22} style={{ position: 'absolute', left: 100, bottom: 14, zIndex: 3 }} />
        <Strawberry size={18} style={{ position: 'absolute', right: 60, bottom: 26, zIndex: 3 }} />
        <GrassHill />
      </div>
    </section>
  );
}

/* Pink scallop badge — SVG-based circular ribbon */
function ScallopBadge({ children }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <g>
          {/* scallop edge — circle of small circles */}
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i / 16) * Math.PI * 2;
            const cx = 50 + Math.cos(a) * 44;
            const cy = 50 + Math.sin(a) * 44;
            return <circle key={i} cx={cx} cy={cy} r="8" fill="#FFC2D2" />;
          })}
          <circle cx="50" cy="50" r="40" fill="#FFD2DE" stroke="white" strokeWidth="2" strokeDasharray="3 2" />
        </g>
      </svg>
      <div style={{
        position: 'relative',
        textAlign: 'center',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}>
        {children}
      </div>
    </div>
  );
}

function SpeechHeart() {
  return (
    <svg width="60" height="56" viewBox="0 0 60 56">
      <g fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 8 C4 14 4 20 8 24 C4 28 6 32 12 30 C20 36 36 36 46 28 C54 22 54 12 44 6 C32 0 16 0 8 8 Z" fill="white" />
      </g>
      <path
        d="M30 16 C26 12 20 14 20 20 C20 26 30 32 30 32 C30 32 40 26 40 20 C40 14 34 12 30 16 Z"
        fill="#FF8AAA"
      />
    </svg>
  );
}

Object.assign(window, { Hero });
