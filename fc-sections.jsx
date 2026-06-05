/* ===== 피그마 클래스 — Content sections ===== */

/* ---------- check chip ---------- */
function CheckChip({ children, tone = 'grass' }) {
  const colors = {
    grass: { bg: '#EDFBE6', bd: 'var(--grass-300)', tx: 'var(--grass-700)' },
    berry: { bg: 'var(--berry-50)', bd: 'var(--berry-200)', tx: 'var(--accent-deep)' },
    sky: { bg: 'var(--sky-100)', bd: 'var(--sky-200)', tx: 'var(--sky-600)' }
  }[tone];
  return (
    <span className="pill f-jua" style={{ background: colors.bg, border: `2px solid ${colors.bd}`, color: colors.tx, fontSize: 14 }}>
      <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill={colors.tx} /><path d="M4.5 8.2 L7 10.5 L11.5 5.5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      {children}
    </span>);

}

/* ======================= FEATURES ======================= */
const FEATURES = [
{
  img: 'assets/expressions/10-excited.png',
  tag: 'BASIC → DEEP',
  tagTone: 'berry',
  title: '기초부터 심화까지\n핵심 기능 완벽 마스터',
  desc: '프레임·오토레이아웃·컴포넌트·베리언트까지. 피그마의 진짜 핵심을 빠짐없이, 야금야금 한 입씩 익혀요.',
  chips: [['프레임', 'sky'], ['오토레이아웃', 'berry'], ['컴포넌트', 'grass']]
},
{
  img: 'assets/expressions/02-grin.png',
  tag: 'REAL WORKFLOW',
  tagTone: 'sky',
  title: '실무 중심 예제로 배우는\n디자인 워크플로우',
  desc: '따라만 해도 완성되는 실전 예제. 버튼 하나부터 화면 한 세트까지, 현업에서 바로 쓰는 흐름으로 배워요.',
  chips: [['UI 키트', 'berry'], ['디자인 시스템', 'sky'], ['핸드오프', 'grass']]
},
{
  img: 'assets/expressions/11-shy.png',
  tag: 'PRO COLLAB',
  tagTone: 'grass',
  title: '협업·프로토타이핑·자동화까지\n한 권으로 실전 완성',
  desc: '개발자와의 매끄러운 협업, 살아 움직이는 프로토타입, 플러그인 자동화까지. 프로처럼 일하는 법을 담았어요.',
  chips: [['프로토타입', 'sky'], ['협업', 'berry'], ['플러그인', 'grass']]
}];


function FeatureCard({ f, i }) {
  return (
    <div className="card reveal" style={{ padding: '30px 26px 28px', display: 'flex', flexDirection: 'column', position: 'relative', transitionDelay: `${i * 90}ms` }}>
      <div style={{ position: 'absolute', top: -22, right: 22, width: 38, height: 38, borderRadius: '50%', background: 'white', border: '2px solid var(--berry-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fredoka, sans-serif', fontWeight: 700, color: 'var(--accent-deep)', boxShadow: '0 6px 14px -8px rgba(178,63,92,0.5)' }}>
        {String(i + 1).padStart(2, '0')}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        <div style={{ width: 78, height: 78, borderRadius: 20, background: 'linear-gradient(180deg, var(--cream-100), var(--cream-200))', border: '2px solid var(--cream-300)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
          <img src={f.img} alt="" style={{ width: 64, height: 'auto', marginBottom: -4 }} draggable={false} />
        </div>
        <span className={`pill pill-${f.tagTone}`} style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 11, letterSpacing: '0.12em' }}>{f.tag}</span>
      </div>
      <h3 className="f-jua" style={{ fontSize: 21, lineHeight: 1.32, margin: '0 0 10px', color: 'var(--ink-900)', whiteSpace: 'pre-line' }}>{f.title}</h3>
      <p className="f-body" style={{ fontSize: 14.5, color: 'var(--ink-700)', lineHeight: 1.72, margin: '0 0 18px', flex: 1 }}>{f.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {f.chips.map(([label, tone], k) =>
        <span key={k} className="f-body" style={{ fontSize: 12, padding: '4px 11px', borderRadius: 999, background: 'var(--paper)', border: '1px solid var(--ink-100)', color: 'var(--ink-500)' }}>#{label}</span>
        )}
      </div>
    </div>);

}

function Features() {
  return (
    <section className="section" id="features" data-screen-label="Features">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-mark"><Strawberry size={16} /> WHY 피그마 클래스</span>
          <h2 className="section-title">한 권으로 끝내는<br />피그마 실전 스킬</h2>
          <p className="section-sub">기초부터 탄탄하게, 실무 예제로 완성하고, 프로처럼 협업하기.<br />꼭 필요한 것만 담아 야금야금 끝낼 수 있어요.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 22 }}>
            <CheckChip tone="grass">기초부터 탄탄하게</CheckChip>
            <CheckChip tone="berry">실무 예제로 완성하기</CheckChip>
            <CheckChip tone="sky">프로처럼 협업하기</CheckChip>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 12 }}>
          {FEATURES.map((f, i) => <FeatureCard key={i} f={f} i={i} />)}
        </div>
      </div>
    </section>);

}

