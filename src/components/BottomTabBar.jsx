import { useState } from 'react';

const TABS = [
  {
    id: 'play',
    label: 'Play',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke={active ? '#0052ff' : '#8b95a8'} strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
  },
  {
    id: 'wallet',
    label: 'Wallet',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke={active ? '#0052ff' : '#8b95a8'} strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M16 12h.01"/>
        <path d="M2 10h20"/>
      </svg>
    ),
  },
  {
    id: 'royal',
    label: 'Royal',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke={active ? '#0052ff' : '#8b95a8'} strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 19h20v2H2v-2zM2 7l5 5 5-7 5 7 5-5v10H2V7z"/>
      </svg>
    ),
  },
];

export default function BottomTabBar({ activeTab, setActiveTab }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0, left: 0, right: 0,
      zIndex: 90,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderTop: '1px solid #e2e8f7',
      display: 'flex',
      alignItems: 'stretch',
      height: '64px',
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}>
      {TABS.map(tab => {
        const active = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.2s ease',
            }}
          >
            {/* Active indicator */}
            {active && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '32px',
                height: '3px',
                background: '#0052ff',
                borderRadius: '0 0 4px 4px',
              }} />
            )}

            {/* Icon */}
            <div style={{
              transform: active ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.2s cubic-bezier(.22,1,.36,1)',
            }}>
              {tab.icon(active)}
            </div>

            {/* Label */}
            <span style={{
              fontSize: '10px',
              fontWeight: active ? 700 : 500,
              color: active ? '#0052ff' : '#8b95a8',
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
            }}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
