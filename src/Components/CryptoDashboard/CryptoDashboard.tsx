import { useCallback, useEffect, useState, useReducer } from "react";
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

  const initialState = {
    graph: false,
    about: false,
    news: false,
  };

  type Action = {
    type: "graph" | "about" | "news" | "reset";
    payload?: boolean;
  };

  const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
      case "graph":
        return {
          ...state,
          graph: action.payload as boolean,
        };
      case "about":
        return {
          ...state,
          about: action.payload as boolean,
        };
      case "news":
        return {
          ...state,
          news: action.payload as boolean,
        };
      default:
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

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
    return () => {
      setGraphData([]);
      setCoinData(undefined);
      setCoinNews([]);
    };
  }, [getData, id]);

  useEffect(() => {
    graphData && dispatch({ type: "graph", payload: true });
    coinData && dispatch({ type: "about", payload: true });
    coinNews && dispatch({ type: "news", payload: true });
    return () => {
      dispatch({ type: "reset" });
    };
  }, [coinData, graphData, coinData, id]);

  return (
    <SCryptoDashboard
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-delay="500"
    >
      {state.about ? (
        <AboutCoin coinData={coinData} className="about-coin" />
      ) : (
        <div className="skeleton"></div>
      )}
      {state.news ? (
        <CoinNews
          className="coin-news"
          coinNews={coinNews}
          coinName={id}
          coinImage={coinData?.image.large}
        />
      ) : (
        <div className="skeleton"></div>
      )}
      {state.graph ? (
        <CoinLineGraph
          className="coin-graph"
          graphData={graphData}
          coinData={coinData}
        />
      ) : (
        <div className="skeleton"></div>
      )}
      <TrendingCoins className="trending-coins" numbers={false} />
    </SCryptoDashboard>
  );
};

export default CryptoDashboard;
