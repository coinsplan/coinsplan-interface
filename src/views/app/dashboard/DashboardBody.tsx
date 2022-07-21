import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { useAccount } from "wagmi";
import AssetSummary from "./AssetSumary";
import TransactionTable from "./TransactionTable";
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
          <Heading fontSize={12} fontWeight={700} color="gray.600" mb={10}>
            TRANSACTIONS
          </Heading>
          <TransactionTable />
        </Box>
      </SimpleGrid>
    </Fragment>
  );
};
export default DashboardBody;
