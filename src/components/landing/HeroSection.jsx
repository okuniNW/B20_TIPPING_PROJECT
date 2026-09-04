import { Link } from 'react-router-dom';

const STATS = [
  { value: '247+', label: 'Active Tippers' },
  { value: '0.847', label: 'ETH in Pool' },
  { value: '12',   label: 'Draws Complete' },
  { value: '98%',  label: 'Pool Paid Out' },
];

const FLOAT_CARDS = [
  { icon: '🎲', title: 'Daily Draw', sub: 'Every 24 hours', color: '#0052ff' },
  { icon: '👑', title: 'Get Remembered', sub: 'Forever on-chain', color: '#f59e0b' },
  { icon: '⚡', title: 'Instant Reward', sub: '70% to winners', color: '#22c55e' },
];

export default function HeroSection() {
  const isDesktop = window.innerWidth >= 900;

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
        top: '-10rem', right: '-10rem',
        width: '40rem', height: '40rem',
        background: 'radial-gradient(circle, rgba(0,82,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-5rem', left: '-5rem',
        width: '25rem', height: '25rem',
        background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="shell">
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1.2fr 1fr' : '1fr',
          gap: isDesktop ? '3rem' : '1.5rem',
          alignItems: 'center',
        }}>
          {/* LEFT — Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
            <div className="reveal d1">
              <span className="eyebrow">Built on Base · Powered by Community</span>
            </div>

            <div className="reveal d2">
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#09090b',
              }}>
                Tip On Base{' '}
                <span style={{ color: '#0052ff', position: 'relative', display: 'inline-block' }}>
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

            <div className="reveal d3">
              <p style={{ fontSize: '1.1rem', color: '#52525b', lineHeight: 1.7, maxWidth: '48ch' }}>
                RoyalBase is the first GameFi tipping protocol on Base.
                Send a tip, enter the daily draw, and leave your message
                forever on-chain. Every tipper is a Royal — every draw is a chance to win.
              </p>
            </div>

            <div className="reveal d4" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/app" className="btn-blue" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                🎲 Launch App
              </Link>
              <a href="#how" className="btn-outline" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                How it works ↓
              </a>
            </div>

            <div className="reveal d5" style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              fontSize: '0.825rem', color: '#8b95a8',
            }}>
              <div style={{ display: 'flex' }}>
                {['AC','MK','SV','CN'].map((init, i) => (
                  <div key={i} style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: ['#dbeafe','#dcfce7','#fae8ff','#fef3c7'][i],
                    border: '2px solid #fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px', fontWeight: 700, color: '#09090b',
                    marginLeft: i > 0 ? '-8px' : 0,
                    position: 'relative', zIndex: 4 - i,
                  }}>
                    {init}
                  </div>
                ))}
              </div>
              <span><strong style={{ color: '#09090b' }}>247+ Royals</strong> already tipping on Base</span>
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }} className="reveal d3">

            {/* App preview mini */}
            <div style={{
              width: '260px',
              background: '#fff',
              borderRadius: '2rem',
              border: '2px solid #e2e8f7',
              boxShadow: '0 24px 64px rgba(0,82,255,0.12)',
              overflow: 'hidden',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              {/* Mini prize pool */}
              <div style={{ background: '#0052ff', borderRadius: '1rem', padding: '14px', color: '#fff' }}>
                <div style={{ fontSize: '9px', opacity: 0.6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>🏆 Prize Pool</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fbbf24', WebkitTextStroke: '1px white', lineHeight: 1.1 }}>0.847</div>
                <div style={{ fontSize: '10px', opacity: 0.6 }}>ETH ≈ $3,218 USD</div>
                <div style={{ marginTop: '8px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '9999px' }}>
                  <div style={{ width: '60%', height: '100%', background: '#fbbf24', borderRadius: '9999px' }} />
                </div>
                <div style={{ fontSize: '9px', opacity: 0.5, marginTop: '4px' }}>Next draw in 08:24:11</div>
              </div>

              {/* Mini tip form */}
              <div style={{ background: '#f5f8ff', borderRadius: '0.875rem', padding: '12px' }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#8b95a8', marginBottom: '6px', textTransform: 'uppercase' }}>Choose amount</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', marginBottom: '8px' }}>
                  {['0.001 ETH','0.005 ETH','0.01 ETH','Custom'].map((a, i) => (
                    <div key={i} style={{
                      padding: '5px', borderRadius: '0.5rem',
                      border: i === 1 ? '1.5px solid #0052ff' : '1.5px solid #e2e8f7',
                      background: i === 1 ? '#eff6ff' : '#fff',
                      fontSize: '9px', fontWeight: i === 1 ? 700 : 400,
                      color: i === 1 ? '#0052ff' : '#52525b', textAlign: 'center',
                    }}>{a}</div>
                  ))}
                </div>
                <div style={{
                  width: '100%', padding: '8px', background: '#0052ff',
                  borderRadius: '0.625rem', color: '#fff',
                  fontSize: '10px', fontWeight: 700, textAlign: 'center',
                }}>🎲 Send Tip & Enter Draw</div>
              </div>

              {/* Mini leaderboard */}
              <div style={{ background: '#f5f8ff', borderRadius: '0.875rem', padding: '10px 12px' }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#0052ff', marginBottom: '6px' }}>👑 Top Royals</div>
                {['0xMike · B20','StellaV · RoyalBase','CryptoN · BaseApp'].map((name, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between',
                    fontSize: '9px', color: '#52525b', padding: '3px 0',
                    borderBottom: i < 2 ? '1px solid #e2e8f7' : 'none',
                  }}>
                    <span>{i + 1}. {name}</span>
                    <span style={{ color: '#0052ff', fontWeight: 700 }}>+{[0.847, 0.5, 0.21][i]} ETH</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating cards — desktop only */}
            {isDesktop && FLOAT_CARDS.map((card, i) => (
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
                  width: '36px', height: '36px', borderRadius: '0.625rem',
                  background: card.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', flexShrink: 0,
                }}>
                  {card.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#09090b' }}>{card.title}</div>
                  <div style={{ fontSize: '0.7rem', color: '#8b95a8' }}>{card.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
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
              display: 'flex', flexDirection: 'column', gap: '0.25rem',
            }}>
              <div style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 800, color: '#0052ff',
                letterSpacing: '-0.02em', lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.825rem', color: '#8b95a8', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
