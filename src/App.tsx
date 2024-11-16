import React, { useEffect, useState } from 'react';
import NixieClock from './components/NixieClock';
import { darkTheme, getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { base } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import '@rainbow-me/rainbowkit/styles.css';
import { Connect } from './components/connect/connect.tsx';
import Ticket from './components/ticket/ticket.tsx';
import Marquee from "react-fast-marquee";
import { Hogwarts } from './components/hogwarts/hogwarts.tsx';
import Balance from './components/balance/balance.tsx';
import { halfconfig } from './halfconfig.ts';
import TicketPurchase from "./components/TicketPurchase.tsx";



const queryClient = new QueryClient();

const App: React.FC = () => {

  const maxTickets = 10000;  // TODO: Get this from the contract
  const totalRounds = Math.floor(Math.log2(maxTickets) + 1);
  const [round, setRound] = React.useState<undefined | number>();
  const [showExplosion, setShowExplosion] = useState(false);

  // Handle when the timer reaches zero
  const handleTimerEnd = () => {
    setShowExplosion(true);
    setTimeout(() => {
      setShowExplosion(false);
    }, 3000); // Explosion fades out after 5 seconds
  };

  useEffect(() => {
    handleTimerEnd();
  }, []);

  return (
    <WagmiProvider config={halfconfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <div
            className="min-h-screen bg-black bg-custom-bg bg-fixed text-white flex flex-col font-mono overflow-hidden"
            style={{ backgroundSize: '100% 135%', backgroundPosition: '380px top' }}
          >
            {/* Header with Logo and Connect Button */}
            <nav className="w-full p-4 flex justify-between">
              <h1
                style={{ WebkitTextStroke: '2px #00ff00' }}
                className="text-5xl sm:text-9xl font-bold tracking-widest text-white"
              >
                HΔLFLΨFE
              </h1>
              <Connect />
            </nav>

            {/* Nuclear Explosion Overlay */}
            {showExplosion && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 transition-opacity duration-1000"
                style={{ animation: "fadeOut 5s forwards" }}
              >
                <img
                  src="nuke.gif"
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Main Content */}
            <main className="flex flex-col flex-grow justify-between">
              {/* Top Content: Nixie Clock */}
              <div className="flex flex-col pl-4 ">
                <div >
                  <NixieClock targetDate="2025-12-31T23:59:59" />
                </div>
                <p className="text-xl tracking-wide text-gray-300 pl-2 mt-4 ">
                  left until nuclear decay
                </p>
                <div
                  className='flex flex-row items-center justify-between pl-2 mt-4'
                ><Balance /></div>
              </div>

              {/* Spacer to take up available space */}
              <div className="flex-grow"></div>

              <div style={{
                width: 780,
                marginBottom: 20,
                marginTop: 20,
                marginLeft: 20,
              }}>
              <TicketPurchase />
              </div>

              {/* Bottom Content: Marquee Tickets */}
              <div className="w-full pb-4">
                <Marquee play={true} autoFill={true}>
                  <Hogwarts />
                  <Ticket />
                </Marquee>
              </div>
            </main>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
