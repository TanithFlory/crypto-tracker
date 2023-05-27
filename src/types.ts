export interface ICoin {
  id: string;
  image: string;
  name: string;
  current_price: number;
}

export type TCoinPrice = [Date, number];

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
  market_cap_rank: number;
  hashing_algorithm: string;
  links: {
    homepage: string[];
    blockchain_site: string[];
    subreddit_url: string;
    repos_url: {
      github: string[];
    };
  };
}

export interface ICoinNews {
  urlToImage: string;
  title: string;
  description: string;
  url: string;
}
