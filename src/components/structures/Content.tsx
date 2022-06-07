import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";

interface IContent {
  children?: any;
  bg?: string;
  color?: string;
  minH?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  maxW?: string
}

const Content: FC<IContent> = ({
  children,
  bg,
  color,
  minH,
  display,
  justifyContent,
  alignItems,
  maxW,
}) => {
  return (
    <Box bg={bg} minW="100%">
      <Container
        maxW={maxW ? maxW : "container.xl"}
        minH={minH}
        display={display}
        justifyContent={justifyContent}
        alignItems={alignItems}
        color={color}
        py="100px"
      >
        {children}
      </Container>
    </Box>
  );
};
export default Content;
