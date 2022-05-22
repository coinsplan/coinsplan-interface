import "@rainbow-me/rainbowkit/styles.css";
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, createClient } from "wagmi";

export const { chains, provider } = configureChains(
  [chain.polygon],
  [
    apiProvider.jsonRpc((chain) => ({
      rpcUrl: `https://rpc-mainnet.matic.network`,
    })),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Coinsplan",
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
