import axios from "axios";
import { ICoin, ICoinPrice } from "../types";

export const BasicCoinData = (): Promise<ICoin[]> => {
  let i = 1;
  let data: ICoin[] = [];

  return new Promise<ICoin[]>(async (resolve) => {
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
      data = [...data, ...response.data];
    }
    resolve(data);
  });
};

export const CoinGraphData = (
  coin: string | undefined
): Promise<ICoinPrice[]> => {
  return new Promise(async (resolve) => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart`,
      {
        params: {
          vs_currency: "USD",
          days: 30,
        },
      }
    );
    resolve(response.data.prices);
  });
};
