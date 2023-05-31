import { ICoin } from "../../types";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface CoinProps {
  d: ICoin;
  key: string;
}

const SCoin = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  padding-inline: 5px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      height: 30px;
      aspect-ratio: 1/1;
    }
  }
  &:hover {
    background-color: var(--clr-hover);
  }
  h4 {
    color: var(--clr-black);
    margin: 0;
  }
`;

const Coin = (props: CoinProps) => {
  return (
    <SCoin key={props.d.id} to={`/crypto-tracker/dashboard/${props.d.id}`}>
      <div>
        <img src={props.d.image} />
        <h4>{props.d.name}</h4>
      </div>
      <h4>${props.d.current_price.toFixed(2)}</h4>
    </SCoin>
  );
};

export default Coin;
