import { useState, useCallback } from 'react';
import { useAdaptiveGrid } from '../hooks/useAdaptiveGrid';
import { useCursorGlow }   from '../hooks/useCursorGlow';
import PageLoader    from '../components/PageLoader';
import AppHeader     from '../components/AppHeader';
import BottomTabBar  from '../components/BottomTabBar';
import PlayTab       from '../components/tabs/PlayTab';
import WalletTab     from '../components/tabs/WalletTab';
import RoyalTab      from '../components/tabs/RoyalTab';
import '../index.css';

const TOP_OFFSET    = 122;
const BOTTOM_OFFSET = 64;

export default function AppPage() {
  const [lang, setLang]           = useState('EN');
  const [loaded, setLoaded]       = useState(false);
  const [activeTab, setActiveTab] = useState('play');

  useAdaptiveGrid();
  useCursorGlow();

  const handleDone = useCallback(() => setLoaded(true), []);

  const renderTab = () => {
    switch (activeTab) {
      case 'play':   return <PlayTab />;
      case 'wallet': return <WalletTab />;
      case 'royal':  return <RoyalTab />;
      default:       return <PlayTab />;
    }
  };

  return (
    <>
      {!loaded && <PageLoader onDone={handleDone} />}
      <AppHeader lang={lang} setLang={setLang} />
      <main style={{
        position: 'fixed',
        top: `${TOP_OFFSET}px`,
        left: 0, right: 0,
        bottom: `${BOTTOM_OFFSET}px`,
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
        background: '#f5f8ff',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}>
        <div style={{
          maxWidth: '480px',
          margin: '0 auto',
          padding: '16px 16px 80px',
        }}>
          {renderTab()}
        </div>
      </main>
      <BottomTabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
