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
    alert('Smart contract not connected yet — coming soon!');
  }

  return (
    <div className="card">
      <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
        Send a Tip
      </div>
      <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
        Every tip enters you into the daily draw
      </div>

      {/* Amount */}
      <div className="section-label" style={{ marginBottom: '10px' }}>Choose amount</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
        {AMOUNTS.map(amt => (
          <button
            key={amt}
            className={`amount-btn${selected === amt ? ' active' : ''}`}
            onClick={() => setSelected(amt)}
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
          className="input-field"
          value={custom}
          onChange={e => setCustom(e.target.value)}
          style={{ marginBottom: '16px' }}
        />
      )}

      {/* Message */}
      <div className="section-label" style={{ marginBottom: '10px' }}>
        Wall message{' '}
        <span style={{
          textTransform: 'none',
          letterSpacing: 0,
          fontWeight: 400,
          color: 'var(--text-faint)',
        }}>
          (optional)
        </span>
      </div>

      <div style={{ position: 'relative', marginBottom: '8px' }}>
        <textarea
          className="input-field"
          rows={3}
          maxLength={MAX_CHARS}
          placeholder="Leave your mark on the wall forever..."
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <span style={{
          position: 'absolute',
          bottom: '10px',
          right: '12px',
          fontSize: '11px',
          color: charsLeft < 40 ? 'var(--danger)' : 'var(--text-faint)',
          fontVariantNumeric: 'tabular-nums',
        }}>
          {charsLeft}
        </span>
      </div>

      {/* Error */}
      {error && (
        <div style={{
          fontSize: '13px',
          color: 'var(--danger)',
          padding: '10px 14px',
          background: 'rgba(239,68,68,0.07)',
          borderRadius: 'var(--r-control)',
          border: '1px solid rgba(239,68,68,0.2)',
          marginBottom: '12px',
        }}>
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        className="btn-primary"
        style={{ width: '100%', padding: '14px', fontSize: '15px', marginBottom: '12px', borderRadius: 'var(--r-control)' }}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? '⏳ Sending...' : '🎲 Send Tip & Enter Draw'}
      </button>

      {/* Footer */}
      <div style={{
        fontSize: '12px',
        color: 'var(--text-faint)',
        textAlign: 'center',
        lineHeight: 1.7,
      }}>
        70% goes to prize pool · 30% supports the creator<br />
        Your message stored forever on Base · Includes protocol fee
      </div>
    </div>
  );
}
