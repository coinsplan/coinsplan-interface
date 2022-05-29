import { useColorMode } from "@chakra-ui/react";

import { FC } from "react";

import AppBody from "./AppBody";
import AppNavbar from "./components/AppNavbar";
import { DisplayProvider } from "./contexts/Display";
import WalletProvider from "./providers/Wallet";

interface ICoinsplanAppTemplate {
  currentDisplay: string;
  children?: any;
}

const CoinsplanAppTemplate: FC<ICoinsplanAppTemplate> = ({
  currentDisplay,
  children,
}) => {
  return (
    <WalletProvider>
      <DisplayProvider currentDisplay={currentDisplay}>
        <AppNavbar />
        <AppBody>{children}</AppBody>
      </DisplayProvider>
    </WalletProvider>
  );
};
export default CoinsplanAppTemplate;
