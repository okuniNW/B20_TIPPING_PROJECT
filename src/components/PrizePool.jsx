import { useState, useEffect } from 'react';

const TOTAL_SECONDS = 18 * 3600 + 42 * 60 + 7;

export default function PrizePool() {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);
  const [drawInProgress, setDraw] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) { setDraw(true); clearInterval(id); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  const isUrgent = seconds < 3600 && !drawInProgress;

  const TIPS_NOW   = 19;
  const TIPS_TOTAL = 50;
  const pct        = (TIPS_NOW / TIPS_TOTAL) * 100;

  return (
    <div style={{
      background: '#0052ff',
      borderRadius: '1.5rem',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-4rem', right: '-4rem',
        width: '14rem', height: '14rem',
        background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-2rem', left: '-2rem',
        width: '8rem', height: '8rem',
        background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Label */}
      <div style={{
        fontSize: '0.65rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'rgba(255,255,255,0.55)',
        marginBottom: '0.5rem',
      }}>
        🏆 Current Prize Pool
      </div>

      {/* Big ETH amount — kuning stroke putih di bg biru */}
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '8px',
        marginBottom: '4px',
      }}>
        <span style={{
          fontSize: '3.75rem',
          fontWeight: 800,
          color: '#fbbf24',
          WebkitTextStroke: '1.5px white',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
          animation: 'pulse-prize 2.5s ease-in-out infinite',
        }}>
          0.847
        </span>
        <span style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.6)',
        }}>
          ETH
        </span>
      </div>

      <div style={{
        fontSize: '0.825rem',
        color: 'rgba(255,255,255,0.55)',
        marginBottom: '1.25rem',
      }}>
        ≈ $3,210 USD
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.65)',
          marginBottom: '6px',
          fontWeight: 500,
        }}>
          <span><strong style={{ color: '#fff' }}>{TIPS_NOW}</strong> tips sent</span>
          <span>{TIPS_TOTAL} needed</span>
        </div>
        <div style={{
          height: '6px',
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '9999px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #fbbf24, #fde68a)',
            borderRadius: '9999px',
            transition: 'width 0.8s ease',
          }} />
        </div>
        <div style={{
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.45)',
          marginTop: '4px',
        }}>
          {TIPS_TOTAL - TIPS_NOW} more tips until draw
        </div>
      </div>

      {/* Divider */}
      <div style={{
        height: '1px',
        background: 'rgba(255,255,255,0.12)',
        marginBottom: '1.25rem',
      }} />

      {/* Countdown */}
      {drawInProgress ? (
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '1rem',
          padding: '0.875rem',
          textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.15)',
        }}>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 700,
            color: '#fbbf24',
            WebkitTextStroke: '0.5px white',
          }}>
            ⚡ Draw in progress...
          </div>
          <div style={{ fontSize: '0.775rem', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>
            Winner announced shortly
          </div>
        </div>
      ) : (
        <div>
          <div style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '0.75rem',
          }}>
            Next draw in
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { val: h, label: 'HRS' },
              { val: m, label: 'MIN' },
              { val: s, label: 'SEC' },
            ].map(({ val, label }, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '0.75rem',
                  padding: '0.5rem 0.875rem',
                  marginBottom: '4px',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <span style={{
                    fontSize: isUrgent ? '1.75rem' : '2rem',
                    fontWeight: 800,
                    color: isUrgent ? '#fc4444' : '#fff',
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                    letterSpacing: '-0.02em',
                  }}>
                    {val}
                  </span>
                </div>
                <div style={{
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-prize {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
