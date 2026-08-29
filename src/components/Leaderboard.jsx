import { useLeaderboard, useDrawHistory } from '../hooks/useContractData';
import { formatETH, TIER_NAMES, shortAddr, timeAgo } from '../hooks/contractConfig';

const TIER_STYLE = {
  0: { bg: '#f1f5f9', color: '#64748b' },  // Base
  1: { bg: '#eff6ff', color: '#0040cc' },  // BaseBuilder
  2: { bg: '#eff6ff', color: '#0052ff' },  // BaseApp
  3: { bg: '#f0fdf4', color: '#16a34a' },  // BaseX420
  4: { bg: '#fef3c7', color: '#d97706' },  // RoyalBase
  5: { bg: '#0052ff', color: '#fff'    },  // B20
};

const PODIUM = {
  1: { medal: '🥇', color: '#f59e0b', border: '#fbbf24' },
  2: { medal: '🥈', color: '#94a3b8', border: '#94a3b8' },
  3: { medal: '🥉', color: '#c4793a', border: '#c4793a' },
};

function SkeletonRow() {
  return (
    <div style={{
      height: '52px',
      background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f7 50%, #f1f5f9 75%)',
      backgroundSize: '200% 100%',
      borderRadius: '0.875rem',
      animation: 'shimmer 1.5s infinite',
    }} />
  );
}

export default function Leaderboard() {
  const { tippers, isLoading: lbLoading }   = useLeaderboard();
  const { history, isLoading: histLoading } = useDrawHistory();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

      {/* Leaderboard card */}
      <div style={{
        background: '#fff',
        borderRadius: '1.5rem',
        border: '1px solid #e2e8f7',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(0,82,255,0.05)',
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0052ff 0%, #003acc 100%)',
          padding: '1rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: '0.925rem', fontWeight: 700, color: '#fff' }}>
              👑 Royal Leaderboard
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
              All-time top supporters
            </div>
          </div>
          <div style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.6)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            Total ETH
          </div>
        </div>

        {/* Podium — top 3 */}
        <div style={{
          background: '#f5f8ff',
          padding: '1rem 1.25rem 0.75rem',
          borderBottom: '1px solid #e2e8f7',
        }}>
          <div style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#8b95a8',
            marginBottom: '0.75rem',
          }}>
            Podium
          </div>

          {lbLoading ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[1,2,3].map(i => <SkeletonRow key={i} />)}
            </div>
          ) : tippers.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '1.5rem 0',
              fontSize: '0.825rem',
              color: '#8b95a8',
            }}>
              No tippers yet. Be the first Royal! 👑
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {tippers.slice(0, 3).map(item => {
                const p = PODIUM[item.rank] || PODIUM[3];
                const t = TIER_STYLE[item.tier] || TIER_STYLE[0];
                const name = item.displayName || shortAddr(item.address);
                return (
                  <div key={item.rank} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: '#fff',
                    borderRadius: '0.875rem',
                    padding: '10px 12px',
                    border: `1.5px solid ${p.border}22`,
                    boxShadow: `0 2px 12px ${p.border}15`,
                  }}>
                    <span style={{ fontSize: item.rank === 1 ? '2.5rem' : '2rem', flexShrink: 0, lineHeight: 1 }}>
                      {p.medal}
                    </span>
                    <div style={{
                      width: '34px', height: '34px',
                      borderRadius: '50%',
                      background: t.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: t.color,
                      flexShrink: 0,
                      border: `2px solid ${p.border}`,
                    }}>
                      {name.slice(0, 2).toUpperCase()}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: p.color,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}>
                        {name}
                      </div>
                      <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        padding: '1px 6px',
                        borderRadius: '9999px',
                        background: t.bg,
                        color: t.color,
                      }}>
                        {TIER_NAMES[item.tier] || 'Base'}
                      </span>
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 800,
                      color: '#09090b',
                      flexShrink: 0,
                    }}>
                      {formatETH(item.totalTipped)}
                      <span style={{ fontSize: '0.7rem', color: '#8b95a8', fontWeight: 400 }}> ETH</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Rank 4-5 */}
        {!lbLoading && tippers.length > 3 && (
          <div style={{ padding: '0.5rem 1.25rem 0.75rem' }}>
            {tippers.slice(3).map((item, i) => {
              const t    = TIER_STYLE[item.tier] || TIER_STYLE[0];
              const name = item.displayName || shortAddr(item.address);
              return (
                <div key={item.rank} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 0',
                  borderBottom: i === 0 ? '1px solid #f1f5f9' : 'none',
                }}>
                  <div style={{
                    width: '24px',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#cbd5e1',
                  }}>
                    #{item.rank}
                  </div>
                  <div style={{
                    width: '28px', height: '28px',
                    borderRadius: '50%',
                    background: t.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: t.color,
                    flexShrink: 0,
                  }}>
                    {name.slice(0, 2).toUpperCase()}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '0.825rem',
                      fontWeight: 500,
                      color: '#09090b',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {name}
                    </div>
                    <span style={{
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      padding: '1px 5px',
                      borderRadius: '9999px',
                      background: t.bg,
                      color: t.color,
                    }}>
                      {TIER_NAMES[item.tier] || 'Base'}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    color: '#52525b',
                    flexShrink: 0,
                  }}>
                    {formatETH(item.totalTipped)}
                    <span style={{ fontSize: '0.65rem', color: '#8b95a8', fontWeight: 400 }}> ETH</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Draw History */}
      <div style={{
        background: '#fff',
        borderRadius: '1.5rem',
        padding: '1.25rem',
        border: '1px solid #e2e8f7',
        boxShadow: '0 2px 16px rgba(0,82,255,0.05)',
      }}>
        <div style={{ fontSize: '0.925rem', fontWeight: 700, color: '#09090b', marginBottom: '2px' }}>
          Draw History
        </div>
        <div style={{ fontSize: '0.7rem', color: '#8b95a8', marginBottom: '1rem' }}>
          Last 5 winners
        </div>

        {histLoading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[1,2,3].map(i => <SkeletonRow key={i} />)}
          </div>
        ) : history.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '1.5rem 0',
            fontSize: '0.825rem',
            color: '#8b95a8',
          }}>
            No draws yet. First draw coming soon!
          </div>
        ) : (
          history.map((item, i) => {
            const name = item.winnerName || shortAddr(item.winner);
            return (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '9px 0',
                borderBottom: i < history.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '24px', height: '24px',
                    background: '#f5f8ff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '9px',
                    fontWeight: 700,
                    color: '#8b95a8',
                    flexShrink: 0,
                    border: '1px solid #e2e8f7',
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 600, color: '#09090b' }}>
                      {name}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#8b95a8' }}>
                      {timeAgo(item.timestamp)}
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#16a34a' }}>
                  +{formatETH(item.amount)}
                  <span style={{ fontSize: '0.7rem', fontWeight: 400, color: '#8b95a8' }}> ETH</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
