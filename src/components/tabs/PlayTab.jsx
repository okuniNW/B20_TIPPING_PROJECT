import PrizePool       from '../PrizePool';
import TipForm         from '../TipForm';
import Leaderboard     from '../Leaderboard';
import AppreciationWall from '../AppreciationWall';

export default function PlayTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <PrizePool />
      <TipForm />
      <Leaderboard />
      <AppreciationWall />
    </div>
  );
}
