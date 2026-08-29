import { useAccount }      from 'wagmi';
import { useTipperInfo }   from '../hooks/useContractData';
import { useRoyalPoints }  from '../hooks/useContractData';
import { useClaimPoints }  from '../hooks/useContractWrite';
import { formatETH, TIER_NAMES } from '../hooks/contractConfig';

const TIER_STYLE = {
  0: { bg: '#f1f5f9', color: '#64748b', icon: '🔵' },
  1: { bg: '#eff6ff', color: '#0040cc', icon: '🔨' },
  2: { bg: '#eff6ff', color: '#0052ff', icon: '⚡' },
  3: { bg: '#f0fdf4', color: '#16a34a', icon: '🌿' },
  4: { bg: '#fef3c7', color: '#d97706', icon: '👑' },
  5: { bg: '#0052ff', color: '#fff',    icon: '💎' },
};

const NEXT_TIER_THRESHOLDS = [
  0.01,  // Base → BaseBuilder
  0.05,  // BaseBuilder → BaseApp
  0.1,   // BaseApp → BaseX420
  0.5,   // BaseX420 → RoyalBase
  20,    // RoyalBase → B20
];

export default function RoyalTab() {
  const { address, isConnected } = useAccount();
  const { totalTipped, tipCount, displayName, tier, exists, isLoading } =
    useTipperInfo(address);
  const { points }       = useRoyalPoints(address);
  const { claimPoints, isLoading: claiming, isSuccess: claimed } =
    useClaimPoints();

  if (!isConnected) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        minHeight: '60vh',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '3rem' }}>👑</div>
        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#09090b' }}>
          Connect to see your Royal stats
        </div>
        <div style={{ fontSize: '0.875rem', color: '#8b95a8', maxWidth: '28ch', lineHeight: 1.6 }}>
          Connect your wallet to see your tier, Royal Points, and activity history.
        </div>
      </div>
    );
  }

  const tierStyle    = TIER_STYLE[tier] || TIER_STYLE[0];
  const tierName     = TIER_NAMES[tier] || 'Base';
  const nextThresh   = NEXT_TIER_THRESHOLDS[tier];
  const tippedETH    = Number(totalTipped || 0n) / 1e18;
  const progress     = nextThresh
    ? Math.min((tippedETH / nextThresh) * 100, 100)
    : 100;
  const nextTierName = TIER_NAMES[tier + 1] || null;
  const remaining    = nextThresh ? Math.max(nextThresh - tippedETH, 0).toFixed(4) : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

      {/* Points card — bg biru, kuning stroke putih */}
      <div style={{
        background: '#0052ff',
        borderRadius: '1.5rem',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-3rem', right: '-3rem',
          width: '10rem', height: '10rem',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
        }} />

        <div style={{
          fontSize: '0.65rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '0.5rem',
        }}>
          Your Royal Points
        </div>

        <div style={{
          fontSize: '3rem',
          fontWeight: 800,
          color: '#fbbf24',
          WebkitTextStroke: '1px white',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          marginBottom: '0.5rem',
        }}>
          {isLoading ? '...' : points.toLocaleString()}
        </div>

        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>
          {tipCount ? `${tipCount} tips sent · ` : ''}
          {exists
            ? `Total: ${tippedETH.toFixed(4)} ETH`
            : 'No tips yet — start tipping!'}
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.375rem',
          marginTop: '1rem',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '9999px',
          padding: '0.3rem 0.75rem',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.8)',
          fontWeight: 600,
        }}>
          <div style={{
            width: '6px', height: '6px',
            background: '#22c55e',
            borderRadius: '50%',
          }} />
          Season 1 — Live
        </div>
      </div>

      {/* Tier progress card */}
      <div style={{
        background: '#fff',
        borderRadius: '1.5rem',
        padding: '1.25rem',
        border: '1px solid #e2e8f7',
      }}>
        <div style={{
          fontSize: '0.65rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#8b95a8',
          marginBottom: '1rem',
        }}>
          Current Tier
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1rem',
        }}>
          <div style={{
            width: '44px', height: '44px',
            background: tierStyle.bg,
            borderRadius: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
          }}>
            {tierStyle.icon}
          </div>
          <div>
            <div style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: tierStyle.color,
            }}>
              {tierName}
            </div>
            <div style={{ fontSize: '0.775rem', color: '#8b95a8' }}>
              {formatETH(totalTipped || 0n)} ETH total tipped
            </div>
          </div>
        </div>

        {/* Progress to next tier */}
        {nextTierName && (
          <>
            <div style={{
              fontSize: '0.75rem',
              color: '#8b95a8',
              marginBottom: '6px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <span>Progress to {nextTierName}</span>
              <span style={{ color: '#0052ff', fontWeight: 600 }}>
                {tippedETH.toFixed(4)} / {nextThresh} ETH
              </span>
            </div>
            <div style={{
              height: '6px',
              background: '#f1f5f9',
              borderRadius: '9999px',
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #0052ff, #3c8aff)',
                borderRadius: '9999px',
                transition: 'width 0.8s ease',
              }} />
            </div>
            <div style={{
              fontSize: '0.7rem',
              color: '#8b95a8',
              marginTop: '4px',
            }}>
              {remaining} ETH more to unlock {nextTierName}
            </div>
          </>
        )}

        {!nextTierName && (
          <div style={{
            fontSize: '0.825rem',
            fontWeight: 700,
            color: '#0052ff',
            textAlign: 'center',
            padding: '0.5rem',
          }}>
            💎 Maximum tier achieved — You are a B20 Royal!
          </div>
        )}
      </div>

      {/* Hint card */}
      <div style={{
        background: 'rgba(251,191,36,0.08)',
        border: '1px solid rgba(251,191,36,0.25)',
        borderRadius: '1.25rem',
        padding: '1rem 1.25rem',
        display: 'flex',
        gap: '0.75rem',
      }}>
        <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>👀</span>
        <div>
          <div style={{
            fontSize: '0.825rem',
            fontWeight: 700,
            color: '#d97706',
            marginBottom: '0.25rem',
          }}>
            Points may matter.
          </div>
          <div style={{
            fontSize: '0.775rem',
            color: '#92400e',
            lineHeight: 1.6,
          }}>
            The protocol always remembers who showed up early. Keep earning.
          </div>
        </div>
      </div>

      {/* Claim button */}
      {points > 0 && (
        <button
          onClick={() => claimPoints(points, '0x0000000000000000000000000000000000000000000000000000000000000001', '0x00')}
          disabled={claiming}
          style={{
            width: '100%',
            padding: '13px',
            background: claiming ? '#94a3b8' : '#0052ff',
            color: '#fff',
            border: 'none',
            borderRadius: '0.875rem',
            fontSize: '0.925rem',
            fontWeight: 700,
            cursor: claiming ? 'not-allowed' : 'pointer',
            fontFamily: 'inherit',
            boxShadow: claiming ? 'none' : '0 4px 16px rgba(0,82,255,0.25)',
          }}
        >
          {claimed ? '✅ Points Claimed!' : claiming ? '⏳ Claiming...' : `Claim ${points.toLocaleString()} Points On-Chain →`}
        </button>
      )}
    </div>
  );
}
