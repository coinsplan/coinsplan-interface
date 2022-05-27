import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";

interface IContent {
  children?: any;
  bg?: string;
  minH?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
}

const Content: FC<IContent> = ({
  children,
  bg,
  minH,
  display,
  justifyContent,
  alignItems,
}) => {
  return (
    <Box bg={bg}>
      <Container maxW="container.xl" minH={minH} display={display} justifyContent={justifyContent} alignContent={alignItems}>
          { children }
      </Container>
    </Box>
  );
};
export default Content;
