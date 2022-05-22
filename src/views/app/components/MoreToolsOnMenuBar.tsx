import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Text, useColorMode, VStack } from "@chakra-ui/react";
import { FC } from "react";
import {
  BsCurrencyExchange,
  BsGithub,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const MoreToolsOnMenuBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack spacing={0} my="20px" alignItems="start">
      <Button
        variant="ghost"
        w="full"
        justifyContent="start"
        gap={3}
        onClick={toggleColorMode}
        opacity={0.7}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        {colorMode === "light" ? "Dark theme" : "Light theme"}
      </Button>
      <Button
        variant="ghost"
        w="full"
        justifyContent="start"
        gap={3}
        opacity={0.7}
      >
        <IoAnalyticsSharp />
        Analytics
      </Button>
      <Button
        variant="ghost"
        w="full"
        justifyContent="start"
        gap={3}
        opacity={0.7}
      >
        <MdAccountCircle />
        Account
      </Button>
      <Button
        variant="ghost"
        w="full"
        justifyContent="start"
        gap={3}
        opacity={0.7}
      >
        <BsCurrencyExchange />
        Get CUPA
      </Button>
      <Button
        variant="ghost"
        w="full"
        justifyContent="start"
        gap={3}
        opacity={0.7}
      >
        <BsGithub />
        GitHub
      </Button>
      <Button
        variant="ghost"
        w="full"
        justifyContent="start"
        gap={3}
        opacity={0.7}
      >
        <BsFillQuestionCircleFill />
        How to
      </Button>
    </VStack>
  );
};

export default MoreToolsOnMenuBar;
