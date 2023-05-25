import SAboutCoin from "./AboutCoin.styles";
import { IAboutCoin } from "../../types";

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
        <img src={props.coinData?.image.large} alt="coin" />
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
    </SAboutCoin>
  );
};

export default AboutCoin;
