// ============================================================
// CONTRACT CONFIG — RoyalBase
// Update addresses setelah deploy ke mainnet
// ============================================================

export const CONTRACTS = {
  B20ROYAL: {
    address: '0xF4DA2466B6012BdB6cBDd66eFa8696C436c9C6Cc',
    chainId: 84532, // Base Sepolia
  },
  ROYAL_POINTS: {
    address: '0xF6F9c77116431a650420b08C2c1Bfd05D5b16e47',
    chainId: 84532,
  },
};

export const B20ROYAL_ABI = [
  // Read functions
  {
    name: 'getPrizePool',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    name: 'getTipperCount',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    name: 'drawCount',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    name: 'timeUntilNextDraw',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    name: 'getTipperInfo',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: '_addr', type: 'address' }],
    outputs: [
      { name: 'totalTippedAmt', type: 'uint256' },
      { name: 'tipCount',       type: 'uint256' },
      { name: 'displayName',    type: 'string'  },
      { name: 'tier',           type: 'uint256' },
      { name: 'exists',         type: 'bool'    },
    ],
  },
  {
    name: 'getTopTippers',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: '_count', type: 'uint256' }],
    outputs: [
      { name: 'addrs', type: 'address[]' },
      { name: 'infos', type: 'tuple[]', components: [
        { name: 'totalTipped',  type: 'uint256' },
        { name: 'tipCount',     type: 'uint256' },
        { name: 'displayName',  type: 'string'  },
        { name: 'tier',         type: 'uint256' },
        { name: 'exists',       type: 'bool'    },
      ]},
    ],
  },
  {
    name: 'getLatestWallEntries',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: '_count', type: 'uint256' }],
    outputs: [{
      type: 'tuple[]',
      components: [
        { name: 'tipper',      type: 'address' },
        { name: 'displayName', type: 'string'  },
        { name: 'message',     type: 'string'  },
        { name: 'amount',      type: 'uint256' },
        { name: 'timestamp',   type: 'uint256' },
      ],
    }],
  },
  {
    name: 'getDrawHistory',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{
      type: 'tuple[]',
      components: [
        { name: 'winner',     type: 'address' },
        { name: 'winnerName', type: 'string'  },
        { name: 'amount',     type: 'uint256' },
        { name: 'timestamp',  type: 'uint256' },
      ],
    }],
  },
  // Write functions
  {
    name: 'tip',
    type: 'function',
    stateMutability: 'payable',
    inputs: [{ name: '_message', type: 'string' }],
    outputs: [],
  },
  {
    name: 'setDisplayName',
    type: 'function',
    stateMutability: 'payable',
    inputs: [{ name: '_name', type: 'string' }],
    outputs: [],
  },
  // Events
  {
    name: 'TipReceived',
    type: 'event',
    inputs: [
      { name: 'tipper',      type: 'address', indexed: true },
      { name: 'displayName', type: 'string',  indexed: false },
      { name: 'amount',      type: 'uint256', indexed: false },
      { name: 'poolAmount',  type: 'uint256', indexed: false },
      { name: 'message',     type: 'string',  indexed: false },
      { name: 'timestamp',   type: 'uint256', indexed: false },
    ],
  },
  {
    name: 'WinnerDrawn',
    type: 'event',
    inputs: [
      { name: 'winner',     type: 'address', indexed: true  },
      { name: 'winnerName', type: 'string',  indexed: false },
      { name: 'amount',     type: 'uint256', indexed: false },
      { name: 'drawNumber', type: 'uint256', indexed: false },
      { name: 'timestamp',  type: 'uint256', indexed: false },
    ],
  },
];

export const ROYAL_POINTS_ABI = [
  {
    name: 'getPoints',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: '_user', type: 'address' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    name: 'claimPoints',
    type: 'function',
    stateMutability: 'payable',
    inputs: [
      { name: '_amount', type: 'uint256' },
      { name: '_nonce',  type: 'bytes32' },
      { name: '_sig',    type: 'bytes'   },
    ],
    outputs: [],
  },
];

// Tier names sesuai sistem RoyalBase
export const TIER_NAMES = [
  'Base',
  'BaseBuilder',
  'BaseApp',
  'BaseX420',
  'RoyalBase',
  'B20',
];

// Format wei ke ETH string
export function formatETH(wei, decimals = 4) {
  if (!wei) return '0';
  const eth = Number(wei) / 1e18;
  return eth.toFixed(decimals).replace(/\.?0+$/, '');
}

// Format address pendek
export function shortAddr(addr) {
  if (!addr) return '';
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

// Format timestamp ke waktu relatif
export function timeAgo(timestamp) {
  const seconds = Math.floor(Date.now() / 1000) - Number(timestamp);
  if (seconds < 60)   return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}
