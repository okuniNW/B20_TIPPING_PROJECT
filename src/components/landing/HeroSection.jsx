import { Link } from 'react-router-dom';

const STATS = [
  { value: '247+', label: 'Active Tippers' },
  { value: '0.847', label: 'ETH in Pool' },
  { value: '12',   label: 'Draws Complete' },
  { value: '98%',  label: 'Pool Paid Out' },
];

const FLOAT_CARDS = [
  {
    icon: '🎲',
    title: 'Daily Draw',
    sub: 'Every 24 hours',
    color: '#0052ff',
  },
  {
    icon: '👑',
    title: 'Get Remembered',
    sub: 'Forever on-chain',
    color: '#f59e0b',
  },
  {
    icon: '⚡',
    title: 'Instant Reward',
    sub: '70% to winners',
    color: '#22c55e',
  },
];

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #f0f5ff 0%, #ffffff 50%, #f5f8ff 100%)',
      paddingTop: '7rem',
      paddingBottom: '4rem',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-10rem',
        right: '-10rem',
        width: '40rem',
        height: '40rem',
        background: 'radial-gradient(circle, rgba(0,82,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-5rem',
        left: '-5rem',
        width: '25rem',
        height: '25rem',
        background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="shell">
        {/* Main grid — asymmetric like referensi */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }} className="hero-grid">

          {/* LEFT — Text content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            maxWidth: '600px',
          }}>
            {/* Eyebrow */}
            <div className="reveal d1">
              <span className="eyebrow">
                Built on Base · Powered by Community
              </span>
            </div>

            {/* Headline */}
            <div className="reveal d2">
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#09090b',
              }}>
                Tip On Base{' '}
                <span style={{
                  color: '#0052ff',
                  position: 'relative',
                  display: 'inline-block',
                }}>
                  And Use Base
                </span>
                <br />
                For Tip
                <span style={{
                  display: 'inline-block',
                  marginLeft: '0.5rem',
                  background: '#fbbf24',
                  borderRadius: '0.5rem',
                  padding: '0 0.4rem',
                  fontSize: '60%',
                  verticalAlign: 'middle',
                  fontWeight: 700,
                  color: '#09090b',
                }}>
                  on-chain
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <div className="reveal d3">
              <p style={{
                fontSize: '1.1rem',
                color: '#52525b',
                lineHeight: 1.7,
                maxWidth: '48ch',
              }}>
                RoyalBase is the first GameFi tipping protocol on Base.
                Send a tip, enter the daily draw, and leave your message
                forever on-chain. Every tipper is a Royal — every draw
                is a chance to win.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="reveal d4" style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}>
              <Link to="/app" className="btn-blue" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                🎲 Launch App
              </Link>
              <a href="#how" className="btn-outline" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                How it works ↓
              </a>
            </div>

            {/* Social proof */}
            <div className="reveal d5" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.825rem',
              color: '#8b95a8',
            }}>
              <div style={{ display: 'flex', gap: '-0.5rem' }}>
                {['AC', 'MK', 'SV', 'CN'].map((init, i) => (
                  <div key={i} style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: ['#dbeafe','#dcfce7','#fae8ff','#fef3c7'][i],
                    border: '2px solid #fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#09090b',
                    marginLeft: i > 0 ? '-8px' : 0,
                    position: 'relative',
                    zIndex: 4 - i,
                  }}>
                    {init}
                  </div>
                ))}
              </div>
              <span>
                <strong style={{ color: '#09090b' }}>247+ Royals</strong> already tipping on Base
              </span>
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }} className="reveal d3">

            {/* Main mockup placeholder */}
            <div style={{
              width: '280px',
              height: '520px',
              background: '#f0f4ff',
              borderRadius: '2rem',
              border: '2px solid #e2e8f7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '0.75rem',
              position: 'relative',
              boxShadow: '0 24px 64px rgba(0,82,255,0.12)',
              overflow: 'hidden',
            }}>
              {/* Placeholder for user's custom image */}
              <img
                src="/images/app-mockup.png"
                alt="RoyalBase App"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  inset: 0,
                }}
                onError={e => { e.target.style.display = 'none'; }}
              />

              {/* Fallback if image not loaded */}
              <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="10" fill="#0052ff"/>
                <path d="M18 6l3 7h7l-5.5 4.5 2 7.5L18 21l-6.5 4 2-7.5L8 13h7z" fill="#fbbf24"/>
                <circle cx="18" cy="18" r="3.5" fill="#fff" opacity="0.9"/>
              </svg>
              <span style={{ fontSize: '0.8rem', color: '#8b95a8', textAlign: 'center', padding: '0 1rem' }}>
                Upload app-mockup.png ke<br />public/images/
              </span>
            </div>

            {/* Floating cards — seperti referensi */}
            {FLOAT_CARDS.map((card, i) => (
              <div key={i} style={{
                position: 'absolute',
                ...(i === 0 ? { top: '2rem', left: '-1rem' } :
                    i === 1 ? { top: '50%', right: '-1rem', transform: 'translateY(-50%)' } :
                              { bottom: '3rem', left: '-1.5rem' }),
                background: '#fff',
                borderRadius: '1rem',
                padding: '0.75rem 1rem',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f7',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                minWidth: '160px',
                animation: `fadeUp 0.6s cubic-bezier(.22,1,.36,1) ${0.4 + i * 0.15}s both`,
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '0.625rem',
                  background: card.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  flexShrink: 0,
                }}>
                  {card.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#09090b' }}>
                    {card.title}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#8b95a8' }}>
                    {card.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar — seperti referensi */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: '#e2e8f7',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          marginTop: '4rem',
          border: '1px solid #e2e8f7',
        }} className="reveal d5">
          {STATS.map((stat, i) => (
            <div key={i} style={{
              background: i % 2 === 0 ? '#fff' : '#f5f8ff',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}>
              <div style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: '#0052ff',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.825rem',
                color: '#8b95a8',
                fontWeight: 500,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
        @media (min-width: 640px) {
          .hero-grid .reveal {
            /* already visible from animation */
          }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
