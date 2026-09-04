const PROBLEMS = [
  { emoji: '😤', text: 'Platform takes 20-30% cut' },
  { emoji: '👻', text: 'Tips disappear, no record' },
  { emoji: '🔒', text: 'You have no proof of support' },
  { emoji: '💸', text: 'Winner? What winner?' },
];

const SOLUTIONS = [
  { emoji: '✅', text: '70% to prize pool, transparent' },
  { emoji: '⛓️', text: 'Every tip recorded on Base forever' },
  { emoji: '👑', text: 'Royal tier badge, on-chain identity' },
  { emoji: '🎲', text: 'Daily draw — real ETH prizes' },
];

export default function WhyTipping() {
  return (
    <section style={{
      background: '#0052ff',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decoration */}
      <div style={{
        position: 'absolute',
        top: '-8rem', right: '-8rem',
        width: '30rem', height: '30rem',
        background: 'radial-gradient(circle, rgba(0,82,255,0.3) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="shell">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', }}>
          <span className="eyebrow" style={{
            background: 'rgba(251,191,36,0.15)',
            border: '1px solid rgba(251,191,36,0.3)',
            color: '#fbbf24',
            marginBottom: '1rem',
            display: 'inline-flex',
          }}>
            The Problem & Solution
          </span>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.02em',
            marginTop: '1rem',
            lineHeight: 1.15,
          }}>
            Why tipping on-chain{' '}
            <span style={{
              color: '#fbbf24',
              WebkitTextStroke: '0.5px white',
            }}>
              changes everything
            </span>
          </h2>
        </div>

        {/* Before / After grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.75rem',
        }} className="before-after-grid">

          {/* Before */}
          <div style={{
            background: 'rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '1.5rem',
            padding: '1.75rem',
          }}>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '1.25rem',
            }}>
              Traditional Tipping 😞
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {PROBLEMS.map((p, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.6)',
                }}>
                  <span style={{ fontSize: '1.1rem' }}>{p.emoji}</span>
                  {p.text}
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '1.5rem',
            padding: '1.75rem',
          }}>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#fbbf24',
              marginBottom: '1.25rem',
            }}>
              RoyalBase 👑
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {SOLUTIONS.map((s, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.9rem',
                  color: '#fff',
                  fontWeight: 500,
                }}>
                  <span style={{ fontSize: '1.1rem' }}>{s.emoji}</span>
                  {s.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="/app" className="btn-blue" style={{
            background: '#fbbf24',
            color: '#09090b',
            fontWeight: 700,
            fontSize: '1rem',
            padding: '0.875rem 2.5rem',
          }}>
            Start Tipping on Base →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .before-after-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
