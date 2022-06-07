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
        bg="linear-gradient(132deg, rgba(39,38,99,1) 0%, rgba(57,26,80,1) 100%)"
        minH="100vh"
        display="block"
        color="#fff"
        maxW="98vw"
      >
        <Box className="row" w="100%">
          <Box className="col-md-5" px="4px">
            <Box py="50px" px="4%" bg="#ffffff10" rounded={14}>
              <Overview />
            </Box>
            <Box py="50px" px="4%" bg="#ffffff05" rounded={14} mt="8px"></Box>
          </Box>
          <Box className="col-md-7" px="4px">
            <Box py="50px" px="4%" bg="#00000030" rounded={14} minH="80vh">
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
