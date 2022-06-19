import {
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Heading,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { ethers } from "ethers";
import { shortenAddress } from "../../../../utils/address";

interface Html5QrcodePluginInterface {
  onClose: () => void;
  setScannedAddress: any;
  isScannerOpen: boolean;
  setIsScannerOpen: any;
}

const Html5QrcodePlugin: FC<Html5QrcodePluginInterface> = ({
  onClose,
  setScannedAddress,
  isScannerOpen,
  setIsScannerOpen,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [flip, setFlip] = useState<boolean>(false);

  const html5Qrcode = useRef<Html5Qrcode>();

  const findETHAddress = (str: string): string | undefined => {
    for (var i = 0; i < str.length; i++) {
      if (str.slice(i, i + 2) === "0x") {
        let addr = str.slice(i, i + 42);
        if (ethers.utils.isAddress(addr)) {
          return addr;
        }
      }
    }
    return undefined;
  };

  const qrCodeSuccessCallback = (decodedText: string, decodedResult: any) => {
    const scannedAddress = findETHAddress(decodedText);
    setScannedAddress(scannedAddress);
    clearScanner();
    setIsScannerOpen(false);
  };

  const qrCodeErrorCallback = () => {};

  const startScanner = () => {
    const config = { fps: 10 };
    html5Qrcode.current?.start(
      { facingMode: "environment" },
      config,
      qrCodeSuccessCallback,
      qrCodeErrorCallback
    );
  };

  const clearScanner = () => {
    try {
      html5Qrcode.current?.stop();
      html5Qrcode.current?.clear();
    } catch (err) {}
  };

  const init = () => {
    const html5QrCode = new Html5Qrcode("scanner-1");
    html5Qrcode.current = html5QrCode;
    setLoading(false);
  };

  useEffect(() => {
    init();
    return () => {
      clearScanner();
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      startScanner();
    }
  }, [loading]);

  return (
    <>
      {!isScannerOpen ? (
        <ModalBody>
        </ModalBody>
      ) : null}

      <Box position="relative">
        <Button
          size="sm"
          fontSize="12px"
          position="absolute"
          top="6px"
          right="6px"
          zIndex={56}
          onClick={() => setFlip(!flip)}
          opacity={0.7}
        >
          Flip video
        </Button>
        <Box
          id="scanner-1"
          className={flip ? "flip" : ""}
          zIndex={55}
          rounded={6}
          overflow="hidden"
        />
      </Box>
    </>
  );
};
export default Html5QrcodePlugin;
