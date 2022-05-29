import { Box } from "@chakra-ui/react";
import { FC } from "react";

interface IScreenFixAuthTemplate {
  children?: any;
}
const ScreenFixAuthTemplate: FC<IScreenFixAuthTemplate> = ({ children }) => {
  return (
    <>
      <Box>{children}</Box>
    </>
  );
};
export default ScreenFixAuthTemplate;
