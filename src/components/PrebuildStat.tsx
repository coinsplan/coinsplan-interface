import {
  Box,
  Text,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Heading,
  CircularProgress,
  CircularProgressLabel,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";

interface StatInterface {
  title?: any;
  value?: number;
  total?: number;
  withBg?: boolean;
  color?: string;
  size?: any;
  fontSize?: any;
}

const PrebuildStat: FC<StatInterface> = ({
  title,
  value,
  total,
  withBg,
  color,
  size,
  fontSize,
}) => (
  <VStack spacing={6}>
  <Box p="8px" rounded="full" bg={withBg !== undefined ? "#00000020" : ""}>
    <CircularProgress
      value={(value && total) ? value/total*100 : 100}
      size={size ? size : "100px"}
      color={color}
      trackColor={color ? `${color}30` : "#ffffff30"}
      thickness="7px"
    >
      <CircularProgressLabel fontSize={fontSize ? fontSize: "40px"}>{value}</CircularProgressLabel>
    </CircularProgress>
  </Box>
  <Text fontWeight={600}>{title}</Text>
  </VStack>
);
export default PrebuildStat;
