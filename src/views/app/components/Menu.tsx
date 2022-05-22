import {
  Box,
  Button,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

interface IMenu {
  children?: any;
  displayName: string;
  currentDisplayName?: string | string[];
  onSelect: (element: string) => void;
  icon?: any;
}

export default function Menu(props: IMenu) {

  function useActiveStringValue(v1: string, v2: string) {
    return props.displayName == props.currentDisplayName ? v1 : v2;
  }

  return (
    <Button
      variant="ghost"
      key={`menu-item-${props.displayName}`}
      w="full"
      bg={useActiveStringValue(useColorModeValue("main.100", "main.700"), "")}
      color={useActiveStringValue(
        useColorModeValue("main.500", "main.100"),
        useColorModeValue("gray.600", "gray.400")
      )}
      display="flex"
      justifyContent="start"
      alignItems="center"
      _hover={{ bg: undefined }}
      position="relative"
      onClick={() => props.onSelect(props.displayName)}
      fontWeight={600}
    >
      <Box
        position="absolute"
        top="20%"
        bottom="20%"
        left={0}
        right="98%"
        borderRadius="0 3px 3px 0"
        bg={useActiveStringValue(
          useColorModeValue("main.500", "main.400"),
          "transparent"
        )}
      ></Box>
      {props.icon}
      <Text position="absolute" left={10}>
        {props.children}
      </Text>
    </Button>
  );
}
