import { useColorMode } from "@chakra-ui/react";
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { FC } from "react";

import { WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "../../../lib/rainbowkit/wallet";

interface IWalletProvider {
  children?: any;
}

const WalletProvider: FC<IWalletProvider> = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={colorMode === "light" ? lightTheme() : darkTheme()}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default WalletProvider;
