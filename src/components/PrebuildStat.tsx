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
}

const PrebuildStat: FC<StatInterface> = ({
  title,
  value,
  total,
  withBg,
  color,
}) => (
  <VStack spacing={6}>
  <Box p="8px" rounded="full" bg={withBg !== undefined ? "#00000020" : ""}>
    <CircularProgress
      value={(value && total) ? value/total*100 : 100}
      size="120px"
      color={color}
      trackColor={color ? `${color}30` : "#ffffff30"}
      thickness="5px"
    >
      <CircularProgressLabel>{value}</CircularProgressLabel>
    </CircularProgress>
  </Box>
  <Text fontWeight={600}>{title}</Text>
  </VStack>
);
export default PrebuildStat;
