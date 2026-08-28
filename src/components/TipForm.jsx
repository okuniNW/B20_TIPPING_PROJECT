import { useState } from 'react';
import { useAccount } from 'wagmi';

const AMOUNTS = ['0.001', '0.005', '0.01', 'Custom'];
const MAX_CHARS = 280;

export default function TipForm() {
  const { isConnected } = useAccount();
  const [selected, setSelected] = useState('0.005');
  const [custom, setCustom]     = useState('');
  const [message, setMessage]   = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const charsLeft = MAX_CHARS - message.length;
  const isCustom  = selected === 'Custom';

  async function handleSubmit() {
    if (!isConnected) {
      setError('Connect your wallet first.');
      return;
    }
    if (isCustom && (!custom || isNaN(custom) || Number(custom) <= 0)) {
      setError('Enter a valid ETH amount.');
      return;
    }
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    alert('Smart contract coming soon!');
  }

  return (
    <div style={{
      background: '#fff',
      borderRadius: '1.5rem',
      padding: '1.25rem',
      border: '1px solid #e2e8f7',
      boxShadow: '0 2px 16px rgba(0,82,255,0.05)',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{
          fontSize: '1rem',
          fontWeight: 700,
          color: '#09090b',
          marginBottom: '2px',
        }}>
          Send a Tip
        </div>
        <div style={{ fontSize: '0.775rem', color: '#8b95a8' }}>
          Every tip = one entry into the daily draw
        </div>
      </div>

      {/* Amount grid */}
      <div style={{
        fontSize: '0.65rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: '#8b95a8',
        marginBottom: '8px',
      }}>
        Choose amount
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '7px',
        marginBottom: '14px',
      }}>
        {AMOUNTS.map(amt => (
          <button
            key={amt}
            onClick={() => setSelected(amt)}
            style={{
              padding: '9px 12px',
              borderRadius: '0.75rem',
              border: selected === amt
                ? '1.5px solid #0052ff'
                : '1.5px solid #e2e8f7',
              background: selected === amt ? '#eff6ff' : '#f5f8ff',
              color: selected === amt ? '#0052ff' : '#52525b',
              fontSize: '0.825rem',
              fontWeight: selected === amt ? 700 : 500,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.15s ease',
            }}
          >
            {amt === 'Custom' ? 'Custom' : `${amt} ETH`}
          </button>
        ))}
      </div>

      {isCustom && (
        <input
          type="number"
          step="0.001"
          min="0.001"
          placeholder="Enter ETH amount"
          value={custom}
          onChange={e => setCustom(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: '0.75rem',
            border: '1.5px solid #e2e8f7',
            background: '#f5f8ff',
            color: '#09090b',
            fontSize: '0.875rem',
            fontFamily: 'inherit',
            marginBottom: '14px',
            outline: 'none',
          }}
        />
      )}

      {/* Message */}
      <div style={{
        fontSize: '0.65rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: '#8b95a8',
        marginBottom: '8px',
      }}>
        Wall message{' '}
        <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
          (optional)
        </span>
      </div>
      <div style={{ position: 'relative', marginBottom: '12px' }}>
        <textarea
          rows={3}
          maxLength={MAX_CHARS}
          placeholder="Leave your mark on the wall forever..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: '0.75rem',
            border: '1.5px solid #e2e8f7',
            background: '#f5f8ff',
            color: '#09090b',
            fontSize: '0.875rem',
            fontFamily: 'inherit',
            resize: 'none',
            outline: 'none',
            lineHeight: 1.6,
            transition: 'border-color 0.15s',
          }}
          onFocus={e => e.target.style.borderColor = '#0052ff'}
          onBlur={e => e.target.style.borderColor = '#e2e8f7'}
        />
        <span style={{
          position: 'absolute',
          bottom: '8px',
          right: '10px',
          fontSize: '10px',
          color: charsLeft < 40 ? '#ef4444' : '#cbd5e1',
          fontVariantNumeric: 'tabular-nums',
        }}>
          {charsLeft}
        </span>
      </div>

      {/* Error */}
      {error && (
        <div style={{
          fontSize: '0.8rem',
          color: '#ef4444',
          padding: '8px 12px',
          background: 'rgba(239,68,68,0.07)',
          borderRadius: '0.75rem',
          border: '1px solid rgba(239,68,68,0.15)',
          marginBottom: '10px',
        }}>
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          width: '100%',
          padding: '13px',
          background: loading ? '#94a3b8' : '#0052ff',
          color: '#fff',
          border: 'none',
          borderRadius: '0.875rem',
          fontSize: '0.925rem',
          fontWeight: 700,
          cursor: loading ? 'not-allowed' : 'pointer',
          fontFamily: 'inherit',
          transition: 'all 0.2s ease',
          marginBottom: '10px',
          boxShadow: loading ? 'none' : '0 4px 16px rgba(0,82,255,0.25)',
        }}
      >
        {loading ? '⏳ Sending...' : '🎲 Send Tip & Enter Draw'}
      </button>

      {/* Footer note */}
      <div style={{
        fontSize: '0.7rem',
        color: '#b8c2d4',
        textAlign: 'center',
        lineHeight: 1.7,
      }}>
        70% prize pool · 30% creator · Forever on Base · Includes protocol fee
      </div>
    </div>
  );
}
