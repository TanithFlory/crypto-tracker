import { Link } from "react-router-dom";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { BsSkipStartCircle } from "react-icons/bs";
import { ICoin } from "../../types";
import SCoinGridNavigation from "./CoinGridNavigation.styles";
interface IProps {
  coinData: ICoin[];
  pageNumber: number;
}

const CoinGridNavigation = (props: IProps) => {
  return (
    <SCoinGridNavigation>
      <div>
        <Link to={`/coins/1`}>
          <BsSkipStartCircle />
        </Link>
      </div>
      <div>
        <span>{`${props.pageNumber} of ${props.coinData.length / 30}`}</span>
      </div>
      <div>
        <Link
          to={
            props.pageNumber === 1
              ? `/coins/${props.coinData.length / 30}`
              : `/coins/${props.pageNumber - 1}`
          }
        >
          <AiOutlineDoubleLeft />
        </Link>
        <Link
          to={
            props.pageNumber === props.coinData.length / 30
              ? `/coins/1`
              : `/coins/${props.pageNumber + 1}`
          }
        >
          <AiOutlineDoubleRight />
        </Link>
      </div>
    </SCoinGridNavigation>
  );
};

export default CoinGridNavigation;
