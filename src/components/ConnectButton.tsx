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

const CustomConnectButton: FC<ICustomConnectButton> = ({
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
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <Button
                    onClick={openConnectModal}
                    type="button"
                    bg="main.400"
                    color="white"
                    _hover={{ bg: undefined }}
                    _active={{ bg: undefined }}
                    w={fullWidth ? "full" : "auto"}
                    h={height}
                    fontSize="14px"
                  >
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    type="button"
                    bg="red.400"
                    color="white"
                    _hover={{ bg: undefined }}
                    _active={{ bg: undefined }}
                    h={height}
                  >
                    Wrong network
                  </Button>
                );
              }
              return (
                <HStack spacing={2}>
                  <Button
                    h={height}
                    onClick={openChainModal}
                    fontSize="14px"
                    fontWeight={600}
                    bg="#00000030"
                    color="#fff"
                    _hover={{ bg: undefined }}
                    _active={{ bg: undefined }}
                  >
                    <HStack spacing={2}>
                      {chain.hasIcon && (
                        <Box
                          style={{
                            background: chain.iconBackground,
                            width: 30,
                            height: 30,
                            borderRadius: 999,
                            overflow: "hidden",
                          }}
                        >
                          {chain.iconUrl && (
                            <Image
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              h="30px"
                            />
                          )}
                        </Box>
                      )}
                      <Box
                        as="span"
                        display={{
                          sm: "none",
                          md: "none",
                          lg: "inline",
                        }}
                      >
                        {chain.name}
                      </Box>
                    </HStack>
                  </Button>
                  <Button
                    onClick={openAccountModal}
                    type="button"
                    bg="#00000030"
                    color="#fff"
                    _hover={{ bg: undefined }}
                    _active={{ bg: undefined }}
                    fontSize="14px"
                    fontWeight={600}
                    h={height}
                  >
                    <HStack spacing={2}>
                      <MdAccountCircle size="30px" />
                      <Box
                        as="span"
                        display={{
                          sm: "none",
                          md: "none",
                          lg: "inline",
                        }}
                      >
                        {account.displayName}
                      </Box>
                      {/* {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""} */}
                    </HStack>
                  </Button>
                </HStack>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default CustomConnectButton;
