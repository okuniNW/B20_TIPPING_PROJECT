import { useState, useCallback } from 'react';
import PageLoader       from './components/PageLoader';
import WinnerBanner     from './components/WinnerBanner';
import Header           from './components/Header';
import RoyalTicker      from './components/RoyalTicker';
import PrizePool        from './components/PrizePool';
import TipForm          from './components/TipForm';
import Leaderboard      from './components/Leaderboard';
import AppreciationWall from './components/AppreciationWall';
import Footer           from './components/Footer';
import { useAdaptiveGrid } from './hooks/useAdaptiveGrid';
import { useCursorGlow }   from './hooks/useCursorGlow';

export default function App() {
  const [lang, setLang]         = useState('EN');
  const [loaded, setLoaded]     = useState(false);

  useAdaptiveGrid();
  useCursorGlow();

  const handleLoaderDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      {/* Page Loader */}
      {!loaded && <PageLoader onDone={handleLoaderDone} />}

      {/* Fixed top bars */}
      <WinnerBanner />
      <Header lang={lang} setLang={setLang} />
      <RoyalTicker />

      {/* Main content */}
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '24px 16px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.6s cubic-bezier(.22,1,.36,1), transform 0.6s cubic-bezier(.22,1,.36,1)',
      }}>
        <PrizePool />
        <TipForm />
        <Leaderboard />
        <AppreciationWall />
      </main>

      <Footer />
    </>
  );
}
