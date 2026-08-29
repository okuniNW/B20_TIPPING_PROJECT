import { useDrawHistory } from '../hooks/useContractData';
import { formatETH, shortAddr, timeAgo } from '../hooks/contractConfig';

export default function WinnerBanner() {
  const { history, isLoading } = useDrawHistory();
  const last = history?.[0];

  const name   = last?.winnerName || shortAddr(last?.winner) || '—';
  const amount = last ? formatETH(last.amount) : '—';
  const when   = last ? timeAgo(last.timestamp) : '';

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      height: '36px',
      background: '#0052ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
      fontSize: '12px',
      color: '#fff',
      fontWeight: 400,
    }}>
      {isLoading || !last ? (
        <>
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>
            🏆 RoyalBase — Tip. Win. Get remembered forever.
          </span>
        </>
      ) : (
        <>
          <span>🎉</span>
          <span style={{ color: 'rgba(255,255,255,0.8)' }}>Last winner:</span>
          <span style={{ fontWeight: 700 }}>{name}</span>
          <span style={{ color: 'rgba(255,255,255,0.8)' }}>won</span>
          <span style={{
            fontWeight: 800,
            color: '#fbbf24',
            WebkitTextStroke: '0.8px white',
          }}>
            {amount} ETH
          </span>
          {when && (
            <>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 2px' }}>·</span>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>{when}</span>
            </>
          )}
        </>
      )}
    </div>
  );
}
