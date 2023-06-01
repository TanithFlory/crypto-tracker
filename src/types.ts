export interface ICoin {
  id: string;
  image: string;
  name: string;
  current_price: number;
  market_cap_rank: number;
}

export type TCoinPrice = [Date, number];

export interface IAboutCoin {
  name: string;
  symbol: string;
  market_cap_rank: number;
  hashing_algorithm: string;
  image: {
    large: string;
  };
  description: {
    en: string;
  };
  market_data: {
    high_24h: {
      usd: number;
    };
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
    subreddit_url: string;
    repos_url: {
      github: string[];
    };
  };
  tickers: [
    {
      volume: number;
    }
  ];
}

export interface ICoinNews {
  image: string;
  title: string;
  description: string;
  url: string;
}

export interface ITrendingCoin {
  item: {
    id: string;
    name: string;
    large: string;
    market_cap_rank: number;
  };
}
