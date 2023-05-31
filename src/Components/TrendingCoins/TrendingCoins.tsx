import { STrendingCoins, STrendingAnchor } from "./TrendingCoins.styles";
import axios from "axios";
import { useEffect, useCallback, useState } from "react";
import { ITrendingCoin } from "../../types";

interface IProps {
  numbers: boolean;
}
const TrendingCoins = (props: IProps) => {
  const [trendingCoin, setTrendingCoin] = useState<ITrendingCoin[]>();
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
      {trendingCoin?.map((d, index: number) => {
        return (
          <STrendingAnchor
            to={`/crypto-tracker/dashboard/${d.item.id}`}
            key={d.item.id}
            color={
              index === 0
                ? "#F7B900"
                : index === 1
                ? "#5E5EB5"
                : index === 2
                ? "#C77B30"
                : "var(--clr-black)"
            }
          >
            {props.numbers && <div>{index + 1}</div>}
            <img src={d.item.large} alt="coin" />
            <div>
              <h3>
                {d.item.name.length > 16
                  ? d.item.name.slice(0, 16)
                  : d.item.name}
              </h3>
              <span>Market Cap Rank: {d.item.market_cap_rank}</span>
            </div>
          </STrendingAnchor>
        );
      })}
    </STrendingCoins>
  );
};

export default TrendingCoins;
