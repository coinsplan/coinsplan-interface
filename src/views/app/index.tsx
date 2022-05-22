import { useColorMode } from "@chakra-ui/react";
import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { FC } from "react";
import { WagmiProvider } from "wagmi";
import { chains, wagmiClient } from "../../lib/rainbowkit/wallet";
import AppBody from "./AppBody";
import AppNavbar from "./components/AppNavbar";
import { DisplayProvider } from "./contexts/Display";

interface ICoinsplanAppTemplate {
  currentDisplay: string;
  children?: any;
}

const CoinsplanAppTemplate: FC<ICoinsplanAppTemplate> = ({
  currentDisplay,
  children,
}) => {
  const { colorMode } = useColorMode();
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={colorMode === "light" ? lightTheme() : darkTheme()}
      >
        <DisplayProvider currentDisplay={currentDisplay}>
          <AppNavbar />
          <AppBody>{children}</AppBody>
        </DisplayProvider>
      </RainbowKitProvider>
    </WagmiProvider>
  );
};
export default CoinsplanAppTemplate;
