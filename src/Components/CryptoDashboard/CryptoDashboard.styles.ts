import { styled } from "styled-components";

const SCryptoDashboard = styled.div`
  background: var(--clr-background);
  display: grid;
  padding: 7rem 2rem 1rem;
  grid-template-columns: repeat(4, 1fr);
  place-content: end;
  place-items: start;
  gap: 2rem;

  .custom-scroll {
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: white;
      border-radius: 3px;
    }
  }
  a {
    background-color: var(--clr-purple2);
  }
  .coin-news {
    grid-column: 2 / span 2;
  }
  .about-coin {
    grid-row: 1;
  }
  .coin-graph {
    grid-column: 1 / span 3;
  }
  .trending-coins {
    grid-row: 1 / span 2;
    grid-column: 4;
  }
  @media screen and (max-width: 1234px) {
    place-items:center;
    .about-coin {
      grid-column: 1 / span 2;
    }
    .coin-news {
      grid-row: 1;
      grid-column: 3 / span 2;
    }
    .coin-graph {
      grid-column: 1/-1;
      max-width:850px;
    }
    .trending-coins {
      grid-row: 3;
      grid-column: 1/-1;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      gap: 1rem;
      max-width: 100%;
      & > h1 {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 6rem 10px 0;
    & > div {
      padding: 5px;
    }
  }
`;

export default SCryptoDashboard;
