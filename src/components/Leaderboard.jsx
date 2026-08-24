import { useCountUp } from '../hooks/useScrollReveal';

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

const TIER_CLASS = {
  'B20':         'tier-b20',
  'RoyalBase':   'tier-royalbase',
  'BaseApp':     'tier-baseapp',
  'BaseBuilder': 'tier-basebuilder',
  'Base':        'tier-base',
};

const RANK_MEDALS = { 1: '🥇', 2: '🥈', 3: '🥉' };

// Stats count-up refs
function StatBlock({ value, suffix, label }) {
  const ref = useCountUp(value, { suffix, duration: 2200 });
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: '2.5rem',
        fontWeight: 800,
        color: 'var(--blue)',
        letterSpacing: '-0.02em',
        fontVariantNumeric: 'tabular-nums',
      }} ref={ref}>
        0{suffix}
      </div>
      <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
        {label}
      </div>
    </div>
  );
}

export default function Leaderboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

      {/* Stats strip — bg biru, kuning dengan stroke putih */}
      <div style={{
        background: 'var(--blue)',
        borderRadius: 'var(--r-card)',
        padding: '1.75rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}>
        {[
          { value: 247,  suffix: '',   label: 'Total Tippers' },
          { value: 98,   suffix: '%',  label: 'Pool Paid Out' },
          { value: 12,   suffix: '',   label: 'Draws Complete' },
        ].map(({ value, suffix, label }, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <StatBlockBlue value={value} suffix={suffix} label={label} />
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="card">
        <div style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '4px' }}>
          Royal Leaderboard
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
          All-time top supporters
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {LEADERBOARD.map(item => (
            <div
              key={item.rank}
              className={`lb-row${item.rank <= 3 ? ' top' : ''}`}
            >
              {/* Rank */}
              <div style={{
                width: '28px',
                textAlign: 'center',
                fontSize: item.rank <= 3 ? '18px' : '13px',
                fontWeight: 700,
                color: item.rank === 1 ? '#d97706'
                     : item.rank === 2 ? 'var(--silver)'
                     : item.rank === 3 ? 'var(--bronze)'
                     : 'var(--text-faint)',
                flexShrink: 0,
              }}>
                {RANK_MEDALS[item.rank] || `#${item.rank}`}
              </div>

              {/* Avatar */}
              <div className="avatar" style={{
                background: item.bg,
                color: 'var(--text-primary)',
                borderColor: item.rank === 1 ? '#fbbf24' : 'var(--surface-border)',
              }}>
                {item.init}
              </div>

              {/* Name */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: item.rank <= 3 ? 700 : 400,
                  color: 'var(--text-primary)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {item.name}
                </div>
                <span className={`badge ${TIER_CLASS[item.tier]}`}
                  style={{ fontSize: '10px', padding: '1px 6px', marginTop: '2px' }}>
                  {item.tier}
                </span>
              </div>

              {/* Total */}
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', flexShrink: 0 }}>
                {item.total}{' '}
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 400 }}>ETH</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Draw History */}
      <div className="card">
        <div style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '4px' }}>
          Draw History
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
          Last 5 winners
        </div>

        {HISTORY.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 0',
            borderBottom: i < HISTORY.length - 1 ? '1px solid var(--surface-border)' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-faint)', width: '20px' }}>#{i + 1}</span>
              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>{item.addr}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#16a34a' }}>+{item.amount} ETH</span>
              <span style={{ fontSize: '12px', color: 'var(--text-faint)' }}>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Stats on blue bg — kuning dengan stroke putih
function StatBlockBlue({ value, suffix, label }) {
  const ref = useCountUp(value, { suffix, duration: 2200 });
  return (
    <div>
      <div style={{
        fontSize: '2rem',
        fontWeight: 800,
        color: '#fbbf24',
        WebkitTextStroke: '1px white',
        letterSpacing: '-0.02em',
        fontVariantNumeric: 'tabular-nums',
      }} ref={ref}>
        0{suffix}
      </div>
      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
        {label}
      </div>
    </div>
  );
}
