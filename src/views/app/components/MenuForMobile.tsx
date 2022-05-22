import {
  Box,
  Button,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface IMenu {
  children?: any;
  displayName: string;
  currentDisplayName?: string | string[];
  onSelect: (element: string) => void;
  icon?: any;
}

export default function MenuForMobile(props: IMenu) {

  function useActiveStringValue(v1: string, v2: string) {
    return props.displayName == props.currentDisplayName ? v1 : v2;
  }

  return (
    <IconButton
      aria-label={props.displayName}
      key={`menu-item-${props.displayName}`}
      bg="transparent"
      color={useActiveStringValue(
        useColorModeValue("main.400", "main.300"),
        useColorModeValue("gray.300", "gray.700")
      )}
      display="flex"
      justifyContent="center"
      alignItems="center"
      _hover={{ bg: undefined }}
      _focus={{ bg: undefined }}
      _active={{ bg: undefined }}
      position="relative"
      onClick={() => props.onSelect(props.displayName)}
      fontWeight={600}
      fontSize="24px"
    >
      {props.icon}
    </IconButton>
  );
}