/* ======================= AUDIENCE ======================= */
const AUDIENCE = [
{ emoji: '🌱', title: '피그마가 처음인 입문자', desc: '어디서부터 시작할지 막막했다면. 가장 쉬운 첫걸음부터 함께해요.' },
{ emoji: '💼', title: '실무가 막막한 주니어 디자이너', desc: '예제 따라 손에 익히면 어느새 실무 워크플로우가 내 것이 돼요.' },
{ emoji: '🤝', title: '개발자와 협업하는 분', desc: '핸드오프·스펙 전달이 매끄러워지는 협업의 정석을 배워요.' },
{ emoji: '⚡', title: '효율을 높이고 싶은 분', desc: '프로토타이핑과 플러그인 자동화로 반복 작업을 확 줄여요.' }];


function Audience() {
  return (
    <section className="section" data-screen-label="Audience" style={{ background: 'linear-gradient(180deg, transparent, var(--sky-100) 40%, var(--sky-100) 60%, transparent)' }}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-mark" style={{ borderColor: 'var(--sky-200)', color: 'var(--sky-600)' }}><Daisy size={16} /> FOR YOU</span>
          <h2 className="section-title">이런 분께 추천해요</h2>
          <p className="section-sub">한 명이라도 해당된다면, 이 책이 딱이에요!</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 18 }}>
          {AUDIENCE.map((a, i) =>
          <div key={i} className="card reveal" style={{ padding: '26px 22px', display: 'flex', flexDirection: 'column', gap: 10, transitionDelay: `${i * 80}ms`, background: 'rgba(255,255,255,0.92)' }}>
              <div style={{ width: 54, height: 54, borderRadius: 16, background: 'white', border: '2px solid var(--sky-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, boxShadow: '0 6px 14px -8px rgba(63,168,232,0.4)' }}>{a.emoji}</div>
              <h3 className="f-jua" style={{ fontSize: 18, margin: '4px 0 0', color: 'var(--ink-900)', lineHeight: 1.35 }}>{a.title}</h3>
              <p className="f-body" style={{ fontSize: 14, color: 'var(--ink-700)', lineHeight: 1.7, margin: 0 }}>{a.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ======================= AUTHOR ======================= */
function Author() {
  return (
    <section className="section" data-screen-label="Author">
      <div className="wrap">
        <div className="card reveal" style={{ padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: 'minmax(220px, 0.7fr) 1.3fr' }}>
          {/* portrait side */}
          <div style={{ background: 'linear-gradient(180deg, var(--berry-100), var(--berry-50))', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <Sparkle size={22} color="var(--berry-300)" style={{ position: 'absolute', top: 24, left: 24 }} className="twinkle" />
            <SmallStar size={16} color="var(--cream-300)" style={{ position: 'absolute', bottom: 30, right: 30 }} className="twinkle" />
            <div className="bob" style={{ width: 184, height: 184, borderRadius: '50%', background: 'white', border: '4px solid white', boxShadow: '0 14px 30px -14px rgba(178,63,92,0.5)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}>
              <img src="assets/expressions/01-smile.png" alt="저자 루씨 캐릭터" style={{ width: 156, height: 'auto', marginBottom: -8 }} draggable={false} />
            </div>
            <div className="f-jua" style={{ fontSize: 24, marginTop: 18, color: 'var(--ink-900)' }}>루씨 <span style={{ fontSize: 14, color: 'var(--ink-500)' }}>Lucy</span></div>
            <div className="f-mono" style={{ fontSize: 11, color: 'var(--accent-deep)', marginTop: 4, letterSpacing: '0.04em' }}>FIGMA EDUCATOR · DESIGNER</div>
          </div>
          {/* bio side */}
          <div style={{ padding: '44px 40px' }}>
            <span className="eyebrow">MEET THE AUTHOR</span>
            <h2 className="f-jua f-title" style={{ fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: 1.3, margin: '12px 0 18px', color: 'var(--ink-900)' }}>
              수많은 수강생을 피그마 마스터로<br />키워낸 <span style={{ color: 'var(--accent-deep)' }}>15년차 디자이너</span>
            </h2>
            <p className="f-body" style={{ fontSize: 15.5, color: 'var(--ink-700)', lineHeight: 1.85, margin: '0 0 22px' }}>
              디자이너 15년, 강사 10년. 실무와 강의를 오가며 "어떻게 하면 더 쉽게 가르칠 수 있을까"만 고민해 온 루씨가,
              가장 헷갈리는 부분만 콕콕 짚어 하루 10분 분량으로 잘게 쪼갰어요. 햄찌와 함께라면 끝까지 완주할 수 있어요!
            </p>
            <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
              <div>
                <div className="f-jua" style={{ fontSize: 30, color: 'var(--accent-deep)', lineHeight: 1 }}>15년<span style={{ fontSize: 16 }}>+</span></div>
                <div className="f-body" style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 4 }}>디자이너 경력</div>
              </div>
              <div style={{ width: 1, background: 'var(--ink-100)' }} />
              <div>
                <div className="f-jua" style={{ fontSize: 30, color: 'var(--accent-deep)', lineHeight: 1 }}>10년<span style={{ fontSize: 16 }}>+</span></div>
                <div className="f-body" style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 4 }}>피그마 강의</div>
              </div>
              <div style={{ width: 1, background: 'var(--ink-100)' }} />
              <div>
                <div className="f-jua" style={{ fontSize: 30, color: 'var(--accent-deep)', lineHeight: 1 }}>10분</div>
                <div className="f-body" style={{ fontSize: 13, color: 'var(--ink-500)', marginTop: 4 }}>하루 학습 분량</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ======================= FINAL CTA ======================= */
function FinalCTA() {
  return (
    <section className="section" data-screen-label="Buy" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="reveal" style={{ position: 'relative', borderRadius: 36, overflow: 'hidden', background: 'linear-gradient(180deg, var(--cream-100), var(--berry-50))', border: '3px dashed var(--berry-200)', padding: '52px 40px 56px', textAlign: 'center' }}>
          <Cloud size={120} opacity={0.55} style={{ position: 'absolute', top: 20, left: 30 }} className="bob" />
          <Sparkle size={24} color="var(--berry-300)" style={{ position: 'absolute', top: 40, right: '14%' }} className="twinkle" />
          <Strawberry size={28} style={{ position: 'absolute', bottom: 36, left: '12%' }} className="wiggle" />
          <SmallStar size={18} color="var(--cream-300)" style={{ position: 'absolute', bottom: 50, right: '16%' }} className="twinkle" />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="bob" style={{ display: 'inline-block', marginBottom: 6 }}>
              <img src="assets/expressions/10-excited.png" alt="" style={{ width: 96, height: 'auto' }} draggable={false} />
            </div>
            <h2 className="f-jua f-title" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', lineHeight: 1.25, margin: '4px 0 14px', color: 'var(--ink-900)' }}>
              오늘부터 하루 10분,<br />피그마와 친해질 시간이에요!
            </h2>
            <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 12, marginBottom: 26, flexWrap: 'wrap', justifyContent: 'center' }}>
              <span className="pill" style={{ background: 'var(--straw)', color: 'white', fontSize: 13 }}>출간 기념 10%</span>
              <span className="f-body" style={{ fontSize: 18, color: 'var(--ink-300)', textDecoration: 'line-through' }}>30,000원</span>
              <span className="f-jua" style={{ fontSize: 40, color: 'var(--accent-deep)' }}>27,000<span style={{ fontSize: 22 }}>원</span></span>
            </div>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href={KYOBO_URL} target="_blank" rel="noopener" style={{ fontSize: 21, padding: '18px 38px' }}>
                교보문고에서 구매하기 <span style={{ fontSize: '0.9em' }}>→</span>
              </a>
            </div>
            <div className="f-mono" style={{ fontSize: 12, color: 'var(--ink-500)', marginTop: 18 }}>루비페이퍼 · 무료배송 · 전국 서점 판매</div>
          </div>
        </div>
      </div>
    </section>);

}

/* ======================= FOOTER ======================= */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <HamzziStamp size={36} />
          <span className="f-jua" style={{ fontSize: 17, color: 'var(--ink-900)' }}>햄찌와 함께 1일 10분 피그마 클래스</span>
        </div>
        <div className="dash-rule" style={{ margin: '6px 0' }}><Strawberry size={18} /></div>
        <p className="f-body" style={{ fontSize: 13, color: 'var(--ink-500)', margin: 0, lineHeight: 1.7 }}>루씨 지음 · 루비페이퍼 펴냄 · 정가 30,000원

        </p>
        <p className="f-mono" style={{ fontSize: 11, color: 'var(--ink-300)', margin: '4px 0 0' }}>
          본 페이지는 도서 홍보용 샘플입니다 · 🍓 made with 햄찌 design system
        </p>
      </div>
    </footer>);

}

Object.assign(window, { Features, Audience, Author, FinalCTA, Footer });