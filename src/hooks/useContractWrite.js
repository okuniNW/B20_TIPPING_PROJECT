import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACTS, B20ROYAL_ABI, ROYAL_POINTS_ABI } from './contractConfig';

const ADDR = CONTRACTS.B20ROYAL_V2.address;

function useWrite(functionName, options = {}) {
  const { writeContract, data: hash, isPending, error, reset } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  function execute(args = [], value = undefined) {
    writeContract({
      address: ADDR,
      abi: B20ROYAL_ABI,
      functionName,
      args,
      ...(value !== undefined ? { value } : {}),
    });
  }

  return {
    execute,
    hash,
    isPending,
    isConfirming,
    isSuccess,
    error,
    isLoading: isPending || isConfirming,
    reset,
  };
}

// Free tip — no ETH required (only gas)
export function useFreeTip() {
  const w = useWrite('freeTip');
  return {
    ...w,
    sendFreeTip: (message = '') => w.execute([message]),
  };
}

// Premium tip — send ETH
export function usePremiumTip() {
  const w = useWrite('premiumTip');
  return {
    ...w,
    sendPremiumTip: (ethAmount, message = '') =>
      w.execute([message], ethAmount),
  };
}

// Post message using premium slots
export function usePostMessage() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  function postMsg(message, protocolFeeWei) {
    writeContract({
      address: ADDR,
      abi: B20ROYAL_ABI,
      functionName: 'postMessage',
      args: [message],
      value: protocolFeeWei,
    });
  }

  return { postMsg, isPending, isConfirming, isSuccess, error,
           isLoading: isPending || isConfirming };
}

// Set display name
export function useSetDisplayName() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  function setName(name, protocolFeeWei) {
    writeContract({
      address: ADDR,
      abi: B20ROYAL_ABI,
      functionName: 'setDisplayName',
      args: [name],
      value: protocolFeeWei,
    });
  }

  return { setName, isPending, isConfirming, isSuccess, error,
           isLoading: isPending || isConfirming };
}

// GM check-in
export function useGMCheckIn() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  function checkIn(protocolFeeWei) {
    writeContract({
      address: ADDR,
      abi: B20ROYAL_ABI,
      functionName: 'gmCheckIn',
      args: [],
      value: protocolFeeWei,
    });
  }

  return { checkIn, isPending, isConfirming, isSuccess, error,
           isLoading: isPending || isConfirming };
}

// Claim Royal Points
export function useClaimPoints() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  function claimPoints(amount, nonce, signature, protocolFeeWei) {
    writeContract({
      address: CONTRACTS.ROYAL_POINTS.address,
      abi: ROYAL_POINTS_ABI,
      functionName: 'claimPoints',
      args: [BigInt(amount), nonce, signature],
      value: protocolFeeWei,
    });
  }

  return { claimPoints, isPending, isConfirming, isSuccess, error,
           isLoading: isPending || isConfirming };
}
