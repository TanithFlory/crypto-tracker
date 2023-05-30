import TrendingCoins from "../../Components/TrendingCoins/TrendingCoins";
import CoinGrid from "../../Components/CoinGrid/CoinGrid";
import SCoin from "./Coins.styles";
import useAos from "../../CustomHooks/useAos";

const Coins = () => {
  useAos();

  return (
    <SCoin data-aos="fade-zoom-in" data-aos-duration="2000">
      <CoinGrid />
      <TrendingCoins numbers={true} />
    </SCoin>
  );
};

export default Coins;
