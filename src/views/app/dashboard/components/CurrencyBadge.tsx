import { Flex, Image, Text } from "@chakra-ui/react";
import { FC, Fragment } from "react";

interface CurrencyBadgeProps {
  imageUrl?: string;
}

const CurrencyBadge: FC<CurrencyBadgeProps> = ({ imageUrl }) => {
  return (
    <Fragment>
      <Flex
        px={1}
        py={1}
        pe={3}
        mt={2}
        bg="gray.50"
        rounded="full"
        justifyContent="space-between"
        alignItems="center"
        border="1px solid"
        borderColor="gray.100"
      >
        <Flex gap={2} alignItems="center">
          <Image
            src="https://www.freelogovectors.net/svg10/polygon-token-logo-freelogovectors.net_.svg"
            alt="crypto"
            h="30px"
          />
          <Text color="black" fontWeight={500} fontSize={14}>
            MATIC
          </Text>
        </Flex>
        <Text color="black" fontWeight={500} fontSize={14}>
          2318.22
        </Text>
      </Flex>
    </Fragment>
  );
};
export default CurrencyBadge;
