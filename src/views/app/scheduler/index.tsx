import { Box, Heading, Input } from "@chakra-ui/react";
import { FC } from "react";
import Content from "../../../components/structures/Content";
import AppTemplate from "../components/AppTemplate";
import Schedule from "./Schedule";

const SchedulerPage: FC = () => {
  return (
    <AppTemplate>
      <Content
        bg="linear-gradient(5deg, rgba(29,5,42,1) 13%, rgba(9,24,99,1) 100%)"
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
