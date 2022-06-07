import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { FC, useEffect, useRef, useState } from "react";

const Clock: FC = () => {
  const [timer, setTimer] = useState<number>(60);
  const timerRef = useRef<number>(60);
  useEffect(() => {
    const interv = setInterval(() => {
      if (timerRef.current < 0) {
        timerRef.current = 60;
				setTimer(timerRef.current)
      } else {
        timerRef.current = timerRef.current - 1;
				setTimer(timerRef.current)
      }
    }, 1000);
    return () => clearTimeout(interv);
  }, []);

  return (
    <>
      <Box bg="#00000040" p="20px" rounded="full" boxShadow="0 0 100px #1cffff70">
        <CircularProgress
          value={(timerRef.current / 60) * 100}
          size="100%"
          color="#0AC7BB"
          trackColor="#0AC7BB40"
					isIndeterminate={timer <= 0}
					thickness="7px"
        >
          <CircularProgressLabel fontSize="500%">{timer <= 0 ? "GO": timer}</CircularProgressLabel>
        </CircularProgress>
      </Box>
    </>
  );
};
export default Clock