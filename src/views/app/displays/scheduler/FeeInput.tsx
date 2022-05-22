import {
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";

const FeeInput: FC = () => {
  return (
    <VStack spacing={2} alignItems="start" w="full">
      <Text fontSize="14px" fontWeight={500} opacity={0.5}>
        Fee
      </Text>
      <InputGroup
        fontWeight={600}
        bg={useColorModeValue("gray.50", "gray.800")}
        borderColor={useColorModeValue("gray.300", "gray.600")}
        w="100%"
        maxW="500px"
      >
        <Input />
        <InputRightElement me="10px" opacity={0.6} fontSize="12px">
          CUPA
        </InputRightElement>
      </InputGroup>
    </VStack>
  );
};
export default FeeInput;
