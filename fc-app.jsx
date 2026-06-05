/* ===== 피그마 클래스 — App + Tweaks ===== */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroLayout": "split-left",
  "accent": "#FF6B8B",
  "showDecor": true
} /*EDITMODE-END*/;

/* keyed by hero hex → {deep, soft} */
const ACCENTS = {
  '#FF6B8B': { d: '#E0577A', s: '#FFE9F0' },
  '#4FB6F5': { d: '#2B85B5', s: '#EAF6FF' },
  '#7ED957': { d: '#4A9E34', s: '#EDFBE6' },
  '#FF6B6B': { d: '#E83E3E', s: '#FFE9E5' }
};

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-brand">
          <HamzziStamp size={34} />
          <span className="nowrap">피그마 클래스</span>
          <span className="nav-pub">루비페이퍼</span>
        </div>
        <a className="btn btn-sm" href={KYOBO_URL} target="_blank" rel="noopener">
          <Strawberry size={15} /> 구매하기
        </a>
      </div>
    </nav>);

}

function useReveal() {
  useEffect(() => {
    let raf = 0;
    const reveal = () => {
      const h = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > 0) el.classList.add('in');
      });
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {raf = 0;reveal();});
    };
    // immediate pass for above-the-fold, then on scroll/resize
    reveal();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // safety net: ensure nothing stays hidden even if scroll never fires
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        const h = window.innerHeight || 0;
        if (r.top < h) el.classList.add('in');
      });
    }, 1200);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
    };
  });
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const c = ACCENTS[t.accent] || ACCENTS['#FF6B8B'];
    const r = document.documentElement.style;
    r.setProperty('--accent', t.accent);
    r.setProperty('--accent-deep', c.d);
    r.setProperty('--accent-soft', c.s);
  }, [t.accent]);

  useReveal();

  return (
    <React.Fragment>
      <Nav />
      <Hero layout={t.heroLayout} showDecor={t.showDecor} />
      <Features />
      <Audience />
      <Author />
      <FinalCTA />
      <Footer />

      <TweaksPanel>
        <TweakSection label="히어로 레이아웃" />
        <TweakRadio
          label="배치"
          value={t.heroLayout}
          options={[
          { value: 'split-left', label: '책 왼쪽' },
          { value: 'split-right', label: '책 오른쪽' },
          { value: 'stacked', label: '세로 중앙' }]
          }
          onChange={(v) => setTweak('heroLayout', v)} />
        
        <TweakToggle label="장식 요소(구름·반짝이)" value={t.showDecor} onChange={(v) => setTweak('showDecor', v)} />

        <TweakSection label="테마 컬러" />
        <TweakColor
          label="포인트"
          value={t.accent}
          options={['#FF6B8B', '#4FB6F5', '#7ED957', '#FF6B6B']}
          onChange={(v) => setTweak('accent', v)} />
        
      </TweaksPanel>
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);