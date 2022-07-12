import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FC } from "react";

const TransactionSearchBar: FC = () => {
  return (
    <InputGroup>
      <Input bg="gray.100" border="none" placeholder="Search any account or transaction ID" fontSize={12} _placeholder={{ color: "gray.400"}} minW="360px"/>
      <InputRightElement>
        <Search2Icon color="gray.500" />
      </InputRightElement>
    </InputGroup>
  );
};
export default TransactionSearchBar;
