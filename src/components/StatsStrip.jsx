import { useCountUp } from '../hooks/useScrollReveal';

const STATS = [
  { value: 247, suffix: '+', label: 'Royals',  color: '#fbbf24' },
  { value: 98,  suffix: '%', label: 'Paid Out', color: '#fbbf24' },
  { value: 12,  suffix: '',  label: 'Draws',    color: '#fbbf24' },
];

function StatItem({ value, suffix, label }) {
  const ref = useCountUp(value, { suffix, duration: 2000 });
  return (
    <div style={{ textAlign: 'center', flex: 1 }}>
      <div
        ref={ref}
        style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          color: '#fbbf24',
          WebkitTextStroke: '0.8px white',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        0{suffix}
      </div>
      <div style={{
        fontSize: '0.65rem',
        color: 'rgba(255,255,255,0.6)',
        fontWeight: 500,
        marginTop: '3px',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
      }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <div style={{
      background: '#001a66',
      borderRadius: '1.25rem',
      padding: '1rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decoration */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(0,82,255,0.3) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Stats */}
      <div style={{
        display: 'flex',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>
        {STATS.map((stat, i) => (
          <div key={i} style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRight: i < STATS.length - 1
              ? '1px solid rgba(255,255,255,0.1)'
              : 'none',
          }}>
            <StatItem {...stat} />
          </div>
        ))}
      </div>
    </div>
  );
}
