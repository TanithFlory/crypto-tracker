import axios from "axios";
import { IAboutCoin, ICoin, TCoinPrice, ICoinNews } from "../types";

export const getBasicCoinData = (): Promise<ICoin[]> => {
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

export const getCoinGraphData = (
  coin: string | undefined
): Promise<TCoinPrice[]> => {
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

export const getCoinData = (id: string | undefined): Promise<IAboutCoin> => {
  return new Promise(async (resolve) => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    resolve(response.data);
  });
};

export const getCoinNews = (id: string | undefined): Promise<ICoinNews[]> => {
  return new Promise(async (resolve) => {
    const response = await axios.get(`https://gnews.io/api/v4/search`, {
      params: {
        q: `"${id}-crypto"`,
        apikey: "dabdde799d4f9f81e89ec04e84c52351",
        lang: "en",
        max: 10,
      },
    });
    resolve(response.data.articles);
  });
};
