import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LANGUAGES = [
  { code: 'EN', label: 'English' },
  { code: 'ID', label: 'Indonesia' },
  { code: 'ZH', label: '中文' },
  { code: 'JA', label: '日本語' },
  { code: 'PT', label: 'Português' },
];

export default function AppHeader({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  return (
    <>
      {/* Winner Banner */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: '36px',
        background: '#0052ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        fontSize: '12px',
        color: '#fff',
        fontWeight: 400,
      }}>
        <span>🎉</span>
        <span style={{ color: 'rgba(255,255,255,0.8)' }}>Last winner:</span>
        <span style={{ fontWeight: 700 }}>0xMike</span>
        <span style={{ color: 'rgba(255,255,255,0.8)' }}>won</span>
        <span style={{
          fontWeight: 800,
          color: '#fbbf24',
          WebkitTextStroke: '0.8px white',
        }}>
          0.847 ETH
        </span>
        <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 2px' }}>·</span>
        <span style={{ color: 'rgba(255,255,255,0.6)' }}>3h ago</span>
      </div>

      {/* Main Header */}
      <header style={{
        position: 'fixed',
        top: '36px', left: 0, right: 0,
        zIndex: 90,
        height: '52px',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        gap: '8px',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          textDecoration: 'none',
          flexShrink: 0,
        }}>
          <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="#0052ff"/>
            <path d="M18 6l3 7h7l-5.5 4.5 2 7.5L18 21l-6.5 4 2-7.5L8 13h7z"
              fill="#fbbf24"/>
            <circle cx="18" cy="18" r="3.5" fill="#fff" opacity="0.9"/>
          </svg>
          <span style={{
            fontSize: '13px',
            fontWeight: 800,
            color: '#0052ff',
            letterSpacing: '0.06em',
          }}>
            ROYALBASE
          </span>
        </Link>

        {/* Right side */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexShrink: 0,
        }}>
          {/* Language */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setOpen(o => !o)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '5px 8px',
                borderRadius: '8px',
                border: '1px solid #e2e8f7',
                background: 'transparent',
                color: '#52525b',
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {current.code}
            </button>

            {open && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                right: 0,
                background: '#fff',
                border: '1px solid #e2e8f7',
                borderRadius: '12px',
                overflow: 'hidden',
                minWidth: '130px',
                boxShadow: '0 4px 24px rgba(0,82,255,0.1)',
                zIndex: 200,
              }}>
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setOpen(false); }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 14px',
                      fontSize: '13px',
                      fontFamily: 'inherit',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      background: l.code === lang ? '#eff6ff' : 'transparent',
                      color: l.code === lang ? '#0052ff' : '#52525b',
                      transition: 'background 0.1s',
                    }}
                    onMouseEnter={e => {
                      if (l.code !== lang) e.currentTarget.style.background = '#f5f8ff';
                    }}
                    onMouseLeave={e => {
                      if (l.code !== lang) e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {l.label}
                    {l.code === lang && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                        stroke="#0052ff" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Connect Wallet */}
          <ConnectButton
            showBalance={false}
            chainStatus="none"
            accountStatus="avatar"
          />
        </div>
      </header>

      {/* Royal Ticker */}
      <RoyalTicker />
    </>
  );
}

// Ticker inline agar tidak perlu import terpisah
const TICKER_DATA = [
  { name: 'AcmeCorp',       tier: 'B20',         msg: 'The future is onchain.' },
  { name: '0xMike',         tier: 'RoyalBase',   msg: 'LFG! B20 Royal is real.' },
  { name: 'StellaVentures', tier: 'RoyalBase',   msg: 'Proud to support this.' },
  { name: 'CryptoNinja',    tier: 'BaseApp',     msg: 'Tipping is believing.' },
  { name: 'BaseMaxi',       tier: 'BaseBuilder', msg: 'Built on Base, built to last.' },
  { name: 'Web3Dev',        tier: 'Base',        msg: 'This is what onchain looks like.' },
];

const TIER_COLORS = {
  'B20':         { bg: '#0052ff', color: '#fff' },
  'RoyalBase':   { bg: '#fef3c7', color: '#d97706' },
  'BaseApp':     { bg: '#eff6ff', color: '#0052ff' },
  'BaseBuilder': { bg: '#eff6ff', color: '#0040cc' },
  'Base':        { bg: '#f1f5f9', color: '#64748b' },
};

const doubled = [...TICKER_DATA, ...TICKER_DATA];

function RoyalTicker() {
  return (
    <div style={{
      position: 'fixed',
      top: '88px', left: 0, right: 0,
      zIndex: 85,
      height: '34px',
      background: '#f5f8ff',
      borderBottom: '1px solid #e2e8f7',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: 'max-content',
        animation: 'marquee 50s linear infinite',
        willChange: 'transform',
      }}
      onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
      onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
      >
        {doubled.map((item, i) => {
          const tc = TIER_COLORS[item.tier] || TIER_COLORS['Base'];
          return (
            <div key={i} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '0 24px',
              whiteSpace: 'nowrap',
              fontSize: '12px',
              color: '#52525b',
            }}>
              <span style={{
                fontSize: '10px',
                fontWeight: 700,
                padding: '1px 7px',
                borderRadius: '9999px',
                background: tc.bg,
                color: tc.color,
              }}>
                {item.tier}
              </span>
              <span style={{ color: '#09090b', fontWeight: 600 }}>{item.name}</span>
              <span style={{ color: '#cbd5e1' }}>—</span>
              <span style={{ color: '#8b95a8', fontStyle: 'italic' }}>"{item.msg}"</span>
              <span style={{ color: '#e2e8f7', margin: '0 4px' }}>·</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
