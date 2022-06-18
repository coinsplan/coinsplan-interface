import { Box, Heading, HStack } from "@chakra-ui/react";
import { FC } from "react";
import { useAccount } from "wagmi";
import Content from "../../../components/structures/Content";
import AppTemplate from "../components/AppTemplate";
import DashboardBody from "./DashboardBody";

const DashboardPage: FC = () => {
  
  return (
    <AppTemplate>
      <Content
        bg="#131417"
        minH="100vh"
        display="block"
        color="#fff"
        maxW="container.xl"
      >
        <DashboardBody />
      </Content>
    </AppTemplate>
  );
};
export default DashboardPage;
