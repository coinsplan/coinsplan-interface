import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import CustomConnectButton from "../../../components/ConnectButton";
import { FiMenu } from "react-icons/fi";
import TransactionSearchBar from "../../../components/TransactionSearchBar";
const Navbar: FC = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={70}
      bg="#ffffffaf"
      h="60px"
      px="20px"
      border="solid"
      borderColor="gray.100"
      borderWidth="0 0 1px 0"
      backdropFilter="blur(6px)"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        minH="40px"
        py="10px"
      >
        <Box>
          <Image
            alt="coinsplan-logo"
            h="40px"
            rounded={8}
            src="https://raw.githubusercontent.com/coinsplan/resources/524064751792fee7d493a0313bba5ceec40767e9/logos/icon.svg"
          ></Image>
        </Box>
        <HStack>
          <Box display={{sm: "none", md: "block"}}>
            <TransactionSearchBar />
          </Box>
          <CustomConnectButton height="40px" />
          <Menu autoSelect={false}>
            <MenuButton
              as={Box}
              color="#000"
              bg="transparent"
              _hover={{ bg: "#00000010" }}
              _active={{ bg: undefined }}
              rounded={14}
              fontSize="20px"
              p="10px"
              cursor="pointer"
            >
              <FiMenu />
            </MenuButton>
            <MenuList
              bg="#fff"
              color="gray.700"
              rounded={10}
              overflow="hidden"
              fontSize="14px"
              boxShadow="#00000020"
            >
              <MenuItem _hover={{ bg: "#00000010" }} px={6}>
                My Transactions
              </MenuItem>
              <MenuItem _hover={{ bg: "#00000010" }} px={6}>
                Register
              </MenuItem>
              <MenuItem _hover={{ bg: "#00000010" }} px={6}>
                Docs
              </MenuItem>
              <MenuItem _hover={{ bg: "#00000010" }} px={6}>
                About
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};
export default Navbar;
