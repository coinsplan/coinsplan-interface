import { NextPage } from "next";
import useCamera from "../src/hooks/useCamera";

const Test: NextPage = () => {
  const { videoRef } = useCamera()
  return (
    <>
      <video ref={videoRef} width="300px" height="100px" autoPlay ></video>
    </>
  );
};
export default Test;
