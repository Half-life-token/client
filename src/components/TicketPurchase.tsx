import React, { useState } from 'react';
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseUnits } from 'viem';

const TicketPurchase: React.FC = () => {
  const [numTickets, setNumTickets] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const ticketPrice = parseUnits('0.1', 6); // USDC has 6 decimals
  const totalPrice = ticketPrice * BigInt(numTickets);

  const {
    data: hash,
    error: sendError,
    isPending: isSendPending,
    sendTransaction,
  } = useSendTransaction();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const handlePurchase = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null); // Reset error message

    try {
      sendTransaction({
        to: 'YOUR_SMART_CONTRACT_ADDRESS', // Replace with your contract's address
        value: totalPrice,
      });
    } catch (error: any) {
      setErrorMessage(error.message || 'Transaction failed.');
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded-md">
      <form onSubmit={handlePurchase}>
        <label htmlFor="numTickets" className="block text-sm mb-2">
          Number of Tickets:
        </label>
        <input
          id="numTickets"
          type="number"
          min="1"
          value={numTickets}
          onChange={(e) => setNumTickets(Number(e.target.value))}
          className="w-full p-2 text-black rounded mb-4"
        />
        <button
          disabled={isSendPending || isConfirming}
          type="submit"
          className={`w-full px-4 py-2 rounded text-white ${
            isSendPending || isConfirming ? 'bg-gray-500' : 'bg-green-500'
          }`}
        >
          {isSendPending
            ? 'Sending...'
            : isConfirming
              ? 'Waiting for Confirmation...'
              : 'Buy Tickets'}
        </button>
      </form>
      {hash && (
        <div className="mt-4">
          Transaction Hash: <a href={`https://etherscan.io/tx/${hash}`} target="_blank" rel="noopener noreferrer" className="text-blue-400">{hash}</a>
        </div>
      )}
      {isConfirmed && <div className="mt-4 text-green-500">Transaction confirmed!</div>}
      {errorMessage && <div className="mt-4 text-red-500">Error: {errorMessage}</div>}
      {sendError && <div className="mt-4 text-red-500">Error: {sendError.message}</div>}
    </div>
  );
};

export default TicketPurchase;
