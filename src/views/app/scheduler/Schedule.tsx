import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { useAccount } from "wagmi";
import CustomDateTimePicker from "./CustomDateTimePicker";
import PleaseConnectButton from "./PleaseConnectButton";

const Schedule: FC = () => {
  const { data: account } = useAccount();

  return (
    <Container maxW="500px" p={0}>
      <Box bg="#00000052" rounded={30} w="full" pt="30px" px={2} pb={3}>
        <Heading size="sm" ps={2}>
          Tell us about your plan
        </Heading>
        <VStack alignItems="start" spacing={2} mt="20px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            h="70px"
            rounded={18}
            bg="#ffffff12"
            w="full"
            px="10px"
          >
            <Input
              type="text"
              h="70px"
              variant="scheduler"
              bg="transparent"
              rounded={18}
              placeholder="0.00"
              fontSize="22px"
            />
            <Button
              h="40px"
              rounded={10}
              bg="main.500"
              color="#ffffff"
              fontWeight={500}
              fontSize="16px"
              _hover={{ bg: undefined, transform: "scale(1.03)" }}
              _active={{ bg: undefined }}
              minW="fit-content"
              px="10px"
              transition="300ms ease"
            >
              Select a token <ChevronDownIcon fontSize="28px" />
            </Button>
          </Flex>
          <Input
            type="text"
            h="70px"
            variant="scheduler"
            fontSize="18px"
            rounded={18}
            placeholder="Recipient: 0x..."
          />
          <CustomDateTimePicker />
          {account === null ? (
            <PleaseConnectButton />
          ) : (
            <Button
              type="button"
              bg="main.400"
              color="white"
              _hover={{ bg: undefined }}
              _active={{ bg: undefined }}
              w="full"
              rounded={18}
              h="70px"
              fontSize="18px"
            >
              Set my payment
            </Button>
          )}
        </VStack>
      </Box>
    </Container>
  );
};
export default Schedule;
