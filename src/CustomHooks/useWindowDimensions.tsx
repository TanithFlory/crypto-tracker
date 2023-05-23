import { useState, useEffect } from "react";

const getWindowDimensions = (): number[] => {
  const { innerWidth: width, innerHeight: height } = window;
  return width < 912 ? [width/1.2, height / 2] : [width / 1.6, height / 1.8];
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
