import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { CONTRACTS, B20ROYAL_ABI, ROYAL_POINTS_ABI } from './contractConfig';

const PROTOCOL_FEE = parseEther('0.02');

// ============================================================
// HOOK — Kirim tip ke contract
// ============================================================
export function useSendTip() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  function sendTip(amountETH, message = '') {
    const tipAmount  = parseEther(amountETH.toString());
    const totalValue = tipAmount + PROTOCOL_FEE;

    writeContract({
      address: CONTRACTS.B20ROYAL.address,
      abi:     B20ROYAL_ABI,
      functionName: 'tip',
      args:    [message],
      value:   totalValue,
    });
  }

  return {
    sendTip,
    hash,
    isPending,
    isConfirming,
    isSuccess,
    error,
    isLoading: isPending || isConfirming,
  };
}

// ============================================================
// HOOK — Set display name on-chain
// ============================================================
export function useSetDisplayName() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  function setName(name) {
    writeContract({
      address: CONTRACTS.B20ROYAL.address,
      abi:     B20ROYAL_ABI,
      functionName: 'setDisplayName',
      args:    [name],
      value:   PROTOCOL_FEE,
    });
  }

  return {
    setName,
    hash,
    isPending,
    isConfirming,
    isSuccess,
    error,
    isLoading: isPending || isConfirming,
  };
}

// ============================================================
// HOOK — Claim Royal Points on-chain
// ============================================================
export function useClaimPoints() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  function claimPoints(amount, nonce, signature) {
    writeContract({
      address: CONTRACTS.ROYAL_POINTS.address,
      abi:     ROYAL_POINTS_ABI,
      functionName: 'claimPoints',
      args:    [BigInt(amount), nonce, signature],
      value:   PROTOCOL_FEE,
    });
  }

  return {
    claimPoints,
    hash,
    isPending,
    isConfirming,
    isSuccess,
    error,
    isLoading: isPending || isConfirming,
  };
}
