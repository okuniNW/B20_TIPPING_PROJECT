import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV = [
  { label: 'About',        href: '#about' },
  { label: 'How it Works', href: '#how' },
  { label: 'Tiers',        href: '#tiers' },
  { label: 'Roadmap',      href: '#roadmap' },
];

export default function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #e2e8f7' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div className="shell" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.25rem',
        gap: '1rem',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none',
        }}>
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="#0052ff"/>
            <path d="M18 6l3 7h7l-5.5 4.5 2 7.5L18 21l-6.5 4 2-7.5L8 13h7z" fill="#fbbf24"/>
            <circle cx="18" cy="18" r="3.5" fill="#fff" opacity="0.9"/>
          </svg>
          <span style={{
            fontSize: '1rem',
            fontWeight: 800,
            color: '#0052ff',
            letterSpacing: '0.06em',
          }}>
            ROYALBASE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }} className="desktop-nav">
          {NAV.map(item => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#52525b',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#0052ff'}
              onMouseLeave={e => e.target.style.color = '#52525b'}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/app" className="btn-blue" style={{
          fontSize: '0.825rem',
          padding: '0.6rem 1.25rem',
        }}>
          Launch App →
        </Link>
      </div>

      {/* Mobile nav overlay */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
