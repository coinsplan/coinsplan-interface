import {
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";

const TransactionTable: FC = () => {
  return (
    <TableContainer my="50px">
      <Table variant="simple" colorScheme="whiteAlpha">
        <TableCaption color="#fff" opacity={0.6}>
          Tracked transactions from Coinsplan Scheduler V1
        </TableCaption>
        <Thead>
          <Tr>
            <Th color="#fff">Type</Th>
            <Th color="#fff">To</Th>
            <Th color="#fff" isNumeric>
              Amount
            </Th>
            <Th color="#fff" isNumeric>
              Fee
            </Th>
            <Th color="#fff" isNumeric>
              At
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td color="#3bffb4" fontWeight={600}>TRANSFER</Td>
            <Td maxW="150px" textOverflow="ellipsis" overflow="hidden">
              <Link href="/">0x8FA5289085FE60939D80db11d44FaCC742533b8E</Link>
            </Td>
            <Td isNumeric>25.4 MATIC</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>{new Date(Date.now()).toLocaleString()}</Td>
          </Tr>
          <Tr>
            <Td color="#3bffb4" fontWeight={600}>TRANSFER</Td>
            <Td maxW="150px" textOverflow="ellipsis" overflow="hidden">
              <Link href="/">0x8FA5289085FE60939D80db11d44FaCC742533b8E</Link>
            </Td>
            <Td isNumeric>7.2 BNB</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>{new Date(Date.now()).toLocaleString()}</Td>
          </Tr>
          <Tr>
            <Td color="#82daff" fontWeight={600}>SUBSCRIPTION</Td>
            <Td maxW="150px" textOverflow="ellipsis" overflow="hidden">
              <Link href="/">0x8FA5289085FE60939D80db11d44FaCC742533b8E</Link>
            </Td>
            <Td isNumeric>3.99 BUSD</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>{new Date(Date.now()).toLocaleString()}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default TransactionTable;
