import { FC, useEffect, useRef, useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Content from "../../components/structures/Content";
import StaticTemplate from "../../components/structures/StaticTemplate";
import { useRouter } from "next/router";
import SchedulerBanner from "./SchedulerBanner";

const HomePage: FC = () => {
  const router = useRouter();

  return (
    <StaticTemplate>
      <Content
        bg="#fff"
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VStack spacing="50px">
          <Box textAlign="center">
            <Heading fontSize={{ sm: "38px", md: "38px", lg: "70px" }}>
              {"What's your"}
            </Heading>
            <Heading fontSize={{ sm: "38px", md: "38px", lg: "70px" }}>
              {"crypto plan"}
            </Heading>
          </Box>
          <Box textAlign="center">
            <Text fontSize="20px">
              Make a cryptocurrency payment transacts at the right moment.
            </Text>
          </Box>
          <HStack gap={4} spacing={0} flexWrap="wrap">
            <Button
              size="lg"
              w={{ sm: "full", lg: "auto" }}
              colorScheme="mainNonDynamic"
              onClick={() => router.push("/app/scheduler")}
            >
              Schedule now
            </Button>
            <Button size="lg" w={{ sm: "full", lg: "auto" }} onClick={() => router.push("/signup")}>
              Register wallet
            </Button>
          </HStack>
        </VStack>
      </Content>
      <Content maxW="1800px" bg="#ffffff" py="10px">
        <Box w="full" rounded={14} minH="100vh" bg="#00000010" p="20px"></Box>
      </Content>
      <Content maxW="1800px" bg="#ffffff" py="10px">
        <SchedulerBanner />
      </Content>
      <Content maxW="1800px" bg="#ffffff" py="10px">
        <Box
          w="full"
          rounded={14}
          minH="100vh"
          bg="linear-gradient(90deg, rgba(66,230,240,1) 0%, rgba(35,106,166,1) 100%)"
          p="20px"
        ></Box>
      </Content>
      <Content maxW="1800px" bg="#ffffff" py="10px">
        <Box
          w="full"
          rounded={14}
          minH="100vh"
          bg="linear-gradient(90deg, rgba(110,60,255,1) 0%, rgba(75,13,155,1) 100%)"
          p="20px"
        ></Box>
      </Content>
    </StaticTemplate>
  );
};
export default HomePage;
