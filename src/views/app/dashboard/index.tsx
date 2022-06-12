import { Box, Heading, HStack } from "@chakra-ui/react";
import { FC } from "react";
import Content from "../../../components/structures/Content";
import AppTemplate from "../components/AppTemplate";
import Overview from "./Overview";
import TransactionTable from "./TransactionTable";

const DashboardPage: FC = () => {
  return (
    <AppTemplate>
      <Content
        bg="black"
        minH="100vh"
        display="block"
        color="#fff"
        maxW="98vw"
      >
        <Box className="row m-0" w="100%">
          <Box className="col-lg-5" px="4px">
            <Box py="50px" px="4%" bg="#ffffff20" rounded={14}>
              <Overview />
            </Box>
            <Box py="50px" px="4%" bg="#ffffff05" rounded={14} mt="8px"></Box>
          </Box>
          <Box className="col-lg-7" px="4px">
            <Box py="50px" px="4%" bg="#ffffff20" rounded={14} minH="80vh">
              <Heading>Transactions</Heading>
              <TransactionTable />
            </Box>
          </Box>
        </Box>
      </Content>
    </AppTemplate>
  );
};
export default DashboardPage;
