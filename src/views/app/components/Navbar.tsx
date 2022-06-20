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
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar: FC = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={70}
      bg="#d9e5ff0a"
      h="60px"
      px="20px"
      backdropFilter="blur(4px)"
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
          <CustomConnectButton height="40px" />
          <Menu autoSelect={false}>
            <MenuButton as={Button} color="#fff" bg="#00000030" _hover={{ bg: "#00000060"}} _active={{bg: undefined}} rounded={14} fontSize="22px">
              <HiMenuAlt3 />
            </MenuButton>
            <MenuList bg="#1a1a1c" color="#ffffff90" rounded={24} overflow="hidden" fontSize="14px" border="1px solid" borderColor="#030a2980">
              <MenuItem _hover={{ bg: "#ffffff10"}} px={6}>CoinsID</MenuItem>
              <MenuItem _hover={{ bg: "#ffffff10"}} px={6}>My transactions</MenuItem>
              <MenuItem _hover={{ bg: "#ffffff10"}} px={6}>Register</MenuItem>
              <MenuItem _hover={{ bg: "#ffffff10"}} px={6}>Docs</MenuItem>
              <MenuItem _hover={{ bg: "#ffffff10"}} px={6}>About</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};
export default Navbar;
