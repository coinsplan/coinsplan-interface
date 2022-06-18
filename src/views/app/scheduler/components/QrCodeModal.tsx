import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import useCamera from "../../../../hooks/useCamera";
interface QrCodeModalInterface {
  open: boolean;
  setOpen: any;
}

const QrCodeModal: FC<QrCodeModalInterface> = ({ open, setOpen }) => {
  const { videoRef, start, stop} = useCamera();

  useEffect(() => {
    return () => stop();
  }, []);

  useEffect(() => {
    if (open) {
      start()
    }
    else {
      stop()
    }
  }, [open])

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} isCentered>
      <ModalOverlay />
      <ModalContent
        rounded={22}
        bg="#ffffff"
        color="black"
        minH="40vh"
        h="fit-content"
        border="1px solid"
        borderColor="#ffffff10"
        overflow="hidden"
      >
        <ModalHeader>Place QRCode on a camera</ModalHeader>
        <ModalCloseButton />

        <Box position="relative">
          <video
            ref={videoRef}
            autoPlay
            height="100px"
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </ModalContent>
    </Modal>
  );
};
export default QrCodeModal;
