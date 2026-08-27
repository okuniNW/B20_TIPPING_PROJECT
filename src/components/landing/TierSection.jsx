const TIERS = [
  {
    name: 'Base',
    range: '0.001 – 0.009 ETH',
    desc: 'Welcome to the protocol',
    bg: '#f1f5f9',
    text: '#64748b',
    border: '#e2e8f0',
    badge: '🔵',
  },
  {
    name: 'BaseBuilder',
    range: '0.01 – 0.049 ETH',
    desc: 'Building your Royal legacy',
    bg: '#eff6ff',
    text: '#0052ff',
    border: 'rgba(0,82,255,0.2)',
    badge: '🔨',
  },
  {
    name: 'BaseApp',
    range: '0.05 – 0.099 ETH',
    desc: 'A true supporter emerges',
    bg: '#eff6ff',
    text: '#0040cc',
    border: 'rgba(0,82,255,0.3)',
    badge: '⚡',
  },
  {
    name: 'BaseX420',
    range: '0.1 – 0.499 ETH',
    desc: 'Serious about the protocol',
    bg: '#f0fdf4',
    text: '#16a34a',
    border: 'rgba(22,163,74,0.25)',
    badge: '🌿',
  },
  {
    name: 'RoyalBase',
    range: '0.5 – 19.99 ETH',
    desc: 'Elite tier — top of the wall',
    bg: '#fefce8',
    text: '#d97706',
    border: 'rgba(251,191,36,0.3)',
    badge: '👑',
  },
  {
    name: 'B20',
    range: '20 ETH+',
    desc: 'The highest Royal — legendary',
    bg: '#0052ff',
    text: '#fff',
    border: '#0040cc',
    badge: '💎',
    highlight: true,
  },
];

export default function TierSection() {
  return (
    <section id="tiers" style={{ background: '#fff', padding: '5rem 0' }}>
      <div className="shell">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            Tier System
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#09090b',
            marginTop: '1rem',
            lineHeight: 1.1,
          }}>
            Six tiers.{' '}
            <span style={{ color: '#0052ff' }}>One destination.</span>
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#52525b',
            marginTop: '0.875rem',
            maxWidth: '44ch',
            marginInline: 'auto',
            lineHeight: 1.7,
          }}>
            Your cumulative tips determine your tier.
            Higher tiers unlock better wall placement,
            exclusive badges, and more Royal Points.
          </p>
        </div>

        {/* Tier cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}>
          {TIERS.map((tier, i) => (
            <div key={i} style={{
              background: tier.bg,
              border: `1.5px solid ${tier.border}`,
              borderRadius: '1.25rem',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              transition: 'transform 0.2s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {tier.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '0.75rem', right: '0.75rem',
                  background: '#fbbf24',
                  color: '#09090b',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.5rem',
                  borderRadius: '9999px',
                  WebkitTextStroke: '0.3px white',
                }}>
                  HIGHEST
                </div>
              )}

              <div style={{ fontSize: '2rem' }}>{tier.badge}</div>

              <div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: tier.text,
                  marginBottom: '0.25rem',
                }}>
                  {tier.name}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: tier.highlight ? 'rgba(255,255,255,0.7)' : '#8b95a8',
                  marginBottom: '0.5rem',
                }}>
                  {tier.range}
                </div>
                <div style={{
                  fontSize: '0.825rem',
                  color: tier.highlight ? 'rgba(255,255,255,0.85)' : '#52525b',
                  lineHeight: 1.5,
                }}>
                  {tier.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          fontSize: '0.825rem',
          color: '#8b95a8',
          padding: '1rem',
          background: '#f5f8ff',
          borderRadius: '1rem',
          border: '1px solid #e2e8f7',
        }}>
          💡 Tier badges will be replaced with custom images — upload yours to{' '}
          <code style={{ color: '#0052ff', fontSize: '0.8rem' }}>public/images/tier-badges/</code>
        </div>
      </div>
    </section>
  );
}
