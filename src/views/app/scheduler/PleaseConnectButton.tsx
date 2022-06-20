import {
  Box,
  Button,
  HStack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FC } from "react";
import { MdAccountCircle } from "react-icons/md";
interface ICustomConnectButton {
  fullWidth?: boolean;
  height?: string;
}

const PleaseConnectButton: FC<ICustomConnectButton> = ({
  fullWidth,
  height,
}) => {
  const mainBg = useColorModeValue("gray.100", "gray.700");

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <Button
            w="full"
            h="70px"
            bg="#1346d120"
            color="main.500"
            _hover={{bg: undefined}}
            _active={{bg: undefined}}
            onClick={openConnectModal}
            fontSize="18px"
          >Connect Wallet</Button>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default PleaseConnectButton;
