import { Box, Heading, Input } from "@chakra-ui/react";
import { FC } from "react";
import Content from "../../../components/structures/Content";
import AppTemplate from "../components/AppTemplate";
import Schedule from "./Schedule";

const SchedulerPage: FC = () => {
  return (
    <AppTemplate>
      <Content
        bg="linear-gradient(20deg, rgba(248,254,255,1) 0%, rgba(227,232,255,1) 100%)"
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
