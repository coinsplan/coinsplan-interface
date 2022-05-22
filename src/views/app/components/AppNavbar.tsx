import {
  Box,
  Button,
  Container,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import CustomConnectButton from "../../../components/ConnectButton";

export default function AppNavbar() {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const boxShadow = useColorModeValue(
    "0 3px 2px #00000010",
    "0 3px 2px #ffffff00"
  );
  const navbarBg = useColorModeValue("white", "gray.900");
  return (
    <Box
      bg={navbarBg}
      border="1px solid"
      borderColor={borderColor}
      borderWidth="0 0 1px 0"
      // boxShadow={boxShadow}
      py="7px"
      px="20px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      h="66px"
      zIndex={56}
      position="sticky"
      top={0}
    >
      <Text
        fontWeight={600}
        color={useColorModeValue("gray.600", "gray.200")}
        fontSize="lg"
      >
        Coinsplan
      </Text>
      <HStack spacing={3} h="40px">
        <CustomConnectButton />
        {/* <Button bg="main.500" color="white" size="md" _hover={{ bg: undefined }} _active={{ bg: undefined }}>
          Connect wallet
        </Button> */}
      </HStack>
    </Box>
  );
}
