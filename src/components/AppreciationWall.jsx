const WALL = [
  { name: 'AcmeCorp',       tier: 'B20',         init: 'AC', bg: '#dbeafe',
    msg:  'Keep building. The future is on-chain. Acme Corp, proudly supporting the next generation of creators.', time: '2h ago' },
  { name: '0xMike',         tier: 'RoyalBase',   init: 'MK', bg: '#dcfce7',
    msg:  'This project is exactly what Base needs. Onchain, transparent, fun.', time: '5h ago' },
  { name: 'StellaVentures', tier: 'RoyalBase',   init: 'SV', bg: '#fae8ff',
    msg:  'Backing builders who ship. B20 Royal is the vibe.', time: '8h ago' },
  { name: 'CryptoNinja',    tier: 'BaseApp',     init: 'CN', bg: '#fef3c7',
    msg:  'Every tip is a vote for an onchain future. Count me in.', time: '12h ago' },
];

const TIER_CLASS = {
  'B20':         'tier-b20',
  'RoyalBase':   'tier-royalbase',
  'BaseApp':     'tier-baseapp',
  'BaseBuilder': 'tier-basebuilder',
  'Base':        'tier-base',
};

export default function AppreciationWall() {
  return (
    <div className="card">
      <div style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '4px' }}>
        Appreciation Wall
      </div>
      <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
        Stored forever on Base blockchain
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {WALL.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: '12px',
            paddingBottom: '16px',
            borderBottom: i < WALL.length - 1 ? '1px solid var(--surface-border)' : 'none',
          }}>
            {/* Avatar */}
            <div className="avatar" style={{
              background: item.bg,
              color: 'var(--text-primary)',
              flexShrink: 0,
              marginTop: '2px',
            }}>
              {item.init}
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '6px',
                marginBottom: '6px',
              }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {item.name}
                </span>
                <span className={`badge ${TIER_CLASS[item.tier]}`}
                  style={{ fontSize: '10px', padding: '1px 6px' }}>
                  {item.tier}
                </span>
              </div>

              <div style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '8px',
              }}>
                "{item.msg}"
              </div>

              <div style={{
                fontSize: '11px',
                color: 'var(--text-faint)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <span>⛓ Stored on Base</span>
                <span>·</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
