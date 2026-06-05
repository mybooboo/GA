/* ===== 딸기 줍기 미니게임 ===== */

function MiniGame() {
  const [phase, setPhase] = useState('idle'); // idle | playing | done
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(20);
  const [bestScore, setBestScore] = useState(() => {
    try { return parseInt(localStorage.getItem('hamzzi-best-v1') || '0', 10); } catch { return 0; }
  });
  const [berries, setBerries] = useState([]);
  const [bursts, setBursts] = useState([]);
  const idRef = useRef(0);
  const fieldRef = useRef(null);
  const stageHRef = useRef(440);

  // measure field height
  useEffect(() => {
    if (fieldRef.current) {
      stageHRef.current = fieldRef.current.offsetHeight;
    }
  }, [phase]);

  // game timer
  useEffect(() => {
    if (phase !== 'playing') return;
    if (time <= 0) {
      setPhase('done');
      setBestScore(b => {
        const nb = Math.max(b, score);
        try { localStorage.setItem('hamzzi-best-v1', String(nb)); } catch {}
        return nb;
      });
      return;
    }
    const t = setTimeout(() => setTime(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, time, score]);

  // berry spawner
  useEffect(() => {
    if (phase !== 'playing') return;
    const spawn = () => {
      const fieldW = fieldRef.current?.offsetWidth || 380;
      const x = 20 + Math.random() * (fieldW - 60);
      const isGolden = Math.random() < 0.08;
      const duration = 2.4 + Math.random() * 1.2;
      const startRot = Math.floor(Math.random() * 360);
      const id = ++idRef.current;
      setBerries(b => [...b, { id, x, golden: isGolden, duration, startRot, born: Date.now() }]);
      // auto-remove after fall completes
      setTimeout(() => setBerries(b => b.filter(it => it.id !== id)), duration * 1000 + 100);
    };
    const interval = setInterval(spawn, 480);
    return () => clearInterval(interval);
  }, [phase]);

  function start() {
    setScore(0);
    setTime(20);
    setBerries([]);
    setBursts([]);
    setPhase('playing');
  }

  function tap(berry, e) {
    e.stopPropagation();
    setScore(s => s + (berry.golden ? 5 : 1));
    setBerries(b => b.filter(it => it.id !== berry.id));
    // burst
    const target = e.currentTarget.getBoundingClientRect();
    const parent = fieldRef.current.getBoundingClientRect();
    const bx = target.left - parent.left + target.width / 2;
    const by = target.top - parent.top + target.height / 2;
    const bid = Math.random();
    setBursts(bs => [...bs, { id: bid, x: bx, y: by, golden: berry.golden }]);
    setTimeout(() => setBursts(bs => bs.filter(b => b.id !== bid)), 700);
  }

  const rewardTier = score >= 30 ? '🎁 햄찌 굿즈 응모권!' : score >= 20 ? '🍰 케이크 1조각 쿠폰!' : score >= 10 ? '🥛 딸기우유 쿠폰!' : '🍓 다음에 또 도전해요!';

  return (
    <section className="section" data-screen-label="MiniGame" style={{ paddingTop: 0 }}>
      <div className="card" style={{
        background: 'linear-gradient(180deg, #E8F8FF 0%, #FFF1F5 100%)',
        border: '3px solid white',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px 16px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="section-label" style={{ background: '#5BC4FF', boxShadow: '0 3px 0 #2B85B5' }}>
              🎮  미니게임
            </div>
            <div className="section-title">딸기 줍기 챌린지</div>
            <div className="section-subtitle">떨어지는 딸기를 톡톡 잡아요!<br />⭐ 황금딸기는 +5점!</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: '#8B6A52', fontFamily: 'Gowun Dodum' }}>최고 점수</div>
            <div className="font-bubble" style={{ color: '#FFD45A', fontSize: 28, lineHeight: 1, textShadow: '0 2px 0 #D9A82F' }}>{bestScore}</div>
          </div>
        </div>

        {/* Field */}
        <div
          ref={fieldRef}
          style={{
            position: 'relative',
            marginTop: 14,
            height: 320,
            background: 'linear-gradient(180deg, #BFE8FF 0%, #DFF1FF 80%, #E5F8D6 100%)',
            borderRadius: 24,
            overflow: 'hidden',
            border: '3px solid white',
            boxShadow: 'inset 0 4px 12px rgba(80, 140, 200, 0.15)',
          }}
        >
          {/* Field clouds */}
          <Cloud size={70} opacity={0.85} style={{ position: 'absolute', top: 18, left: 16 }} />
          <Cloud size={56} opacity={0.7} style={{ position: 'absolute', top: 40, right: 24 }} />

          {/* HUD */}
          <div style={{
            position: 'absolute',
            top: 10, left: 12, right: 12,
            display: 'flex', justifyContent: 'space-between',
            zIndex: 6,
            pointerEvents: 'none',
          }}>
            <div style={{
              background: 'white',
              padding: '4px 10px',
              borderRadius: 999,
              fontFamily: 'Jua',
              fontSize: 13,
              color: '#E83E3E',
              boxShadow: '0 2px 0 #ddd',
            }}>🍓 {score}</div>
            <div style={{
              background: 'white',
              padding: '4px 10px',
              borderRadius: 999,
              fontFamily: 'Jua',
              fontSize: 13,
              color: time <= 5 ? '#E83E3E' : '#0086E8',
              boxShadow: '0 2px 0 #ddd',
            }}>⏱ {String(time).padStart(2,'0')}s</div>
          </div>

          {/* Falling berries */}
          {phase === 'playing' && berries.map(b => (
            <button
              key={b.id}
              onClick={(e) => tap(b, e)}
              style={{
                position: 'absolute',
                left: b.x,
                top: 0,
                background: 'transparent',
                border: 'none',
                padding: 4,
                cursor: 'pointer',
                animation: `fall ${b.duration}s linear forwards`,
                '--fall-distance': `${stageHRef.current + 80}px`,
                '--start-rot': `${b.startRot}deg`,
                zIndex: 5,
              }}
            >
              {b.golden ? <GoldenStrawberry /> : <Strawberry size={38} />}
            </button>
          ))}

          {/* Bursts */}
          {bursts.map(b => (
            <div key={b.id} style={{
              position: 'absolute',
              left: b.x - 20, top: b.y - 20,
              width: 40, height: 40,
              pointerEvents: 'none',
              animation: 'burst .6s ease-out forwards',
              zIndex: 8,
            }}>
              <div style={{ fontSize: 22, color: b.golden ? '#FFD45A' : '#FF8AAA', fontFamily: 'Jua', textAlign: 'center' }}>+{b.golden ? 5 : 1}</div>
            </div>
          ))}

          {/* Idle overlay */}
          {phase === 'idle' && (
            <Overlay>
              <div style={{ fontSize: 44 }}>🍓</div>
              <div className="font-display" style={{ fontSize: 22, color: '#5C3D2E', marginTop: 4 }}>준비됐어요?</div>
              <div className="section-subtitle" style={{ marginTop: 6, textAlign: 'center' }}>20초 동안 딸기를 잡아주세요!</div>
              <button onClick={start} style={overlayBtn}>시작하기 →</button>
            </Overlay>
          )}

          {/* Done overlay */}
          {phase === 'done' && (
            <Overlay>
              <div style={{ fontSize: 36 }}>{score >= 20 ? '🎉' : score >= 10 ? '✨' : '🍓'}</div>
              <div className="font-display" style={{ fontSize: 16, color: '#8B6A52', marginTop: 4 }}>최종 점수</div>
              <div className="font-bubble" style={{ fontSize: 48, color: '#FF6B8B', lineHeight: 1, marginTop: 2 }}>{score}</div>
              <div style={{
                marginTop: 10,
                background: '#FFF1C9',
                padding: '6px 14px',
                borderRadius: 999,
                fontFamily: 'Jua',
                fontSize: 13,
                color: '#5C3D2E',
                border: '2px dashed #F2D580',
              }}>{rewardTier}</div>
              <button onClick={start} style={overlayBtn}>다시 도전!</button>
            </Overlay>
          )}
        </div>
      </div>
    </section>
  );
}

const overlayBtn = {
  marginTop: 16,
  background: 'linear-gradient(180deg, #FF9FB7, #FF7896)',
  color: 'white',
  border: '3px solid white',
  borderRadius: 999,
  fontFamily: 'Jua',
  fontSize: 16,
  padding: '10px 24px',
  cursor: 'pointer',
  boxShadow: '0 4px 0 #D96A89',
};

function Overlay({ children }) {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'rgba(255, 255, 255, 0.78)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      zIndex: 10,
    }}>{children}</div>
  );
}

