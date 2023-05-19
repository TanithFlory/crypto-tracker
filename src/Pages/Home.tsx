import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import { useState, useCallback, useEffect } from "react";
import { ICoin } from "../types";
import axios from "axios";
import CryptoBenefits from "../Components/CryptoBenefits/CryptoBenefits";

const Home = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const getData = useCallback(async () => {
    let i = 1;
    while (i <= 3) {
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

  return (
    <>
      <Navbar />
      <Header coinData={coins} />
      <CryptoBenefits />
    </>
  );
};

export default Home;
