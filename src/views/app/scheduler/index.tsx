import { Box, Heading, Input } from "@chakra-ui/react";
import { FC } from "react";
import Content from "../../../components/structures/Content";
import AppTemplate from "../components/AppTemplate";
import Schedule from "./Schedule";

const SchedulerPage: FC = () => {
  return (
    <AppTemplate>
      <Content
        bg="#fff"
        minH="100vh"
        color="black"
        display="block"
      >
        <Schedule />
      </Content>
    </AppTemplate>
  );
};
export default SchedulerPage;
