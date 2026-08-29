import { useWallEntries } from '../hooks/useContractData';
import { formatETH, TIER_NAMES, shortAddr, timeAgo } from '../hooks/contractConfig';

const TIER_STYLE = {
  0: { bg: '#f1f5f9', color: '#64748b' },
  1: { bg: '#eff6ff', color: '#0040cc' },
  2: { bg: '#eff6ff', color: '#0052ff' },
  3: { bg: '#f0fdf4', color: '#16a34a' },
  4: { bg: '#fef3c7', color: '#d97706' },
  5: { bg: '#0052ff', color: '#fff'    },
};

// Warna avatar berdasarkan address
function avatarColor(addr) {
  const colors = ['#dbeafe','#dcfce7','#fae8ff','#fef3c7','#ffe4e6','#f0fdf4'];
  const idx = parseInt(addr?.slice(2, 4) || '0', 16) % colors.length;
  return colors[idx];
}

function SkeletonEntry() {
  return (
    <div style={{
      display: 'flex',
      gap: '10px',
      padding: '12px 0',
      borderBottom: '1px solid #f1f5f9',
    }}>
      <div style={{
        width: '34px', height: '34px',
        borderRadius: '50%',
        background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f7 50%, #f1f5f9 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
        flexShrink: 0,
      }} />
      <div style={{ flex: 1 }}>
        <div style={{
          height: '14px',
          width: '40%',
          background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f7 50%, #f1f5f9 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          borderRadius: '4px',
          marginBottom: '8px',
        }} />
        <div style={{
          height: '36px',
          background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f7 50%, #f1f5f9 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          borderRadius: '4px',
        }} />
      </div>
    </div>
  );
}

export default function AppreciationWall() {
  const { entries, isLoading } = useWallEntries(10);

  return (
    <div style={{
      background: '#fff',
      borderRadius: '1.5rem',
      border: '1px solid #e2e8f7',
      overflow: 'hidden',
      boxShadow: '0 2px 16px rgba(0,82,255,0.05)',
      marginBottom: '8px',
    }}>
      {/* Header */}
      <div style={{
        padding: '1rem 1.25rem 0.875rem',
        borderBottom: '1px solid #f1f5f9',
      }}>
        <div style={{ fontSize: '0.925rem', fontWeight: 700, color: '#09090b', marginBottom: '2px' }}>
          Appreciation Wall
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '0.7rem',
          color: '#8b95a8',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
          Stored forever on Base blockchain
        </div>
      </div>

      {/* Entries */}
      <div style={{ padding: '0 1.25rem' }}>
        {isLoading ? (
          <>
            <SkeletonEntry />
            <SkeletonEntry />
            <SkeletonEntry />
          </>
        ) : entries.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '2rem 0',
            fontSize: '0.825rem',
            color: '#8b95a8',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✍️</div>
            No messages yet. Send a tip and leave your mark!
          </div>
        ) : (
          entries.map((entry, i) => {
            const name  = entry.displayName || shortAddr(entry.tipper);
            const bg    = avatarColor(entry.tipper);
            return (
              <div key={i} style={{
                display: 'flex',
                gap: '10px',
                padding: '12px 0',
                borderBottom: i < entries.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}>
                {/* Avatar */}
                <div style={{
                  width: '34px', height: '34px',
                  borderRadius: '50%',
                  background: bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#09090b',
                  flexShrink: 0,
                  marginTop: '2px',
                  border: '1.5px solid #e2e8f7',
                }}>
                  {name.slice(0, 2).toUpperCase()}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '5px',
                  }}>
                    <span style={{ fontSize: '0.825rem', fontWeight: 700, color: '#09090b' }}>
                      {name}
                    </span>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: '#8b95a8',
                    }}>
                      · {formatETH(entry.amount)} ETH
                    </span>
                  </div>

                  <div style={{
                    fontSize: '0.825rem',
                    color: '#52525b',
                    lineHeight: 1.6,
                    marginBottom: '6px',
                    wordBreak: 'break-word',
                  }}>
                    "{entry.message}"
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.65rem',
                    color: '#b8c2d4',
                  }}>
                    <span>⛓</span>
                    <span>On Base</span>
                    <span>·</span>
                    <span>{timeAgo(entry.timestamp)}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer */}
      {entries.length > 0 && (
        <div style={{
          padding: '0.75rem 1.25rem',
          borderTop: '1px solid #f1f5f9',
        }}>
          <div style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            color: '#8b95a8',
          }}>
            Showing latest {entries.length} messages · All messages permanent on Base
          </div>
        </div>
      )}

      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
