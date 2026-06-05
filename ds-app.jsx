/* ===== 햄찌의 디저트월드 — 디자인 시스템 App ===== */

function Doc() {
  return (
    <div className="doc">
      <Cover />
      <BrandSection />
      <CharacterSection />
      <ColorSection />
      <TypographySection />
      <ButtonSection />
      <Footer />
    </div>
  );
}

/* ---------- Cover ---------- */
function Cover() {
  return (
    <section className="cover" style={{ borderTop: 'none' }} data-screen-label="01 Cover">
      <div className="cover-bg" />
      <div className="cover-content" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div className="eyebrow" style={{ color: '#2B85B5' }}>DESIGN SYSTEM · v1.0</div>
          <h1 className="h-display" style={{ marginTop: 8 }}>
            햄찌의<br />디저트월드
          </h1>
          <p className="lead" style={{ marginTop: 14, color: '#3A4B5E' }}>
            달콤하고 사랑스러운 디저트 카페 브랜드를 위한
            컬러·타이포·버튼·캐릭터 디자인 시스템입니다.
          </p>
          <div style={{ display: 'flex', gap: 8, marginTop: 18, flexWrap: 'wrap' }}>
            <span className="pill" style={{ background: 'white', color: '#FF6B8B', border: '1.5px solid #FFB3C4' }}>🍓 Strawberry-led</span>
            <span className="pill" style={{ background: 'white', color: '#2B85B5', border: '1.5px solid #B5DDF7' }}>☁️ Sky theme</span>
            <span className="pill" style={{ background: 'white', color: '#9C7B2F', border: '1.5px solid #F2D580' }}>✨ Kawaii plush</span>
          </div>
        </div>
        <div style={{ width: 180, flexShrink: 0, textAlign: 'center' }}>
          <img
            src="assets/hamzzi-transparent.png"
            alt="햄찌"
            className="float-up"
            style={{ width: '100%', filter: 'drop-shadow(0 20px 24px rgba(40,80,140,0.2))', userSelect: 'none' }}
            draggable={false}
          />
        </div>
      </div>

      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 10 }}>
        <TOCItem n="01" label="브랜드" />
        <TOCItem n="02" label="캐릭터 — 햄찌" />
        <TOCItem n="03" label="컬러" />
        <TOCItem n="04" label="타이포그래피" />
        <TOCItem n="05" label="버튼 & CTA" />
      </div>
    </section>
  );
}

