import { useState, useEffect } from 'react';

const FILL_MS = 1600;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function PageLoader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting]   = useState(false);

  useEffect(() => {
    const start = performance.now();

    function tick(now) {
      const t   = Math.min((now - start) / FILL_MS, 1);
      const val = Math.round(easeInOutCubic(t) * 100);
      setProgress(val);

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        // Start exit animation
        setTimeout(() => {
          setExiting(true);
          setTimeout(onDone, 700);
        }, 200);
      }
    }

    requestAnimationFrame(tick);
  }, [onDone]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        borderRadius: '0 0 2rem 2rem',
        transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: exiting
          ? 'transform 0.7s cubic-bezier(.22,1,.36,1)'
          : 'none',
      }}
    >
      {/* Brand */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: exiting ? 0 : 1,
        transform: exiting ? 'translateY(-12px)' : 'translateY(0)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#0052ff',
          letterSpacing: '-0.02em',
        }}>
          {/* Crown icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#0052ff">
            <path d="M2 19h20v2H2v-2zM2 7l5 5 5-7 5 7 5-5v10H2V7z"/>
          </svg>
          B20 ROYAL
        </div>
        <div style={{
          fontSize: '0.8rem',
          color: '#8b95a8',
          textAlign: 'center',
        }}>
          Tip. Win. Get remembered forever.
        </div>
      </div>

      {/* Progress */}
      <div style={{
        width: 'min(22rem, 72vw)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.3s ease',
      }}>
        <div style={{
          height: '2px',
          background: '#e2e8f7',
          borderRadius: '9999px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: '#0052ff',
            borderRadius: '9999px',
            transition: 'width 0.08s ease-out',
          }} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.7rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: '#8b95a8',
        }}>
          <span>Loading</span>
          <span style={{
            color: '#f59e0b',
            fontVariantNumeric: 'tabular-nums',
            fontSize: '0.85rem',
          }}>
            {String(progress).padStart(3, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}
