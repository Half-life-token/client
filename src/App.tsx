import React from 'react';
import NixieClock from './components/NixieClock';
import {ConnectButton, darkTheme, getDefaultConfig, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {base} from "viem/chains";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {WagmiProvider} from "wagmi";

import '@rainbow-me/rainbowkit/styles.css';
import TicketPurchase from "./components/TicketPurchase.tsx";
import { Connect } from './components/connect/connect.tsx';
import Ticket from './components/ticket/ticket.tsx';
import Marquee from "react-fast-marquee";
const config = getDefaultConfig({
  appName: 'Half Life',
  projectId: '912b450f0d2d4845bef672f964e75292',
  chains: [base],
  ssr: false,
});

const queryClient = new QueryClient();

const App: React.FC = () => {
  const maxTickets = 10000;  // TODO: Get this from the contract
  const totalRounds = Math.floor(Math.log2(maxTickets) + 1);
  const [round, setRound] = React.useState<undefined | number>();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <div
            className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center font-mono overflow-hidden">

            {/* Top-right Connect Button */}
            <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between ">
              <h1 className="text-9xl sm:text-9xl font-bold tracking-widest text-white">
                HΔLFLΨFE
              </h1>
              <Connect />
            </nav>

            <header className="relative z-10 text-center mb-12">
              <h1 className="text-6xl font-bold tracking-widest text-white">HΔLF LΨFE</h1>
              <span className="text-xl font-bold text-gray-400">
                  {round
                    && <p>Round {round} / {totalRounds}</p>
                    || <p>Starting soon...</p>
                  }
              </span>
            </header>
            <div className='scale-75'>
              <NixieClock targetDate="2025-12-31T23:59:59" />
            </div>
            <p className="text-xl tracking-wide text-gray-300">
              left until nuclear decay
            </p>



            {/* <div className="p-8 bg-gray-900 rounded-xl border-2 border-gray-700 shadow-2xl">
              <TicketPurchase/>
            </div> */}

            <Marquee className='mt-12'>
              <Ticket />
              <Ticket />
              <Ticket />
              <Ticket />
              <Ticket />
            </Marquee>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
