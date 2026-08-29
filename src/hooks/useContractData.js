import { useReadContract, useReadContracts } from 'wagmi';
import { CONTRACTS, B20ROYAL_ABI, ROYAL_POINTS_ABI } from './contractConfig';

const CONTRACT = {
  address: CONTRACTS.B20ROYAL.address,
  abi: B20ROYAL_ABI,
};

// ============================================================
// HOOK — Baca semua data prize pool
// ============================================================
export function usePrizePool() {
  const { data, isLoading, refetch } = useReadContracts({
    contracts: [
      { ...CONTRACT, functionName: 'getPrizePool' },
      { ...CONTRACT, functionName: 'getTipperCount' },
      { ...CONTRACT, functionName: 'drawCount' },
      { ...CONTRACT, functionName: 'timeUntilNextDraw' },
    ],
    // Auto-refresh setiap 10 detik
    query: { refetchInterval: 10_000 },
  });

  const prizePoolWei   = data?.[0]?.result ?? 0n;
  const tipperCount    = data?.[1]?.result ?? 0n;
  const drawCount      = data?.[2]?.result ?? 0n;
  const secondsUntil   = data?.[3]?.result ?? 0n;

  return {
    prizePoolWei,
    tipperCount:  Number(tipperCount),
    drawCount:    Number(drawCount),
    secondsUntil: Number(secondsUntil),
    isLoading,
    refetch,
  };
}

// ============================================================
// HOOK — Baca info tipper berdasarkan address
// ============================================================
export function useTipperInfo(address) {
  const { data, isLoading } = useReadContract({
    ...CONTRACT,
    functionName: 'getTipperInfo',
    args: [address],
    query: {
      enabled: !!address,
      refetchInterval: 15_000,
    },
  });

  if (!data) return { exists: false, isLoading };

  return {
    totalTipped:  data[0],
    tipCount:     Number(data[1]),
    displayName:  data[2],
    tier:         Number(data[3]),
    exists:       data[4],
    isLoading,
  };
}

// ============================================================
// HOOK — Baca top 5 tippers untuk leaderboard
// ============================================================
export function useLeaderboard() {
  const { data, isLoading, refetch } = useReadContract({
    ...CONTRACT,
    functionName: 'getTopTippers',
    args: [5n],
    query: { refetchInterval: 30_000 },
  });

  if (!data) return { tippers: [], isLoading };

  const [addrs, infos] = data;

  const tippers = addrs.map((addr, i) => ({
    rank:        i + 1,
    address:     addr,
    displayName: infos[i].displayName || addr.slice(0, 6) + '...' + addr.slice(-4),
    totalTipped: infos[i].totalTipped,
    tipCount:    Number(infos[i].tipCount),
    tier:        Number(infos[i].tier),
  }));

  return { tippers, isLoading, refetch };
}

// ============================================================
// HOOK — Baca latest wall entries
// ============================================================
export function useWallEntries(count = 10) {
  const { data, isLoading, refetch } = useReadContract({
    ...CONTRACT,
    functionName: 'getLatestWallEntries',
    args: [BigInt(count)],
    query: { refetchInterval: 15_000 },
  });

  if (!data) return { entries: [], isLoading };

  const entries = data.map(entry => ({
    tipper:      entry.tipper,
    displayName: entry.displayName || entry.tipper.slice(0, 6) + '...',
    message:     entry.message,
    amount:      entry.amount,
    timestamp:   entry.timestamp,
  }));

  return { entries, isLoading, refetch };
}

// ============================================================
// HOOK — Baca draw history
// ============================================================
export function useDrawHistory() {
  const { data, isLoading } = useReadContract({
    ...CONTRACT,
    functionName: 'getDrawHistory',
    query: { refetchInterval: 60_000 },
  });

  if (!data) return { history: [], isLoading };

  const history = data.map((record, i) => ({
    rank:       i + 1,
    winner:     record.winner,
    winnerName: record.winnerName || record.winner.slice(0, 6) + '...',
    amount:     record.amount,
    timestamp:  record.timestamp,
  }));

  return { history, isLoading };
}

// ============================================================
// HOOK — Baca Royal Points
// ============================================================
export function useRoyalPoints(address) {
  const { data, isLoading } = useReadContract({
    address: CONTRACTS.ROYAL_POINTS.address,
    abi:     ROYAL_POINTS_ABI,
    functionName: 'getPoints',
    args:    [address],
    query: {
      enabled: !!address,
      refetchInterval: 30_000,
    },
  });

  return {
    points:   Number(data ?? 0n),
    isLoading,
  };
}
