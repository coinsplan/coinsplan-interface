import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { noButtonEffect } from "../utils/components/effects";

const Navbar: FC = () => {
  const { colorMode } = useColorMode();
  const styles = {
    bg: useColorModeValue("transparent", "transparent"),
  };
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={70}
      bg={styles.bg}
      backdropFilter="blur(10px)"
    >
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        minH="70px"
      >
        <Box>
          <Image
            h="60px"
            alt="logo"
            src={`https://raw.githubusercontent.com/coinsplan/resources/524064751792fee7d493a0313bba5ceec40767e9/logos/icon-transparent-${
              colorMode === "light" ? "black" : "white"
            }.svg`}
          ></Image>
        </Box>
        <HStack spacing="20px">
          <Button variant="link">Docs</Button>
          <Button variant="link">About</Button>
          <Button
            variant="solid"
            color="white"
            bg="black"
            _hover={noButtonEffect}
            _active={noButtonEffect}
          >
            Earn CUPA
          </Button>
        </HStack>
      </Container>
    </Box>
  );
};
export default Navbar;
