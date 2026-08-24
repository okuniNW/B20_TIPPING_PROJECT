const TICKER_DATA = [
  { name: 'AcmeCorp',       tier: 'B20',         message: 'The future is onchain.' },
  { name: '0xMike',         tier: 'RoyalBase',   message: 'LFG! B20 Royal is real.' },
  { name: 'StellaVentures', tier: 'RoyalBase',   message: 'Proud to support this.' },
  { name: 'CryptoNinja',    tier: 'BaseApp',     message: 'Tipping is believing.' },
  { name: 'BaseMaxi',       tier: 'BaseBuilder', message: 'Built on Base, built to last.' },
  { name: 'Web3Dev',        tier: 'Base',        message: 'This is what onchain looks like.' },
];

const TIER_CLASS = {
  'B20':         'tier-b20',
  'RoyalBase':   'tier-royalbase',
  'BaseApp':     'tier-baseapp',
  'BaseBuilder': 'tier-basebuilder',
  'Base':        'tier-base',
};

const doubled = [...TICKER_DATA, ...TICKER_DATA];

export default function RoyalTicker() {
  return (
    <div className="ticker-bar">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <div key={i} className="ticker-item">
            <span className={`badge ${TIER_CLASS[item.tier] || 'tier-base'}`}
              style={{ fontSize: '10px', padding: '1px 7px' }}>
              {item.tier}
            </span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              {item.name}
            </span>
            <span style={{ color: 'var(--text-faint)' }}>—</span>
            <span style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              "{item.message}"
            </span>
            <span className="ticker-sep">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
