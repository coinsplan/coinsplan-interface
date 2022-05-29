import { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Progress,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import ScreenFixAuthTemplate from "../../components/structures/ScreenFixAuthTemplate";
import { useAccount, useSignMessage } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const SigninPage: FC = () => {
  const { data } = useAccount();
  const [signComplete, setSignComplete] = useState<boolean>(false);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const router = useRouter()
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

  const navigateToSignup = () => {
    router.push("signup")
  }

  useEffect(() => {
    if (isSignSuccess) {
      setSignComplete(true);
    } else {
      setSignComplete(false);
    }
  }, [isSignSuccess]);

  useEffect(() => {
    if (signComplete) {
      // alert(signMessageData);
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
          maxW="470px"
          h="80vh"
          maxH="600px"
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
            <Heading
              fontSize="25px"
              fontWeight={700}
              fontFamily="Poppins !important"
            >
              Sign in to Coinsplan
            </Heading>
            <VStack my="30px" alignItems="start" spacing={8}>
              {data === null ? (
                <Text my="20px">
                  You must connect your crypto wallet to sign in to Coinsplan
                  service.
                </Text>
              ) : (
                <Text my="20px">You will be signed in with this wallet</Text>
              )}
              <ConnectButton chainStatus="icon" />
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
                isLoading={isSignLoading || isSigningIn}
              >
                {isSignLoading ? (
                  "Waiting for confirmation"
                ) : (
                  <>
                    Sign in with digital signature{" "}
                    <ArrowForwardIcon ms="10px" />
                  </>
                )}
              </Button>
            )}
            <Button size="xl" w="full" variant="outline" onClick={navigateToSignup}>
              Create account
            </Button>
          </VStack>
        </Flex>
      </Container>
    </ScreenFixAuthTemplate>
  );
};
export default SigninPage;
