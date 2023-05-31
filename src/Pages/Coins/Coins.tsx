import { useEffect } from "react";
import TrendingCoins from "../../Components/TrendingCoins/TrendingCoins";
import CoinGrid from "../../Components/CoinGrid/CoinGrid";
import SCoin from "./Coins.styles";
import useAos from "../../CustomHooks/useAos";

const Coins = () => {
  useAos();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <SCoin data-aos="fade-zoom-in" data-aos-duration="2000">
      <CoinGrid />
      <TrendingCoins numbers={true} />
    </SCoin>
  );
};

export default Coins;
