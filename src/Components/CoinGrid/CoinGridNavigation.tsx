import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { BsSkipStartCircle } from "react-icons/bs";
import { ICoin } from "../../types";
import SCoinGridNavigation from "./CoinGridNavigation.styles";
interface IProps {
  coinData: ICoin[];
  page: number;
  setPageNumber: (n: number) => void;
}

const CoinGridNavigation = (props: IProps) => {
  return (
    <SCoinGridNavigation>
      <div>
        <button onClick={() => props.setPageNumber(1)}>
          <BsSkipStartCircle />
        </button>
      </div>
      <div>
        <span>{`${props.page} of ${props.coinData.length / 30}`}</span>
      </div>
      <div>
        <button
          onClick={
            props.page === 1
              ? () => props.setPageNumber(props.coinData.length / 30)
              : () => props.setPageNumber(props.page - 1)
          }
        >
          <AiOutlineDoubleLeft />
        </button>
        <button
          onClick={
            props.page === props.coinData.length / 30
              ? () => props.setPageNumber(1)
              : () => props.setPageNumber(props.page + 1)
          }
        >
          <AiOutlineDoubleRight />
        </button>
      </div>
    </SCoinGridNavigation>
  );
};

export default CoinGridNavigation;
