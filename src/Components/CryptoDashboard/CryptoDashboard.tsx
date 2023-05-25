import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SCryptoDashboard from "./CryptoDashboard.styles";
import CoinLineGraph from "../CoinLineGraph/CoinLineGraph";
import { CoinGraphData } from "../../Api/ApiService";
import { ICoinPrice, IAboutCoin } from "../../types";
import AboutCoin from "../AboutCoin/AboutCoin";
import axios from "axios";
import CoinNews from "../CoinNews/CoinNews";
import TrendingCoins from "../TrendingCoins/TrendingCoins";
const CryptoDashboard = () => {
  const { id } = useParams();
  const [graphData, setGraphData] = useState<ICoinPrice[]>([]);
  const [coinData, setCoinData] = useState<IAboutCoin>();
  const [coinNews, setCoinNews] = useState<any>();

  const getData = useCallback(async () => {
    const graphData = await CoinGraphData(id);
    setGraphData(graphData);
    const response2 = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    setCoinData(response2.data);

    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: {
        q: `${id}`,
        apiKey: "ea146e65687d429683c310204abc2667",
      },
    });
    setCoinNews(
      response.data.articles.slice(0, 15).filter((d: any) => d.urlToImage)
    );
  }, [setGraphData, id]);

  useEffect(() => {
    getData();
  }, [getData, id]);

  return (
    <SCryptoDashboard>
      <CoinNews coinNews={coinNews} coinName={id} />
      <CoinLineGraph graphData={graphData} />
      <AboutCoin coinData={coinData} />
      <TrendingCoins />
    </SCryptoDashboard>
  );
};

export default CryptoDashboard;
