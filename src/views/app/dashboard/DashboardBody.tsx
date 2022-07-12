import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { useAccount } from "wagmi";
import AssetSummary from "./AssetSumary";
import WalletActions from "./WalletActions";

const DashboardBody: FC = () => {
  const { data: account } = useAccount();
  if (account === null) {
    return null;
  }
  return (
    <Fragment>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing="20px">
        <Box gap={6}>
          <WalletActions />
        </Box>

        <Box py={6}>
          <Heading size="sm" color="gray.600">
            Transactions
          </Heading>
        </Box>
      </SimpleGrid>
    </Fragment>
  );
};
export default DashboardBody;
