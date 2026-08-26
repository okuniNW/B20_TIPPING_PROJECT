// App page — semua komponen app yang sudah ada sebelumnya
// Import dari komponen yang sudah dibuat di Part sebelumnya
import '../index.css';
import { useState, useCallback } from 'react';
import PageLoader       from '../components/PageLoader';
import WinnerBanner     from '../components/WinnerBanner';
import Header           from '../components/Header';
import RoyalTicker      from '../components/RoyalTicker';
import PrizePool        from '../components/PrizePool';
import TipForm          from '../components/TipForm';
import Leaderboard      from '../components/Leaderboard';
import AppreciationWall from '../components/AppreciationWall';
import Footer           from '../components/Footer';
import { useAdaptiveGrid } from '../hooks/useAdaptiveGrid';
import { useCursorGlow }   from '../hooks/useCursorGlow';

export default function AppPage() {
  const [lang, setLang]     = useState('EN');
  const [loaded, setLoaded] = useState(false);

  useAdaptiveGrid();
  useCursorGlow();

  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <PageLoader onDone={handleDone} />}
      <WinnerBanner />
      <Header lang={lang} setLang={setLang} />
      <RoyalTicker />
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
