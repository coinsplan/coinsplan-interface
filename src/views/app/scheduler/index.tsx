import { Box, Heading, Input } from "@chakra-ui/react";
import { FC } from "react";
import Content from "../../../components/structures/Content";
import AppTemplate from "../components/AppTemplate";
import Schedule from "./Schedule";

const SchedulerPage: FC = () => {
  return (
    <AppTemplate>
      <Content
        bg="linear-gradient(0deg, rgba(31,28,28,1) 0%, rgba(23,29,54,1) 100%)"
        minH="100vh"
        color="#fff"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Schedule />
      </Content>
    </AppTemplate>
  );
};
export default SchedulerPage;
