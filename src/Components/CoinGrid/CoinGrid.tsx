import { useContext, useState } from "react";
import SCoinGrid from "./CoinGrid.styles";
import { CryptoDataContext } from "../../Contexts/CryptoDataContext";
import { Link } from "react-router-dom";
import CoinGridNavigation from "./CoinGridNavigation";
import { images } from "../../constants/images";

const CoinGrid = () => {
  const coinData = useContext(CryptoDataContext);
  const [page, setPage] = useState<number>(1);

  const setPageNumber = (n: number): void => {
    setPage(n);
  };
  return (
    <SCoinGrid>
      <CoinGridNavigation
        coinData={coinData}
        page={page}
        setPageNumber={setPageNumber}
      />
      {coinData.slice(page * 30 - 30, page * 30).map((d, index: number) => {
        return (
          <Link to={`/dashboard/${d.id}`} key={`coin-${index}`}>
            <div>
              <div>
                <images.star />
                <span> {d.market_cap_rank}</span>
              </div>
              <h2 className="gradient-text">{d.name}</h2>
              <img src={d.image} alt="coin"/>
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
