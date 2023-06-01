import SAboutCoin from "./AboutCoin.styles";
import { IAboutCoin } from "../../types";
import formatNumber from "../../Utils/numberFormat";
import { BsGithub, BsReddit } from "react-icons/bs";
interface IProps {
  coinData: IAboutCoin | undefined;
}

const AboutCoin = (props: IProps) => {
  return (
    <SAboutCoin className="custom-scroll">
      <div>
        <h1 className="gradient-text">About {props.coinData?.name}</h1>
      </div>
      <div>
        <img
          className="skeleton"
          src={props.coinData?.image.large}
          alt="coin"
        />
        <div>
          <h4>{props.coinData?.name}</h4>
          <p>
            1 {props.coinData?.symbol?.toUpperCase()} ={" "}
            {props.coinData?.market_data.current_price.usd} USD
          </p>
        </div>
      </div>
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: props.coinData?.description.en ?? "",
          }}
        ></p>
      </div>
      <div className="coin-statistics">
        <div>
          <h4>Hashing Algorithm: </h4>
          <span>{props.coinData?.hashing_algorithm || "Not found"} </span>
        </div>
        <div>
          <h4>Market Data </h4>
          <div>
            <span>High 24h:</span>
            <span>{props.coinData?.market_data.high_24h.usd}</span>
          </div>
          <div>
            <span> Current Price: </span>
            <span>{props.coinData?.market_data.current_price.usd}</span>
          </div>
          <div>
            <span>Market Capacity: </span>
            <span>
              {formatNumber(
                props.coinData?.market_data.market_cap.usd as number
              )}
            </span>
          </div>
          <div>
            <span>Volume: </span>
            <span>
              {formatNumber(props.coinData?.tickers[0].volume as number)}
            </span>
          </div>
        </div>
        <div>
          <h4>Links</h4>
          <div>
            <a href={props.coinData?.links.homepage[0]}>
              <img src={props.coinData?.image.large} alt="coin" />
            </a>
            <a href={props.coinData?.links.repos_url.github[0]} target="_blank">
              <BsGithub />
            </a>
            <a href={props.coinData?.links.subreddit_url} target="_blank">
              <BsReddit />
            </a>
          </div>
        </div>
      </div>
    </SAboutCoin>
  );
};

export default AboutCoin;
