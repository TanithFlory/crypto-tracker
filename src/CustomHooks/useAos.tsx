import { useEffect } from "react";
import AOS from "aos";

const useAos = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);
};

export default useAos;