function GoldenStrawberry() {
  return (
    <svg width="42" height="48" viewBox="0 0 32 36" style={{ filter: 'drop-shadow(0 0 8px #FFE680)' }}>
      <defs>
        <radialGradient id="gold-grad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF1A8" />
          <stop offset="100%" stopColor="#FFC53D" />
        </radialGradient>
      </defs>
      <path d="M16 8 C24 8 28 14 28 20 C28 27 22 33 16 33 C10 33 4 27 4 20 C4 14 8 8 16 8 Z" fill="url(#gold-grad)" stroke="#D49A1A" strokeWidth="1.2" />
      <path d="M16 3 C12 4 9 6 8 9 C11 9 13 8 16 7 C19 8 21 9 24 9 C23 6 20 4 16 3 Z" fill="#7ED957" stroke="#4DA331" strokeWidth="1.2" />
      <g fill="#FFFFFF">
        <ellipse cx="13" cy="16" rx="0.9" ry="1.2" />
        <ellipse cx="19" cy="14" rx="0.9" ry="1.2" />
        <ellipse cx="22" cy="18" rx="0.9" ry="1.2" />
        <ellipse cx="11" cy="22" rx="0.9" ry="1.2" />
        <ellipse cx="17" cy="22" rx="0.9" ry="1.2" />
        <ellipse cx="22" cy="24" rx="0.9" ry="1.2" />
        <ellipse cx="14" cy="27" rx="0.9" ry="1.2" />
        <ellipse cx="20" cy="28" rx="0.9" ry="1.2" />
      </g>
    </svg>
  );
}

Object.assign(window, { MiniGame });
