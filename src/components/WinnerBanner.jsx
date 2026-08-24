export default function WinnerBanner() {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      height: '40px',
      background: '#0052ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      fontSize: '13px',
      color: '#fff',
      fontWeight: 400,
    }}>
      <span>🎉</span>
      <span>Last winner:</span>
      <span style={{ fontWeight: 700 }}>0xMike</span>
      <span>won</span>
      <span style={{
        fontWeight: 800,
        color: '#fbbf24',
        WebkitTextStroke: '1px white',
        textStroke: '1px white',
      }}>
        0.847 ETH
      </span>
      <span style={{ color: 'rgba(255,255,255,0.5)', margin: '0 2px' }}>·</span>
      <span style={{ color: 'rgba(255,255,255,0.8)' }}>3 hours ago</span>
    </div>
  );
}
