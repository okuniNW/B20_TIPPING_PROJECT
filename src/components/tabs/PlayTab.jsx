import PrizePool        from '../PrizePool';
import StatsStrip       from '../StatsStrip';
import TipForm          from '../TipForm';
import Leaderboard      from '../Leaderboard';
import AppreciationWall from '../AppreciationWall';

export default function PlayTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <PrizePool />
      <StatsStrip />
      <TipForm />
      <Leaderboard />
      <AppreciationWall />
    </div>
  );
}
