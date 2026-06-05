/* ===== Countdown, Calendar, MiniGame, Rewards ===== */

const EVENT_END = new Date('2026-05-31T23:59:59');
const TODAY = new Date('2026-05-15T12:00:00');

/* ---------- D-day Countdown ---------- */
function Countdown() {
  const [now, setNow] = useState(new Date());
  // Use TODAY as base + a ticking offset for realistic feel without flipping date
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = useMemo(() => {
    // Compute diff relative to TODAY anchor + elapsed real seconds for stability across loads
    const realStart = window.__realStart ?? (window.__realStart = Date.now());
    const elapsed = Date.now() - realStart;
    const virtualNow = new Date(TODAY.getTime() + elapsed);
    const ms = EVENT_END - virtualNow;
    const days = Math.max(0, Math.floor(ms / 86400000));
    const hours = Math.max(0, Math.floor((ms % 86400000) / 3600000));
    const mins = Math.max(0, Math.floor((ms % 3600000) / 60000));
    const secs = Math.max(0, Math.floor((ms % 60000) / 1000));
    return { days, hours, mins, secs };
  }, [now]);

  return (
    <section className="section" data-screen-label="Countdown" style={{ paddingTop: 24, paddingBottom: 0 }}>
      <div className="card" style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF8E5 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
      }}>
        {/* decorative strawberry on corner */}
        <Strawberry size={36} style={{ position: 'absolute', top: -16, left: 16, transform: 'rotate(-20deg)' }} className="bob" />
        <Strawberry size={28} style={{ position: 'absolute', top: -10, right: 22, transform: 'rotate(15deg)' }} className="bob" />

        <div className="section-label" style={{ background: '#FFD45A', color: '#5C3D2E', boxShadow: '0 3px 0 #D9A82F' }}>
          ⏰  이벤트 마감까지
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 14 }}>
          <TimeBox value={diff.days} label="DAYS" big />
          <TimeBox value={diff.hours} label="HOURS" />
          <TimeBox value={diff.mins} label="MIN" />
          <TimeBox value={diff.secs} label="SEC" />
        </div>
        <div className="section-subtitle" style={{ marginTop: 12 }}>
          ✦ 5월 31일까지 매일매일 출석하고 딸기 쿠폰 받기 ✦
        </div>
      </div>
    </section>
  );
}

function TimeBox({ value, label, big }) {
  const v = String(value).padStart(2, '0');
  return (
    <div style={{
      background: big ? 'linear-gradient(180deg, #FF8AAA, #FF6B8B)' : 'linear-gradient(180deg, #5BC4FF, #3FA8E8)',
      color: 'white',
      borderRadius: 18,
      padding: '10px 8px',
      width: 64,
      boxShadow: `0 4px 0 ${big ? '#D96A89' : '#2B85B5'}`,
      border: '2px solid white',
    }}>
      <div className="font-bubble" style={{ fontSize: 28, lineHeight: 1 }}>{v}</div>
      <div style={{ fontSize: 10, marginTop: 4, letterSpacing: '0.1em', opacity: 0.95 }}>{label}</div>
    </div>
  );
}

/* ---------- Attendance Calendar ---------- */
const REWARD_TIERS = [
  { days: 3, label: '딸기우유', icon: '🥛' },
  { days: 7, label: '케이크 한조각', icon: '🍰' },
  { days: 14, label: '스티커팩', icon: '✨' },
  { days: 21, label: '1+1 쿠폰', icon: '🎟️' },
  { days: 28, label: '굿즈 응모권', icon: '🎁' },
];

