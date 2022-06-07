import { Box, Heading, HStack } from "@chakra-ui/react";
import { FC } from "react";
import Content from "../../../components/structures/Content";
import AppTemplate from "../components/AppTemplate";
import Overview from "./Overview";

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
					<Box className="col-md-5">
						<Box py="50px" px="30px">
							<Overview />							
						</Box>
					</Box>
					<Box className="col-md-6">

					</Box>
				</Box>
      </Content>
    </AppTemplate>
  );
};
export default DashboardPage;
