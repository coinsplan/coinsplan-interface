import { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Input,
  Progress,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import ScreenFixAuthTemplate from "../../components/structures/ScreenFixAuthTemplate";
import { useAccount, useSignMessage } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const SignupPage: FC = () => {
  const { data } = useAccount();
  const [signComplete, setSignComplete] = useState<boolean>(false);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const {
    isLoading: isSignLoading,
    isError: isSignError,
    isSuccess: isSignSuccess,
    data: signMessageData,
    signMessage,
  } = useSignMessage({
    message: `Coinsplan Authentication:\nThis will not cost you any fee. Just a message to verify that you are going to login to Coinsplan Crypto Services.\n${Date.now()}`,
  });

  const handleDigitalSignatureSign = async () => {
    signMessage();
  };

  useEffect(() => {
    if (isSignSuccess) {
      setSignComplete(true);
    } else {
      setSignComplete(false);
    }
  }, [isSignSuccess]);

  useEffect(() => {
    if (signComplete) {
      alert(signMessageData);
      setSignComplete(false);
      setIsSigningIn(true);
    }
  }, [signComplete]);

  return (
    <ScreenFixAuthTemplate>
      <Container
        maxW="container.sm"
        h="100vh"
        py="6%"
        display="flex"
        justifyContent="center"
      >
        <Flex
          w="full"
          border="1px solid"
          borderColor={useColorModeValue("#00000030", "#ffffff30")}
          rounded={20}
          py="10%"
          px="8%"
          flexDir="column"
          justifyContent="space-between"
          position="relative"
          overflow="hidden"
        >
          {isSigningIn ? (
            <Progress
              size="xs"
              isIndeterminate
              position="absolute"
              top={0}
              left={0}
              right={0}
              colorScheme="mainNonDynamic"
            />
          ) : null}

          <Box>
            <Heading size="sm" mb="40px">CoinsID</Heading>
            <Heading
              fontSize="25px"
              fontWeight={700}
              fontFamily="Poppins !important"
            >
              Create an account
            </Heading>
            <VStack my="30px" alignItems="start" spacing={8}>
              {data === null ? (
                <Text my="20px">
                  Please connect your crypto wallet to continue the account sign
                  up process.
                </Text>
              ) : (
                <Text my="20px">
                  Your new account will be linked to this blockchain address.
                </Text>
              )}
              <ConnectButton chainStatus="icon" />
              {data === null ? null : (
                <VStack spacing={7} alignItems="start" w="full">
                  <Heading size="sm">What should we call you?</Heading>
                  <Input placeholder="Ex. Beam, Elon Dust" w="full" />
                  <Heading size="sm">Email address</Heading>
                  <Input placeholder="example@coinsplan.com" w="full" type="email"/>
                  <Checkbox mt="40px !important" colorScheme="mainNonDynamic">
                    <Text fontSize="14px">
                      I agree to the terms and conditions and privacy policy.
                    </Text>
                  </Checkbox>
                </VStack>
              )}
            </VStack>
          </Box>

          <VStack spacing={5}>
            {data === null ? null : (
              <Button
                size="xl"
                w="full"
                color="white"
                bg="main.400"
                _hover={{ bg: undefined }}
                _focus={{ bg: undefined }}
                onClick={handleDigitalSignatureSign}
                isLoading={isSignLoading}
              >
                {isSignLoading ? (
                  "Waiting for confirmation"
                ) : (
                  <>
                    Create an account <ArrowForwardIcon ms="10px" />
                  </>
                )}
              </Button>
            )}
          </VStack>
        </Flex>
      </Container>
    </ScreenFixAuthTemplate>
  );
};
export default SignupPage;
