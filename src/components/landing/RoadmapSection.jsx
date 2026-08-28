const PHASES = [
  {
    version: 'V1',
    label: 'Core Protocol',
    status: 'live',
    color: '#0052ff',
    bg: '#eff6ff',
    border: 'rgba(0,82,255,0.2)',
    items: [
      'Tipping with 70/30 split',
      'Daily draw mechanism',
      'Royal leaderboard',
      'Appreciation Wall on-chain',
      'Royal Points Season 1',
      'Tier system (Base → B20)',
    ],
  },
  {
    version: 'V2',
    label: 'Wallet & Swap',
    status: 'soon',
    color: '#f59e0b',
    bg: '#fefce8',
    border: 'rgba(251,191,36,0.3)',
    items: [
      'Portfolio dashboard (Base tokens)',
      'Send & Receive ETH/tokens',
      'Swap via 0x Protocol (0.5% fee)',
      'Profile system + custom avatar',
      'i18n: 5 languages',
      'CoinGecko price integration',
    ],
  },
  {
    version: 'V3',
    label: 'Ecosystem',
    status: 'future',
    color: '#8b95a8',
    bg: '#f8fafc',
    border: '#e2e8f7',
    items: [
      'NFT border marketplace',
      'Chainlink VRF for draws',
      'Mobile PWA',
      'DAO governance',
      'Multi-protocol expansion',
      'Royal Points airdrop (TBA)',
    ],
  },
];

const STATUS = {
  live:   { label: 'Live Now', bg: '#dcfce7', color: '#16a34a', dot: '#22c55e' },
  soon:   { label: 'Coming Soon', bg: '#fef3c7', color: '#d97706', dot: '#f59e0b' },
  future: { label: 'Future', bg: '#f1f5f9', color: '#64748b', dot: '#94a3b8' },
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" style={{
      background: '#f5f8ff',
      padding: '5rem 0',
    }}>
      <div className="shell">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            Roadmap
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#09090b',
            marginTop: '1rem',
            lineHeight: 1.1,
          }}>
            Built in public.{' '}
            <span style={{ color: '#0052ff' }}>Shipped for Royals.</span>
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#52525b',
            marginTop: '0.875rem',
            maxWidth: '44ch',
            marginInline: 'auto',
            lineHeight: 1.7,
          }}>
            RoyalBase is built in phases. V1 is live on Base.
            Every update makes the protocol more powerful.
          </p>
        </div>

        {/* Phase cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {PHASES.map((phase, i) => {
            const s = STATUS[phase.status];
            return (
              <div key={i} style={{
                background: phase.bg,
                border: `1.5px solid ${phase.border}`,
                borderRadius: '1.5rem',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                }}>
                  <div>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: phase.color,
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}>
                      {phase.version}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: '#09090b',
                      marginTop: '0.25rem',
                    }}>
                      {phase.label}
                    </div>
                  </div>

                  {/* Status badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    background: s.bg,
                    color: s.color,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}>
                    <div style={{
                      width: '6px', height: '6px',
                      background: s.dot,
                      borderRadius: '50%',
                      animation: phase.status === 'live'
                        ? 'pulse-dot 2s ease-in-out infinite'
                        : 'none',
                    }} />
                    {s.label}
                  </div>
                </div>

                {/* Items */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                }}>
                  {phase.items.map((item, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.625rem',
                      fontSize: '0.875rem',
                      color: phase.status === 'future' ? '#8b95a8' : '#52525b',
                    }}>
                      <span style={{
                        color: phase.status === 'live'
                          ? '#22c55e'
                          : phase.status === 'soon'
                          ? '#f59e0b'
                          : '#cbd5e1',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}>
                        {phase.status === 'live' ? '✓' : '○'}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div style={{
          textAlign: 'center',
          marginTop: '2.5rem',
          padding: '1.25rem',
          background: '#fff',
          borderRadius: '1.25rem',
          border: '1px solid #e2e8f7',
          fontSize: '0.875rem',
          color: '#8b95a8',
        }}>
          🔒 Smart contracts will be verified on BaseScan before mainnet launch.
          Security is a Royal priority.
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}
