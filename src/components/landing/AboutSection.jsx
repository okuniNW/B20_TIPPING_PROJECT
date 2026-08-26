const PILLARS = [
  {
    icon: '🔗',
    title: 'Permanently On-Chain',
    desc: 'Every tip, message, and winner is recorded forever on Base. No server, no middleman, no censorship.',
    color: '#dbeafe',
    iconBg: '#0052ff',
  },
  {
    icon: '🎲',
    title: 'GameFi Mechanics',
    desc: 'Tipping is not just giving — it is entering a daily draw. Every tip is a ticket to win the prize pool.',
    color: '#dcfce7',
    iconBg: '#16a34a',
  },
  {
    icon: '👑',
    title: 'Be a Royal Forever',
    desc: 'Top supporters earn Royal tiers and appreciation wall slots — your name remembered on-chain, forever.',
    color: '#fef3c7',
    iconBg: '#f59e0b',
  },
];

export default function AboutSection() {
  return (
    <section id="about" style={{
      background: '#ffffff',
      padding: '5rem 0',
    }}>
      <div className="shell">

        {/* Top — asimetris seperti referensi */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '4rem',
        }} className="about-grid">

          {/* LEFT — Big statement */}
          <div>
            <span className="eyebrow" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
              Why RoyalBase
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#09090b',
              marginTop: '1rem',
              maxWidth: '14ch',
            }}>
              Tipping that{' '}
              <span style={{ color: '#0052ff' }}>actually</span>{' '}
              matters.
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: '#52525b',
              lineHeight: 1.75,
              marginTop: '1.25rem',
              maxWidth: '44ch',
            }}>
              Traditional tipping disappears into a platform's pocket.
              On RoyalBase, every tip goes directly on-chain — split
              between the prize pool and the creator, with your message
              stored forever on Base.
            </p>
          </div>

          {/* RIGHT — Big stat card seperti referensi */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Main stat card — dark blue seperti referensi */}
            <div style={{
              background: '#0052ff',
              borderRadius: '1.5rem',
              padding: '2rem',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: '-2rem', right: '-2rem',
                width: '8rem', height: '8rem',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '50%',
              }} />
              <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
                Total Pool Distributed
              </div>
              <div style={{
                fontSize: '3rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#fbbf24',
                WebkitTextStroke: '1px white',
                lineHeight: 1,
              }}>
                12.4 ETH
              </div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                Paid out to winners since launch
              </div>
            </div>

            {/* Two small stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { val: '100%', label: 'On-chain transactions', bg: '#f5f8ff' },
                { val: '0%',   label: 'Platform hidden fees', bg: '#fef3c7' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: s.bg,
                  borderRadius: '1.25rem',
                  padding: '1.25rem',
                  border: '1px solid #e2e8f7',
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#0052ff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize: '0.775rem', color: '#8b95a8', marginTop: '0.375rem', fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillars — card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {PILLARS.map((p, i) => (
            <div key={i} style={{
              background: p.color,
              borderRadius: '1.5rem',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              border: '1px solid rgba(0,0,0,0.04)',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                width: '44px', height: '44px',
                background: p.iconBg,
                borderRadius: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
              }}>
                {p.icon}
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#09090b', marginBottom: '0.5rem' }}>
                  {p.title}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#52525b', lineHeight: 1.65 }}>
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
