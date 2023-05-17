import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import { useState, useCallback, useEffect } from "react";
import { Coin } from "../types";
import axios from "axios";

const Home = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const getData = useCallback(async () => {
    let i = 1;
    while (i <= 5) {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: {
            page: i,
            vs_currency: "USD",
            per_page: 250,
          },
        }
      );
      i++;
      setCoins((prev) => {
        return [...prev, ...response.data];
      });
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log(coins);
  }, [coins]);
  return (
    <>
      <Navbar />
      <Header coinData={coins} />
    </>
  );
};

export default Home;
