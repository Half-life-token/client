import React from 'react';
import NixieClock from './components/NixieClock';
import {ConnectButton, getDefaultConfig, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {base} from "viem/chains";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {WagmiProvider} from "wagmi";

import '@rainbow-me/rainbowkit/styles.css';

const config = getDefaultConfig({
  appName: 'Half Life',
  projectId: '912b450f0d2d4845bef672f964e75292',
  chains: [base],
  ssr: false,
});

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center font-mono overflow-hidden">
            <header className="relative z-10 text-center mb-12">
              <h1 className="text-6xl font-bold tracking-widest text-white">HΔLF LΨFE</h1>
              <p className="mt-4 text-xl tracking-wide text-gray-300">
                The countdown to the next elimination round begins!
              </p>
            </header>
            <div className="p-8 bg-gray-900 rounded-xl border-2 border-gray-700 shadow-2xl">
              <NixieClock targetDate="2024-12-31T23:59:59"/>
            </div>
          </div>
          <ConnectButton />;
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
