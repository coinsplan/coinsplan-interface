import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import AmountInput from "./AmountInput";
import FeeInput from "./FeeInput";
import RecipientInput from "./RecipientInput";

const SchedulerDisplay: FC = () => {
  return (
    <>
      <Heading>Crypto Scheduler</Heading>
      <Text my="20px" opacity={0.5}>
        Set a time for your next crypto payments.
      </Text>
      <VStack spacing={8} alignItems="start" my="60px" w="100%">
        <AmountInput />
        <RecipientInput />
        <FeeInput />
      </VStack>
    </>
  );
};
export default SchedulerDisplay;
