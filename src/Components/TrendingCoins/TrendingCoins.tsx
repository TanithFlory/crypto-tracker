import STrendingCoins from "./TrendingCoins.styles";
import axios from "axios";
import { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
const TrendingCoins = () => {
  const [trendingCoin, setTrendingCoin] = useState<any>();
  const getData = useCallback(async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    setTrendingCoin(response.data.coins);
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <STrendingCoins className="custom-scroll">
      <h1 className="gradient-text">Trending Coins</h1>
      {trendingCoin?.map((d: any) => {
        return (
          <Link to={`/dashboard/${d.item.id}`} key={d.item.id}>
            <img src={d.item.large} alt="coin" />
            <div>
              <h3>{d.item.name}</h3>
              <span>Market Cap RanK: {d.item.market_cap_rank}</span>
            </div>
          </Link>
        );
      })}
    </STrendingCoins>
  );
};

export default TrendingCoins;