function TOCItem({ n, label }) {
  return (
    <div style={{
      padding: '10px 14px',
      border: '1px solid var(--ink-100)',
      borderRadius: 12,
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      <span className="section-num">{n}</span>
      <span style={{ fontFamily: 'Jua, sans-serif', fontSize: 13, color: 'var(--ink-700)' }}>{label}</span>
    </div>
  );
}

/* ---------- 01. Brand ---------- */
function BrandSection() {
  return (
    <section data-screen-label="02 Brand">
      <div className="section-head">
        <span className="section-num">01</span>
        <h2 className="h1">브랜드</h2>
      </div>

      <p className="lead">
        햄찌의 디저트월드는 매일 한 입의 행복을 전하는 동네 디저트 카페예요.
        브랜드는 '포근하지만 톡톡 튀는' 두 가지 결을 동시에 가져요 — 카페에 들어선 순간의 따뜻함,
        딸기 한 알 베어 무는 순간의 발랄함.
      </p>

      <div className="callout">
        <div className="callout-emoji">✨</div>
        <div>
          <div style={{ fontFamily: 'Jua, sans-serif', fontSize: 14, color: 'var(--ink-900)', marginBottom: 4 }}>한 줄 미션</div>
          <div className="body">"하루를 달콤하게 만드는 작은 마법을 만들어요."</div>
        </div>
      </div>

      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {[
          { title: '톤', desc: '따뜻하고 다정한, 친구처럼 부담 없는 말투', emoji: '🤗' },
          { title: '키워드', desc: '포근함 · 호기심 · 달콤함 · 호들갑', emoji: '🍓' },
          { title: '사용처', desc: '카페 안내문, 메뉴판, 이벤트, SNS, 굿즈', emoji: '☁️' },
        ].map((b, i) => (
          <div key={i} className="card" style={{ background: 'var(--cream-50)' }}>
            <div style={{ fontSize: 22 }}>{b.emoji}</div>
            <div className="h3" style={{ marginTop: 6 }}>{b.title}</div>
            <div className="body" style={{ fontSize: 13 }}>{b.desc}</div>
          </div>
        ))}
      </div>

      <div className="divider-doodle">목소리 예시 · Voice samples</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div className="card card-berry">
          <div className="caption" style={{ color: 'var(--berry-700)' }}>✓ DO</div>
          <div className="body" style={{ marginTop: 6, color: 'var(--berry-700)' }}>
            "오늘은 햄찌도 한 입 먹어볼래?"<br />
            "딸기 케이크 한 조각으로 하루 마무리 어때요?"<br />
            "5월의 햄찌, 신상 메뉴랑 같이 왔어요 ✨"
          </div>
        </div>
        <div className="card" style={{ background: '#FAFAFA', borderColor: 'var(--ink-100)' }}>
          <div className="caption" style={{ color: 'var(--ink-500)' }}>✗ DON'T</div>
          <div className="body" style={{ marginTop: 6, color: 'var(--ink-500)' }}>
            "고객님, 본 제품은 5월 한정 상품입니다."<br />
            "구매 시 이벤트가 진행 중입니다."<br />
            <span style={{ opacity: 0.7 }}>(딱딱한 안내체, 정중체 과다)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 02. Character ---------- */
function CharacterSection() {
  const expressions = [
    { id: '01-smile',     label: '웃는',       en: 'Smile',     when: '기본 / 인사' },
    { id: '02-grin',      label: '활짝 웃는',   en: 'Grin',      when: '기쁜 소식 · 환영' },
    { id: '03-squint',    label: '찡그린',     en: 'Squint',    when: '귀찮음 · 윙크 변형' },
    { id: '04-sad',       label: '슬픈',       en: 'Sad',       when: '품절 · 마감 안내' },
    { id: '05-surprised', label: '놀란',       en: 'Surprised', when: '신상 출시 · 새 소식' },
    { id: '06-blank',     label: '멍한',       en: 'Blank',     when: '대기 · 로딩' },
    { id: '07-angry',     label: '화난',       en: 'Angry',     when: '경고 · 매진 임박' },
    { id: '08-pout',      label: '삐친',       en: 'Pout',      when: '에러 · 재시도' },
    { id: '09-cry',       label: '우는',       en: 'Cry',       when: '아쉬움 · 종료' },
    { id: '10-excited',   label: '신난',       en: 'Excited',   when: '이벤트 · 보상 획득' },
    { id: '11-shy',       label: '부끄러운',   en: 'Shy',       when: '리뷰 · 감사 인사' },
    { id: '12-sleepy',    label: '졸린',       en: 'Sleepy',    when: '심야 · 마감 후' },
  ];
  const [exp, setExp] = useState(expressions[0].id);
  const current = expressions.find(e => e.id === exp);

  return (
    <section data-screen-label="03 Character">
      <div className="section-head">
        <span className="section-num">02</span>
        <h2 className="h1">캐릭터 — 햄찌</h2>
      </div>

      <p className="lead" style={{ marginBottom: 24 }}>
        햄찌는 햄찌의 디저트월드의 마스코트예요. 호기심 많고 장난기 많지만,
        딸기 앞에서는 누구보다 진지해지는 작은 햄스터입니다. 딸기 모자를 쓰고
        딸기 바구니를 들고 다니는 모습이 시그니처예요.
      </p>

      {/* Character anatomy */}
      <div className="card" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, alignItems: 'center', background: 'linear-gradient(180deg, #EAF6FF 0%, #FFFBF0 100%)', border: '1px solid #C8E6FB' }}>
        <div style={{ textAlign: 'center' }}>
          <img src="assets/hamzzi-transparent.png" alt="햄찌 풀샷" style={{ width: 200, filter: 'drop-shadow(0 16px 22px rgba(40,80,140,0.18))' }} draggable={false} />
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--sky-600)' }}>ANATOMY</div>
          <div className="h2" style={{ marginTop: 6, marginBottom: 12 }}>햄찌의 시그니처</div>
          <ul style={{ paddingLeft: 18, margin: 0, fontSize: 14, lineHeight: 1.9, color: 'var(--ink-700)' }}>
            <li>둥근 삼각형 실루엣 — 모든 모서리는 부드러운 호</li>
            <li>딸기 모자 (벗을 수 없는 시그니처)</li>
            <li>크림빛 보송 털 — 미세한 결이 살아있게</li>
            <li>점 같은 검정 눈 + 분홍 볼터치 한 쌍</li>
            <li>작은 손으로 딸기 바구니를 꼭 안고 있음</li>
          </ul>
        </div>
      </div>

      {/* Personality */}
      <div style={{ marginTop: 28 }}>
        <h3 className="h2">성격 & 무드</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 12 }}>
          {[
            { e: '🔍', t: '호기심 많음', d: '새 메뉴 옆엔 항상 햄찌가 있어요' },
            { e: '🎀', t: '장난스러움', d: '윙크와 살짝 비틀린 미소가 트레이드마크' },
            { e: '🍰', t: '달콤함', d: '디저트 앞에서는 누구보다 진지해져요' },
          ].map((p, i) => (
            <div key={i} className="card card-cream">
              <div style={{ fontSize: 22 }}>{p.e}</div>
              <div className="h3" style={{ marginTop: 4 }}>{p.t}</div>
              <div className="body" style={{ fontSize: 13 }}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Expressions */}
      <div style={{ marginTop: 36 }}>
        <h3 className="h2">표정 세트 · 12 Expressions</h3>
        <p className="body" style={{ marginBottom: 18 }}>
          상황에 맞춰 햄찌의 표정을 사용하세요. 모든 표정은 일관된 페인터리 스타일로 그려졌고,
          딸기 모자와 볼터치는 어떤 표정에서도 유지됩니다.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 24, alignItems: 'start' }}>
          {/* Big preview */}
          <div className="card" style={{
            background: 'linear-gradient(180deg, #BFE3FF, #DFF1FF)',
            borderColor: '#B5DDF7',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: 24,
            position: 'sticky',
            top: 20,
          }}>
            <img
              src={`assets/expressions/${current.id}.png`}
              alt={current.label}
              style={{ width: 240, height: 'auto', filter: 'drop-shadow(0 14px 18px rgba(40,80,140,0.16))' }}
              draggable={false}
            />
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <div className="eyebrow" style={{ color: 'var(--sky-600)' }}>{current.en.toUpperCase()}</div>
              <div className="h2" style={{ marginTop: 4, color: 'var(--ink-900)' }}>{current.label}</div>
              <div className="caption" style={{ marginTop: 8, color: 'var(--ink-500)' }}>사용처 · {current.when}</div>
            </div>
          </div>

          {/* 12-grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {expressions.map((e, idx) => (
              <button
                key={e.id}
                onClick={() => setExp(e.id)}
                style={{
                  border: exp === e.id ? '2px solid var(--berry-400)' : '1px solid var(--ink-100)',
                  background: exp === e.id ? 'var(--berry-100)' : 'white',
                  borderRadius: 14,
                  padding: '8px 4px 6px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all .15s',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 4, left: 6,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 9,
                  color: 'var(--ink-300)',
                }}>{String(idx + 1).padStart(2, '0')}</div>
                <img
                  src={`assets/expressions/${e.id}.png`}
                  alt={e.label}
                  style={{ width: '80%', height: 'auto', display: 'block', margin: '4px auto 4px' }}
                  draggable={false}
                />
                <div style={{ fontFamily: 'Jua, sans-serif', fontSize: 12, color: 'var(--ink-700)' }}>{e.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Props & accessories */}
      <div style={{ marginTop: 36 }}>
        <h3 className="h2">소품 · Props</h3>
        <p className="body" style={{ marginBottom: 14 }}>
          햄찌가 들고 다니거나 곁에 두는 시그니처 소품입니다. 상황에 맞춰 1~2개씩 사용하세요.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }}>
          {[
            { Comp: PropStrawberryBasket, name: '딸기 바구니', use: '메인 시그니처' },
            { Comp: PropCupcake, name: '컵케이크', use: '신상 출시' },
            { Comp: PropCookie, name: '쿠키', use: '서브 메뉴' },
            { Comp: PropMilkCarton, name: '딸기우유', use: '음료/굿즈' },
            { Comp: PropDaisySingle, name: '데이지', use: '봄 시즌' },
            { Comp: PropCloud, name: '구름친구', use: '말풍선/감정 표현' },
          ].map((p, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', padding: 14 }}>
              <p.Comp size={72} />
              <div style={{ fontFamily: 'Jua, sans-serif', fontSize: 13, marginTop: 6 }}>{p.name}</div>
              <div className="caption" style={{ marginTop: 2 }}>{p.use}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Do/Don't */}
      <div style={{ marginTop: 36 }}>
        <h3 className="h2">사용 규칙 · Do & Don't</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 12 }}>
          <div className="card" style={{ borderColor: 'var(--grass-500)', background: '#F0FBE7' }}>
            <div style={{ fontFamily: 'Jua, sans-serif', color: 'var(--grass-700)', marginBottom: 8 }}>✓ DO</div>
            <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13, lineHeight: 1.9, color: 'var(--ink-700)' }}>
              <li>딸기 모자는 항상 함께</li>
              <li>볼터치는 살짝 분홍빛</li>
              <li>여백을 충분히 두기 (캐릭터 ÷ 1배 이상)</li>
              <li>드롭섀도우는 부드럽게, 흐림 20~40</li>
            </ul>
          </div>
          <div className="card" style={{ borderColor: 'var(--berry-300)', background: '#FFF0F4' }}>
            <div style={{ fontFamily: 'Jua, sans-serif', color: 'var(--berry-600)', marginBottom: 8 }}>✗ DON'T</div>
            <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13, lineHeight: 1.9, color: 'var(--ink-700)' }}>
              <li>딸기 모자 제거하지 않기</li>
              <li>색상 반전 / 그레이스케일 사용 금지</li>
              <li>얼굴을 가리는 방식의 회전·뒤집기 금지</li>
              <li>날카로운 외곽선 (boldweight 4+ 금지)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 03. Color ---------- */
