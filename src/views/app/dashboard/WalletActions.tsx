import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FC, Fragment, useEffect, useRef, useState } from "react";
import CurrencyBadge from "./components/CurrencyBadge";
import { FiArrowUpRight } from "react-icons/fi";
import { IoShareOutline } from "react-icons/io5";
import { QRCodeSVG } from "qrcode.react";
import { useAccount } from "wagmi";
import { CopyIcon } from "@chakra-ui/icons";
const iconHoverStyles = {
  bg: "main.400",
};

const WalletActions: FC = () => {
  const initialFocusRef = useRef();
  const { data: account } = useAccount();
  const styles = {
    bg: useColorModeValue("white", "gray.900"),
    borderColor: useColorModeValue("gray.100", "gray.700"),
    divider: {
      color: useColorModeValue("gray.200", "gray.700"),
    },
  };
  useEffect(() => {
    if (!account) return;
  }, [account]);

  return (
    <Fragment>
      <Box
        bg={styles.bg}
        rounded={12}
        px="16px"
        py="22px"
        border="1px solid"
        borderColor={styles.borderColor}
        boxShadow="0 2px 10px #00000010"
      >
        <Heading size="sm">Your Crypto Wallet</Heading>
        <Divider mt={4} color={styles.divider.color} />
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} mt={5} spacing="40px">
          <Box>
            <CurrencyBadge />
            <CurrencyBadge />
            <CurrencyBadge />
          </Box>
          <Box>
            <Center mt={2}>
              {account ? (
                <Box overflow="hidden" rounded={6}>
                  <QRCodeSVG
                    value={`${account.address}`}
                    size={200}
                    includeMargin={true}
                  />
                </Box>
              ) : null}
            </Center>
          </Box>
        </SimpleGrid>
        <HStack spacing={3} mt={5}>
          <Button w="full" colorScheme="main" gap={1} fontWeight={700}>
            Send Crypto
            <FiArrowUpRight size="20px" />
          </Button>
          <Button w="full" fontWeight={700}>Plans</Button>
          <Popover placement="bottom" closeOnBlur={true}>
            <PopoverTrigger>
              <Button w="full" gap={1} fontWeight={700}>
                Share <IoShareOutline size="16px" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontWeight={600}>Share your account</PopoverHeader>
              <PopoverBody fontSize={12}>
                <Text>Account URL</Text>
                <InputGroup>
                  <Input
                    fontSize={12}
                    value={
                      "https://coinsplan.org/ac/q97r397grwnrkjnrjk3nr197r37rb1rhbjhr"
                    }
                  />
                  <InputRightElement>
                    <IconButton aria-label="copy-account-url-button" size="sm">
                      <CopyIcon />
                    </IconButton>
                  </InputRightElement>
                </InputGroup>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
      </Box>
    </Fragment>
  );
};
export default WalletActions;
