import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { FC } from "react";

import { WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "../../../lib/rainbowkit/wallet";

interface IWalletProvider {
  children?: any;
}

const WalletProvider: FC<IWalletProvider> = ({ children }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={lightTheme()}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default WalletProvider;
