import { FC } from "react";
import Content from "../../components/structures/Content";
import StaticTemplate from "../../components/structures/StaticTemplate";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const HomePage: FC = () => {
  const router = useRouter();
  return (
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
                <Text fontWeight={500}>
                  Short details about Coinsplan Services
                </Text>
                <HStack spacing={3}>
                  <Button
                    colorScheme="mainNonDynamic"
                    onClick={() => router.push("/app/scheduler")}
                  >
                    Schedule now <ArrowForwardIcon ms="10px" />
                  </Button>
                  <Button onClick={() => router.push("/signup")}>
                    Register your wallet
                  </Button>
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
  );
};
export default HomePage;
