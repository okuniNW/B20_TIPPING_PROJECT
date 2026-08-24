import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState, useEffect } from 'react';

const LANGUAGES = [
  { code: 'EN', label: 'English' },
  { code: 'ID', label: 'Indonesia' },
  { code: 'ZH', label: '中文' },
  { code: 'JA', label: '日本語' },
  { code: 'PT', label: 'Português' },
];

export default function Header({ lang, setLang }) {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const current = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10); }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      {/* Logo */}
      <div className="header-logo">
        <span className="header-logo-name">B20 ROYAL</span>
        <span className="header-logo-tag">Tip. Win. Get remembered forever.</span>
      </div>

      {/* Right */}
      <div className="header-right">
        {/* Language */}
        <div style={{ position: 'relative' }}>
          <button
            className="lang-btn"
            onClick={() => setOpen(o => !o)}
            aria-label="Switch language"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            {current.code}
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {open && (
            <div className="lang-dropdown">
              {LANGUAGES.map(l => (
                <button
                  key={l.code}
                  className={`lang-option${l.code === lang ? ' active' : ''}`}
                  onClick={() => { setLang(l.code); setOpen(false); }}
                >
                  <span>{l.label}</span>
                  {l.code === lang && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Wallet */}
        <ConnectButton
          showBalance={false}
          chainStatus="icon"
          accountStatus="avatar"
        />
      </div>
    </header>
  );
}
