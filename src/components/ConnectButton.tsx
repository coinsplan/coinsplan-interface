import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FC } from "react";

interface ICustomConnectButton {
  fullWidth?: boolean;
}

const CustomConnectButton: FC<ICustomConnectButton> = ({ fullWidth }) => {
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
                    size="md"
                    w={fullWidth ? "full" : "auto"}
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
                  >
                    Wrong network
                  </Button>
                );
              }
              return (
                <Box
                  display="flex"
                  gap={4}
                  bg={mainBg}
                  my="7px"
                  borderRadius="full"
                >
                  <button
                    onClick={openChainModal}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "10px",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <Button
                    onClick={openAccountModal}
                    type="button"
                    bg="main.400"
                    color="white"
                    _hover={{ bg: undefined }}
                    _active={{ bg: undefined }}
                    borderRadius="full"
                    fontWeight={600}
                  >
                    {account.displayName}
                    {/* {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""} */}
                  </Button>
                </Box>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default CustomConnectButton;
