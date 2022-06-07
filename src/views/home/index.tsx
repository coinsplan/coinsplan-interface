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
  VStack,
} from "@chakra-ui/react";
import Content from "../../components/structures/Content";
import StaticTemplate from "../../components/structures/StaticTemplate";
import Clock from "./Clock";

const HomePage: FC = () => {
  return (
    <StaticTemplate>
      <Content
        bg="linear-gradient(132deg, rgba(0,5,24,1) 0%, rgba(6,63,150,1) 100%)"
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="#fff"
      >
        <VStack w="full" spacing="100px" h="fit-content">
          <Box className="row" w="full">
            <Center className="col-md my-4">
              <Clock />
            </Center>
            <Center className="col-md my-4" justifyContent="start">
              <Box>
                <Heading fontSize="400%">Crypto</Heading>
                <Heading fontSize="400%">Arrives</Heading>
                <Heading
                  fontSize="500%"
                  color="#00ffef"
                  textShadow="0 0 12px #40fff3a0, 0 0 151px #0fa00070"
                >
                  On time
                </Heading>
              </Box>
            </Center>
          </Box>
          <Box className="row">
            <Box className="col-sm my-2">
              <Button
                bg="white"
                size="xl"
                color="black"
                px="20px"
                w="100%"
                _hover={{ bg: undefined }}
                _active={{ bg: undefined }}
              >
                Schedule now <ArrowForwardIcon ms="10px" />
              </Button>
            </Box>
            <Box className="col-sm my-2">
              <Button
                bg="#ffffff20"
                size="xl"
                color="#fff"
                px="20px"
                w="100%"
                _hover={{ bg: undefined }}
                _active={{ bg: undefined }}
              >
                Register wallet
              </Button>
            </Box>
          </Box>
        </VStack>
      </Content>
    </StaticTemplate>
  );
};
export default HomePage;
