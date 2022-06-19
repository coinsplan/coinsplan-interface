import {
  Box,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
interface QrCodeModalInterface {
  open: boolean;
  setOpen: any;
}

const QrCodeModal: FC<QrCodeModalInterface> = ({ open, setOpen }) => {
  
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} isCentered>
      <ModalOverlay />
      <ModalContent
        rounded={22}
        bg="#ffffff"
        color="black"
        h="fit-content"
        border="1px solid"
        borderColor="#ffffff10"
        overflow="hidden"
      >
        <ModalHeader pb="4px" mb="0px">Place QRCode on a camera</ModalHeader>
        <ModalBody fontSize="12px" color="#00000080">For the best experiences, we recommended you to use QRCode with black dots and white background. <Link>Learn more about QR Code scanner.</Link></ModalBody>
        <ModalCloseButton />

        <Box position="relative">
          <Html5QrcodePlugin onClose={() => setOpen(false)}/>
        </Box>
      </ModalContent>
    </Modal>
  );
};
export default QrCodeModal;
