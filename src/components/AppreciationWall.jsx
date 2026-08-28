const WALL = [
  {
    name: 'AcmeCorp',
    tier: 'B20',
    init: 'AC',
    bg: '#dbeafe',
    msg: 'Keep building. The future is on-chain. Proud to support the next generation.',
    time: '2h ago',
  },
  {
    name: '0xMike',
    tier: 'RoyalBase',
    init: 'MK',
    bg: '#dcfce7',
    msg: 'Exactly what Base needs. Onchain, transparent, fun.',
    time: '5h ago',
  },
  {
    name: 'StellaVentures',
    tier: 'RoyalBase',
    init: 'SV',
    bg: '#fae8ff',
    msg: 'Backing builders who ship. B20 Royal is the vibe.',
    time: '8h ago',
  },
  {
    name: 'CryptoNinja',
    tier: 'BaseApp',
    init: 'CN',
    bg: '#fef3c7',
    msg: 'Every tip is a vote for an onchain future.',
    time: '12h ago',
  },
];

const TIER_STYLE = {
  'B20':         { bg: '#0052ff', color: '#fff' },
  'RoyalBase':   { bg: '#fef3c7', color: '#d97706' },
  'BaseApp':     { bg: '#eff6ff', color: '#0052ff' },
  'BaseBuilder': { bg: '#eff6ff', color: '#0040cc' },
  'Base':        { bg: '#f1f5f9', color: '#64748b' },
};

export default function AppreciationWall() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '1.5rem',
      border: '1px solid #e2e8f7',
      overflow: 'hidden',
      boxShadow: '0 2px 16px rgba(0,82,255,0.05)',
      marginBottom: '8px',
    }}>
      {/* Header */}
      <div style={{
        padding: '1rem 1.25rem 0.875rem',
        borderBottom: '1px solid #f1f5f9',
      }}>
        <div style={{
          fontSize: '0.925rem',
          fontWeight: 700,
          color: '#09090b',
          marginBottom: '2px',
        }}>
          Appreciation Wall
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '0.7rem',
          color: '#8b95a8',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
          Stored forever on Base blockchain
        </div>
      </div>

      {/* Entries */}
      <div style={{ padding: '0.5rem 1.25rem' }}>
        {WALL.map((item, i) => {
          const t = TIER_STYLE[item.tier] || TIER_STYLE['Base'];
          return (
            <div key={i} style={{
              display: 'flex',
              gap: '10px',
              padding: '12px 0',
              borderBottom: i < WALL.length - 1
                ? '1px solid #f1f5f9'
                : 'none',
            }}>
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
                marginTop: '2px',
                border: '1.5px solid #e2e8f7',
              }}>
                {item.init}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  flexWrap: 'wrap',
                  marginBottom: '5px',
                }}>
                  <span style={{
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    color: '#09090b',
                  }}>
                    {item.name}
                  </span>
                  <span style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    padding: '1px 6px',
                    borderRadius: '9999px',
                    background: t.bg,
                    color: t.color,
                  }}>
                    {item.tier}
                  </span>
                </div>

                <div style={{
                  fontSize: '0.825rem',
                  color: '#52525b',
                  lineHeight: 1.6,
                  marginBottom: '6px',
                }}>
                  "{item.msg}"
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.65rem',
                  color: '#b8c2d4',
                }}>
                  <span>⛓</span>
                  <span>On Base</span>
                  <span>·</span>
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load more */}
      <div style={{
        padding: '0.75rem 1.25rem',
        borderTop: '1px solid #f1f5f9',
      }}>
        <button style={{
          width: '100%',
          padding: '0.625rem',
          background: '#f5f8ff',
          border: '1px solid #e2e8f7',
          borderRadius: '0.875rem',
          fontSize: '0.775rem',
          fontWeight: 600,
          color: '#0052ff',
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'background 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#eff6ff'}
        onMouseLeave={e => e.currentTarget.style.background = '#f5f8ff'}
        >
          View all messages →
        </button>
      </div>
    </div>
  );
}
