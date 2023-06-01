import { styled } from "styled-components";

const SAboutCoin = styled.div`
  overflow-y: auto;
  background-color: var(--clr-purple);
  border-radius: 12px;
  width: 100%;
  padding: 1.2rem;
  max-height: 502px;
  min-height: 502px;
  grid-row: 1;
  box-sizing: border-box;
  h1,
  h4,
  p {
    margin: 0;
  }
  & > :first-child {
    display: flex;
    justify-content: center;

    & > h1 {
      margin-bottom: 1rem;
    }
  }
  & > :nth-child(2) {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    img {
      height: 80px;
      aspect-ratio: 1/1;
    }
  }
  p {
    color: var(--clr-text3);
  }
  a {
    color: var(--clr-text2);
  }
  .coin-statistics {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 3rem;

    div:first-child {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      gap: 0.5rem;
      div {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
    & > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      align-items: center;

      svg,
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid transparent;
        &:hover {
          background-color: var(--clr-white);
          border: 2px solid var(--clr-white);
        }
      }
      a:nth-child(2) {
        svg {
          &:hover {
            fill: #161b22;
          }
        }
      }
      a:nth-child(3) {
        svg {
          &:hover {
            fill: #ff4500;
          }
        }
      }
      & > div {
        display: flex;
        align-items: center;
        gap: 3rem;
      }
    }
  }
`;

export default SAboutCoin;
