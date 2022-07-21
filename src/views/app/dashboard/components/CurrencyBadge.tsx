import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { FC, Fragment } from "react";

interface CurrencyBadgeProps {
  imageUrl?: string;
}

const CurrencyBadge: FC<CurrencyBadgeProps> = ({ imageUrl }) => {
  const currencyBadgeStyles = {
    bg: useColorModeValue("gray.50", "gray.800"),
    borderColor: useColorModeValue("gray.100", "gray.700"),
    color: useColorModeValue("black", "white")
  }
  return (
    <Fragment>
      <Flex
        px={1}
        py={1}
        pe={3}
        mt={2}
        color={currencyBadgeStyles.color}
        bg={currencyBadgeStyles.bg}
        rounded={6}
        justifyContent="space-between"
        alignItems="center"
        border="1px solid"
        borderColor={currencyBadgeStyles.borderColor}
      >
        <Flex gap={2} alignItems="center">
          <Image
            src="https://www.freelogovectors.net/svg10/polygon-token-logo-freelogovectors.net_.svg"
            alt="crypto"
            h="30px"
          />
          <Text fontWeight={500} fontSize={14}>
            MATIC
          </Text>
        </Flex>
        <Text fontWeight={500} fontSize={14}>
          2318.22
        </Text>
      </Flex>
    </Fragment>
  );
};
export default CurrencyBadge;
