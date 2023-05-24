export interface ICoin {
  id: string;
  image: string;
  name: string;
  current_price: number;
}

export type ICoinPrice = [Date, number];

export interface IAboutCoin {
  name: string;
  image: {
    large: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
  };
  description: {
    en: string;
  };
  symbol: string;
}
