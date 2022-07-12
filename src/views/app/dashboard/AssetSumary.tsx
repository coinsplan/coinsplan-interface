import {
  Center,
  Heading,
  HStack,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { ACCEPT_TOKENS } from "../../../constants/tokens";
import bitkubIcon from "../../../../public/bitkub.svg";
const AssetSummary: FC = () => {
  return (
    <Fragment>
      <VStack alignItems="start" spacing={5}>
        <Heading size="sm">
          Total assets
        </Heading>
        <Heading>$ 3364.7824</Heading>
        <HStack spacing={5}>
          {Object.keys(ACCEPT_TOKENS).map((tokenKey: string, index: number) => (
            <Image
              key={index}
              alt={`${tokenKey}-logo`}
              src={ACCEPT_TOKENS[tokenKey].imageUrl}
              h="22px"
            />
          ))}
          <Center fontSize="12px" bg="gray.800" ps="4px" pe="8px" py="6px" rounded="full" gap={2} fontWeight={500} color="white" whiteSpace="nowrap">
            <Image src={bitkubIcon.src} alt="bitkub" h="14px"/>
            <Text>Buy on Bitkub</Text>
          </Center>
        </HStack>
      </VStack>
    </Fragment>
  );
};
export default AssetSummary;
