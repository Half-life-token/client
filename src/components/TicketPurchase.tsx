import React, { useState } from 'react';
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseUnits } from 'viem';
import Nuclear from '../assets/radioactive.jpg';
import RadioactiveButton from '../assets/radioactive-button.png';

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
        to: '0xA17471DEA98083f5D3F36B04730C380F417D9CFD', // Replace with your contract's address
        value: totalPrice,
      });
    } catch (error: any) {
      setErrorMessage(error.message || 'Transaction failed.');
    }
  };

  // Helper function to render button content
  const renderButtonContent = (text: string) => (
    <>
      {/* <img
        src={Nuclear}
        alt="Wallet Icon"
        style={{ width: 62, height: 62 }}
      /> */}
      <div className="relative">
        <img
          src={RadioactiveButton}
          alt="Button Background"
          style={{ height: 82,width:800 }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-nixie text-black-800 font-black nixie-number">
          {text}
        </div>
        <div className="absolute inset-0 flex items-center justify-center rounded-lg nixie-glow bg-orange-400 opacity-40 blur-md"></div>
      </div>
    </>
  );

  // Determine button text based on transaction state
  const getButtonText = () => {
    if (isSendPending) return 'Sending...';
    if (isConfirming) return 'Waiting for Confirmation...';
    return 'Buy Tickets';
  };

  return (
    <div className="p-4  rounded-md"
      style={{
        backgroundColor: "#cab586"
      }}
    >
      <form onSubmit={handlePurchase}>
        <label htmlFor="numTickets" className="block text-sm mb-2 text-white">
          Number of Tickets:
        </label>
        <input
          id="numTickets"
          type="number"
          min="1"
          value={numTickets}
          onChange={(e) => setNumTickets(Number(e.target.value))}
          className="w-full p-2 text-black rounded mb-4"
          style={{
            backgroundColor: "#028771"
          }}
        />
        <button
          disabled={isSendPending || isConfirming}
          type="submit"
          className="w-full  rounded border-0 cursor-pointer"
          style={{
            backgroundColor: isSendPending || isConfirming ? 'gray' : '',
            display: 'flex',
            alignItems: 'center',
            color: 'black',
          }}
        >
          {renderButtonContent(getButtonText())}
        </button>
      </form>
      {hash && (
        <div className="mt-4 text-white">
          Transaction Hash:{' '}
          <a
            href={`https://etherscan.io/tx/${hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            {hash}
          </a>
        </div>
      )}
      {isConfirmed && <div className="mt-4 text-green-500">Transaction confirmed!</div>}
      {errorMessage && <div className="mt-4 text-red-500">Error: {errorMessage}</div>}
      {sendError && <div className="mt-4 text-red-500">Error: {sendError.message}</div>}
    </div>
  );
};

export default TicketPurchase;
