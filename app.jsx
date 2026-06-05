/* ===== Rewards strip + Footer + App ===== */

function Rewards() {
  return (
    <section className="section" data-screen-label="Rewards" style={{ paddingTop: 0 }}>
      <div className="card card-cream" style={{
        padding: '18px 14px',
        position: 'relative',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ background: '#FF8AAA', color: 'white', boxShadow: '0 3px 0 #D96A89' }}>
            🎁  출석 보상
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 6,
          marginTop: 12,
        }}>
          {REWARD_TIERS.map((r, i) => (
            <RewardCard key={i} reward={r} />
          ))}
        </div>
        <div style={{
          marginTop: 12,
          textAlign: 'center',
          fontFamily: 'Gowun Dodum',
          fontSize: 11,
          color: '#8B6A52',
          lineHeight: 1.6,
        }}>
          * 매장에서 출석 도장 받고 보상을 수령하세요<br />
          * 보상은 누적되며 31일 전체 출석시 추가 특전 ✨
        </div>
      </div>
    </section>
  );
}

function RewardCard({ reward }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: 14,
      padding: '8px 4px 6px',
      textAlign: 'center',
      border: '2px solid #FFE9A8',
      boxShadow: '0 2px 0 #F2D580',
    }}>
      <div style={{ fontSize: 22 }}>{reward.icon}</div>
      <div style={{
        fontFamily: 'Jua',
        fontSize: 10,
        color: '#5C3D2E',
        marginTop: 2,
        lineHeight: 1.2,
        minHeight: 26,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2px',
      }}>{reward.label}</div>
      <div style={{
        background: '#FF8AAA',
        color: 'white',
        fontFamily: 'Jua',
        fontSize: 10,
        padding: '2px 0',
        borderRadius: 6,
        marginTop: 4,
      }}>{reward.days}일</div>
    </div>
  );
}

function HowTo() {
  const steps = [
    { n: 1, title: '매장 방문', desc: '딸기 메뉴를\n주문해요', icon: '🏠' },
    { n: 2, title: '도장 받기', desc: 'QR을 찍어서\n출석 도장!', icon: '🍓' },
    { n: 3, title: '보상 수령', desc: '쿠폰함에서\n바로 사용', icon: '🎁' },
  ];
  return (
    <section className="section" data-screen-label="HowTo" style={{ paddingTop: 0 }}>
      <div className="card" style={{ background: '#FFFFFF' }}>
        <div className="section-label" style={{ background: '#5BC4FF', boxShadow: '0 3px 0 #2B85B5' }}>
          📖  참여 방법
        </div>
        <div className="section-title">이렇게 참여해요</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 12 }}>
          {steps.map((s) => (
            <div key={s.n} style={{
              background: 'linear-gradient(180deg, #F0F8FF 0%, #FFF7F0 100%)',
              borderRadius: 18,
              padding: '14px 6px',
              textAlign: 'center',
              border: '2px solid #E8F1FA',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#FF8AAA',
                color: 'white',
                fontFamily: 'Jua',
                width: 24, height: 24,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12,
                border: '2px solid white',
                boxShadow: '0 2px 0 #D96A89',
              }}>{s.n}</div>
              <div style={{ fontSize: 30, marginTop: 6 }}>{s.icon}</div>
              <div className="font-display" style={{ fontSize: 14, color: '#5C3D2E', marginTop: 4 }}>{s.title}</div>
              <div style={{ fontSize: 10, color: '#8B6A52', fontFamily: 'Gowun Dodum', marginTop: 2, whiteSpace: 'pre-line', lineHeight: 1.4 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFooter() {
  return (
    <section className="section" data-screen-label="CTA" style={{ paddingTop: 0, paddingBottom: 36 }}>
      <button className="cta-btn">
        <span>지금 출석체크 시작하기</span>
        <span style={{ fontSize: 22 }}>→</span>
      </button>
      <div style={{
        marginTop: 14,
        display: 'flex',
        justifyContent: 'center',
        gap: 16,
      }}>
        {['카카오', '인스타', '복사'].map((s, i) => (
          <button key={i} style={{
            background: 'white',
            border: '2px solid #E8F1FA',
            borderRadius: '50%',
            width: 44, height: 44,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Jua',
            fontSize: 11,
            color: '#0086E8',
            cursor: 'pointer',
            boxShadow: '0 3px 0 #d6e3ef',
          }}>{s}</button>
        ))}
      </div>
      <div style={{
        marginTop: 22,
        textAlign: 'center',
        fontFamily: 'Gowun Dodum',
        fontSize: 11,
        color: '#8B6A52',
        lineHeight: 1.6,
      }}>
        © 2026 햄찌 디저트 카페 · 5월 한정 이벤트<br />
        문의: 카카오톡 채널 @hamzzi.cafe
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="stage">
      <div className="phone">
        <Hero />
        <Countdown />
        <Calendar />
        <MiniGame />
        <HowTo />
        <Rewards />
        <CTAFooter />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
