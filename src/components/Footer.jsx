export default function Footer() {
  return (
    <footer style={{
      background: 'var(--blue)',
      color: '#fff',
      borderRadius: '2rem 2rem 0 0',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '2rem',
    }}>
      {/* Watermark */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        pointerEvents: 'none',
        userSelect: 'none',
        paddingBottom: '-1.5rem',
        zIndex: 0,
      }}>
        <span style={{
          fontSize: '8rem',
          fontWeight: 800,
          color: 'rgba(255,255,255,0.06)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}>
          B20ROYAL
        </span>
      </div>

      <div style={{ position: 'relative', zIndex: 1, padding: '3rem 1.5rem 2rem' }}>
        {/* CTA */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
            maxWidth: '16ch',
          }}>
            Ready to tip and win on Base?
          </div>
          <button className="btn-primary" style={{
            background: '#fff',
            color: 'var(--blue)',
            borderRadius: 'var(--r-pill)',
          }}>
            Connect & Start Tipping →
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', marginBottom: '2rem' }} />

        {/* Links */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', marginBottom: '12px' }}>
              Protocol
            </div>
            {['How it works', 'Leaderboard', 'Appreciation Wall', 'Draw History'].map(l => (
              <div key={l} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', cursor: 'pointer' }}>
                {l}
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', marginBottom: '12px' }}>
              Links
            </div>
            {['Base Chain', 'Coinbase', 'GitHub', 'Terms'].map(l => (
              <div key={l} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', cursor: 'pointer' }}>
                {l}
              </div>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.15)',
          paddingTop: '1.5rem',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.4)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <span>© 2026 B20 Royal. Built on Base.</span>
          <span style={{ color: '#fbbf24', WebkitTextStroke: '0.5px white' }}>
            Tip. Win. Get remembered forever.
          </span>
        </div>
      </div>
    </footer>
  );
}
