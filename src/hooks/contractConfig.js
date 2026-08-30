// ============================================================
// CONTRACT CONFIG — RoyalBase V2
// Base Mainnet
// ============================================================

export const CONTRACTS = {
  B20ROYAL_V2: {
    address: '0xB0419341d9d09adDE403DbD276C42684C22AA4E8',
    chainId: 8453,
  },
  ROYAL_POINTS: {
    address: '0xF6F9c77116431a650420b08C2c1Bfd05D5b16e47',
    chainId: 8453,
  },
};

export const B20ROYAL_ABI = [
  { name: 'getPrizePool',     type: 'function', stateMutability: 'view',     inputs: [],                                   outputs: [{ type: 'uint256' }] },
  { name: 'getTipperCount',   type: 'function', stateMutability: 'view',     inputs: [],                                   outputs: [{ type: 'uint256' }] },
  { name: 'drawCount',        type: 'function', stateMutability: 'view',     inputs: [],                                   outputs: [{ type: 'uint256' }] },
  { name: 'timeUntilNextDraw',type: 'function', stateMutability: 'view',     inputs: [],                                   outputs: [{ type: 'uint256' }] },
  { name: 'protocolFeeWei',   type: 'function', stateMutability: 'view',     inputs: [],                                   outputs: [{ type: 'uint256' }] },
  { name: 'getETHPrice',      type: 'function', stateMutability: 'view',     inputs: [],                                   outputs: [{ type: 'uint256' }] },
  { name: 'canFreeTipToday',  type: 'function', stateMutability: 'view',     inputs: [{ name: 'u', type: 'address' }],     outputs: [{ type: 'bool'    }] },
  { name: 'freeTip',          type: 'function', stateMutability: 'nonpayable', inputs: [{ name: '_message', type: 'string' }], outputs: [] },
  { name: 'premiumTip',       type: 'function', stateMutability: 'payable',  inputs: [{ name: '_message', type: 'string' }], outputs: [] },
  { name: 'postMessage',      type: 'function', stateMutability: 'payable',  inputs: [{ name: '_message', type: 'string' }], outputs: [] },
  { name: 'setDisplayName',   type: 'function', stateMutability: 'payable',  inputs: [{ name: '_name',    type: 'string' }], outputs: [] },
  { name: 'gmCheckIn',        type: 'function', stateMutability: 'payable',  inputs: [],                                   outputs: [] },
  {
    name: 'getTipperInfo',
    type: 'function', stateMutability: 'view',
    inputs: [{ name: 'addr', type: 'address' }],
    outputs: [
      { name: 'totalTippedAmt',  type: 'uint256' },
      { name: 'tipCount',        type: 'uint256' },
      { name: 'displayName',     type: 'string'  },
      { name: 'tier',            type: 'uint256' },
      { name: 'exists',          type: 'bool'    },
      { name: 'premiumMessages', type: 'uint256' },
      { name: 'canFreeTip',      type: 'bool'    },
    ],
  },
  {
    name: 'getGMStats',
    type: 'function', stateMutability: 'view',
    inputs: [{ name: 'u', type: 'address' }],
    outputs: [
      { name: 'currentStreak',   type: 'uint256' },
      { name: 'longestStreak',   type: 'uint256' },
      { name: 'totalGMs',        type: 'uint256' },
      { name: 'lastGMTime',      type: 'uint256' },
      { name: 'canCheckInToday', type: 'bool'    },
      { name: 'nextMilestone',   type: 'uint256' },
      { name: 'streakBonus',     type: 'uint256' },
    ],
  },
  {
    name: 'getTopTippers',
    type: 'function', stateMutability: 'view',
    inputs: [{ name: 'count', type: 'uint256' }],
    outputs: [
      { name: 'addrs', type: 'address[]' },
      { name: 'infos', type: 'tuple[]', components: [
        { name: 'totalTipped',     type: 'uint256' },
        { name: 'tipCount',        type: 'uint256' },
        { name: 'displayName',     type: 'string'  },
        { name: 'tier',            type: 'uint256' },
        { name: 'exists',          type: 'bool'    },
        { name: 'lastFreeTip',     type: 'uint256' },
        { name: 'premiumMessages', type: 'uint256' },
      ]},
    ],
  },
  {
    name: 'getLatestWallEntries',
    type: 'function', stateMutability: 'view',
    inputs: [{ name: 'count', type: 'uint256' }],
    outputs: [{ type: 'tuple[]', components: [
      { name: 'tipper',      type: 'address' },
      { name: 'displayName', type: 'string'  },
      { name: 'message',     type: 'string'  },
      { name: 'amount',      type: 'uint256' },
      { name: 'timestamp',   type: 'uint256' },
      { name: 'isPremium',   type: 'bool'    },
    ]}],
  },
  {
    name: 'getDrawHistory',
    type: 'function', stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'tuple[]', components: [
      { name: 'winner',     type: 'address' },
      { name: 'winnerName', type: 'string'  },
      { name: 'amount',     type: 'uint256' },
      { name: 'timestamp',  type: 'uint256' },
    ]}],
  },
  {
    name: 'getTopGMStreaks',
    type: 'function', stateMutability: 'view',
    inputs: [{ name: 'count', type: 'uint256' }],
    outputs: [
      { name: 'addrs',   type: 'address[]' },
      { name: 'records', type: 'tuple[]', components: [
        { name: 'currentStreak', type: 'uint256' },
        { name: 'longestStreak', type: 'uint256' },
        { name: 'totalGMs',     type: 'uint256' },
        { name: 'lastGMTime',   type: 'uint256' },
        { name: 'lastGMDay',    type: 'uint256' },
      ]},
    ],
  },
  { name: 'FreeTipSent',   type: 'event', inputs: [{ name: 'tipper', type: 'address', indexed: true }, { name: 'timestamp', type: 'uint256', indexed: false }] },
  { name: 'PremiumTipSent',type: 'event', inputs: [{ name: 'tipper', type: 'address', indexed: true }, { name: 'usdAmount', type: 'uint256', indexed: false }, { name: 'ethAmount', type: 'uint256', indexed: false }, { name: 'messagesGranted', type: 'uint256', indexed: false }, { name: 'timestamp', type: 'uint256', indexed: false }] },
  { name: 'WinnerDrawn',   type: 'event', inputs: [{ name: 'winner', type: 'address', indexed: true }, { name: 'winnerName', type: 'string', indexed: false }, { name: 'amount', type: 'uint256', indexed: false }, { name: 'drawNumber', type: 'uint256', indexed: false }, { name: 'timestamp', type: 'uint256', indexed: false }] },
  { name: 'GMCheckedIn',   type: 'event', inputs: [{ name: 'user', type: 'address', indexed: true }, { name: 'streak', type: 'uint256', indexed: false }, { name: 'totalGMs', type: 'uint256', indexed: false }, { name: 'timestamp', type: 'uint256', indexed: false }] },
];

