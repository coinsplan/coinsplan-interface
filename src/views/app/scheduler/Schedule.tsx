import { ArrowDownIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { BiTime } from "react-icons/bi";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useAccount } from "wagmi";
import CustomDateTimePicker from "./CustomDateTimePicker";
import PleaseConnectButton from "./PleaseConnectButton";
import { IoScanSharp } from "react-icons/io5";
import QrCodeModal from "./components/QrcodeModal";
const Schedule: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQrCodeModalOpen, setIsQrCodeModalOpen] = useState(false);
  const { data: account } = useAccount();

  const onModalClose = () => setIsModalOpen(false);

  return (
    <Container maxW="500px" p={0}>
      <Modal isOpen={isModalOpen} onClose={onModalClose} isCentered>
        <ModalOverlay />
        <ModalContent
          rounded={22}
          bg="#ffffff"
          color="black"
          minH="40vh"
          maxH="600px"
          border="1px solid"
          borderColor="#ffffff10"
        >
          <ModalHeader>Select a token</ModalHeader>
          <ModalCloseButton />

          <VStack spacing={3}></VStack>
        </ModalContent>
      </Modal>
      <QrCodeModal open={isQrCodeModalOpen} setOpen={setIsQrCodeModalOpen} />

      <Box bg="#ffffff" rounded={30} w="full" pt="30px" px={2} pb={3}>
        <Heading size="sm" ps={2}>
          Tell us about your plan
        </Heading>
        <VStack alignItems="start" spacing={2} mt="20px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            h="70px"
            rounded={18}
            bg="#0000000a"
            w="full"
            pr="10px"
          >
            <Input
              type="text"
              h="70px"
              variant="scheduler"
              bg="transparent"
              rounded={18}
              placeholder="0.0"
              fontWeight={500}
              fontSize="26px"
              fontFamily="'DM Mono' !important"
            />
            <Button
              h="40px"
              rounded={14}
              bg="white"
              color="black"
              fontWeight={500}
              fontSize="16px"
              _hover={{ bg: undefined, transform: "scale(1.03)" }}
              _active={{ bg: undefined }}
              minW="fit-content"
              px="10px"
              transition="300ms ease"
              onClick={() => setIsModalOpen(true)}
            >
              Select a token <ChevronDownIcon fontSize="28px" />
            </Button>
          </Flex>
          <Box w="full" position="relative">
            <Center
              position="absolute"
              top="-5px"
              right="50%"
              fontSize="16px"
              transform="translate(50%,-50%)"
              bg="#f0f0f0"
              p="5px"
              border="4px solid"
              borderColor="white"
              zIndex={59}
              rounded={12}
              color="black"
            >
              <ArrowDownIcon />
            </Center>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              h="70px"
              rounded={18}
              bg="#0000000a"
              w="full"
              pr="10px"
            >
              <Input
                type="text"
                h="70px"
                variant="scheduler"
                bg="transparent"
                rounded={18}
                placeholder="0x.."
                fontWeight={500}
                fontSize="26px"
                fontFamily="'DM Mono' !important"
              />
              <IconButton
                aria-label="qrcode-scanner"
                bg="transparent"
                _hover={{ bg: "#00000010" }}
                onClick={() => setIsQrCodeModalOpen(true)}
              >
                <IoScanSharp size="28px" />
              </IconButton>
            </Flex>
          </Box>
          <CustomDateTimePicker />
          <Text px="4px" fontSize="12px" opacity={0.6}>
            Tap on the input above or the calendar icon to pick a time.
          </Text>
          {account === null ? (
            <PleaseConnectButton />
          ) : (
            <Button
              type="button"
              bg="main.400"
              color="white"
              _hover={{ bg: undefined }}
              _active={{ bg: undefined }}
              w="full"
              rounded={18}
              h="70px"
              fontSize="18px"
              gap={2}
            >
              <BiTime size="26px" /> Set my payment
            </Button>
          )}
        </VStack>
      </Box>
    </Container>
  );
};
export default Schedule;
