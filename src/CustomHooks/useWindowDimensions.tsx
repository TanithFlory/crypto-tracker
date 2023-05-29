import { useState, useEffect } from "react";

const getWindowDimensions = (): number[] => {
  const { innerWidth: width, innerHeight: height } = window;
  return width < 1023 ? [width/1.2, height / 2] : [width / 1.7, height / 1.8];
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getWindowDimensions]);

  return windowDimensions;
};

export default useWindowDimensions;