function Calendar() {
  // May 2026 — 31 days. May 1, 2026 is a Friday (weekday index 5, Sun=0)
  const FIRST_WEEKDAY = 5;
  const DAYS = 31;
  const todayDay = TODAY.getDate(); // 15

  const [stamped, setStamped] = useState(() => {
    try {
      const saved = localStorage.getItem('hamzzi-stamped-v1');
      if (saved) return new Set(JSON.parse(saved));
    } catch (e) {}
    // Pre-stamp days 1-12 to feel realistic
    return new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14]);
  });
  const [poppedDay, setPoppedDay] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('hamzzi-stamped-v1', JSON.stringify([...stamped]));
    } catch (e) {}
  }, [stamped]);

  function toggle(d) {
    if (d > todayDay) return; // can't stamp future
    setStamped(s => {
      const next = new Set(s);
      if (next.has(d)) next.delete(d);
      else next.add(d);
      setPoppedDay(d);
      setTimeout(() => setPoppedDay(p => p === d ? null : p), 500);
      return next;
    });
  }

  const cells = [];
  for (let i = 0; i < FIRST_WEEKDAY; i++) cells.push(null);
  for (let d = 1; d <= DAYS; d++) cells.push(d);
  while (cells.length % 7) cells.push(null);

  const stampedCount = stamped.size;
  const nextReward = REWARD_TIERS.find(t => t.days > stampedCount) || REWARD_TIERS[REWARD_TIERS.length - 1];
  const progress = Math.min(100, (stampedCount / 28) * 100);

  return (
    <section className="section" data-screen-label="Calendar" style={{ paddingTop: 18 }}>
      <div className="card" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <div className="section-label">
              📅  출석체크
            </div>
            <div className="section-title">매일 매일 도장 찍기!</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="font-bubble" style={{
              color: '#FF6B8B',
              fontSize: 38,
              lineHeight: 1,
              textShadow: '0 2px 0 rgba(255,140,170,0.3)',
            }}>{stampedCount}<span style={{ fontSize: 18, color: '#8B6A52' }}>/31</span></div>
            <div style={{ fontSize: 10, color: '#8B6A52', fontFamily: 'Gowun Dodum' }}>출석일수</div>
          </div>
        </div>

        {/* Progress bar to next reward */}
        <div style={{ marginTop: 14, background: '#FFE9F0', borderRadius: 999, height: 18, position: 'relative', overflow: 'hidden', border: '2px solid white', boxShadow: 'inset 0 2px 4px rgba(217,106,137,0.15)' }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #FF8AAA, #FF6B8B)',
            borderRadius: 999,
            transition: 'width .4s ease',
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 10,
            color: 'white',
            fontFamily: 'Jua',
            textShadow: '0 1px 1px rgba(0,0,0,0.2)',
          }}>
            다음 보상까지 {Math.max(0, nextReward.days - stampedCount)}일!
          </div>
        </div>

        {/* Calendar header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 4,
          marginTop: 16,
          padding: '0 2px',
        }}>
          {['일', '월', '화', '수', '목', '금', '토'].map((d, i) => (
            <div key={d} style={{
              textAlign: 'center',
              fontFamily: 'Jua',
              fontSize: 12,
              color: i === 0 ? '#FF6B8B' : i === 6 ? '#0086E8' : '#8B6A52',
              padding: '4px 0',
            }}>{d}</div>
          ))}
        </div>

        {/* Calendar grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 6,
          marginTop: 4,
        }}>
          {cells.map((d, i) => (
            <CalendarCell
              key={i}
              day={d}
              today={d === todayDay}
              stamped={d && stamped.has(d)}
              future={d && d > todayDay}
              popping={poppedDay === d}
              dayOfWeek={i % 7}
              onClick={() => d && toggle(d)}
            />
          ))}
        </div>

        <div style={{
          marginTop: 14,
          padding: '10px 12px',
          background: '#FFF8E5',
          borderRadius: 16,
          border: '2px dashed #F2D580',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <div style={{ fontSize: 22 }}>{nextReward.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: '#8B6A52', fontFamily: 'Gowun Dodum' }}>다음 보상</div>
            <div className="font-display" style={{ fontSize: 15, color: '#5C3D2E' }}>{nextReward.label}</div>
          </div>
          <div className="font-display" style={{ fontSize: 14, color: '#0086E8' }}>{nextReward.days}일 출석</div>
        </div>
      </div>
    </section>
  );
}

function CalendarCell({ day, today, stamped, future, popping, dayOfWeek, onClick }) {
  if (!day) return <div />;

  const baseColor = dayOfWeek === 0 ? '#FF8AAA' : dayOfWeek === 6 ? '#5BC4FF' : '#5C3D2E';

  return (
    <button
      onClick={onClick}
      disabled={future}
      style={{
        aspectRatio: '1 / 1',
        border: 'none',
        background: today ? '#FFE9A8' : future ? '#F4F7FA' : '#FFF5F8',
        borderRadius: 12,
        position: 'relative',
        padding: 0,
        cursor: future ? 'default' : 'pointer',
        outline: today ? '2.5px solid #FF8AAA' : 'none',
        outlineOffset: today ? -2 : 0,
        opacity: future ? 0.55 : 1,
        transition: 'background .15s ease, transform .1s ease',
      }}
    >
      <div style={{
        fontFamily: 'Jua',
        fontSize: 14,
        color: baseColor,
        position: 'absolute',
        top: 4,
        left: 6,
      }}>{day}</div>

      {stamped && (
        <div className={popping ? 'stamp-pop' : ''} style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(-6deg)',
        }}>
          <HamzziStamp size={36} />
        </div>
      )}

      {today && !stamped && (
        <div style={{
          position: 'absolute',
          bottom: 4,
          right: 4,
          fontSize: 9,
          fontFamily: 'Jua',
          color: '#E83E3E',
          background: 'white',
          padding: '1px 4px',
          borderRadius: 4,
        }}>오늘</div>
      )}
    </button>
  );
}

Object.assign(window, { Countdown, Calendar, REWARD_TIERS });
