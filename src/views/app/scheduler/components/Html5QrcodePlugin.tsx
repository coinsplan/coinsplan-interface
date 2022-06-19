import { Box, Button, Center, CircularProgress } from "@chakra-ui/react";
import { FC, useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

interface Html5QrcodePluginInterface {
  onClose: () => void
}

const Html5QrcodePlugin: FC<Html5QrcodePluginInterface> = ({ onClose }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [rendered, setRendered] = useState<boolean>(false);
  const html5Qrcode = useRef<Html5Qrcode>();

  const qrCodeSuccessCallback = (decodedText: string, decodedResult: any) => {
    alert(decodedText);
    clearScanner();
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
      onClose()
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
      {loading ? (
        <Center>
          <CircularProgress isIndeterminate color="main.400" />
        </Center>
      ) : null}
      <Box id="scanner-1" />
    </>
  );
};
export default Html5QrcodePlugin;
