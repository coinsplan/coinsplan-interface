import { Input, InputGroup, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FC } from "react";

const RecipientInput: FC = () => {
  return (
    <VStack spacing={2} alignItems="start" w="full">
      <Text fontSize="14px" fontWeight={500} opacity={0.5}>
        Recipient
      </Text>
      <InputGroup
        fontWeight={600}
        bg={useColorModeValue("gray.50", "gray.800")}
        borderColor={useColorModeValue("gray.300", "gray.600")}
      >
        <Input />
      </InputGroup>
    </VStack>
  );
};
export default RecipientInput;
