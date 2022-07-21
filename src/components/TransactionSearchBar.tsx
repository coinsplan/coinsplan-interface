import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

const TransactionSearchBar: FC = () => {

  const searchBarStyles = {
    bg: useColorModeValue("gray.100", "gray.700")
  }

  return (
    <InputGroup>
      <Input bg={searchBarStyles.bg} border="none" placeholder="Search any account or transaction ID" fontSize={12} _placeholder={{ color: "gray.400"}} minW="360px"/>
      <InputRightElement>
        <Search2Icon color="gray.500" />
      </InputRightElement>
    </InputGroup>
  );
};
export default TransactionSearchBar;
