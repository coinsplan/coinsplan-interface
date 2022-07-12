import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, Fragment, useEffect, useState } from "react";
import CurrencyBadge from "./components/CurrencyBadge";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";
import { QRCodeSVG } from "qrcode.react";
import { useAccount } from "wagmi";
const iconHoverStyles = {
  bg: "main.400",
};

const WalletActions: FC = () => {
  const { data: account } = useAccount();
  useEffect(() => {
    if (!account) return;
  }, [account]);

  return (
    <Fragment>
      <Box
        bg="white"
        rounded={12}
        px="16px"
        py="22px"
        border="1px solid"
        borderColor="gray.100"
        boxShadow="0 2px 10px #00000010"
      >
        <Heading size="sm">Your Crypto Wallet</Heading>
        <Divider mt={4} color="gray.200" />
        <SimpleGrid columns={{sm: 1, md: 1, lg: 2}} mt={5} spacing="40px">
          <Box>
            <CurrencyBadge />
            <CurrencyBadge />
            <CurrencyBadge />
          </Box>
          <Box>
            <HStack spacing={5} justifyContent="space-between" px="10%">
              <VStack spacing={2}>
                <IconButton
                  bg="black"
                  color="white"
                  aria-label="send"
                  rounded="full"
                  fontSize={20}
                  _hover={iconHoverStyles}
                >
                  <FiArrowUpRight />
                </IconButton>
                <Text fontSize={12}>Send</Text>
              </VStack>
              <VStack spacing={2}>
                <IconButton
                  bg="black"
                  color="white"
                  aria-label="send"
                  rounded="full"
                  fontSize={20}
                  _hover={iconHoverStyles}
                >
                  <FiArrowDownLeft />
                </IconButton>
                <Text fontSize={12}>Receive</Text>
              </VStack>
              <VStack spacing={2}>
                <IconButton
                  bg="black"
                  color="white"
                  aria-label="send"
                  rounded="full"
                  fontSize={20}
                  _hover={iconHoverStyles}
                >
                  <FiArrowDownLeft />
                </IconButton>
                <Text fontSize={12}>Button</Text>
              </VStack>
            </HStack>
            <Center mt={7}>
              {account ? <QRCodeSVG value={`${account.address}`} size={200}/> : null}
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
    </Fragment>
  );
};
export default WalletActions;
