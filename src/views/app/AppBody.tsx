import { Box, Flex } from "@chakra-ui/react";
import AppWindow from "./components/AppWindow";
import MenuBar from "./components/MenuBar";

interface IAppBody {
  children?: any;
}

export default function AppBody({ children }: IAppBody) {
  return (
    <Box minH="94vh">
      <Flex h="full" position="relative">
        <MenuBar />
        <AppWindow>{children}</AppWindow>
      </Flex>
    </Box>
  );
}
