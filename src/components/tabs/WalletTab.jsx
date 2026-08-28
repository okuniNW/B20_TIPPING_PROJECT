export default function WalletTab() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      minHeight: '60vh',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '3rem' }}>💼</div>
      <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#09090b' }}>
        Wallet Coming in V2
      </div>
      <div style={{
        fontSize: '0.875rem',
        color: '#8b95a8',
        maxWidth: '28ch',
        lineHeight: 1.6,
      }}>
        Portfolio, Send, Receive, and Swap will be available after V1 launch.
      </div>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: '#eff6ff',
        border: '1px solid rgba(0,82,255,0.2)',
        borderRadius: '9999px',
        padding: '0.4rem 1rem',
        fontSize: '0.8rem',
        fontWeight: 600,
        color: '#0052ff',
      }}>
        <div style={{
          width: '6px', height: '6px',
          background: '#f59e0b',
          borderRadius: '50%',
        }} />
        Roadmap V2
      </div>
    </div>
  );
}
