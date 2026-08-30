import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, lightTheme, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base } from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';

import LandingPage from './pages/LandingPage';
import AppPage     from './pages/AppPage';

const config = getDefaultConfig({
  appName:   'RoyalBase',
  projectId: 'royalbase_temp', // ganti dengan WalletConnect projectId asli
  chains:    [base],           // Base Mainnet
  ssr:       false,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={lightTheme({
          accentColor:            '#0052ff',
          accentColorForeground:  'white',
          borderRadius:           'large',
        })}>
          <BrowserRouter>
            <Routes>
              <Route path="/"    element={<LandingPage />} />
              <Route path="/app" element={<AppPage />} />
            </Routes>
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
