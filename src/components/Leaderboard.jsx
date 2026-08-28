const LEADERBOARD = [
  { rank: 1, name: 'AcmeCorp',       tier: 'B20',         total: '22.4',  init: 'AC', bg: '#dbeafe' },
  { rank: 2, name: '0xMike',         tier: 'RoyalBase',   total: '3.21',  init: 'MK', bg: '#dcfce7' },
  { rank: 3, name: 'StellaVentures', tier: 'RoyalBase',   total: '1.87',  init: 'SV', bg: '#fae8ff' },
  { rank: 4, name: 'CryptoNinja',    tier: 'BaseApp',     total: '0.34',  init: 'CN', bg: '#fef3c7' },
  { rank: 5, name: 'BaseMaxi',       tier: 'BaseBuilder', total: '0.018', init: 'BM', bg: '#f1f5f9' },
];

const HISTORY = [
  { addr: '0x4f...9a2', amount: '1.24', date: '22 Aug' },
  { addr: '0xMike',     amount: '0.89', date: '21 Aug' },
  { addr: '0x7c...3d1', amount: '2.10', date: '20 Aug' },
  { addr: 'AcmeCorp',   amount: '0.54', date: '19 Aug' },
  { addr: '0x2b...7f4', amount: '1.77', date: '18 Aug' },
];

const TIER_STYLE = {
  'B20':         { bg: '#0052ff', color: '#fff' },
  'RoyalBase':   { bg: '#fef3c7', color: '#d97706' },
  'BaseApp':     { bg: '#eff6ff', color: '#0052ff' },
  'BaseBuilder': { bg: '#eff6ff', color: '#0040cc' },
  'Base':        { bg: '#f1f5f9', color: '#64748b' },
};

const PODIUM = {
  1: { medal: '🥇', color: '#f59e0b', border: '#fbbf24', size: '2.5rem' },
  2: { medal: '🥈', color: '#94a3b8', border: '#94a3b8', size: '2rem'   },
  3: { medal: '🥉', color: '#c4793a', border: '#c4793a', size: '2rem'   },
};

export default function Leaderboard() {
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
            <div style={{
              fontSize: '0.925rem',
              fontWeight: 700,
              color: '#fff',
            }}>
              👑 Royal Leaderboard
            </div>
            <div style={{
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '2px',
            }}>
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

        {/* Top 3 podium */}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {LEADERBOARD.slice(0, 3).map(item => {
              const p = PODIUM[item.rank];
              const t = TIER_STYLE[item.tier] || TIER_STYLE['Base'];
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
                  {/* Medal */}
                  <span style={{ fontSize: p.size, flexShrink: 0, lineHeight: 1 }}>
                    {p.medal}
                  </span>

                  {/* Avatar */}
                  <div style={{
                    width: '34px', height: '34px',
                    borderRadius: '50%',
                    background: item.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#09090b',
                    flexShrink: 0,
                    border: `2px solid ${p.border}`,
                  }}>
                    {item.init}
                  </div>

                  {/* Name + tier */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: p.color,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {item.name}
                    </div>
                    <span style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '1px 6px',
                      borderRadius: '9999px',
                      background: t.bg,
                      color: t.color,
                    }}>
                      {item.tier}
                    </span>
                  </div>

                  {/* Amount */}
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: 800,
                    color: '#09090b',
                    flexShrink: 0,
                  }}>
                    {item.total}
                    <span style={{ fontSize: '0.7rem', color: '#8b95a8', fontWeight: 400 }}>
                      {' '}ETH
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rank 4-5 */}
        <div style={{ padding: '0.5rem 1.25rem 0.75rem' }}>
          {LEADERBOARD.slice(3).map((item, i) => {
            const t = TIER_STYLE[item.tier] || TIER_STYLE['Base'];
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
                  background: item.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#09090b',
                  flexShrink: 0,
                }}>
                  {item.init}
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
                    {item.name}
                  </div>
                  <span style={{
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    padding: '1px 5px',
                    borderRadius: '9999px',
                    background: t.bg,
                    color: t.color,
                  }}>
                    {item.tier}
                  </span>
                </div>
                <div style={{
                  fontSize: '0.825rem',
                  fontWeight: 700,
                  color: '#52525b',
                  flexShrink: 0,
                }}>
                  {item.total}
                  <span style={{ fontSize: '0.65rem', color: '#8b95a8', fontWeight: 400 }}>
                    {' '}ETH
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Draw History card */}
      <div style={{
        background: '#fff',
        borderRadius: '1.5rem',
        padding: '1.25rem',
        border: '1px solid #e2e8f7',
        boxShadow: '0 2px 16px rgba(0,82,255,0.05)',
      }}>
        <div style={{
          fontSize: '0.925rem',
          fontWeight: 700,
          color: '#09090b',
          marginBottom: '2px',
        }}>
          Draw History
        </div>
        <div style={{
          fontSize: '0.7rem',
          color: '#8b95a8',
          marginBottom: '1rem',
        }}>
          Last 5 winners
        </div>

        {HISTORY.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '9px 0',
            borderBottom: i < HISTORY.length - 1
              ? '1px solid #f1f5f9'
              : 'none',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
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
                <div style={{
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  color: '#09090b',
                }}>
                  {item.addr}
                </div>
                <div style={{ fontSize: '0.65rem', color: '#8b95a8' }}>
                  {item.date}
                </div>
              </div>
            </div>
            <div style={{
              fontSize: '0.875rem',
              fontWeight: 800,
              color: '#16a34a',
            }}>
              +{item.amount}
              <span style={{ fontSize: '0.7rem', fontWeight: 400, color: '#8b95a8' }}>
                {' '}ETH
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
