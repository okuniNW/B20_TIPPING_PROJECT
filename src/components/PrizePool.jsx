import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TOTAL_SECONDS = 18 * 3600 + 42 * 60 + 7;

export default function PrizePool() {
  const [seconds, setSeconds]           = useState(TOTAL_SECONDS);
  const [drawInProgress, setDraw]       = useState(false);
  const revealRef                       = useScrollReveal({ stagger: 100 });

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

  const TIPS_NOW   = 19;
  const TIPS_TOTAL = 50;
  const pct        = (TIPS_NOW / TIPS_TOTAL) * 100;

  return (
    <div className="card" ref={revealRef}>
      {/* Label */}
      <div className="section-label" style={{ marginBottom: '16px' }}>
        Current Prize Pool
      </div>

      {/* Amount — kuning tanpa stroke di bg putih */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
        <span className="prize-pulse" style={{
          fontSize: '4rem',
          fontWeight: 800,
          color: '#f59e0b',   /* kuning tanpa stroke di bg putih */
          letterSpacing: '-0.03em',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}>
          0.847
        </span>
        <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)', fontWeight: 400 }}>
          ETH
        </span>
      </div>

      <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
        ≈ $3,210 USD
      </div>

      {/* Progress */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '13px',
          color: 'var(--text-secondary)',
          marginBottom: '8px',
        }}>
          <span><strong style={{ color: 'var(--blue)' }}>{TIPS_NOW}</strong> tips sent</span>
          <span style={{ color: 'var(--text-muted)' }}>{TIPS_TOTAL} total</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px' }}>
          {TIPS_TOTAL - TIPS_NOW} more tips until next draw
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--surface-border)', margin: '16px 0' }} />

      {/* Countdown */}
      {drawInProgress ? (
        <div style={{
          textAlign: 'center',
          padding: '12px',
          background: 'var(--blue-muted)',
          borderRadius: 'var(--r-card-sm)',
          border: '1px solid var(--blue-border)',
        }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--blue)', marginBottom: '4px' }}>
            ⚡ Draw in progress...
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Winner will be announced shortly
          </div>
        </div>
      ) : (
        <div>
          <div className="section-label" style={{ marginBottom: '12px' }}>Next draw in</div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            {[
              { val: h, label: 'Hours' },
              { val: m, label: 'Min' },
              { val: s, label: 'Sec' },
            ].map(({ val, label }, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'var(--blue)',
                  lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums',
                  letterSpacing: '-0.02em',
                }}>
                  {val}
                </div>
                <div style={{
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--text-muted)',
                  marginTop: '4px',
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
