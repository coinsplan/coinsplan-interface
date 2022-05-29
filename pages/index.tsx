import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, GridItem, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Content from "../src/components/structures/Content";
import StaticTemplate from "../src/components/structures/StaticTemplate";

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Coinsplan</title>
      </Head>
      <StaticTemplate>
        <Content
          minH="70vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid templateColumns="repeat(2, 1fr)" gap={3}>
            <GridItem rowSpan={1}>
              <Box maxW="400px">
                <VStack alignItems="start" spacing={7}>
                  <Heading lineHeight={1.5} fontFamily="Poppins !important">
                    Plans for your next crypto payments.
                  </Heading>
                  <Text fontWeight={500}>Short details about Coinsplan Services</Text>
                  <HStack spacing={3}>
                    <Button colorScheme="mainNonDynamic" onClick={() => router.push("/app/scheduler")}>Schedule now <ArrowForwardIcon ms="10px"/></Button>
                    <Button onClick={() => router.push("/signup")}>Register your wallet</Button>
                  </HStack>
                </VStack>
              </Box>
            </GridItem>
            <GridItem
              rowSpan={1}
              display={{ sm: "none", md: "none", lg: "block" }}
            >
              1234
            </GridItem>
          </Grid>
        </Content>
      </StaticTemplate>
    </>
  );
};

export default Home;
