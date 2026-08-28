const POINTS_HISTORY = [
  { action: 'Connected wallet', pts: '+100', time: '2h ago', icon: '🔗' },
  { action: 'Sent tip 0.005 ETH', pts: '+50', time: '2h ago', icon: '💸' },
  { action: 'Wrote wall message', pts: '+30', time: '3h ago', icon: '✍️' },
];

export default function RoyalTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

      {/* Points card — bg biru, kuning stroke putih */}
      <div style={{
        background: '#0052ff',
        borderRadius: '1.5rem',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-3rem', right: '-3rem',
          width: '10rem', height: '10rem',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
        }} />
        <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
          Your Royal Points
        </div>
        <div style={{
          fontSize: '3rem',
          fontWeight: 800,
          color: '#fbbf24',
          WebkitTextStroke: '1px white',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          marginBottom: '0.5rem',
        }}>
          180
        </div>
        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>
          Rank <strong style={{ color: '#fff' }}>#47</strong> of 1,203 wallets
        </div>

        {/* Season badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.375rem',
          marginTop: '1rem',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '9999px',
          padding: '0.3rem 0.75rem',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.8)',
          fontWeight: 600,
        }}>
          <div style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%' }} />
          Season 1 — Live
        </div>
      </div>

      {/* Tier progress card */}
      <div style={{
        background: '#fff',
        borderRadius: '1.5rem',
        padding: '1.25rem',
        border: '1px solid #e2e8f7',
      }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8b95a8', marginBottom: '1rem' }}>
          Current Tier
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{
            width: '44px', height: '44px',
            background: '#eff6ff',
            borderRadius: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
          }}>
            🔨
          </div>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0052ff' }}>BaseBuilder</div>
            <div style={{ fontSize: '0.775rem', color: '#8b95a8' }}>0.01 – 0.049 ETH total</div>
          </div>
        </div>

        {/* Progress to next tier */}
        <div style={{ fontSize: '0.75rem', color: '#8b95a8', marginBottom: '6px', display: 'flex', justifyContent: 'space-between' }}>
          <span>Progress to BaseApp</span>
          <span style={{ color: '#0052ff', fontWeight: 600 }}>0.018 / 0.05 ETH</span>
        </div>
        <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '9999px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '36%', background: 'linear-gradient(90deg, #0052ff, #3c8aff)', borderRadius: '9999px' }} />
        </div>
        <div style={{ fontSize: '0.7rem', color: '#8b95a8', marginTop: '4px' }}>
          0.032 ETH more to unlock BaseApp
        </div>
      </div>

      {/* Hint card */}
      <div style={{
        background: 'rgba(251,191,36,0.08)',
        border: '1px solid rgba(251,191,36,0.25)',
        borderRadius: '1.25rem',
        padding: '1rem 1.25rem',
        display: 'flex',
        gap: '0.75rem',
      }}>
        <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>👀</span>
        <div>
          <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#d97706', marginBottom: '0.25rem' }}>
            Points may matter.
          </div>
          <div style={{ fontSize: '0.775rem', color: '#92400e', lineHeight: 1.6 }}>
            The protocol always remembers who showed up early. Keep earning.
          </div>
        </div>
      </div>

      {/* Activity history */}
      <div style={{
        background: '#fff',
        borderRadius: '1.5rem',
        padding: '1.25rem',
        border: '1px solid #e2e8f7',
      }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8b95a8', marginBottom: '1rem' }}>
          Recent Activity
        </div>
        {POINTS_HISTORY.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.625rem 0',
            borderBottom: i < POINTS_HISTORY.length - 1 ? '1px solid #f1f5f9' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '0.825rem', fontWeight: 500, color: '#09090b' }}>{item.action}</div>
                <div style={{ fontSize: '0.7rem', color: '#8b95a8' }}>{item.time}</div>
              </div>
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#16a34a' }}>{item.pts}</div>
          </div>
        ))}
        <button style={{
          width: '100%',
          marginTop: '0.875rem',
          padding: '0.625rem',
          background: '#f5f8ff',
          border: '1px solid #e2e8f7',
          borderRadius: '0.875rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#0052ff',
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}>
          Claim Points On-Chain →
        </button>
      </div>
    </div>
  );
}
