import { FC } from "react";
import Content from "../../../components/structures/Content";
import AppTemplate from "../components/AppTemplate";

const SchedulerPage: FC = () => {
  return (
    <AppTemplate>
      <Content
        bg="linear-gradient(132deg, rgba(104,0,255,1) 0%, rgba(6,150,133,1) 100%)"
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="#fff"
      >
      </Content>
    </AppTemplate>
  );
};
export default SchedulerPage;
