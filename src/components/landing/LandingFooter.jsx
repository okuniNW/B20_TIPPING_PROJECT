import { Link } from 'react-router-dom';

const LINKS = {
  Protocol: [
    { label: 'How it Works', href: '#how' },
    { label: 'Tier System', href: '#tiers' },
    { label: 'Royal Points', href: '#points' },
    { label: 'Roadmap', href: '#roadmap' },
  ],
  App: [
    { label: 'Launch App', href: '/app' },
    { label: 'Leaderboard', href: '/app' },
    { label: 'Appreciation Wall', href: '/app' },
    { label: 'Draw History', href: '/app' },
  ],
  Resources: [
    { label: 'Base Chain', href: 'https://base.org', external: true },
    { label: 'Coinbase', href: 'https://coinbase.com', external: true },
    { label: 'BaseScan', href: 'https://basescan.org', external: true },
    { label: 'GitHub', href: 'https://github.com', external: true },
  ],
  Legal: [
    { label: 'Terms of Use', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Disclaimer', href: '#disclaimer' },
  ],
};

export default function LandingFooter() {
  return (
    <footer style={{
      background: '#0052ff',
      color: '#fff',
      borderRadius: '2rem 2rem 0 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: '-6rem', right: '-6rem',
        width: '24rem', height: '24rem',
        background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '10rem',
        fontWeight: 800,
        color: 'rgba(255,255,255,0.04)',
        letterSpacing: '-0.04em',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>
        ROYALBASE
      </div>

      <div className="shell" style={{ position: 'relative', zIndex: 1 }}>

        {/* CTA Block */}
        <div style={{
          padding: '4rem 0 3rem',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          alignItems: 'center',
        }} className="footer-cta-grid">
          <div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              maxWidth: '16ch',
            }}>
              Ready to tip and{' '}
              <span style={{
                color: '#fbbf24',
                WebkitTextStroke: '0.5px white',
              }}>
                win on Base?
              </span>
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.7)',
              marginTop: '1rem',
              maxWidth: '44ch',
              lineHeight: 1.7,
            }}>
              Join 247+ Royals already tipping on Base.
              Every tip is a chance to win, every message
              lasts forever on-chain.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
          }}>
            <Link to="/app" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: '#fff',
              color: '#0052ff',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
              width: 'fit-content',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              🎲 Launch App
            </Link>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginTop: '0.5rem',
            }}>
              {[
                { val: '247+', label: 'Royals' },
                { val: '12', label: 'Draws' },
                { val: '12.4 ETH', label: 'Distributed' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#fbbf24',
                    WebkitTextStroke: '0.5px white',
                    lineHeight: 1,
                  }}>
                    {s.val}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.55)',
                    marginTop: '0.2rem',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem',
          padding: '3rem 0 2rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }} className="footer-links-grid">

          {/* Brand column */}
          <div style={{ gridColumn: '1 / -1' }} className="footer-brand">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.875rem',
            }}>
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="10" fill="rgba(255,255,255,0.15)"/>
                <path d="M18 6l3 7h7l-5.5 4.5 2 7.5L18 21l-6.5 4 2-7.5L8 13h7z"
                  fill="#fbbf24"/>
                <circle cx="18" cy="18" r="3.5" fill="#fff" opacity="0.9"/>
              </svg>
              <span style={{
                fontSize: '1rem',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '0.06em',
              }}>
                ROYALBASE
              </span>
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              maxWidth: '36ch',
            }}>
              The first GameFi tipping protocol on Base.
              Tip, win, and get remembered forever on-chain.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: '1rem',
              }}>
                {title}
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
              }}>
                {items.map((item, i) => (
                  item.external ? (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.65)',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                    >
                      {item.label}
                      <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>↗</span>
                    </a>
                  ) : (
                    <Link
                      key={i}
                      to={item.href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.65)',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legal bar */}
        <div style={{
          padding: '1.5rem 0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          fontSize: '0.775rem',
          color: 'rgba(255,255,255,0.35)',
        }}>
          <span>© 2026 RoyalBase. Built on Base. All rights reserved.</span>
          <span style={{
            color: '#fbbf24',
            fontWeight: 600,
            WebkitTextStroke: '0.3px white',
          }}>
            Tip. Win. Get remembered forever.
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-cta-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
          .footer-links-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .footer-brand {
            grid-column: 1 / -1 !important;
          }
        }
        @media (min-width: 900px) {
          .footer-links-grid {
            grid-template-columns: 1.5fr repeat(4, 1fr) !important;
          }
          .footer-brand {
            grid-column: auto !important;
          }
        }
      `}</style>
    </footer>
  );
}
