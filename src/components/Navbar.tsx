import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";

const Navbar: FC = () => {
  const borderColor = useColorModeValue("gray.200", "gray.800");
  const bg = useColorModeValue("white", "darkBackground");
  return (
    <Box
      border="1px solid"
      borderWidth="0 0 1px 0"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={70}
      bg={bg}
    >
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        minH="70px"
      >
        <Box>
          <Heading size="md">
            <Image
              src="https://raw.githubusercontent.com/coinsplan/resources/main/logos/icon-full-transparent-blue.svg"
              h="44px"
            />
          </Heading>
        </Box>
        <Box>
          <Button colorScheme="mainNonDynamic">Launch app</Button>
        </Box>
      </Container>
    </Box>
  );
};
export default Navbar;
