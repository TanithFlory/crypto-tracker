import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SCryptoDashboard from "./CryptoDashboard.styles";
import CoinLineGraph from "../CoinLineGraph/CoinLineGraph";
import { CoinGraphData } from "../../Api/ApiService";
import { ICoinPrice, IAboutCoin } from "../../types";
import AboutCoin from "../AboutCoin/AboutCoin";
import axios from "axios";
const CryptoDashboard = () => {
  const { id } = useParams();
  const [graphData, setGraphData] = useState<ICoinPrice[]>([]);
  const [coinData, setCoinData] = useState<IAboutCoin>();
  const getData = useCallback(async () => {
    const response = await CoinGraphData(id);
    setGraphData(response);
    const response2 = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    setCoinData(response2.data);
  }, [setGraphData]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <SCryptoDashboard>
      <CoinLineGraph graphData={graphData} />
      <AboutCoin coinData={coinData} />
    </SCryptoDashboard>
  );
};

export default CryptoDashboard;
