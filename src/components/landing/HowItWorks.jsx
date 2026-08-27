const STEPS = [
  {
    num: '01',
    title: 'Connect Your Wallet',
    desc: 'Connect any Web3 wallet — MetaMask, Rabby, Coinbase Wallet, and more. No account needed, no email, no password.',
    icon: '🔗',
    color: '#dbeafe',
    accent: '#0052ff',
  },
  {
    num: '02',
    title: 'Send a Tip',
    desc: 'Choose your amount, write a message for the Appreciation Wall, and send. Your tip goes directly on-chain — no middleman.',
    icon: '💸',
    color: '#dcfce7',
    accent: '#16a34a',
  },
  {
    num: '03',
    title: 'Enter the Daily Draw',
    desc: 'Every tip is automatically one entry into the 24-hour draw. The more you tip, the more entries you earn.',
    icon: '🎲',
    color: '#fef3c7',
    accent: '#f59e0b',
  },
  {
    num: '04',
    title: 'Win & Get Remembered',
    desc: 'Winners receive ETH directly to their wallet. Your name and message stay on the Appreciation Wall forever on Base.',
    icon: '👑',
    color: '#fae8ff',
    accent: '#9333ea',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{
      background: '#f5f8ff',
      padding: '5rem 0',
    }}>
      <div className="shell">

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="eyebrow" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            How it Works
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#09090b',
            marginTop: '1rem',
            lineHeight: 1.1,
            maxWidth: '16ch',
          }}>
            Four steps to become a{' '}
            <span style={{ color: '#0052ff' }}>Royal</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
        }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: '1.5rem',
              padding: '1.75rem',
              border: '1px solid #e2e8f7',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,82,255,0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              {/* Big number — seperti referensi */}
              <div style={{
                position: 'absolute',
                top: '-0.5rem',
                right: '1rem',
                fontSize: '5rem',
                fontWeight: 800,
                color: 'rgba(0,82,255,0.06)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                userSelect: 'none',
              }}>
                {step.num}
              </div>

              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                background: step.color,
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                flexShrink: 0,
              }}>
                {step.icon}
              </div>

              {/* Content */}
              <div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#09090b',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}>
                  {step.title}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#52525b',
                  lineHeight: 1.7,
                }}>
                  {step.desc}
                </div>
              </div>

              {/* Step number pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: step.accent,
                background: step.color,
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                width: 'fit-content',
              }}>
                Step {step.num}
              </div>
            </div>
          ))}
        </div>

        {/* Connector line — desktop only */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '2.5rem',
          flexWrap: 'wrap',
        }}>
          {['Connect', 'Tip', 'Enter Draw', 'Win'].map((label, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <div style={{
                background: '#0052ff',
                color: '#fff',
                borderRadius: '9999px',
                padding: '0.375rem 1rem',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}>
                {label}
              </div>
              {i < 3 && (
                <span style={{ color: '#e2e8f7', fontSize: '1.25rem', fontWeight: 300 }}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
