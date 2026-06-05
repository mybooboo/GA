/* ===== 피그마 클래스 — Hero ===== */
const { useState, useEffect, useRef } = React;

const KYOBO_URL = "https://product.kyobobook.co.kr/detail/S000213625223";

/* Figma-logo speech bubble (matches the book cover doodle) */
function FigmaBubble({ size = 64 }) {
  return (
    <svg width={size} height={size * 1.18} viewBox="0 0 64 76" style={{ display: 'block' }}>
      <g>
        <ellipse cx="32" cy="30" rx="30" ry="28" fill="white" stroke="var(--berry-200)" strokeWidth="2" />
        <path d="M20 52 Q18 66 30 64 Q24 58 28 50 Z" fill="white" stroke="var(--berry-200)" strokeWidth="2" strokeLinejoin="round" />
      </g>
      {/* figma logo */}
      <g transform="translate(23, 14)">
        <path d="M9 0 H4.5 a4.5 4.5 0 0 0 0 9 H9 Z" fill="#F24E1E" />
        <path d="M9 9 H4.5 a4.5 4.5 0 0 0 0 9 H9 Z" fill="#A259FF" />
        <path d="M9 18 H4.5 a4.5 4.5 0 1 0 4.5 4.5 Z" fill="#0ACF83" />
        <path d="M9 0 H13.5 a4.5 4.5 0 0 1 0 9 H9 Z" fill="#FF7262" />
        <circle cx="13.5" cy="13.5" r="4.5" fill="#1ABCFE" />
      </g>
    </svg>);

}

/* Dashed circular discount badge */
function DiscountBadge() {
  return (
    <div className="bob" style={{
      width: 116, height: 116, borderRadius: '50%',
      background: 'linear-gradient(180deg, var(--straw) 0%, var(--straw-deep) 100%)',
      border: '3px dashed #fff',
      boxShadow: '0 12px 24px -10px rgba(232,62,62,0.55)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      color: 'white', transform: 'rotate(-10deg)', '--rot': '-10deg'
    }}>
      <div className="f-body" style={{ fontSize: 11, opacity: 0.95, marginBottom: -2 }}>출간 기념</div>
      <div className="f-jua" style={{ fontSize: 38, lineHeight: 1 }}>10%</div>
      <div className="f-jua" style={{ fontSize: 14, letterSpacing: '0.06em' }}>할인</div>
    </div>);

}

function BookArt({ width = 430 }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* soft glow behind book */}
      <div style={{
        position: 'absolute', inset: '6% 8% 4%',
        background: 'radial-gradient(ellipse at 50% 45%, var(--berry-100) 0%, transparent 70%)',
        filter: 'blur(8px)', zIndex: 0
      }} />
      <div className="bob" style={{
        position: 'relative', zIndex: 1,
        filter: 'drop-shadow(0 30px 30px rgba(120, 70, 60, 0.22))'
      }}>
        <img src="assets/book-cover-cut.png" alt="햄찌와 함께 1일 10분 피그마 클래스 표지"
        style={{ width, maxWidth: '100%', height: 'auto', display: 'block', userSelect: 'none', pointerEvents: 'none' }}
        draggable={false} />
      </div>
      {/* discount badge */}
      <div style={{ position: 'absolute', top: -14, right: -18, zIndex: 3 }}>
        <DiscountBadge />
      </div>
      {/* figma bubble */}
      <div className="drift" style={{ position: 'absolute', bottom: 18, left: -28, zIndex: 3 }}>
        <FigmaBubble size={62} />
      </div>
    </div>);

}

