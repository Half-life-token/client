import React, {useState} from 'react';
import NixieClock from './components/NixieClock';
import {ConnectButton, darkTheme, getDefaultConfig, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {base} from "viem/chains";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {WagmiProvider} from "wagmi";

import '@rainbow-me/rainbowkit/styles.css';
import '@uniswap/widgets/fonts.css'
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/700.css';

import TicketPurchase from "./components/TicketPurchase.tsx";
import {SwapWidget} from "@uniswap/widgets";

const config = getDefaultConfig({
  appName: 'Half Life',
  projectId: '912b450f0d2d4845bef672f964e75292',
  chains: [base],
  ssr: false,
});

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [isRoundStarted, setIsRoundStarted] = useState(false);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center font-mono overflow-hidden">

            {/* Top-right Connect Button */}
            <div className="absolute top-4 right-4">
              <ConnectButton />
            </div>

            <header className="relative z-10 text-center mb-12">
              <h1 className="text-6xl font-bold tracking-widest text-white">HΔLF LΨFE</h1>
              <p className="mt-4 text-xl tracking-wide text-gray-300">
                The countdown to the next elimination round begins!
              </p>
            </header>
            <NixieClock targetDate="2022-12-31T23:59:59" />

            {isRoundStarted && (
              <div className="p-8 bg-gray-900 rounded-xl border-2 border-gray-700 shadow-2xl">
                <TicketPurchase/>
              </div>
            ) || (
              <div className="Uniswap">
                <SwapWidget />
              </div>
            )
            }

          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
