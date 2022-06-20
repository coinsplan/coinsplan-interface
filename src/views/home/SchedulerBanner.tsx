import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";

const SchedulerBanner: FC = () => {
  return (
    <Box
      w="full"
      rounded={14}
      minH="100vh"
      bg="linear-gradient(90deg, rgba(55,99,254,1) 0%, rgba(35,71,166,1) 100%)"
      p="5%"
      position="relative"
      zIndex={20}
      overflow="hidden"
    >
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        zIndex={35}
        position="relative"
      >
        <VStack alignItems="start" gap={8}>
          <Heading
            color="#fff"
            mt="40px"
            fontSize={{ sm: "34px", md: "60px" }}
            maxW="400px"
          >
            Just tell us when, and we do.
          </Heading>
          <Text
            color="#fff"
            fontWeight={500}
            fontSize={{ sm: "16px", md: "20px" }}
            maxW="700px"
          >
            Pick a time for your next payment and just lay on the couch. Your
            payment will be transact at that perfect picked time.{" "}
          </Text>
          <Button bg="#fff" color="#000" size="lg">
            Scheduler <ArrowForwardIcon />
          </Button>
        </VStack>
        <Center my="30px">
          <Image
            rounded={60}
            src="https://github.com/coinsplan/resources/blob/main/logos/Scheduler%20Prototype.png?raw=true"
            w="400px"
            alt="scheduler-prototype"
            boxShadow="0 40px 60px #00000070"
          />
        </Center>
      </Flex>
      <Box
        zIndex={16}
        h="55vw"
        w="55vw"
        rounded={100}
        bg="#0D4394"
        position="absolute"
        top="30%"
        right="-10%"
        transform="rotate(62deg)"
      ></Box>
    </Box>
  );
};
export default SchedulerBanner;
