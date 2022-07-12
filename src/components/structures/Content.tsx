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
  maxW?: string;
  py?: string | number;
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
  py,
}) => {
  return (
    <Box bg={bg} minW="100%">
      <Container
        position="relative"
        maxW={maxW ? maxW : "container.xl"}
        minH={minH}
        display={display}
        justifyContent={justifyContent}
        alignItems={alignItems}
        color={color}
        py={py ? py : "100px"}
      >
        {children}
      </Container>
    </Box>
  );
};
export default Content;
