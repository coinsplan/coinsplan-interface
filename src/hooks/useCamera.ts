import { useEffect, useRef, useState } from "react";

const useCamera = () => {
  const [stream, setStream] = useState<MediaStream>();
  const videoRef = useRef<HTMLVideoElement>(null!);

  const start = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((currentStream) => {
        setStream(currentStream);
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const stop = () => {
    stream?.getTracks().forEach(function (track) {
      track.stop();
    });
  };


  return {
    stream,
    videoRef,
    start,
    stop
  };
};
export default useCamera;
