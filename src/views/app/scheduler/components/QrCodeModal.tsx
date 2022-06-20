import {
  Box,
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { shortenAddress } from "../../../../utils/address";
import { noButtonEffect } from "../../../../utils/components/effects";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
interface QrCodeModalInterface {
  open: boolean;
  setOpen: any;
}

const QrCodeModal: FC<QrCodeModalInterface> = ({ open, setOpen }) => {
  const [scannedAddress, setScannedAddress] = useState<string>();
  const [isScannerOpen, setIsScannerOpen] = useState(true);
  const reset = () => {
    setScannedAddress(undefined);
    setIsScannerOpen(true);
  };
  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open]);
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} isCentered>
      <ModalOverlay />
      <ModalContent
        rounded={22}
        bg="#ffffff"
        color="black"
        minH="400px"
        border="1px solid"
        borderColor="#ffffff10"
        overflow="hidden"
      >
        <ModalHeader pb="4px" mb="0px">
          {isScannerOpen
            ? "Place QR Code on a camera"
            : scannedAddress
            ? "We found this address"
            : "Invalid QR Code. 🤔"}
        </ModalHeader>
        <ModalBody>
          {isScannerOpen ? (
            <>
              <Text fontSize="12px" color="#00000080">
                For the best experiences, we recommended you to use QRCode with
                black dots and white background.{" "}
                <Link>Learn more about QR Code scanner.</Link>
              </Text>
            </>
          ) : scannedAddress ? (
            <>
              <Text fontSize="12px" color="#00000080">
                Please recheck the address below.
              </Text>
              <Box
                my="30px"
                textAlign="center"
                p="8px"
                bg="gray.100"
                rounded={12}
                color="gray.800"
                fontWeight={600}
                fontFamily="'DM Mono' !important"
              >
                {shortenAddress(scannedAddress)}
              </Box>
            </>
          ) : (
            <Text fontSize="12px" color="#00000080">
              This QR Code may not contained Ethereum address.
            </Text>
          )}
        </ModalBody>
        <ModalCloseButton />

        <Box position="relative">
          {isScannerOpen ? (
            <Html5QrcodePlugin
              onClose={() => setOpen(false)}
              setScannedAddress={setScannedAddress}
              isScannerOpen={isScannerOpen}
              setIsScannerOpen={setIsScannerOpen}
            />
          ) : null}
        </Box>
        {isScannerOpen ? null : scannedAddress ? (
          <>
            <ModalFooter gap="10px">
              <Button onClick={reset}>Try another</Button>
              <Button
                bg="main.400"
                color="white"
                _hover={noButtonEffect}
                _active={noButtonEffect}
              >
                Continue
              </Button>
            </ModalFooter>
          </>
        ) : (
          <ModalFooter>
            <Button onClick={reset}>Try another</Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};
export default QrCodeModal;
