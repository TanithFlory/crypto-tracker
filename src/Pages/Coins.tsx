import TrendingCoins from "../Components/TrendingCoins/TrendingCoins";
import CoinGrid from "../Components/CoinGrid/CoinGrid";
import { styled } from "styled-components";
import useAos from "../CustomHooks/useAos";
const SCoin = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  padding: 6rem 2rem;
  gap: 1rem;
  & > div:nth-child(2) {
    grid-column: 2;
    background-color: transparent;
    & > a {
      max-width: 330px;
      background-color: var(--clr-text2a);
      color: var(--clr-black);
      position: relative;
      overflow: hidden;
      &:hover {
        background-color: var(--clr-text2);
      }
      &::after {
        background-color: transparent;
      }
    }
    span {
      color: var(--clr-purple);
    }
  }
  @media screen and (max-width: 1164px) {
    grid-template-columns: 1fr;
    place-content: center;
    & > div:nth-child(2) {
      grid-column: 1 / -1;
      grid-row: 2;
      max-width: 100%;
    }
  }
`;
const Coins = () => {
  useAos();

  return (
    <SCoin data-aos="fade-zoom-in" data-aos-duration="2000">
      <CoinGrid />
      <TrendingCoins numbers={true} />
    </SCoin>
  );
};

export default Coins;
