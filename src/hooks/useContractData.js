import { useReadContract, useReadContracts } from 'wagmi';
import { CONTRACTS, B20ROYAL_ABI, ROYAL_POINTS_ABI } from './contractConfig';

const C = { address: CONTRACTS.B20ROYAL_V2.address, abi: B20ROYAL_ABI };

// Prize pool + countdown + stats
export function usePrizePool() {
  const { data, isLoading, refetch } = useReadContracts({
    contracts: [
      { ...C, functionName: 'getPrizePool' },
      { ...C, functionName: 'getTipperCount' },
      { ...C, functionName: 'drawCount' },
      { ...C, functionName: 'timeUntilNextDraw' },
      { ...C, functionName: 'protocolFeeWei' },
      { ...C, functionName: 'getETHPrice' },
    ],
    query: { refetchInterval: 10_000 },
  });

  return {
    prizePoolWei:   data?.[0]?.result ?? 0n,
    tipperCount:    Number(data?.[1]?.result ?? 0n),
    drawCount:      Number(data?.[2]?.result ?? 0n),
    secondsUntil:   Number(data?.[3]?.result ?? 0n),
    protocolFeeWei: data?.[4]?.result ?? 0n,
    ethPriceRaw:    data?.[5]?.result ?? 0n,
    isLoading,
    refetch,
  };
}

// Tipper info including free tip status and premium messages
export function useTipperInfo(address) {
  const { data, isLoading, refetch } = useReadContract({
    ...C,
    functionName: 'getTipperInfo',
    args: [address],
    query: { enabled: !!address, refetchInterval: 15_000 },
  });

  if (!data) return { exists: false, canFreeTip: true, isLoading, refetch };

  return {
    totalTipped:     data[0],
    tipCount:        Number(data[1]),
    displayName:     data[2],
    tier:            Number(data[3]),
    exists:          data[4],
    premiumMessages: Number(data[5]),
    canFreeTip:      data[6],
    isLoading,
    refetch,
  };
}

// Leaderboard top 5
export function useLeaderboard() {
  const { data, isLoading, refetch } = useReadContract({
    ...C,
    functionName: 'getTopTippers',
    args: [5n],
    query: { refetchInterval: 30_000 },
  });

  if (!data) return { tippers: [], isLoading, refetch };

  const [addrs, infos] = data;
  const tippers = addrs.map((addr, i) => ({
    rank:            i + 1,
    address:         addr,
    displayName:     infos[i].displayName || `${addr.slice(0,6)}...${addr.slice(-4)}`,
    totalTipped:     infos[i].totalTipped,
    tipCount:        Number(infos[i].tipCount),
    tier:            Number(infos[i].tier),
    premiumMessages: Number(infos[i].premiumMessages),
  }));

  return { tippers, isLoading, refetch };
}

// Wall entries
export function useWallEntries(count = 10) {
  const { data, isLoading, refetch } = useReadContract({
    ...C,
    functionName: 'getLatestWallEntries',
    args: [BigInt(count)],
    query: { refetchInterval: 15_000 },
  });

  if (!data) return { entries: [], isLoading, refetch };

  const entries = data.map(e => ({
    tipper:      e.tipper,
    displayName: e.displayName || `${e.tipper.slice(0,6)}...`,
    message:     e.message,
    amount:      e.amount,
    timestamp:   e.timestamp,
    isPremium:   e.isPremium,
  }));

  return { entries, isLoading, refetch };
}

// Draw history
export function useDrawHistory() {
  const { data, isLoading } = useReadContract({
    ...C,
    functionName: 'getDrawHistory',
    query: { refetchInterval: 60_000 },
  });

  if (!data) return { history: [], isLoading };

  const history = data.map((r, i) => ({
    rank:       i + 1,
    winner:     r.winner,
    winnerName: r.winnerName || `${r.winner.slice(0,6)}...${r.winner.slice(-4)}`,
    amount:     r.amount,
    timestamp:  r.timestamp,
  }));

  return { history, isLoading };
}

// GM stats for a user
export function useGMStats(address) {
  const { data, isLoading, refetch } = useReadContract({
    ...C,
    functionName: 'getGMStats',
    args: [address],
    query: { enabled: !!address, refetchInterval: 30_000 },
  });

  if (!data) return {
    currentStreak: 0, longestStreak: 0, totalGMs: 0,
    canCheckInToday: true, nextMilestone: 7, streakBonus: 0,
    isLoading, refetch,
  };

  return {
    currentStreak:   Number(data[0]),
    longestStreak:   Number(data[1]),
    totalGMs:        Number(data[2]),
    lastGMTime:      data[3],
    canCheckInToday: data[4],
    nextMilestone:   Number(data[5]),
    streakBonus:     Number(data[6]),
    isLoading,
    refetch,
  };
}

// GM leaderboard
export function useGMLeaderboard() {
  const { data, isLoading } = useReadContract({
    ...C,
    functionName: 'getTopGMStreaks',
    args: [10n],
    query: { refetchInterval: 60_000 },
  });

  if (!data) return { streaks: [], isLoading };

  const [addrs, records] = data;
  const streaks = addrs.map((addr, i) => ({
    address:       addr,
    currentStreak: Number(records[i].currentStreak),
    longestStreak: Number(records[i].longestStreak),
    totalGMs:      Number(records[i].totalGMs),
  }));

  return { streaks, isLoading };
}

// Royal Points
export function useRoyalPoints(address) {
  const { data, isLoading } = useReadContract({
    address: CONTRACTS.ROYAL_POINTS.address,
    abi:     ROYAL_POINTS_ABI,
    functionName: 'getPoints',
    args: [address],
    query: { enabled: !!address, refetchInterval: 30_000 },
  });

  return { points: Number(data ?? 0n), isLoading };
}
