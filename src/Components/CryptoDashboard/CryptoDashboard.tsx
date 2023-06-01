import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SCryptoDashboard from "./CryptoDashboard.styles";
import CoinLineGraph from "../CoinLineGraph/CoinLineGraph";
import {
  getCoinData,
  getCoinGraphData,
  getCoinNews,
} from "../../Api/ApiService";
import { TCoinPrice, IAboutCoin, ICoinNews } from "../../types";
import AboutCoin from "../AboutCoin/AboutCoin";
import CoinNews from "../CoinNews/CoinNews";
import TrendingCoins from "../TrendingCoins/TrendingCoins";
import useAos from "../../CustomHooks/useAos";

const CryptoDashboard = () => {
  useAos();

  const { id } = useParams();
  const [graphData, setGraphData] = useState<TCoinPrice[]>([]);
  const [coinData, setCoinData] = useState<IAboutCoin>();
  const [coinNews, setCoinNews] = useState<ICoinNews[]>([]);

  const getData = useCallback(async () => {
    const graphData = await getCoinGraphData(id);
    setGraphData(graphData);

    const coinData = await getCoinData(id);
    setCoinData(coinData);

    const coinNews = await getCoinNews(id);
    setCoinNews(coinNews);
  }, [setGraphData, setCoinData, setCoinNews, id]);

  useEffect(() => {
    getData();
  }, [getData, id]);

  return (
    <SCryptoDashboard
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-delay="500"
    >
      <AboutCoin coinData={coinData} />
      <CoinNews
        coinNews={coinNews}
        coinName={id}
        coinImage={coinData?.image.large}
      />
      <CoinLineGraph graphData={graphData} coinData={coinData} />
      <TrendingCoins numbers={false} />
    </SCryptoDashboard>
  );
};

export default CryptoDashboard;
