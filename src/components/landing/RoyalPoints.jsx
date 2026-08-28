const POINTS = [
  { action: 'Connect wallet', pts: '100', icon: '🔗' },
  { action: 'Send a tip', pts: '50', icon: '💸' },
  { action: 'Win a draw', pts: '500', icon: '🎲' },
  { action: 'Write wall message', pts: '30', icon: '✍️' },
  { action: 'Reach top 10 leaderboard', pts: '200', icon: '🏆' },
  { action: 'Early supporter bonus', pts: '1,000', icon: '⭐' },
];

export default function RoyalPoints() {
  return (
    <section style={{
      background: '#0052ff',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorations */}
      <div style={{
        position: 'absolute',
        top: '-6rem', left: '-6rem',
        width: '24rem', height: '24rem',
        background: 'radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-4rem', right: '-4rem',
        width: '20rem', height: '20rem',
        background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }} className="points-grid">

          {/* LEFT */}
          <div>
            <span className="eyebrow" style={{
              background: 'rgba(251,191,36,0.15)',
              border: '1px solid rgba(251,191,36,0.3)',
              color: '#fbbf24',
              marginBottom: '1.25rem',
              display: 'inline-flex',
            }}>
              Royal Points
            </span>

            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginTop: '1rem',
              maxWidth: '16ch',
            }}>
              The protocol{' '}
              <span style={{
                color: '#fbbf24',
                WebkitTextStroke: '0.5px white',
              }}>
                remembers
              </span>{' '}
              its Royals.
            </h2>

            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.75,
              marginTop: '1.25rem',
              maxWidth: '44ch',
            }}>
              Every action on RoyalBase earns Royal Points.
              Points are tracked off-chain and claimable
              on-chain at any time. Season 1 is live now.
            </p>

            {/* Teaser hint */}
            <div style={{
              marginTop: '1.75rem',
              background: 'rgba(251,191,36,0.1)',
              border: '1px solid rgba(251,191,36,0.25)',
              borderRadius: '1rem',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
            }}>
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>👀</span>
              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: '#fbbf24',
                  marginBottom: '0.25rem',
                }}>
                  Points may matter.
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.6,
                }}>
                  We are not confirming anything.
                  But the protocol always remembers
                  who showed up early.
                </div>
              </div>
            </div>

            {/* Season badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1.5rem',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '9999px',
              padding: '0.5rem 1rem',
            }}>
              <div style={{
                width: '8px', height: '8px',
                background: '#22c55e',
                borderRadius: '50%',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              <span style={{
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 600,
              }}>
                Season 1 — Live Now
              </span>
            </div>
          </div>

          {/* RIGHT — Points table */}
          <div style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '1.5rem',
            overflow: 'hidden',
          }}>
            {/* Table header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem 1.25rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.4)',
            }}>
              <span>Action</span>
              <span>Points</span>
            </div>

            {/* Rows */}
            {POINTS.map((p, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.875rem 1.25rem',
                borderBottom: i < POINTS.length - 1
                  ? '1px solid rgba(255,255,255,0.06)'
                  : 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.8)',
                }}>
                  <span style={{ fontSize: '1rem' }}>{p.icon}</span>
                  {p.action}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  color: '#fbbf24',
                  WebkitTextStroke: '0.5px white',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  +{p.pts}
                </div>
              </div>
            ))}

            {/* Footer */}
            <div style={{
              padding: '1rem 1.25rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              fontSize: '0.775rem',
              color: 'rgba(255,255,255,0.4)',
              textAlign: 'center',
            }}>
              Points are claimable on-chain · Season 1 ends TBA
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @media (min-width: 900px) {
          .points-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
