import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiClock, FiSearch } from "react-icons/fi";
import { useDisplay } from "../contexts/Display";
import Menu from "./Menu";
import MenuForMobile from "./MenuForMobile";
import MoreToolsOnMenuBar from "./MoreToolsOnMenuBar";
import { useState } from "react";

export default function MenuBar() {
  const { currentDisplay } = useDisplay();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const MenuBg = useColorModeValue("#F8F9FB", "gray.900");
  const MenuBorderColor = useColorModeValue("gray.200", "gray.700");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const displaySetter = (name: string) => {
    router.push(`/app/${name}`);
  };

  return (
    <>
      <Box
        className="desktop-only"
        maxW="220px"
        w="100%"
        minH="96%"
        position="fixed"
        top="50px"
        px="20px"
        py="40px"
        bg={MenuBg}
        border="1px solid"
        borderColor={MenuBorderColor}
        borderWidth="0 1px 0 0"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Text size="sm" fontSize="11px" fontWeight={700} color="gray.500">
            SERVICES
          </Text>
          <VStack spacing={0} my="20px">
            <Menu
              displayName="scheduler"
              currentDisplayName={currentDisplay}
              onSelect={displaySetter}
              icon={<FiClock />}
            >
              Scheduler
            </Menu>
            <Menu
              displayName="explorer"
              currentDisplayName={currentDisplay}
              onSelect={displaySetter}
              icon={<FiSearch />}
            >
              Explorer
            </Menu>
          </VStack>
        </Box>
        <Text size="sm" fontSize="11px" fontWeight={700} color="gray.500">
          TOOLS
        </Text>
        <MoreToolsOnMenuBar />
        {/* <HStack spacing={3}>
            <IconButton
              colorScheme="gray"
              variant="solid"
              aria-label="theme-toggler"
              onClick={toggleColorMode}
              fontSize="18px"
              rounded={7}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </IconButton>
            <IconButton
              colorScheme="gray"
              variant="solid"
              aria-label="theme-toggler"
              fontSize="18px"
              rounded={7}
            >
              <IoAnalyticsSharp />
            </IconButton>
            <IconButton
              colorScheme="gray"
              variant="solid"
              aria-label="theme-toggler"
              fontSize="22px"
              rounded={7}
            >
              <MdAccountCircle />
            </IconButton>
          </HStack>
          <HStack spacing={3}>
            <IconButton
              colorScheme="gray"
              variant="solid"
              aria-label="theme-toggler"
              fontSize="18px"
              rounded={7}
            >
              <BsCurrencyExchange />
            </IconButton>
            <IconButton
              colorScheme="gray"
              variant="solid"
              aria-label="theme-toggler"
              fontSize="18px"
              rounded={7}
            >
              <BsGithub />
            </IconButton>
            <IconButton
              colorScheme="gray"
              variant="solid"
              aria-label="theme-toggler"
              fontSize="18px"
              rounded={7}
            >
              <BsFillQuestionCircleFill />
            </IconButton>
          </HStack> */}
      </Box>
      <Box
        className="mobile-only"
        position="fixed"
        zIndex={50}
        bottom={0}
        left={0}
        right={0}
        height="54px"
        borderColor={MenuBorderColor}
        borderWidth="1px 0 0 0"
        px="40px"
        py="10px"
      >
        <HStack justifyContent="space-between" h="full">
          <MenuForMobile
            displayName="scheduler"
            currentDisplayName={currentDisplay}
            onSelect={displaySetter}
            icon={<FiClock />}
          >
            Scheduler
          </MenuForMobile>
          <MenuForMobile
            displayName="explorer"
            currentDisplayName={currentDisplay}
            onSelect={displaySetter}
            icon={<FiSearch />}
          >
            Explorer
          </MenuForMobile>
          <IconButton
            aria-label="theme-toggler"
            onClick={toggleColorMode}
            rounded="full"
            bg="transparent"
            fontSize="24px"
            color={useColorModeValue("gray.300", "gray.700")}
            _hover={{ bg: undefined }}
            _focus={{ bg: undefined }}
            _active={{ bg: undefined }}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
          <IconButton
            aria-label="theme-toggler"
            onClick={() => setIsDrawerOpen(true)}
            rounded="full"
            bg="transparent"
            fontSize="24px"
            color={useColorModeValue("gray.300", "gray.700")}
            _hover={{ bg: undefined }}
            _focus={{ bg: undefined }}
            _active={{ bg: undefined }}
          >
            <HamburgerIcon />
          </IconButton>
        </HStack>
        <Drawer
          placement="bottom"
          onClose={() => setIsDrawerOpen(false)}
          isOpen={isDrawerOpen}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              display="flex"
              justifyContent="space-between"
            >
              More actions
              <CloseButton
                onClick={() => setIsDrawerOpen(false)}
                _focus={{ boxShadow: undefined }}
                _active={{ boxShadow: undefined }}
              />
            </DrawerHeader>
            <DrawerBody>
              <MoreToolsOnMenuBar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
