import { Box, Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import { useAccount } from "wagmi";
import Content from "../../../components/structures/Content";
import AppTemplate from "../components/AppTemplate";
import AssetSummary from "./AssetSumary";
import DashboardBody from "./DashboardBody";

const DashboardPage: FC = () => {
  return (
    <AppTemplate>
      <Content display="block" color="#000" maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <AssetSummary />
        </Flex>
      </Content>
      <Content
        minH="100vh"
        display="block"
        bg="gray.50"
        maxW="container.xl"
        py={5}
      >
        <DashboardBody />
      </Content>
    </AppTemplate>
  );
};
export default DashboardPage;
