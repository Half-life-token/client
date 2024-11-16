
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
export const halfconfig = getDefaultConfig({
    appName: 'Half Life',
    projectId: '912b450f0d2d4845bef672f964e75292',
    chains: [base],
    ssr: false,
  });