function ColorSection() {
  const groups = [
    {
      title: 'Sky', desc: '메인 배경과 평온함을 책임지는 하늘색 계열',
      tokens: [
        { name: 'sky/100', hex: '#EAF6FF' },
        { name: 'sky/200', hex: '#BFE3FF' },
        { name: 'sky/400', hex: '#5BC4FF' },
        { name: 'sky/500', hex: '#4CB6FF' },
        { name: 'sky/600', hex: '#2B85B5' },
      ],
    },
    {
      title: 'Berry', desc: '브랜드 핵심 — CTA, 강조, 햄찌 볼터치',
      tokens: [
        { name: 'berry/100', hex: '#FFE9F0' },
        { name: 'berry/200', hex: '#FFD2DE' },
        { name: 'berry/300', hex: '#FFB3C4' },
        { name: 'berry/400', hex: '#FF8AAA' },
        { name: 'berry/500', hex: '#FF6B8B' },
        { name: 'berry/600', hex: '#D96A89' },
      ],
    },
    {
      title: 'Cream & Sun', desc: '카드 배경, 따뜻한 강조',
      tokens: [
        { name: 'cream/50',  hex: '#FFFBF0' },
        { name: 'cream/100', hex: '#FFF8E5' },
        { name: 'cream/200', hex: '#FFF1C9' },
        { name: 'cream/300', hex: '#FFE9A8' },
        { name: 'cream/500', hex: '#FFD45A' },
      ],
    },
    {
      title: 'Grass', desc: '풀밭, 자연 요소, 성공 상태',
      tokens: [
        { name: 'grass/300', hex: '#9BE26A' },
        { name: 'grass/500', hex: '#7ED957' },
        { name: 'grass/700', hex: '#3F9A2D' },
      ],
    },
    {
      title: 'Strawberry', desc: '딸기 자체, 위험·에러',
      tokens: [
        { name: 'strawberry',      hex: '#FF5A5A' },
        { name: 'strawberry/deep', hex: '#E83E3E' },
      ],
    },
    {
      title: 'Ink (neutral)', desc: '텍스트 계열 — 따뜻한 갈색 계열로 통일',
      tokens: [
        { name: 'ink/900', hex: '#2A1F18' },
        { name: 'ink/700', hex: '#5C3D2E' },
        { name: 'ink/500', hex: '#8B6A52' },
        { name: 'ink/300', hex: '#B9A595' },
        { name: 'ink/100', hex: '#ECE3D9' },
        { name: 'paper',   hex: '#FAF6EE' },
      ],
    },
  ];

  return (
    <section data-screen-label="04 Color">
      <div className="section-head">
        <span className="section-num">03</span>
        <h2 className="h1">컬러</h2>
      </div>
      <p className="lead" style={{ marginBottom: 24 }}>
        Sky와 Berry 두 축이 햄찌 월드의 정서를 만들어요. 텍스트는 따뜻한 ink 갈색 계열로 통일해
        딸기·하늘 컬러와 충돌하지 않게 해주세요.
      </p>

      {groups.map((g, i) => (
        <div key={i} style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
            <h3 className="h2">{g.title}</h3>
            <div className="caption">{g.desc}</div>
          </div>
          <div className="swatch-grid">
            {g.tokens.map((t, j) => (
              <div key={j} className="swatch">
                <div className="swatch-chip" style={{ background: t.hex, borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                  {/* sample shapes */}
                  <div style={{
                    position: 'absolute', inset: 12,
                    display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                  }}>
                    <div style={{ width: 14, height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.5)' }} />
                  </div>
                </div>
                <div className="swatch-info">
                  <div className="swatch-name">{t.name}</div>
                  <div className="swatch-hex">{t.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="callout">
        <div className="callout-emoji">🎨</div>
        <div>
          <div style={{ fontFamily: 'Jua, sans-serif', fontSize: 14, color: 'var(--ink-900)', marginBottom: 4 }}>페어링 추천</div>
          <div className="body">
            • 배경 <span className="mono">sky/200</span> + 메인 CTA <span className="mono">berry/500</span><br />
            • 카드 <span className="mono">cream/100</span> + 본문 <span className="mono">ink/700</span><br />
            • 강조 뱃지 <span className="mono">cream/500</span> + 본문 <span className="mono">ink/900</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 04. Typography ---------- */
function TypographySection() {
  return (
    <section data-screen-label="05 Typography">
      <div className="section-head">
        <span className="section-num">04</span>
        <h2 className="h1">타이포그래피</h2>
      </div>
      <p className="lead" style={{ marginBottom: 24 }}>
        4가지 폰트로 햄찌 월드의 톤을 만듭니다. 영문 디스플레이는 통통한 버블,
        한글 디스플레이는 둥글둥글한 Jua, 본문은 Gowun Dodum,
        손글씨 doodle은 Gaegu로 통일하세요.
      </p>

      {/* Font cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 28 }}>
        <FontCard
          family="Fredoka"
          role="English Display"
          sample="HELLO, HAMZZI!"
          fontFamily="'Fredoka', sans-serif"
          weight={700}
          size={32}
          meta="600 / 700 — letter-spacing 0.02em"
          bg="#EAF6FF"
        />
        <FontCard
          family="Jua"
          role="Korean Display"
          sample="햄찌의 디저트월드"
          fontFamily="'Jua', sans-serif"
          weight={400}
          size={32}
          meta="단일 굵기 · letter-spacing -0.01em"
          bg="#FFE9F0"
        />
        <FontCard
          family="Gowun Dodum"
          role="Body & UI"
          sample="오늘은 햄찌도 한 입 먹어볼래?"
          fontFamily="'Gowun Dodum', sans-serif"
          weight={400}
          size={18}
          meta="14-16px / line-height 1.6-1.7"
          bg="#FFFBF0"
        />
        <FontCard
          family="Gaegu"
          role="Handwriting Doodle"
          sample="딸기 한 입 어때요?"
          fontFamily="'Gaegu', cursive"
          weight={700}
          size={22}
          meta="400 / 700 — 손글씨 강조"
          bg="#FFF8E5"
        />
      </div>

      {/* Scale */}
      <h3 className="h2" style={{ marginBottom: 10 }}>스케일 · Type scale</h3>
      <div className="card" style={{ padding: '4px 20px' }}>
        <Spec size={56} fam="Jua" role="display" meta="56 / 1.05 / -0.02em" sample="햄찌의 디저트월드" />
        <Spec size={34} fam="Jua" role="h1"      meta="34 / 1.1 / -0.015em" sample="이번 주의 햄찌 메뉴" />
        <Spec size={22} fam="Jua" role="h2"      meta="22 / 1.2"            sample="딸기 시리즈가 돌아왔어요" />
        <Spec size={16} fam="Jua" role="h3"      meta="16 / 1.3"            sample="신상 출시 안내" />
        <Spec size={15} fam="Gowun Dodum" role="body" meta="15 / 1.65" sample="햄찌의 디저트월드에서 5월 한정 딸기 시리즈를 만나보세요." />
        <Spec size={12} fam="Gowun Dodum" role="caption" meta="12 / 1.4 / +0.04em" sample="* 매장 상황에 따라 변경될 수 있어요" />
      </div>
    </section>
  );
}

function FontCard({ family, role, sample, fontFamily, weight, size, meta, bg }) {
  return (
    <div className="card" style={{ background: bg, borderColor: 'rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div className="eyebrow" style={{ color: 'var(--ink-500)' }}>{role}</div>
        <div className="mono">{family}</div>
      </div>
      <div style={{ fontFamily, fontWeight: weight, fontSize: size, lineHeight: 1.15, color: 'var(--ink-900)', marginTop: 12, marginBottom: 12 }}>
        {sample}
      </div>
      <div className="caption">{meta}</div>
    </div>
  );
}

function Spec({ size, fam, role, meta, sample }) {
  return (
    <div className="spec">
      <div className="spec-label">
        <span className="spec-role">{role}</span>
        <span className="spec-meta">{meta}</span>
      </div>
      <div style={{
        fontFamily: fam === 'Jua' ? "'Jua', sans-serif" : "'Gowun Dodum', sans-serif",
        fontSize: size,
        lineHeight: 1.2,
        color: 'var(--ink-900)',
      }}>{sample}</div>
    </div>
  );
}

/* ---------- 05. Buttons ---------- */
function ButtonSection() {
  return (
    <section data-screen-label="06 Buttons">
      <div className="section-head">
        <span className="section-num">05</span>
        <h2 className="h1">버튼 & CTA</h2>
      </div>
      <p className="lead" style={{ marginBottom: 24 }}>
        버튼은 항상 통통한 라운드 + 두꺼운 흰 테두리 + 아래 그림자가 기본 공식이에요.
        눌렀을 때 살짝 가라앉는 모션으로 플러시(plush)한 느낌을 줍니다.
      </p>

      {/* Variants */}
      <div className="card" style={{ background: 'var(--paper)', padding: 28 }}>
        <div className="eyebrow">VARIANTS</div>
        <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center' }}>
          <button className="btn-primary">
            지금 시작하기 <span>→</span>
          </button>
          <button className="btn-secondary">
            메뉴 보기
          </button>
          <button className="btn-ghost">
            다음에
          </button>
          <button className="btn-icon">♡</button>
        </div>
      </div>

      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        <UsageNote title="Primary" desc="가장 강한 액션 — 출석/구매/응모. 페이지당 1개 권장" color="#FF6B8B" />
        <UsageNote title="Secondary" desc="보조 액션 — 자세히 보기, 메뉴 보기" color="#4CB6FF" />
        <UsageNote title="Ghost" desc="취소·다음에·뒤로" color="#FFB3C4" />
        <UsageNote title="Icon" desc="좋아요·공유·북마크" color="#FF6B8B" />
      </div>

      <div className="divider-doodle">상태 · States</div>

      <div className="card" style={{ background: 'var(--paper)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, alignItems: 'center' }}>
          <StateDemo label="Default">
            <button className="btn-primary">지금 시작</button>
          </StateDemo>
          <StateDemo label="Pressed">
            <button className="btn-primary" style={{
              transform: 'translateY(4px)',
              boxShadow: '0 1px 0 #D96A89, 0 4px 10px -2px rgba(217, 106, 137, 0.4)',
            }}>지금 시작</button>
          </StateDemo>
          <StateDemo label="Disabled">
            <button className="btn-primary" disabled style={{
              background: '#E8DCD0',
              color: '#B9A595',
              boxShadow: '0 5px 0 #C9B6A0',
              cursor: 'not-allowed',
            }}>지금 시작</button>
          </StateDemo>
        </div>
      </div>

      {/* Badges & pills */}
      <h3 className="h2" style={{ marginTop: 32, marginBottom: 12 }}>뱃지 & Pills</h3>
      <div className="card" style={{ background: 'var(--paper)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          <span className="pill" style={{ background: '#FF8AAA', color: 'white', boxShadow: '0 3px 0 #D96A89' }}>🎁 출석 보상</span>
          <span className="pill" style={{ background: '#FFD45A', color: '#5C3D2E', boxShadow: '0 3px 0 #D9A82F' }}>⏰ 마감 임박</span>
          <span className="pill" style={{ background: '#5BC4FF', color: 'white', boxShadow: '0 3px 0 #2B85B5' }}>📅 출석체크</span>
          <span className="pill" style={{ background: 'white', color: '#FF6B8B', border: '1.5px solid #FFB3C4' }}>NEW</span>
          <span className="pill" style={{ background: '#FFF1C9', color: '#9C7B2F', border: '1.5px dashed #F2D580' }}>5월 한정</span>
        </div>
      </div>

      {/* Anatomy */}
      <h3 className="h2" style={{ marginTop: 32, marginBottom: 12 }}>버튼 해부도 · Anatomy</h3>
      <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, padding: 24, alignItems: 'center', background: 'var(--paper)' }}>
        <div style={{ textAlign: 'center' }}>
          <button className="btn-primary" style={{ fontSize: 20, padding: '14px 28px' }}>지금 시작하기 →</button>
        </div>
        <div>
          <div className="token-row">
            <div className="token-name">background</div>
            <div className="caption">grad: berry/300 → berry/500</div>
            <div className="token-value">linear 180°</div>
          </div>
          <div className="token-row">
            <div className="token-name">border</div>
            <div className="caption">white</div>
            <div className="token-value">3px solid #FFF</div>
          </div>
          <div className="token-row">
            <div className="token-name">radius</div>
            <div className="caption">full pill</div>
            <div className="token-value">999px</div>
          </div>
          <div className="token-row">
            <div className="token-name">shadow</div>
            <div className="caption">drop + soft</div>
            <div className="token-value">0 5px 0 berry/600</div>
          </div>
          <div className="token-row">
            <div className="token-name">font</div>
            <div className="caption">Jua, weight 400</div>
            <div className="token-value">16-20px</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UsageNote({ title, desc, color }) {
  return (
    <div style={{
      padding: 12,
      background: 'white',
      borderRadius: 12,
      borderLeft: `4px solid ${color}`,
      border: '1px solid var(--ink-100)',
      borderLeftWidth: 4,
      borderLeftColor: color,
    }}>
      <div style={{ fontFamily: 'Jua, sans-serif', fontSize: 13, color: 'var(--ink-900)' }}>{title}</div>
      <div className="caption" style={{ marginTop: 4, lineHeight: 1.5 }}>{desc}</div>
    </div>
  );
}

function StateDemo({ label, children }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="caption" style={{ marginBottom: 10 }}>{label}</div>
      {children}
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer style={{
      marginTop: 64,
      paddingTop: 24,
      borderTop: '1px solid var(--ink-100)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    }}>
      <div className="caption">© 2026 햄찌의 디저트월드 · Design System v1.0</div>
      <div className="caption">made with 🍓 by 햄찌 team</div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Doc />);
