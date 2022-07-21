import { Box, Heading, Input, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import Content from "../../../components/structures/Content";
import AppTemplate from "../components/AppTemplate";
import Schedule from "./Schedule";

const SchedulerPage: FC = () => {
  const styles = {
    bg: useColorModeValue("white", "linear-gradient(169deg, rgba(27,27,31,1) 25%, rgba(54,56,79,1) 100%)")
  }
  return (
    <AppTemplate>
      <Content
        bg={styles.bg}
        minH="100vh"
        display="block"
      >
        <Schedule />
      </Content>
    </AppTemplate>
  );
};
export default SchedulerPage;
