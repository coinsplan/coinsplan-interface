import { Box, Divider, Flex, Heading, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FC } from "react";

interface NameTag {
  address: string;
  name: string;
}

interface TransactionCardProps {
  tx: {
    txId: string;
    from: NameTag;
    to: NameTag;
    time: string;
    state: number;
  };
}

const TransactionCard: FC<TransactionCardProps> = ({ tx }) => {
  const styles = {
    dividerColor: useColorModeValue("gray.200", "gray.800")
  }
  return (
    <VStack gap={2} alignItems="start" my={3}>
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Text fontSize={12} fontWeight={600}>{(tx.to.name || tx.to.address).toUpperCase()}</Text>
        <Text>$3.99</Text>
      </Flex>
      
      <Divider color={styles.dividerColor} />
    </VStack>
  );
};

export default TransactionCard;
