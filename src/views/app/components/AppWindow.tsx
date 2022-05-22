import { Box } from "@chakra-ui/react";

interface IAppWindow {
  children?: any;
}

export default function AppWindow({ children }: IAppWindow) {
  return (
    <>
      <Box
        px="4%"
        py="40px"
        position="absolute"
        left="220px"
        className="desktop-only"
      >
        {children}
      </Box>

      <Box px="20px" py="40px" position="relative" className="mobile-only">
        {children}
      </Box>
    </>
  );
}
