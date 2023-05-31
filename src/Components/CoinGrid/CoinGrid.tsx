import { useContext } from "react";
import SCoinGrid from "./CoinGrid.styles";
import { CryptoDataContext } from "../../Contexts/CryptoDataContext";
import { Link, useParams } from "react-router-dom";
import CoinGridNavigation from "./CoinGridNavigation";
import { images } from "../../constants/images";

const CoinGrid = () => {
  const coinData = useContext(CryptoDataContext);
  const { page } = useParams();
  const pageNumber: number = Number(page) || 1;

  return (
    <SCoinGrid>
      <CoinGridNavigation coinData={coinData} pageNumber={pageNumber} />
      {coinData
        .slice(pageNumber * 30 - 30, pageNumber * 30)
        .map((d, index: number) => {
          return (
            <Link to={`/dashboard/${d.id}`} key={`coin-${index}`}>
              <div>
                <div>
                  <images.star />
                  <span> {d.market_cap_rank}</span>
                </div>
                <h2 className="gradient-text">{d.name}</h2>
                <img src={d.image} alt="coin" />
                <span>
                  Price: <span>{d.current_price}$</span>
                </span>
              </div>
            </Link>
          );
        })}
    </SCoinGrid>
  );
};

export default CoinGrid;