export const ROYAL_POINTS_ABI = [
  { name: 'getPoints',   type: 'function', stateMutability: 'view',    inputs: [{ name: '_user', type: 'address' }], outputs: [{ type: 'uint256' }] },
  { name: 'claimPoints', type: 'function', stateMutability: 'payable', inputs: [{ name: '_amount', type: 'uint256' }, { name: '_nonce', type: 'bytes32' }, { name: '_sig', type: 'bytes' }], outputs: [] },
];

// Tier names
export const TIER_NAMES = ['Base','BaseBuilder','BaseApp','BaseX420','RoyalBase','B20'];

// Premium tiers
export const PREMIUM_TIERS = [
  { label: '$1',    usd: 100,    messages: 10  },
  { label: '$5',    usd: 500,    messages: 20  },
  { label: '$20',   usd: 2000,   messages: 35  },
  { label: '$50',   usd: 5000,   messages: 50  },
  { label: '$100',  usd: 10000,  messages: 65  },
  { label: '$250',  usd: 25000,  messages: 80  },
  { label: '$500',  usd: 50000,  messages: 90  },
  { label: '$1000', usd: 100000, messages: 100 },
];

// Helpers
export function formatETH(wei, decimals = 4) {
  if (!wei && wei !== 0n) return '0';
  const eth = Number(wei) / 1e18;
  return eth === 0 ? '0' : eth.toFixed(decimals).replace(/\.?0+$/, '');
}

export function shortAddr(addr) {
  if (!addr) return '';
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export function timeAgo(timestamp) {
  if (!timestamp) return '';
  const s = Math.floor(Date.now() / 1000) - Number(timestamp);
  if (s < 60)    return 'just now';
  if (s < 3600)  return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

export function weiToUSD(wei, ethPriceRaw) {
  if (!wei || !ethPriceRaw) return '0.00';
  return ((Number(wei) / 1e18) * (Number(ethPriceRaw) / 1e8)).toFixed(2);
}
