import { Box, Center, Container, Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import AppIcon from "./components/AppIcon";

const icon = {
  scheduler:
    "https://raw.githubusercontent.com/coinsplan/resources/294a98d45e55ce376ddbdb44e2fd73f05342e6d2/logos/crypto-service-icon.svg",
  explorer:
    "https://raw.githubusercontent.com/coinsplan/resources/294a98d45e55ce376ddbdb44e2fd73f05342e6d2/logos/explorer-icon.svg",
  account:
    "https://raw.githubusercontent.com/coinsplan/resources/294a98d45e55ce376ddbdb44e2fd73f05342e6d2/logos/account-icon.svg",
  cryptoService:
    "https://raw.githubusercontent.com/coinsplan/resources/294a98d45e55ce376ddbdb44e2fd73f05342e6d2/logos/scheduler-icon.svg",
};

const CoinsplanAppWelcomePage: FC = () => {
  return (
    <Container maxW="container.xl">
      <Center minH="100vh" py="60px">
        <VStack spacing={10}>
          <Heading size="lg">Quick start your crypto activities</Heading>
          <Box className="row">
            <Box className="col-sm">
              <AppIcon name="Scheduler" src={icon.scheduler} path="/app/scheduler"/>
            </Box>
            <Box className="col-sm">
              <AppIcon name="Explorer" src={icon.explorer} path="/app/explorer"/>
            </Box>
            <Box className="col-sm">
              <AppIcon name="Account" src={icon.account} path="/app/account"/>
            </Box>
            <Box className="col-sm">
              <AppIcon name="Crypto Service" src={icon.cryptoService} path="/app/scheduler"/>
            </Box>
          </Box>
        </VStack>
      </Center>
    </Container>
  );
};
export default CoinsplanAppWelcomePage;