function HeroCopy({ align = 'left' }) {
  const center = align === 'center';
  return (
    <div style={{
      textAlign: center ? 'center' : 'left',
      display: 'flex', flexDirection: 'column',
      alignItems: center ? 'center' : 'flex-start',
      maxWidth: center ? 720 : 540,
      margin: center ? '0 auto' : 0
    }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: center ? 'center' : 'flex-start' }}>
        <span className="pill pill-berry"><Strawberry size={16} /> 한빛미디어 신간</span>
        <span className="pill pill-sky">강사 10년차 · 디자이너 15년차</span>
      </div>

      <h1 className="f-jua f-title" style={{
        fontSize: 'clamp(32px, 4.8vw, 52px)', lineHeight: 1.18, letterSpacing: '-0.015em',
        margin: '20px 0 0', color: 'var(--ink-900)'
      }}>
        <span style={{ fontSize: '0.52em', color: 'var(--accent-deep)', display: 'block', letterSpacing: '0.02em', marginBottom: 4 }}>
          햄찌와 함께 <span style={{ color: 'var(--grass-700)' }}>🍀</span>
        </span>
        <span className="nowrap">하루 <span style={{ color: 'var(--accent-deep)' }}>10분</span></span>
        <br />
        <span className="nowrap">
          <span style={{ position: 'relative', display: 'inline-block' }}>
            피그마
            <svg viewBox="0 0 200 18" preserveAspectRatio="none" style={{ position: 'absolute', left: '-2%', bottom: -7, width: '104%', height: 13 }}>
              <path d="M3 12 Q60 3 100 9 T197 7" fill="none" stroke="var(--straw)" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
            </svg>
          </span> 마스터하기
        </span>
      </h1>

      <p className="f-body" style={{
        fontSize: 'clamp(15px, 1.9vw, 19px)', color: 'var(--ink-700)', lineHeight: 1.75,
        margin: '24px 0 0', maxWidth: '30em'
      }}>
        설계부터 개발까지, 완벽한 협업을 위한 <b style={{ color: 'var(--accent-deep)' }}>피그마 마스터 가이드</b>.
        기초부터 심화까지 핵심 기능을 하루 10분씩, 햄찌와 함께 야금야금 끝내요!
      </p>

      {/* price */}
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 26,
        justifyContent: center ? 'center' : 'flex-start', flexWrap: 'wrap'
      }}>
        <span className="pill" style={{ background: 'var(--straw)', color: 'white', fontSize: 13, padding: '5px 12px' }}>10% 할인</span>
        <span className="f-body nowrap" style={{ fontSize: 17, color: 'var(--ink-300)', textDecoration: 'line-through' }}>30,000원</span>
        <span className="f-jua nowrap" style={{ fontSize: 34, color: 'var(--ink-900)' }}>27,000<span style={{ fontSize: 20 }}>원</span></span>
      </div>

      {/* CTAs */}
      <div style={{
        display: 'flex', gap: 14, marginTop: 26, flexWrap: 'wrap',
        justifyContent: center ? 'center' : 'flex-start'
      }}>
        <a className="btn btn-primary" href={KYOBO_URL} target="_blank" rel="noopener">
          교보문고에서 구매하기 <span style={{ fontSize: '0.9em' }}>→</span>
        </a>
        <a className="btn btn-ghost" href="#features">이 책 살펴보기</a>
      </div>

      <div className="f-mono" style={{ fontSize: 12, color: 'var(--ink-500)', marginTop: 18, letterSpacing: '0.02em' }}>루씨 지음 · 루비페이퍼 · 무료배송

      </div>
    </div>);

}

function Hero({ layout = 'split-left', showDecor = true }) {
  const stacked = layout === 'stacked';
  const bookRight = layout === 'split-right';

  return (
    <section className="hero-section" data-screen-label="Hero" style={{ position: 'relative', overflow: 'hidden', paddingTop: 56, paddingBottom: 72 }}>
      {/* floating decorations */}
      {showDecor &&
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <Cloud size={150} opacity={0.6} style={{ position: 'absolute', top: 60, left: -30 }} className="bob" />
          <Cloud size={110} opacity={0.45} style={{ position: 'absolute', top: 200, right: 40, animationDelay: '1.2s' }} className="bob" />
          <PaperPlane size={54} color="var(--sky-400)" style={{ position: 'absolute', top: 90, right: '12%', transform: 'rotate(12deg)' }} className="drift" />
          <Sparkle size={26} color="var(--berry-300)" style={{ position: 'absolute', top: 150, left: '8%' }} className="twinkle" />
          <SmallStar size={20} color="var(--cream-300)" style={{ position: 'absolute', bottom: 90, left: '14%' }} className="twinkle" />
          <SmallStar size={16} color="var(--berry-300)" style={{ position: 'absolute', top: 240, left: '40%', animationDelay: '0.5s' }} className="twinkle" />
          <Strawberry size={26} style={{ position: 'absolute', bottom: 70, right: '10%' }} className="wiggle" />
          <Daisy size={24} style={{ position: 'absolute', top: 50, left: '46%' }} />
        </div>
      }

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: stacked ? 'block' : 'grid',
          gridTemplateColumns: stacked ? undefined : bookRight ? '1.05fr 0.95fr' : '0.95fr 1.05fr',
          gap: 48,
          alignItems: 'center',
          textAlign: stacked ? 'center' : 'left'
        }}>
          {stacked ?
          <React.Fragment>
              <HeroCopy align="center" />
              <div style={{ marginTop: 44, display: 'flex', justifyContent: 'center' }}>
                <BookArt width={380} />
              </div>
            </React.Fragment> :
          bookRight ?
          <React.Fragment>
              <HeroCopy align="left" />
              <div style={{ display: 'flex', justifyContent: 'center' }}><BookArt width={420} /></div>
            </React.Fragment> :

          <React.Fragment>
              <div style={{ display: 'flex', justifyContent: 'center', order: 0 }}><BookArt width={420} /></div>
              <HeroCopy align="left" />
            </React.Fragment>
          }
        </div>
      </div>
    </section>);

}

Object.assign(window, { Hero, KYOBO_URL, Strawberry });