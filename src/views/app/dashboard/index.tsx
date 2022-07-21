import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { useAccount } from "wagmi";
import Content from "../../../components/structures/Content";
import AppTemplate from "../components/AppTemplate";
import AssetSummary from "./AssetSumary";
import DashboardBody from "./DashboardBody";

const DashboardPage: FC = () => {

  const dashboardPageStyles = {
    secondaryBg: useColorModeValue("gray.50", "gray.800")
  }

  return (
    <AppTemplate>
      <Content display="block" maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          <AssetSummary />
        </Flex>
      </Content>
      <Content
        minH="100vh"
        display="block"
        bg={dashboardPageStyles.secondaryBg}
        maxW="container.xl"
        py={5}
      >
        <DashboardBody />
      </Content>
    </AppTemplate>
  );
};
export default DashboardPage;
